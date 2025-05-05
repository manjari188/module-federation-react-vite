import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./UserDetail": "./src/Users/Detail.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    // No need for rollupOptions.output.publicPath here
  },
  server: {
    port: 3001,
    cors: true,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    host: "localhost",
  },
  base: 'http://localhost:3001/', // Add this line!
});