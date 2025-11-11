/**
 * @file Commitlint 配置主入口
 *
 * 基于 @commitlint/config-conventional 的 Commitlint 配置，提供默认值和覆盖支持
 *
 * @see {@link https://commitlint.js.org/ Commitlint 官方网站}
 * @see {@link https://www.conventionalcommits.org/zh-hans/v1.0.0/ Conventional Commits 规范}
 */

import type { UserConfig } from '@commitlint/types'
import { defaultExtends } from './configs/defaults'
import { defaultPlugins } from './configs/plugins'
import { chineseColonRule, defaultRules } from './configs/rules'

/**
 * Commitlint 配置对象
 *
 * 基于 `@commitlint/config-conventional`，并添加自定义规则配置
 * 包含提交类型枚举、中文冒号检查等规则
 *
 * 使用方式：
 * ```typescript
 * import config from '@iswangh/commitlint-config'
 *
 * export default config
 * ```
 *
 * 如需自定义，可以扩展配置：
 * ```typescript
 * import config from '@iswangh/commitlint-config'
 *
 * export default {
 *   ...config,
 *   rules: {
 *     ...config.rules,
 *     'header-max-length': [2, 'always', 80],
 *   },
 * }
 * ```
 */
const config: UserConfig = {
  extends: defaultExtends,
  rules: {
    ...defaultRules,
    ...chineseColonRule,
  },
  plugins: defaultPlugins,
}

export default config

// 导出类型和常量
export * from './configs'
export * from './types'
