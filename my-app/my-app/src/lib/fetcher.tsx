export const fetcher = (url: string) => {
  const apiKey = process.env.NEXT_PUBLIC_RESAS_API_KEY;

  if (!apiKey) {
    throw new Error("API key is not defined");
  }

  const headers = new Headers({
    "X-API-KEY": apiKey,
  });

  return fetch(url, { headers }).then((res) => {
    if (!res.ok) {
      throw new Error("ネットワークの接続がありません？");
    }
    return res.json();
  });
};
