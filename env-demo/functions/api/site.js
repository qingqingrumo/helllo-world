export function onRequest(context) {
  return Response.json({
    message: "读取文本变量成功",
    siteName: context.env.SITE_NAME || "你还没有在 Pages 后台配置 SITE_NAME"
  });
}
