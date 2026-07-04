export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const db = context.env.DB;

  if (!db) {
    return new Response("还没有配置名为 DB 的 D1 绑定", { status: 500 });
  }

  const body = await context.request.json();
  const author = (body.author || "").trim();
  const content = (body.content || "").trim();

  if (!author || !content) {
    return Response.json(
      { error: "author 和 content 都不能为空" },
      { status: 400 }
    );
  }

  const result = await db
    .prepare(
      "INSERT INTO comments (author, content, created_at) VALUES (?, ?, datetime('now'))"
    )
    .bind(author, content)
    .run();

  return Response.json({
    message: "评论写入成功",
    success: true,
    meta: result.meta
  });
}
