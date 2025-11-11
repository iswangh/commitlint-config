/**
 * @file 规则级别常量
 *
 * 定义 Commitlint 规则的严重程度级别
 */

/**
 * 规则级别常量
 *
 * 定义 Commitlint 规则的严重程度级别
 */
export const RULE_LEVEL = {
  /** 禁用规则 */
  DISABLED: 0,
  /** 警告级别 */
  WARNING: 1,
  /** 错误级别 */
  ERROR: 2,
} as const
