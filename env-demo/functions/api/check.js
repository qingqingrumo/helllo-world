export function onRequest(context) {
  const requestToken = context.request.headers.get("x-token");
  const realToken = context.env.MY_TOKEN;

  if (!realToken) {
    return new Response("Pages 后台还没有配置 MY_TOKEN", { status: 500 });
  }

  if (requestToken !== realToken) {
    return new Response("Unauthorized", { status: 401 });
  }

  return new Response("密钥校验成功");
}
