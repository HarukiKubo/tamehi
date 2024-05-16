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
  prefCodes: number[];
  populationType: string;
};

const PopulationChart: React.FC<Props> = ({ prefCodes, populationType }) => {
  const { combinedData, isLoading, error } = usePopulationData(
    prefCodes,
    populationType
  );

  if (isLoading) return <div>Now loading...</div>;
  if (error) return <div>エラーが発生しました: {error.message}</div>;

  console.log("combinedData:", combinedData);

  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height={400}>
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
