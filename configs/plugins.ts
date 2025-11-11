/**
 * @file 默认插件配置
 *
 * 定义 Commitlint 的默认插件配置
 */

import type { UserConfig } from '@commitlint/types'

/**
 * 默认插件配置（中文冒号检查）
 */
export const defaultPlugins: UserConfig['plugins'] = [
  {
    rules: {
      /**
       * 禁止使用中文冒号
       * Conventional Commits 格式要求使用英文冒号 (:)
       */
      'no-chinese-colon': ({ raw }) => {
        if (/：/.test(raw)) {
          return [
            false,
            '提交信息中包含中文冒号，请使用英文冒号(:)代替中文冒号(：)',
          ]
        }
        return [true, '']
      },
    },
  },
]

