import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const repositoryName = "harmonias-landing-flow"; // troque se necessário

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: `/${repositoryName}/`,  // 👈 linha necessária para funcionar no GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
