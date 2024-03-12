import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/03-left-right/", // Korjaa tämä polku vastaamaan GitHub Pages -polkua
  plugins: [react()],
});
