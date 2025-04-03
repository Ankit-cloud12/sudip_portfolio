import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

// Get the repository name from package.json or environment variables
// This helps ensure the base path is correct for GitHub Pages
const getBase = (mode: string) => {
  if (mode !== 'production') return '/';
  // For GitHub Pages, use the repo name as the base path
  return '/sudip_portfolio/';
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }) => ({
  base: getBase(mode),
  server: {
    host: "::",
    port: 5173,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
  build: {
    // Optimize build output
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: mode === 'production', // Remove console logs in production
        drop_debugger: mode === 'production',
      },
    },
    // Generate sourcemaps for debugging (disable in production for smaller files)
    sourcemap: mode !== 'production',
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Group React and related libraries
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/react-router-dom') ||
              id.includes('node_modules/framer-motion')) {
            return 'vendor-react';
          }
          
          // Group Radix UI components
          if (id.includes('node_modules/@radix-ui')) {
            return 'vendor-ui';
          }
          
          // Group utility libraries
          if (id.includes('node_modules/class-variance-authority') ||
              id.includes('node_modules/clsx') ||
              id.includes('node_modules/tailwind-merge')) {
            return 'vendor-utils';
          }
          
          // Keep remaining node_modules in a separate chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      },
    },
    // Optimize asset handling
    assetsInlineLimit: 4096, // 4kb - small assets will be inlined as base64
  },
}));