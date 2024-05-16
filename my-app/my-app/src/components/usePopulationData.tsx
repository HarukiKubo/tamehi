import useSWR from "swr";
import { POPULATION_API_URL } from "@/pages/api/PrefecturesList";
import { fetcher } from "@/lib/fetcher";
import { PopulationData } from "@/types";

export const usePopulationData = (
  prefCodes: number[],
  populationType: string
) => {
  const key = prefCodes.length
    ? `/api/population?codes=${prefCodes.join(",")}&type=${populationType}`
    : null;

  const fetchPopulationData = async () => {
    if (!key) return [];

    const requests = prefCodes.map((prefCode) =>
      fetcher(POPULATION_API_URL(prefCode))
    );
    const responses = await Promise.all(requests);
    const combinedData: Record<number, PopulationData[]> = {};

    responses.forEach((data, index) => {
      const prefCode = prefCodes[index];
      const populationData = data.result.data.find(
        (d: { label: string }) => d.label === populationType
      )?.data;
      if (populationData) {
        combinedData[prefCode] = populationData;
      }
    });

    return combinedData;
  };

  const { data, error } = useSWR(key, fetchPopulationData);

  return { combinedData: data, isLoading: !error && !data, error };
};
