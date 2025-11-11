import type { UserConfig } from '@commitlint/types'

/**
 * 规则级别常量
 */
export const RULE_LEVEL = {
  /** 禁用规则 */
  DISABLED: 0,
  /** 警告级别 */
  WARNING: 1,
  /** 错误级别 */
  ERROR: 2,
} as const

/**
 * 提交类型枚举
 */
export const COMMIT_TYPES = [
  'feat', // 新功能
  'fix', // 修复 bug
  'refactor', // 代码重构
  'style', // 代码格式调整
  'perf', // 性能优化
  'test', // 测试相关
  'build', // 构建配置
  'ci', // CI/CD 配置
  'docs', // 文档更新
  'chore', // 日常维护
  'revert', // 回滚操作
] as const

/**
 * 提交类型
 */
export type CommitType = (typeof COMMIT_TYPES)[number]
