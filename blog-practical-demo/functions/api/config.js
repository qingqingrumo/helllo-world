export function onRequest(context) {
  return Response.json({
    siteName: context.env.SITE_NAME || "我的 Cloudflare 博客",
    description: context.env.SITE_DESCRIPTION || "这是一个把变量、密钥、KV 和 D1 串起来的博客示例。",
    adminEmail: context.env.ADMIN_EMAIL || "hello@example.com"
  });
}
