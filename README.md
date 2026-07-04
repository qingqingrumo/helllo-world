# Cloudflare Pages 示例合集

这个仓库收集了几套从入门到实战的 Cloudflare Pages 示例，主要覆盖这些常见能力：

- 文本变量
- 密钥
- KV 绑定
- D1 绑定
- Pages Functions

适合用来理解 Cloudflare Pages 里最常见的几个概念，以及它们在博客场景中的实际用法。

## 仓库结构

- `env-demo/`
  - 演示文本变量和密钥
  - 适合先理解 `context.env.xxx` 如何读取普通配置和敏感配置

- `bindings-demo/`
  - 演示 KV 绑定
  - 用一个最小计数器说明“绑定”不是普通字符串，而是一个可操作的资源对象

- `d1-comments-demo/`
  - 演示 D1 数据库绑定
  - 用评论写入和评论读取说明数据库绑定怎么使用

- `blog-practical-demo/`
  - 把文本变量、密钥、KV、D1 串起来
  - 更接近真实博客项目

## 推荐阅读顺序

1. `env-demo`
2. `bindings-demo`
3. `d1-comments-demo`
4. `blog-practical-demo`

这样看下来会更顺一些：

- 先理解“变量和密钥是什么”
- 再理解“绑定是什么”
- 再理解“数据库绑定怎么用”
- 最后看“怎么把它们组合进一个博客”

## 各 Demo 说明

### 1. env-demo

目录：[`env-demo`](./env-demo)

这个示例包含：

- `SITE_NAME`：文本变量
- `MY_TOKEN`：密钥

演示内容：

- 页面调用 `/api/site` 读取文本变量
- 页面调用 `/api/check` 演示密钥校验

适合用来理解：

- 文本变量适合放普通配置
- 密钥适合放 token、API key、密码等敏感值

### 2. bindings-demo

目录：[`bindings-demo`](./bindings-demo)

这个示例使用：

- `COUNTER`：KV 绑定

演示内容：

- `/api/counter` 读取当前计数
- `/api/increment` 写入并自增

适合用来理解：

- 绑定不是字符串
- `context.env.COUNTER` 是一个真实的 KV 资源对象
- 可以直接调用 `.get()` 和 `.put()`

### 3. d1-comments-demo

目录：[`d1-comments-demo`](./d1-comments-demo)

这个示例使用：

- `DB`：D1 绑定

演示内容：

- `/api/comment` 写入评论
- `/api/comments` 读取评论列表

适合用来理解：

- D1 绑定怎么接入 Pages
- `context.env.DB.prepare(...).bind(...).run()` 的基本用法
- 为什么评论、留言、文章元数据这类结构化数据更适合数据库

### 4. blog-practical-demo

目录：[`blog-practical-demo`](./blog-practical-demo)

这个示例组合了：

- 文本变量
  - `SITE_NAME`
  - `SITE_DESCRIPTION`
  - `ADMIN_EMAIL`
- 密钥
  - `ADMIN_TOKEN`
- KV 绑定
  - `VIEWS`
- D1 绑定
  - `DB`

演示内容：

- 读取站点配置
- 使用 KV 更新文章阅读量
- 使用 D1 读取和写入评论
- 使用密钥保护一个受限接口

这个目录最接近真实博客项目结构。

## 如何部署

推荐方式：

1. 把这个仓库连接到 Cloudflare Pages
2. 选择某一个 demo 目录作为项目根目录
3. 配置对应的变量、密钥和绑定
4. 重新部署

如果你是给每个 demo 分别建一个 Pages 项目，通常可以这样填根目录：

- `env-demo`
- `bindings-demo`
- `d1-comments-demo`
- `blog-practical-demo`

## Pages 构建设置建议

这些 demo 都是最简单的“静态文件 + `functions/`”结构，通常这样填写：

- Framework preset：`None`
- Build command：留空
- Build output directory：`/`
- Root directory：填写对应 demo 文件夹名

## 补充说明

- 每个 demo 目录里都有自己的 `README.md`
- 具体变量名、绑定名、SQL 初始化步骤已写在各自目录里
- 如果你只是想先跑通一个，建议从 `env-demo` 开始

## 学完这几个 demo 你会掌握什么

- Pages 静态资源和 Pages Functions 的区别
- 文本变量和密钥的区别
- KV 绑定和 D1 绑定的基本用法
- 怎么把这些能力组合成一个简单博客
