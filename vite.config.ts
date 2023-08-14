import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import typescript from '@rollup/plugin-typescript';

const resolvePath = (str: string) => path.resolve(__dirname, str);
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolvePath('src'),
      packages: resolvePath('src/packages'),
      stories: resolvePath('src/stories'),
      test: resolvePath('src/test'),
    },
  },
  build: {
    lib: {
      entry: 'src/packages/index.ts',
      name: 'fabuReactLibTemplate',
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        dir: 'dist/',
        format: 'es',
        assetFileNames: 'fabuReactLibTemplate',
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
      plugins: [
        typescript({
          tslib: path.resolve('typescript'),
          declaration: true,
          exclude: ['src/stories/*', 'src/App.tsx', 'src/main.tsx', 'src/test/*'],
          outDir: resolvePath('dist'),
        }),
      ],
    },
  },
});
