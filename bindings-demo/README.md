# 绑定 Demo

这是一个可以直接上传到 Cloudflare Pages 的最小 KV 绑定示例。

## 目录结构

- `index.html`：前端页面
- `functions/api/counter.js`：读取 KV 当前值
- `functions/api/increment.js`：把 KV 计数加一

## 先在 Cloudflare 里做什么

1. 创建一个 KV namespace
2. 打开你的 Pages 项目
3. 进入 `设置 -> 绑定`
4. 点击 `添加`
5. 选择 `KV Namespace`
6. 变量名填：`COUNTER`
7. 选择你刚才创建的 KV
8. 保存后重新部署

## 部署后测试

- 打开首页
- 点“读取当前计数”
- 点“计数 +1”
- 再次读取，就能看到数字变化

## 路由说明

- `/` -> `index.html`
- `/api/counter` -> `functions/api/counter.js`
- `/api/increment` -> `functions/api/increment.js`

## 这个 demo 想说明什么

- `变量/密钥`：通常读出来是字符串值
- `绑定`：读出来是一个资源对象

例如这里：

```js
context.env.COUNTER.get("demo-count")
context.env.COUNTER.put("demo-count", "1")
```

这说明 `COUNTER` 不是普通字符串，而是一个可操作的 KV 绑定。
