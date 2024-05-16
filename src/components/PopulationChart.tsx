import React from "react";
import useSWR from "swr";
import { POPULATION_API_URL } from "@/pages/api/PrefecturesList";
import { fetcher } from "../lib/fetcher";
import { PopulationResponse } from "@/types";
import styles from "../styles/PopulationChart.module.css";

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
  const fetchPopulationData = (url: string) => fetcher(url);
  const { data, error, isLoading } = useSWR(
    () => prefCodes.map((code) => POPULATION_API_URL(code)),
    fetchPopulationData,
    { revalidateOnFocus: false }
  );

  if (error) return <div>エラーが発生しました。</div>;
  if (isLoading) return <div>Now loading...</div>;

  const populationDataArray = Array.isArray(data) ? data : [data];

  // 都道府県ごとの人口データを結合する
  const combinedData = populationDataArray
    .filter((populationResponse) => populationResponse !== undefined) // undefinedを除外
    .map((populationResponse, index) =>
      populationResponse.data
        .find((d) => d.label === populationType)
        ?.data.map((item) => ({
          year: item.year,
          value: item.value,
          prefCode: prefCodes[index],
        }))
    )
    .flat()
    .filter((item) => item !== undefined); // undefinedを除外

  console.log("combinedData: ", combinedData);

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
