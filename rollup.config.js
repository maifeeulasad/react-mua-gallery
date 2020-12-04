import sass from 'rollup-plugin-sass'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [sass({ insert: true }), typescript(),css({ insert: true })],
  external: ['react', 'react-dom']
}
