export function onRequest(context) {
  const requestToken = context.request.headers.get("x-admin-token");
  const realToken = context.env.ADMIN_TOKEN;

  if (!realToken) {
    return new Response("还没有配置 ADMIN_TOKEN 密钥", { status: 500 });
  }

  if (requestToken !== realToken) {
    return new Response("Unauthorized", { status: 401 });
  }

  return Response.json({
    message: "密钥校验成功，这是一个受保护接口",
    ok: true
  });
}
