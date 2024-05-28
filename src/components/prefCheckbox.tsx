import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "./fetcher";
import { Prefectures } from "@/types";

type Props = {
  onChange: (selectedPrefs: { code: number; name: string }[]) => void;
};

const PREFECTURES_API_URL = process.env.NEXT_PUBLIC_PREFECTURES_API_URL;

const PrefCheckbox: React.FC<Props> = ({ onChange }) => {
  const { data, error } = useSWR<{
    message: string | null;
    result: Prefectures[];
  }>(PREFECTURES_API_URL, fetcher);
  const [selectedPrefs, setSelectedPrefs] = useState<
    { code: number; name: string }[]
  >([]);

  console.log("PrefCheckbox data:", data); // デバッグ出力

  useEffect(() => {
    console.log("useEffect triggered:", data);
  }, [data]);

  if (error) return <div>エラーが発生しました。</div>;
  if (!data) return <div>Now loading...</div>;

  // data.resultが配列であることを確認
  if (!data || !Array.isArray(data.result)) {
    return <div>データ形式が不正です。</div>;
  }

  const handleCheckboxChange = (
    prefCode: number,
    prefName: string,
    checked: boolean
  ) => {
    const updatedPrefs = checked
      ? [...selectedPrefs, { code: prefCode, name: prefName }]
      : selectedPrefs.filter((pref) => pref.code !== prefCode);
    setSelectedPrefs(updatedPrefs);
    onChange(updatedPrefs);
  };

  return (
    <div className="w-full p-4 border border-gray-300 rounded-md">
      <form>
        <div className="grid grid-cols-2 gap-2 justify-items-center">
          {data.result.map((prefecture) => (
            <label
              key={prefecture.prefCode}
              className="flex items-center space-x-2"
            >
              <input
                type="checkbox"
                value={prefecture.prefCode}
                onChange={(e) =>
                  handleCheckboxChange(
                    prefecture.prefCode,
                    prefecture.prefName,
                    e.target.checked
                  )
                }
              />
              <span className="min-w-[120px]">{prefecture.prefName}</span>
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default PrefCheckbox;
