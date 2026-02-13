/** TREAT AS IMMUTABLE - This file is protected by the file-edit tool
 *
 * Database configuration loader
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { env } from 'node:process';

/**
 * Database credentials interface
 */
export interface DatabaseCredentials {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
}

/**
 * Load database configuration from JSON config file
 * Reads from /alloc/config.json (container) or uses NOMAD_ALLOC_DIR if available
 *
 * @returns Database connection credentials
 * @throws Error if config file not found or invalid
 */
export function getDatabaseCredentials(): DatabaseCredentials {
    const configPath = join(env.NOMAD_ALLOC_DIR || '/alloc', 'config.json');

    // fallback to env vars if config file is missing
    if (!existsSync(configPath)) {
        if (!env.DB_HOST || !env.DB_USER || !env.DB_NAME) {
            console.warn(`Database configuration file not found at ${configPath} and missing environment variables.`);
        }

        return {
            host: env.DB_HOST || 'localhost',
            port: parseInt(env.DB_PORT || '3306', 10),
            user: env.DB_USER || 'root',
            password: env.DB_PASSWORD || '',
            database: env.DB_NAME || 'test',
        };
    }

    try {
        const config = JSON.parse(readFileSync(configPath, 'utf-8'));

        if (!config.DATABASE?.VALUE) {
            throw new Error('Invalid config.json structure: DATABASE.VALUE not found');
        }

        const db = config.DATABASE.VALUE;

        if (!db.HOST || !db.PORT || !db.USERNAME || !db.PASSWORD || !db.NAME) {
            throw new Error('Invalid config.json: Missing required database credentials');
        }

        return {
            host: db.HOST,
            port: parseInt(String(db.PORT), 10),
            user: db.USERNAME,
            password: db.PASSWORD,
            database: db.NAME,
        };
    } catch (error) {
        if (error instanceof SyntaxError) {
            throw new Error(`Failed to parse ${configPath}: Invalid JSON format`);
        }
        throw error;
    }
}
