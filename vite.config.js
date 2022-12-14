import { resolve } from "path";

export default {
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "lib/index.js"),
      name: "MajiangCore",
      formats: ["es", "cjs"],
      fileName: "[format]/index",
    },
    minify: false,
    rollupOptions:{
      output: {
        exports: "named"
      }
    }
  },
  resolve: {
    alias: { "@": resolve(__dirname, "lib") },
  },
};
