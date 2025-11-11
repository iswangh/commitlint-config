/**
 * @file Commitlint 配置选项类型定义
 *
 * 定义创建自定义 Commitlint 配置时可用的选项类型
 */

import type { UserConfig } from '@commitlint/types'

/**
 * Commitlint 配置选项
 *
 * 定义创建自定义 Commitlint 配置时可用的选项
 */
export interface CommitlintConfigOptions {
  /** 继承的基础配置 */
  extends?: string | string[]
  /** 自定义规则 */
  rules?: UserConfig['rules']
  /** 自定义插件 */
  plugins?: UserConfig['plugins']
}
