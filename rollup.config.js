import copy from 'rollup-plugin-copy'
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
	input: 'src/calc.js',
	output: {
		file: 'dist/calc.js',
		format: 'iife'
	},
  plugins: [
    nodeResolve(),
    copy({
      targets: [
        { src: 'index.html', dest: 'dist' }
      ]
    })
  ]
};
