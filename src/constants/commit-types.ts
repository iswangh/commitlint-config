/**
 * @file 提交类型枚举
 *
 * 定义符合 Conventional Commits 规范的提交类型列表
 */

/**
 * 提交类型枚举
 *
 * 定义符合 Conventional Commits 规范的提交类型列表
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
