/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
// import external from 'rollup-plugin-peer-deps-external';
// import resolve from '@rollup/plugin-node-resolve';

import commonjs from "@rollup/plugin-commonjs";
import styles from "rollup-plugin-styles";

const TARGETS = [
  { format: "cjs", file: pkg.main, tsconfig: "./tsconfig.cjs.json" },
  { format: "es", file: pkg.module, tsconfig: "./tsconfig.es.json" },
];

export default TARGETS.map((target) => ({
  input: "src/index.ts",
  output: {
    file: target.file,
    format: target.format,
    exports: "named",
    sourcemap: true,
  },
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
    // external(),
    // resolve(),
    commonjs(),
    styles({
      mode: "inject",
    }),
  ],
}));
