import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";

// Custom plugin to load environment variables
const loadEnvVariables = () => ({
    name: "load-env-variables",
    configureServer: ({ middlewares }) => {
        middlewares.use(async (req, res, next) => {
            if (process.env.NODE_ENV === "production") {
                dotenv.config({ path: ".env" });
            } else {
                dotenv.config({ path: ".env.local" });
            }
            next();
        });
    },
});

export default defineConfig({
    plugins: [
        react(),
        loadEnvVariables(),
        {
            name: "html-version-injector",
            enforce: "post",
            apply: "build",
            closeBundle() {
                const healthcheckPath = path.resolve(__dirname, "dist/healthcheck");
                const version = new Date().toISOString(); // Use ISO string or .now() as per requirement

                const healthcheckContent = {
                    status: "ok",
                    version: version, // Note the correction from "verion" to "version"
                };

                // Write the new healthcheck content as a JSON string
                fs.writeFileSync(healthcheckPath, JSON.stringify(healthcheckContent, null, 2));
            },
            transformIndexHtml(html) {
                const version = new Date().toISOString();
                return html.replace(
                    /<head>/,
                    `<head>\n    <meta name="version" content="${version}">`
                );
            },
        },
    ],
    resolve: {
        alias: {
            src: "/src",
        },
    },
    server: {
        host: true,
        port: 8089,
    },
    build: {
        outDir: path.resolve(__dirname, "dist"),
        emptyOutDir: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});
