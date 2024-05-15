import { API_KEY } from "@/pages/api/PrefecturesList";

export const fetcher = async (url: string) => {
  const response = await fetch(url, {
    headers: { "X-API-KEY": API_KEY },
  });
  const data = await response.json();
  return data.result;
};
