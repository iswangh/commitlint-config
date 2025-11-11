/**
 * @file 默认插件配置
 *
 * 定义 Commitlint 的默认插件配置
 */

import type { UserConfig } from '@commitlint/types'

/**
 * 默认插件配置
 *
 * 包含中文冒号检查等自定义规则插件
 */
export const defaultPlugins: UserConfig['plugins'] = [
  {
    rules: {
      /**
       * 禁止使用中文冒号
       *
       * 检查提交信息中是否包含中文冒号（：），如果包含则返回错误提示。
       * Conventional Commits 格式要求使用英文冒号（:）。
       *
       * @param {object} context - 提交信息上下文
       * @param {string} context.raw - 原始提交信息
       * @returns {[boolean, string]} 检查结果和错误消息
       */
      'no-chinese-colon': ({ raw }) => {
        if (raw && /：/.test(raw)) {
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
