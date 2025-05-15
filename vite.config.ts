import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { componentTagger } from "lovable-tagger";

// Corrige "__dirname" para ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const repositoryName = "harmonias-landing-flow";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: `/${repositoryName}/`, // 👈 necessário para GitHub Pages
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
      "@": resolve(__dirname, "./src"),
    },
  },
}));
