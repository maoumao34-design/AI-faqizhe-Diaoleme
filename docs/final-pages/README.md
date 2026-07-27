# Diaoleme 前端页面交付包

## 入口

- `index.html`：推荐的开发入口。
- `掉了么 Diaoleme_design_v2.html`：保留原最终文件名，内容与 `index.html` 一致。

## 目录

- 根目录下的 `*-page.css`：各页面独立样式。
- `shared-brand.css`：跨页面统一品牌与头像样式。
- `assets/`：各页面使用的角色、背景、图标和内容图片。
- `generated-assets/`：首页场景及合成素材。

## 使用说明

页面使用相对路径引用资源。请保持 HTML、CSS、`assets` 和
`generated-assets` 的当前目录关系。

可直接双击 `index.html` 预览；接入后端时也可将本目录作为静态资源根目录。
页面跳转目前由同一 HTML 内的 JavaScript 控制。

## 注意

- 未包含设计参考图、源素材包、项目缓存和构建依赖。
- 所有交付素材均为副本，不会影响原始素材目录。
