/**
 * @file Commitlint 配置主入口
 *
 * 基于 @commitlint/config-conventional 的 Commitlint 配置，提供默认值和覆盖支持
 *
 * @see {@link https://commitlint.js.org/ Commitlint 官方网站}
 * @see {@link https://www.conventionalcommits.org/zh-hans/v1.0.0/ Conventional Commits 规范}
 */

import type { CommitlintConfigOptions } from './src'
import { createConfig } from './src'

/**
 * Commitlint 配置函数
 *
 * 支持传入配置选项来自定义配置，如果不传参数则返回默认配置。
 * 用户传入的配置会覆盖默认配置，确保用户配置优先级最高。
 *
 * 使用方式：
 * ```typescript
 * import iswangh from '@iswangh/commitlint-config'
 *
 * // 使用默认配置
 * export default iswangh()
 *
 * // 自定义配置
 * export default iswangh({
 *   rules: {
 *     'header-max-length': [2, 'always', 80],
 *   },
 * })
 * ```
 *
 * @param {CommitlintConfigOptions} [options] - 配置选项（可选）
 * @returns {import('@commitlint/types').UserConfig} Commitlint 配置对象
 */
function iswangh(options?: CommitlintConfigOptions) {
  return createConfig(options)
}

export default iswangh

// 导出类型和常量
export * from './src'
