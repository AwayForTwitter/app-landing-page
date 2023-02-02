import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  console.log("Test Log")
  const token = Deno.env.get("GOAT_TOKEN");

  const response = await fetch("https://awayfortwitter.goatcounter.com/api/v0/count", {
    method: 'POST',
    body: JSON.stringify({
      no_sessions: true,
      "hits": [{"path": "/app_preflight"}],
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8', 
      'Authorization': 'Bearer ${token}'
    } 
  });
  
  if (!response.ok) { /* Handle */ }
  return response;

  // return Response.json({ "deprecated_production": true, "deprecation_text": "Twitter has made the decision to shut down the API 😔 While expected, it is nonetheless sad. Please keep the app installed - I'll be adding support for Mastodon, and you will keep the PRO unlock, if you've purchased it.", "deprecation_tap_url": "https://google.com" });
};