# 变量 Demo

这是一个可以直接上传到 Cloudflare Pages 的最小示例。

## 目录结构

- `index.html`：前端页面
- `functions/api/site.js`：读取文本变量
- `functions/api/check.js`：读取密钥并做校验

## 在 Pages 后台配置

在 `设置 -> 变量和机密` 中添加：

- `SITE_NAME`
  - 类型：`文本`
  - 值：`我的博客`
- `MY_TOKEN`
  - 类型：`密钥`
  - 值：`abc123456`

## 部署后测试

- 打开首页，点击“读取文本变量”
- 点击“测试密钥校验”
- 点击“测试错误密钥”

## 路由说明

- `/` -> `index.html`
- `/api/site` -> `functions/api/site.js`
- `/api/check` -> `functions/api/check.js`
