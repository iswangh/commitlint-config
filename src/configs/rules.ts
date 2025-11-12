/**
 * @file 默认规则配置
 *
 * 定义 Commitlint 的默认规则配置
 */

import type { UserConfig } from '@commitlint/types'
import { COMMIT_TYPES, RULE_LEVEL } from '../constants'

/**
 * 默认规则配置
 *
 * 包含提交类型、作用域、主题、头部、Body 和 Footer 等各个方面的规则配置
 */
export const defaultRules: UserConfig['rules'] = {
  // ========== 提交类型规则 ==========
  /** 提交类型枚举 */
  'type-enum': [RULE_LEVEL.ERROR, 'always', [...COMMIT_TYPES]],
  /** 提交类型大小写 */
  'type-case': [RULE_LEVEL.ERROR, 'always', 'lowercase'],
  /** 提交类型不能为空 */
  'type-empty': [RULE_LEVEL.ERROR, 'never'],

  // ========== 作用域规则 ==========
  /** 作用域可以为空 */
  'scope-empty': [RULE_LEVEL.DISABLED],

  // ========== 主题规则 ==========
  /** 提交描述不能为空 */
  'subject-empty': [RULE_LEVEL.ERROR, 'never'],
  /** 提交描述不能以点号结尾 */
  'subject-full-stop': [RULE_LEVEL.ERROR, 'never', '.'],

  // ========== 头部规则 ==========
  /** 提交信息最大长度 */
  'header-max-length': [RULE_LEVEL.ERROR, 'always', 100],

  // ========== Body 规则 ==========
  /** body 前应有空行 */
  'body-leading-blank': [RULE_LEVEL.WARNING, 'always'],

  // ========== Footer 规则 ==========
  /** footer 前应有空行 */
  'footer-leading-blank': [RULE_LEVEL.WARNING, 'always'],

  // ========== 自定义规则 ==========
  /** 禁止在提交信息头部使用中文冒号（已禁用，规则实现通过插件提供，用户可按需启用） */
  'no-chinese-colon': [RULE_LEVEL.DISABLED],
}
