# AIFA-123 Scan「待上传/进度」文案居中

## 原因
`.scan-percent` 在圆形预览底部 pill 内，CJK 粗体在几何居中后仍略显偏下；且 aihpj Pages 曾停留在旧 bundle，硬刷仍见偏下。

## 改动
- 仅改 `.scan-percent`：`display:flex` + `align/justify center` + `padding-bottom:3px` 光学上移
- 圆环/`bottom:-16px` 定位、按钮、指标、FAB、他页不动

## 本地验证（像素）
| 状态 | gap_above / gap_below | delta_mid |
|------|----------------------|-----------|
| 待上传 | 17 / 18 | -0.5px |
| 47% | 22 / 22 | 0 |

## Bundle
- `index-OcepOzkz.js` / `index-DGqB15Vl.css`

## 截图
- `scan-pending-full.png` / `scan-pending-pill.png`
- `scan-progress-full.png` / `scan-progress-pill.png`
