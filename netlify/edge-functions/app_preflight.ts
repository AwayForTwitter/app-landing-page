import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const token = Deno.env.get("GOAT_TOKEN");

  const url = new URL(request.url)
  const search = url.search || "none"
  const decodedParams = decodeURIComponent(search).replace(/^\?/, '')

  const response = await fetch("https://awayfortwitter.goatcounter.com/api/v0/count", {
    method: 'POST',
    body: JSON.stringify({
      no_sessions: true,
      "hits": [{"event": true, "path": "/app_preflight", "ref": `${decodedParams}` }],
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8', 
      'Authorization': `Bearer ${token}`
    } 
  });
  return Response.json({  });
};