import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const allowedHosts: string[] = [];
if (process.env.FRONTEND_DOMAIN) {
    allowedHosts.push(
        process.env.FRONTEND_DOMAIN,
        `http://${process.env.FRONTEND_DOMAIN}`,
        `https://${process.env.FRONTEND_DOMAIN}`,
    );
}
if (process.env.ALLOWED_ORIGINS) {
    allowedHosts.push(...process.env.ALLOWED_ORIGINS.split(","));
}
if (process.env.VITE_PARENT_ORIGIN) {
    allowedHosts.push(process.env.VITE_PARENT_ORIGIN);
}
if (allowedHosts.length === 0) {
    allowedHosts.push("*");
}

export default defineConfig(({ mode }) => ({
    plugins: [
        react({
            babel: {
                plugins: [],
            },
        }),
        {
            name: 'manual-contact-middleware',
            configureServer(server) {
                const env = loadEnv(mode, process.cwd(), '');
                process.env.RESEND_API_KEY = env.RESEND_API_KEY;
                process.env.FROM_EMAIL = env.FROM_EMAIL;
                process.env.CONTACT_EMAIL = env.CONTACT_EMAIL;

                server.middlewares.use(async (req, res, next) => {
                    if (req.url === '/api/contact' && req.method === 'POST') {
                        console.log('[Middleware] Intercepted POST /api/contact');

                        // Body parsing
                        const buffers = [];
                        for await (const chunk of req) {
                            buffers.push(chunk);
                        }
                        const data = Buffer.concat(buffers).toString();

                        // Mock Express req/res
                        try {
                            (req as any).body = JSON.parse(data);
                        } catch (e) {
                            (req as any).body = {};
                        }

                        (res as any).status = (code: number) => {
                            res.statusCode = code;
                            return res;
                        };
                        (res as any).json = (body: any) => {
                            res.setHeader('Content-Type', 'application/json');
                            res.end(JSON.stringify(body));
                            return res;
                        };

                        try {
                            // Dynamic import to avoid build-time issues if possible, or direct if supported
                            const { POST } = await import('./src/api/contact/index.ts');
                            await POST(req as any, res as any);
                        } catch (error) {
                            console.error('Middleware Error:', error);
                            (res as any).status(500).json({ error: String(error) });
                        }
                        return;
                    }
                    next();
                });
            }
        },
    ],

    resolve: {
        alias: {
            nothing: "/src/fallbacks/missingModule.ts",
            "@/api": path.resolve(__dirname, "./src/api"),
            "@": path.resolve(__dirname, "./src"),
        },
    },

    server: {
        host: process.env.HOST || "0.0.0.0",
        port: parseInt(process.env.PORT || "5173"),
        strictPort: !!process.env.PORT,
        allowedHosts,
        cors: {
            origin: allowedHosts,
            credentials: true,
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            allowedHeaders: ["Content-Type", "Authorization", "Accept", "User-Agent"],
        },
        hmr: {
            overlay: false,
        },
        watch: {
            ignored: ["**/dist/**", "**/.api/**"],
        },
    },

    build: {
        rollupOptions: {
            // No external dependencies - bundle everything
        },
    },
}));
