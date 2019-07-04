import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
const typescript = require('rollup-plugin-typescript');

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    typescript(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};

