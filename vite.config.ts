import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Use root base for Vercel static deployment
  base: "/",
  plugins: [
    tanstackStart({
      client: { entry: 'client' },
    }),
    react(),
    tsconfigPaths(),
    tailwindcss(),
  ],
});
