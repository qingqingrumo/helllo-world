# D1 评论 Demo

这是一个可以直接上传到 Cloudflare Pages 的最小 D1 绑定示例。

## 目录结构

- `index.html`：前端页面
- `functions/api/comment.js`：写入评论
- `functions/api/comments.js`：读取评论列表

## 先在 Cloudflare 里做什么

1. 创建一个 D1 数据库
2. 进入你的 Pages 项目
3. 打开 `设置 -> 绑定`
4. 点击 `添加`
5. 选择 `D1`
6. 变量名填：`DB`
7. 选择你刚创建的数据库
8. 保存后重新部署

## 建表 SQL

在 D1 控制台执行下面这段 SQL：

```sql
CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  author TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TEXT NOT NULL
);
```

## 部署后测试

1. 打开首页
2. 输入昵称和评论内容
3. 点击“提交评论”
4. 点击“读取评论列表”

## 路由说明

- `/` -> `index.html`
- `/api/comment` -> `functions/api/comment.js`
- `/api/comments` -> `functions/api/comments.js`

## 这个 demo 想说明什么

- `变量/密钥`：通常是字符串配置
- `绑定`：可以直接操作资源
- 这里的 `context.env.DB` 就是一个 D1 数据库对象

例如：

```js
await context.env.DB.prepare("SELECT * FROM comments").all()
```

这说明 `DB` 不是普通字符串，而是一个可执行 SQL 的 D1 绑定。
