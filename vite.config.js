import react from "@vitejs/plugin-react";
import path from "path"
import { defineConfig } from "vite";

// https://vitejs.div/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env": {},
  },
});
