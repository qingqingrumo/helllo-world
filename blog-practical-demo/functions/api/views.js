export async function onRequest(context) {
  const views = context.env.VIEWS;

  if (!views) {
    return new Response("还没有配置名为 VIEWS 的 KV 绑定", { status: 500 });
  }

  const url = new URL(context.request.url);
  const slug = url.searchParams.get("slug") || "default-post";
  const key = `views:${slug}`;

  if (context.request.method === "GET") {
    const current = Number(await views.get(key)) || 0;
    return Response.json({ slug, count: current });
  }

  if (context.request.method === "POST") {
    const current = Number(await views.get(key)) || 0;
    const next = current + 1;
    await views.put(key, String(next));
    return Response.json({
      message: "阅读量已更新",
      slug,
      count: next
    });
  }

  return new Response("Method Not Allowed", { status: 405 });
}
