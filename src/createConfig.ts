/**
 * @file 创建 Commitlint 配置
 *
 * 提供函数式 API，支持传入自定义配置选项
 */

import type { UserConfig } from '@commitlint/types'
import type { CommitlintConfigOptions } from './types'
import { defaultExtends, defaultPlugins, defaultRules } from './configs'

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
  const { extends: customExtends, rules: customRules, plugins: customPlugins } = options

  // 合并 extends：如果用户传入了自定义 extends，则与默认 extends 合并
  // commitlint 支持数组形式的 extends，可以同时继承多个配置
  const extendsConfig = customExtends
    ? Array.isArray(customExtends)
      ? [defaultExtends, ...customExtends]
      : [defaultExtends, customExtends]
    : defaultExtends

  // 合并 plugins：如果用户传入了自定义 plugins，则合并到默认 plugins 中
  // 这样可以确保默认的 no-chinese-colon 规则插件可用（虽然规则默认已禁用）
  const plugins = customPlugins
    ? [...(defaultPlugins ?? []), ...customPlugins]
    : defaultPlugins

  const config: UserConfig = {
    extends: extendsConfig,
    rules: {
      ...defaultRules,
      ...customRules,
    },
    plugins,
  }

  return config
}
