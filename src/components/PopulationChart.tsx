import React from "react";
import useSWR from "swr";
import { POPULATION_API_URL } from "@/pages/api/PrefecturesList";
import { fetcher } from "../lib/fetcher";
import { PopulationResponse } from "@/types";
import styles from "../styles/populationChart.module.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  prefCodes: number[];
  populationType: string;
};

const PopulationChart: React.FC<Props> = ({ prefCodes, populationType }) => {
  const {
    data: populationData,
    error,
    isLoading,
  } = useSWR<PopulationResponse[]>(
    () => prefCodes.map((prefCode) => POPULATION_API_URL(prefCode)),
    fetcher,
    { revalidateOnFocus: false }
  );

  console.log("populationType:", populationType);

  if (populationData) {
    console.log("populationData:", populationData);
  }

  if (error) return <div>エラーが発生しました。</div>;
  if (isLoading || !populationData) return <div>Now loading...</div>; // populationDataがundefinedまたはnullの場合もloadingを表示

  const combinedData = prefCodes
    .map((prefCode, index) => {
      const prefData =
        populationData[index]?.data
          .find((d) => d.label === populationType)
          ?.data.map((item) => ({
            year: item.year,
            value: item.value,
            prefCode,
          })) || [];
      return prefData;
    })
    .flat();

  console.log("combinednData:", combinedData);

  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer>
        <LineChart data={combinedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          {prefCodes.map((prefCode, index) => (
            <Line
              key={prefCode}
              type="monotone"
              dataKey="value"
              data={combinedData.filter((item) => item.prefCode === prefCode)}
              stroke={["#8884d8", "#82ca9d", "#ffc658"][index % 3]}
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopulationChart;
