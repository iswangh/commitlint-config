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
- **@iswangh/eslint-config**: `^0.2.1` - ESLint 配置
- **@semantic-release/changelog**: `^6.0.3` - 自动生成 CHANGELOG
- **@semantic-release/git**: `^10.0.1` - 自动提交版本变更
- **husky**: `^9.1.7` - Git Hooks 管理工具
- **lint-staged**: `^15.5.2` - 对暂存区文件执行 lint 任务
- **semantic-release**: `^25.0.2` - 自动化版本管理和发布
- **TypeScript**: `^5.9.3` - TypeScript 编译器

## 目录结构

```
commitlint-config/
├── .husky/               # Git Hooks 目录
│   ├── pre-commit        # 提交前钩子（执行 lint-staged）
│   ├── commit-msg        # 提交信息钩子（验证提交信息格式）
│   └── post-commit       # 提交后钩子（显示提交信息）
├── src/                  # 源代码目录
│   ├── configs/          # 配置模块目录
│   │   ├── defaults.ts   # 默认配置选项
│   │   ├── rules.ts      # 规则配置
│   │   ├── plugins.ts    # 插件配置
│   │   └── index.ts      # 配置模块聚合导出
│   ├── constants/        # 常量模块目录
│   │   ├── rule-level.ts # 规则级别常量
│   │   ├── commit-types.ts # 提交类型枚举
│   │   └── index.ts      # 常量模块聚合导出
│   ├── types/            # 类型定义模块目录
│   │   ├── commit-type.d.ts # 提交类型定义
│   │   ├── config-options.d.ts # 配置选项类型定义
│   │   └── index.ts      # 类型模块聚合导出
│   ├── createConfig.ts   # 创建配置函数
│   └── index.ts          # src 模块聚合导出
├── scripts/              # 脚本目录
│   ├── index.js          # 脚本模块聚合导出
│   └── semantic-release-verify.js # semantic-release 验证插件
├── .releaserc.js         # semantic-release 配置文件
├── commitlint.config.js  # Commitlint 配置文件
├── eslint.config.js      # ESLint 配置文件
├── lint-staged.config.js # Lint-Staged 配置文件
├── index.js              # 主入口文件（JavaScript 包装，用于支持 JS 配置文件）
├── index.ts              # 主入口文件（TypeScript 实现）
├── package.json          # 项目配置文件
└── README.md             # 项目文档
```

## 快速开始

### 环境要求

- Node.js >= 25.1.0（推荐使用 Volta 管理 Node.js 版本，项目已配置 Volta）
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

**注意**：如果使用 `ni`，需要先全局安装 `@antfu/ni`：
```bash
npm install -g @antfu/ni
```

### 使用方法

#### JavaScript 配置文件

创建 `commitlint.config.js`：

```javascript
/**
 * @file Commitlint 配置文件
 * @ts-check
 */

import iswangh from '@iswangh/commitlint-config'

/**
 * Commitlint 配置
 * 使用默认配置
 *
 * @type {ReturnType<typeof iswangh>}
 */
export default iswangh()
```

#### TypeScript 配置文件

创建 `commitlint.config.ts`：

```typescript
import iswangh from '@iswangh/commitlint-config'

// 使用默认配置
export default iswangh()
```

#### 自定义配置

支持传入配置选项来自定义配置：

```typescript
import iswangh from '@iswangh/commitlint-config'

export default iswangh({
  // 自定义规则
  rules: {
    'header-max-length': [2, 'always', 80],
    // 如需启用中文冒号检查，将规则级别设置为 2（错误）或 1（警告）即可
    // 'no-chinese-colon': [2, 'always'],
  },
  // 自定义继承的配置
  extends: '@commitlint/config-conventional',
})
```

**注意**：用户传入的配置会覆盖默认配置，确保用户配置优先级最高。

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

- `no-chinese-colon`: 禁止在提交信息头部（header）使用中文冒号（Conventional Commits 格式要求使用英文冒号 `:`）
  - 只检查提交信息第一行（header），主体（body）中允许使用中文冒号
  - **默认已禁用**，如需启用可在自定义配置中将规则级别设置为 `2`（错误）或 `1`（警告）：
    ```typescript
    rules: {
      'no-chinese-colon': [2, 'always'], // 启用规则（错误级别）
    }
    ```

## 开发指南

### 开发环境设置

1. **安装 Volta**（如果尚未安装）：
   ```bash
   # Windows
   winget install Volta.Volta
   
   # macOS/Linux
   curl https://get.volta.sh | bash
   ```

2. **克隆项目并安装依赖**：
   ```bash
   git clone <repository-url>
   cd commitlint-config
   ni
   ```

3. **运行类型检查**：
   ```bash
   nr type-check
   ```

### 项目规范

本项目遵循以下开发规范：
- 使用 TypeScript 进行类型安全开发
- 遵循 Conventional Commits 规范进行提交
- 使用 ESLint 进行代码质量检查
- 使用 Volta 管理 Node.js 版本
- 使用 Husky 管理 Git Hooks，确保提交前代码质量
- 使用 Lint-Staged 对暂存区文件进行代码规范检查

### Git Hooks 说明

本项目使用 Husky 管理 Git Hooks，配置了以下三个钩子：

#### pre-commit 钩子

```bash
# 执行 lint-staged，对暂存区文件进行代码规范检查
# 优先使用本地安装的包，避免自动安装（推荐）
# npx --no lint-staged
# npm exec --no lint-staged
# pnpm exec lint-staged
# yarn exec lint-staged
# bunx lint-staged
npx --no lint-staged
```

#### commit-msg 钩子

```bash
# 验证提交信息格式，确保符合 Conventional Commits 规范
echo "📋 正在验证提交信息..."
echo "────────────────────────────────────────"

# 执行 commitlint 命令
# 优先使用本地安装的包，避免自动安装（推荐）
# npx --no commitlint --edit "$1"
# npm exec --no commitlint --edit "$1"
# pnpm exec commitlint --edit "$1"
# yarn exec commitlint --edit "$1"
# bunx commitlint --edit "$1"
npx --no commitlint --edit "$1" || {
  echo ""
  echo "❌ 提交信息格式验证失败!"
  echo ""
  echo "请遵循约定式提交格式:"
  echo "  <type>(<scope>): <subject>"
  echo ""
  echo "常用类型:"
  echo "  feat:     🚀 新功能"
  echo "  fix:      🐛 修复bug"
  echo "  refactor: 🔨 代码重构"
  echo "  style:    🎨 代码格式调整"
  echo "  perf:     ⚡ 性能优化"
  echo "  test:     🧪 测试相关"
  echo "  build:    📦 构建配置"
  echo "  ci:       🤖 CI配置"
  echo "  docs:     📚 文档更新"
  echo "  chore:    🔧 日常维护"
  echo "  revert:   🗑️ 回滚操作"
  exit 1
}

echo "✅ 提交信息格式正确!"
```

#### post-commit 钩子

```bash
# 提交成功后显示提示信息
echo "✅ 提交成功!"
echo "📝 提交信息: $(git log -1 --oneline)"
```

## 项目信息

- **许可证**：Apache-2.0
- **主仓库**：[Gitee](https://gitee.com/iswangh/commitlint-config.git)
- **镜像仓库**：[GitHub](https://github.com/iswangh/commitlint-config.git)（通过 Gitee 镜像仓库功能自动同步）
