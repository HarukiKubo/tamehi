import React from "react";
import { usePopulationData } from "./usePopulationData";
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
  selectedPrefs: { code: number; name: string }[];
  populationType: string;
};

const PopulationChart: React.FC<Props> = ({
  selectedPrefs,
  populationType,
}) => {
  const prefCodes = selectedPrefs.map((pref) => pref.code);
  const { combinedData, isLoading, error } = usePopulationData(
    prefCodes,
    populationType
  );

  if (isLoading) return <div>Now loading...</div>;
  if (error) return <div>エラーが発生しました: {error.message}</div>;

  console.log("combinedData:", combinedData); // デバッグ出力

  // combinedDataが未定義の場合の対策
  if (!combinedData) return <div>データがありません。</div>;

  // 年ごとのデータをマージし、14ポイントに制限
  const years = Array.from(
    new Set(
      Object.values(combinedData)
        .flat()
        .map((d) => d.year)
    )
  ).slice(0, 14); // 14ポイントに制限
  const mergedData = years.map((year) => {
    const data: Record<string, number | string> = { year };
    selectedPrefs.forEach((pref) => {
      const prefData = combinedData[pref.code]?.find((d) => d.year === year);
      if (prefData) {
        data[`value_${pref.code}`] = prefData.value;
      }
    });
    return data;
  });

  console.log("mergedData:", mergedData); // デバッグ出力

  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={mergedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis className={styles.yAxis} />
          <Tooltip />
          <Legend />
          {selectedPrefs.map((pref, index) => (
            <Line
              key={pref.code}
              type="monotone"
              dataKey={`value_${pref.code}`}
              stroke={["#8884d8", "#82ca9d", "#ffc658"][index % 3]}
              activeDot={{ r: 8 }}
              name={pref.name}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopulationChart;
