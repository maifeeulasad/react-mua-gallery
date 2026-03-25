import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      plugins: [react()],
      build: {
        outDir: 'dist',
        lib: {
          entry: 'src/index.tsx',
          fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            exports: 'named',
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
    };
  }

  return {
    plugins: [react()],
    base: process.env.EXAMPLE_BASE_PATH ?? '/',
    build: {
      outDir: 'example-dist',
      emptyOutDir: true,
    },
  };
});