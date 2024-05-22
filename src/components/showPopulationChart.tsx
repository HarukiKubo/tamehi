import React from "react";
import { usePopulationData } from "./usePopulationData";
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

  if (!combinedData) return <div>データがありません。</div>;

  const years = Array.from(
    new Set(
      Object.values(combinedData)
        .flat()
        .map((d) => d.year)
    )
  ).slice(0, 14); // 表示する西暦を2025年までに変更

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
    <div className="w-full h-[400px] mb-5">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={mergedData}
          margin={{ top: 30, right: 50, left: 50, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            label={{
              value: "年度",
              position: "insideBottomRight",
              offset: -10,
            }}
          />
          <YAxis
            className="w-20"
            padding={{ top: 25 }}
            label={{ value: "人口数", position: "insideTopLeft" }}
          />
          <Tooltip />
          <Legend verticalAlign="top" align="right" />
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
