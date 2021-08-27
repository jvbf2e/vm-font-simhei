/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/tusktalk
 * @Date: 2021-08-27 12:29:55
 * @LastEditTime: 2021-08-27 15:14:43
 * @motto: Hi Virtual Mode
 * @Description: Modify here please
 * @FilePath: \Developmente:\Demo\ui\vm-font-simhei\rollup.config.js
 */
import resolvePlugin from "rollup-plugin-node-resolve";
import babelPlugin from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";

export default [
  {
    input: "src/index.js",
    output: {
      file: "lib/index.min.js", // 导出文件
      format: "umd", // 打包文件支持的形式
      name: "VmFontSimhei",
    },
    plugins: [
      resolvePlugin(),
      commonjs(),
      babelPlugin({
        exclude: "node_modules/**",
        runtimeHelpers: true,
      }),
      uglify()
    ],
  }
];

