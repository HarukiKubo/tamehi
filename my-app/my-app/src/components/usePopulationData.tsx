import useSWR from "swr";
import { POPULATION_API_URL } from "@/pages/api/PrefecturesList";
import { fetcher } from "@/lib/fetcher";
import { PopulationResponse, PopulationData } from "@/types";

export const usePopulationData = (
  prefCodes: number[],
  populationType: string
) => {
  const swrResponses = prefCodes.map((prefCode) => {
    const { data, error } = useSWR<PopulationResponse>(
      POPULATION_API_URL(prefCode),
      fetcher
    );
    return { data, error, prefCode };
  });

  const isLoading = swrResponses.some((res) => !res.data && !res.error);
  const error = swrResponses.find((res) => res.error)?.error;

  const combinedData: Array<PopulationData & { prefCode: number }> = [];
  if (!isLoading && !error) {
    swrResponses.forEach(({ data, prefCode }) => {
      if (data && data.result && data.result.data) {
        const populationData = data.result.data.find(
          (d) => d.label === populationType
        )?.data;
        if (populationData) {
          populationData.forEach((item) => {
            combinedData.push({ ...item, prefCode });
          });
        }
      }
    });
  }

  return { combinedData, isLoading, error };
};
