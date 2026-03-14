import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: '/deepak-portfolio/',   // ← ADD THIS
  server: {
    port: 5173,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

/*
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/deepak-portfolio/' : '/',
  server: {
    port: 5173,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
*/