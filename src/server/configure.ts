import express, { Express, Request, Response, NextFunction } from "express";
import { closeConnection } from "./db/client.ts";
import path from "node:path";
import { POST as contactHandler } from "../api/contact/index.ts";

export const viteServerBefore = (server: Express, viteServer: any) => {
    console.log("VITEJS SERVER");
    server.use((req, res, next) => {
        console.log(`[Request] ${req.method} ${req.url}`);
        next();
    });
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    // Manually register API routes to ensure they work even if the plugin fails
    console.log("Registering manual route: POST /api/contact");
    server.post("/api/contact", async (req: Request, res: Response) => {
        console.log("Manual Route Hit: POST /api/contact");
        try {
            await contactHandler(req, res);
        } catch (error) {
            console.error("Manual API Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });

    const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof Error) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: err.message }));
        } else {
            next(err);
        }
    };
    server.use(errorHandler);
};

export const viteServerAfter = (server: Express, viteServer: any) => {
    // No-op for now
};

// ServerHook
export const serverBefore = (server: Express) => {
    const shutdown = async (signal: any) => {
        console.log(`Got ${signal}, shutting down gracefully...`);

        try {
            // Close database connection pool before exiting
            await closeConnection();
            console.log("Database connections closed");
        } catch (error) {
            console.error("Error closing database connections:", error);
        }

        process.exit(0);
    };

    ["SIGTERM", "SIGINT"].forEach((signal) => {
        process.on(signal, shutdown);
    });

    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    server.use(express.static("client"));

    // Manually register API routes
    server.post("/api/contact", async (req: Request, res: Response) => {
        try {
            await contactHandler(req, res);
        } catch (error) {
            console.error("Manual API Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
};

export const serverAfter = (server: Express) => {
    // Add SPA fallback for client-side routing
    // This middleware serves index.html for any GET request that doesn't match
    // an API endpoint or static file, enabling React Router to handle the route
    server.use((req: Request, res: Response, next: NextFunction) => {
        // Only handle GET requests
        if (req.method !== 'GET') {
            return next();
        }

        // Skip if this is an API request
        if (req.path.startsWith('/api')) {
            return next();
        }

        // Skip if this is a static asset request (has file extension)
        if (path.extname(req.path)) {
            return next();
        }

        // For all other GET requests, serve index.html to support client-side routing
        res.sendFile(path.join(process.cwd(), 'client', 'index.html'));
    });

    const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            next(err);
        }
    };
    server.use(errorHandler);
};
