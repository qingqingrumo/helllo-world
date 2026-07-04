export async function onRequest(context) {
  const db = context.env.DB;

  if (!db) {
    return new Response("还没有配置名为 DB 的 D1 绑定", { status: 500 });
  }

  if (context.request.method === "GET") {
    const url = new URL(context.request.url);
    const slug = url.searchParams.get("slug") || "default-post";

    const result = await db
      .prepare(
        "SELECT id, slug, author, content, created_at FROM comments WHERE slug = ? ORDER BY id DESC LIMIT 20"
      )
      .bind(slug)
      .all();

    return Response.json({
      slug,
      comments: result.results || []
    });
  }

  if (context.request.method === "POST") {
    const body = await context.request.json();
    const slug = (body.slug || "").trim();
    const author = (body.author || "").trim();
    const content = (body.content || "").trim();

    if (!slug || !author || !content) {
      return Response.json(
        { error: "slug、author、content 都不能为空" },
        { status: 400 }
      );
    }

    const result = await db
      .prepare(
        "INSERT INTO comments (slug, author, content, created_at) VALUES (?, ?, ?, datetime('now'))"
      )
      .bind(slug, author, content)
      .run();

    return Response.json({
      message: "评论提交成功",
      success: true,
      meta: result.meta
    });
  }

  return new Response("Method Not Allowed", { status: 405 });
}
