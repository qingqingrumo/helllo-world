# 博客实战 Demo

这是一个把 Cloudflare Pages 里最常见几种能力串起来的最小博客示例。

## 这个 demo 里有什么

- `文本变量`
  - `SITE_NAME`
  - `SITE_DESCRIPTION`
  - `ADMIN_EMAIL`
- `密钥`
  - `ADMIN_TOKEN`
- `KV 绑定`
  - `VIEWS`
- `D1 绑定`
  - `DB`

## 目录结构

- `index.html`：博客首页和文章示例
- `functions/api/config.js`：读取文本变量
- `functions/api/views.js`：通过 KV 读取和更新阅读量
- `functions/api/comments.js`：通过 D1 读取和写入评论
- `functions/api/admin.js`：通过密钥校验请求

## 先在 Pages 后台配置什么

### 变量和密钥

- `SITE_NAME`
  - 类型：文本
  - 示例值：`我的博客`
- `SITE_DESCRIPTION`
  - 类型：文本
  - 示例值：`记录 Cloudflare、自动化和个人项目。`
- `ADMIN_EMAIL`
  - 类型：文本
  - 示例值：`hello@example.com`
- `ADMIN_TOKEN`
  - 类型：密钥
  - 示例值：`demo-admin-token`

### 绑定

- `VIEWS`
  - 类型：KV Namespace
- `DB`
  - 类型：D1

## D1 建表 SQL

在 D1 控制台执行：

```sql
CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL,
  author TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TEXT NOT NULL
);
```

## 部署后怎么测试

1. 打开首页
2. 页面加载时会自动：
   - 读取站点配置
   - 给文章阅读量 +1
   - 拉取评论列表
3. 你可以手动提交评论
4. 你也可以点“测试受保护接口”验证 `ADMIN_TOKEN`

## 这个 demo 想说明什么

- 静态页面负责展示
- 文本变量负责普通配置
- 密钥负责受保护接口
- KV 适合做阅读量
- D1 适合做评论这类结构化数据
