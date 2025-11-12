/**
 * @file 默认插件配置
 *
 * 定义 Commitlint 的默认插件配置
 */

import type { UserConfig } from '@commitlint/types'

/**
 * 默认插件配置
 *
 * 包含中文冒号检查等自定义规则插件。
 * 注意：no-chinese-colon 规则默认已禁用，用户可在 rules 中启用。
 */
export const defaultPlugins: UserConfig['plugins'] = [
  {
    rules: {
      /**
       * 禁止在提交信息头部使用中文冒号
       *
       * @param {object} context - 提交信息上下文
       * @param {string} context.header - 提交信息头部（第一行）
       * @returns {[boolean, string]} 检查结果和错误消息
       */
      'no-chinese-colon': ({ header }) => {
        if (header && /：/.test(header)) {
          return [
            false,
            '提交信息头部中包含中文冒号，请使用英文冒号(:)代替中文冒号(：)',
          ]
        }
        return [true, '']
      },
    },
  },
]
