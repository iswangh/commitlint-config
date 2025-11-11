/**
 * @file Commitlint 配置主入口（JavaScript 包装）
 *
 * 使用 jiti 动态加载 TypeScript 模块，支持从 JavaScript 配置文件导入
 * 当使用 commitlint.config.js 时，Node.js 无法直接执行 TypeScript 文件，
 * 因此通过此包装文件使用 jiti 动态加载 TypeScript 模块
 */

import { createJiti } from 'jiti'

/**
 * 创建 jiti 实例，用于动态加载 TypeScript 模块
 */
const jiti = createJiti(import.meta.url, {
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
  esmResolve: true,
})

/**
 * 动态加载并导出 TypeScript 模块的默认导出
 * 使用 import() 方法替代已弃用的直接调用方式
 *
 * 注意：此处必须使用顶层 await，因为：
 * 1. jiti.import() 返回 Promise，需要异步加载
 * 2. commitlint 配置文件需要同步导出，但 ES 模块环境下需要通过异步方式加载 TypeScript 模块
 * 3. Node.js 14.8+ 支持顶层 await，符合项目运行环境要求
 */
// eslint-disable-next-line antfu/no-top-level-await
export default (await jiti.import('./index.ts')).default
