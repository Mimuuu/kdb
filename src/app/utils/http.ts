export async function get(endpoint: string): Promise<any> {
  const params = {
    method: "GET",
  };

  const r = await fetch(endpoint, params);

  // the api always return a json, but doing this is useful if the api is
  // offline, crashing or things like that makes it not return anything at all
  try {
    const json = await r.json();
    return json;
  } catch (err) {
    return Promise.resolve({ error: "Endpoint does not return a valid JSON" });
  }
}
