export const PREFECTURES_API_URL =
  "https://opendata.resas-portal.go.jp/api/v1/prefectures";
export const POPULATION_API_URL = (prefCode: number) =>
  `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`;
export const API_KEY = "9Za7WVu7Pszdc5BbahIqKCfm5KaXnDYywmimzdft";