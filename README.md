# 掉了么 (Diaoleme)

面向健康人群的娱乐向、社交向头发养护养成产品。项目背景、方向调研见 [掉了么_产品方向讨论纪要.md](./掉了么_产品方向讨论纪要.md)(注意:该文档记录的是项目最初期的设想和讨论过程,不代表最终定案,不必完全遵守)。

本README只覆盖**协作规范**,用于统一在本仓库工作的所有人/智能体的代码提交流程。

## 后端公网部署（人类 15 分钟）

固定 HTTPS 上线步骤（Render / Railway / Fly）、环境变量与验收口径见：

- [docs/ONE_CLICK_DEPLOY.md](./docs/ONE_CLICK_DEPLOY.md)
- [backend/DEPLOYMENT.md](./backend/DEPLOYMENT.md)

不要使用匿名临时隧道域名作为生产绑定。

## 分支策略

- `main` 分支保持随时可运行、干净,不要直接往 `main` push
- 每个功能/修复都在自己的分支上开发,分支命名规则:
  - `feature/xxx` —— 新功能
  - `fix/xxx` —— 修复问题
  - `docs/xxx` —— 文档相关
  - `chore/xxx` —— 杂项(依赖、配置等)
- 开发完成后提PR合并进 `main`。**允许自己合并,不强制他人审核**,但合并前请确认:
  - 代码能跑通,没有明显报错
  - PR描述里简单说明改了什么、为什么改

## Commit规范(Conventional Commits)

格式:`<type>: <description>`,description用中文即可。

常用type:

| type | 用途 |
|---|---|
| `feat` | 新增功能 |
| `fix` | 修复bug |
| `docs` | 文档修改 |
| `refactor` | 重构,不改变行为 |
| `chore` | 杂项(依赖更新、配置等) |
| `test` | 测试相关 |

示例:

```
feat: 新增头发照片上传接口
fix: 修复打分接口在小尺寸图片下报错的问题
docs: 更新README协作规范
```

## 基本工作流

```bash
git clone https://github.com/maoumao34-design/AI-faqizhe-Diaoleme.git
cd AI-faqizhe-Diaoleme

git checkout -b feature/你的功能名
# ...开发、提交...

git add <具体改动的文件>
git commit -m "feat: 描述你做了什么"
git push origin feature/你的功能名
# 在GitHub上开PR,自行确认无误后合并进main
```

注意:提交时尽量用 `git add <文件名>` 指定具体文件,避免用 `git add -A`/`git add .` 把不该提交的文件(本地配置、临时文件等)一起带进去。
