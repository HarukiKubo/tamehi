import React, { useState } from "react";
import useSWR from "swr";
import { PREFECTURES_API_URL } from "@/pages/api/PrefecturesList";
import { fetcher } from "@/lib/fetcher";
import { Prefectures } from "@/types";

type Props = {
  onChange: (selectedPrefs: { code: number; name: string }[]) => void;
};

const PrefCheckbox: React.FC<Props> = ({ onChange }) => {
  const { data, error, isLoading } = useSWR<{
    message: string | null;
    result: Prefectures[];
  }>(PREFECTURES_API_URL, fetcher);
  const [selectedPrefs, setSelectedPrefs] = useState<
    { code: number; name: string }[]
  >([]);

  console.log("PrefCheckbox data:", data); // デバッグ出力

  if (error) return <div>エラーが発生しました。</div>;
  if (isLoading) return <div>Now loading...</div>;

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
    <div>
      <form>
        <div>
          {data.result.map((prefecture) => (
            <label key={prefecture.prefCode}>
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
              {prefecture.prefName}
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default PrefCheckbox;
