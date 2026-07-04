export async function onRequest(context) {
  const db = context.env.DB;

  if (!db) {
    return new Response("还没有配置名为 DB 的 D1 绑定", { status: 500 });
  }

  const result = await db
    .prepare(
      "SELECT id, author, content, created_at FROM comments ORDER BY id DESC LIMIT 20"
    )
    .all();

  return Response.json({
    message: "读取评论成功",
    comments: result.results || []
  });
}
