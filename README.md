# @iswangh/commitlint-config

基于 `@commitlint/config-conventional` 的 Commitlint 配置，添加了自定义规则（提交类型枚举、中文冒号检查等），支持 JavaScript 和 TypeScript 配置文件。

## 项目介绍

`@iswangh/commitlint-config` 是一个基于 `@commitlint/config-conventional` 的 Commitlint 配置包，提供了开箱即用的 Git 提交信息规范配置。该配置在 `@commitlint/config-conventional` 的基础上添加了自定义规则，包括提交类型枚举、中文冒号检查等，同时支持 JavaScript 和 TypeScript 两种配置文件格式，适用于现代前端项目的代码提交规范保障。

### 核心功能

- 基于 `@commitlint/config-conventional` 的标准化 Commitlint 配置
- 完整的提交类型枚举（feat、fix、refactor 等）
- 中文冒号自动检测和提示
- 可自定义配置，支持覆盖默认规则

### 应用场景

- 需要统一 Git 提交信息规范的前端项目
- 基于 Commitlint 的现代前端项目
- 团队协作项目，需要规范提交信息格式

## 技术栈

### 运行时依赖

- **jiti**: `^2.6.1` - TypeScript 模块动态加载器，用于支持从 JavaScript 配置文件导入 TypeScript 模块

### 对等依赖

- **@commitlint/config-conventional**: `^20.0.0` - 基础 Commitlint 配置

### 开发依赖

- **@commitlint/config-conventional**: `^20.0.0` - 开发时使用的基础配置
- **@commitlint/types**: `^20.0.0` - Commitlint 类型定义
- **TypeScript**: `^5.9.2` - TypeScript 编译器

## 目录结构

```
commitlint-config/
├── configs/              # 配置模块目录
│   ├── defaults.ts       # 默认配置选项
│   ├── rules.ts           # 规则配置
│   ├── plugins.ts         # 插件配置
│   └── index.ts           # 配置模块聚合导出
├── index.js               # 主入口文件（JavaScript 包装，用于支持 JS 配置文件）
├── index.ts               # 主入口文件（TypeScript 实现）
├── types.ts               # 类型定义
├── package.json           # 项目配置文件
└── README.md              # 项目文档
```

## 快速开始

### 环境要求

- Node.js >= 18.0.0
- 支持 ESM 的包管理器（pnpm、npm、yarn）

### 安装

推荐使用 `ni`（需要全局安装 `@antfu/ni`）：

```bash
ni -D @iswangh/commitlint-config @commitlint/cli
```

或使用其他包管理器：

```bash
# pnpm
pnpm add -D @iswangh/commitlint-config @commitlint/cli

# npm
npm install -D @iswangh/commitlint-config @commitlint/cli

# yarn
yarn add -D @iswangh/commitlint-config @commitlint/cli
```

### 使用方法

#### JavaScript 配置文件

创建 `commitlint.config.js`：

```javascript
/**
 * @file Commitlint 配置文件
 * @ts-check
 */

import config from '@iswangh/commitlint-config'

/**
 * Commitlint 配置
 *
 * @type {typeof import('@iswangh/commitlint-config').default}
 */
export default config
```

#### TypeScript 配置文件

创建 `commitlint.config.ts`：

```typescript
import config from '@iswangh/commitlint-config'

export default config
```

#### 自定义配置

如需自定义配置，可以扩展配置对象：

```typescript
import config from '@iswangh/commitlint-config'

export default {
  ...config,
  rules: {
    ...config.rules,
    'header-max-length': [2, 'always', 80],
  },
}
```

**注意**：用户传入的规则会覆盖封装的规则，确保用户配置优先级最高。

## 配置说明

本配置基于 `@commitlint/config-conventional`，并添加了以下自定义规则。

### 提交类型规则

- `type-enum`: 提交类型枚举，支持以下类型：
  - `feat`: 新功能
  - `fix`: 修复 bug
  - `refactor`: 代码重构
  - `style`: 代码格式调整
  - `perf`: 性能优化
  - `test`: 测试相关
  - `build`: 构建配置
  - `ci`: CI/CD 配置
  - `docs`: 文档更新
  - `chore`: 日常维护
  - `revert`: 回滚操作
- `type-case`: 提交类型必须小写
- `type-empty`: 提交类型不能为空

### 作用域规则

- `scope-empty`: 作用域可以为空（允许）

### 主题规则

- `subject-empty`: 提交描述不能为空
- `subject-full-stop`: 提交描述不能以点号结尾

### 头部规则

- `header-max-length`: 提交信息最大长度为 100 字符

### Body 规则

- `body-leading-blank`: body 前应有空行（警告级别）

### Footer 规则

- `footer-leading-blank`: footer 前应有空行（警告级别）

### 自定义规则

- `no-chinese-colon`: 禁止使用中文冒号（Conventional Commits 格式要求使用英文冒号 `:`）

## 项目信息

- **许可证**：Apache-2.0
- **仓库**：[Gitee](https://gitee.com/iswangh/element-plus-kit.git)
