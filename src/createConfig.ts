/**
 * @file 创建 Commitlint 配置
 *
 * 提供函数式 API，支持传入自定义配置选项
 */

import type { UserConfig } from '@commitlint/types'
import type { CommitlintConfigOptions } from './types'
import {
  chineseColonRule,
  defaultExtends,
  defaultPlugins,
  defaultRules,
} from './configs'

/**
 * 创建 Commitlint 配置
 *
 * 基于默认配置，支持通过参数自定义配置选项。
 * 用户传入的配置会覆盖默认配置，确保用户配置优先级最高。
 *
 * @param {CommitlintConfigOptions} [options] - 配置选项（可选，默认为空对象）
 * @returns {UserConfig} Commitlint 配置对象
 *
 * @example
 * ```typescript
 * import iswangh from '@iswangh/commitlint-config'
 *
 * export default iswangh({
 *   rules: {
 *     'header-max-length': [2, 'always', 80],
 *   },
 * })
 * ```
 */
export function createConfig(
  options: CommitlintConfigOptions = {},
): UserConfig {
  const {
    extends: customExtends,
    rules: customRules,
    plugins: customPlugins,
  } = options

  const config: UserConfig = {
    extends: customExtends ?? defaultExtends,
    rules: {
      ...defaultRules,
      ...chineseColonRule,
      ...customRules,
    },
    plugins: customPlugins ?? defaultPlugins,
  }

  return config
}
