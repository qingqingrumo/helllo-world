export async function onRequest(context) {
  const binding = context.env.COUNTER;

  if (!binding) {
    return new Response("还没有配置名为 COUNTER 的 KV 绑定", { status: 500 });
  }

  const key = "demo-count";
  const current = Number(await binding.get(key)) || 0;

  return Response.json({
    message: "读取 KV 成功",
    key,
    count: current
  });
}
