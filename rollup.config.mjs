import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import clear from 'rollup-plugin-clear'

export default defineConfig({
  input: './src/main.ts',
  output: {
    dir: './dist',
    format: 'cjs',
  },
  plugins: [
    typescript(),
    resolve({
      customResolveOptions: {
        moduleDirectories: ['node_modules'],
      },
    }),
    commonjs(),
    json(),
    clear({
      // required, point out which directories should be clear.
      targets: ['./dist'],
      // optional, whether clear the directores when rollup recompile on --watch mode.
      watch: true, // default: false
  })
  ],
  caches:true,
});
