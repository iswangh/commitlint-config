/**
 * @file 提交类型定义
 *
 * 定义提交类型相关的类型
 * 类型定义从 constants/commit-types.ts 中的 COMMIT_TYPES 常量自动推导，确保类型和常量保持一致
 */

import type { COMMIT_TYPES } from '../constants'

/**
 * 提交类型
 *
 * 从 COMMIT_TYPES 常量中提取的提交类型联合类型
 * 当 COMMIT_TYPES 常量更新时，此类型会自动更新，保持一致性
 */
export type CommitType = (typeof COMMIT_TYPES)[number]
