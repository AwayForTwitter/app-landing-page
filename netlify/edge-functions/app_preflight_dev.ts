import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const token = Deno.env.get("GOAT_TOKEN");
  
  const url = new URL(request.url)
  const search = url.search || "none"
  const decoded = decodeURIComponent(search)

  const params = new URLSearchParams(search)
  const version = params.get('v') || "none"

  const response = await fetch("https://awayfortwitter.goatcounter.com/api/v0/count", {
    method: 'POST',
    body: JSON.stringify({
      no_sessions: true,
      "hits": [{"event": true, "path": "/app_preflight_dev", "ref": `q=${decoded}`}],
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8', 
      'Authorization': `Bearer ${token}`
    } 
  });
  return Response.json({ "deprecated_production": true, "deprecation_text": `${decoded} Twitter has made the decision to shut down the API 😔 While expected, it is nonetheless sad. Please keep the app installed - I'll be adding support for Mastodon, and you will keep the PRO unlock, if you've purchased it.`, "deprecation_tap_url": "https://google.com" });
};