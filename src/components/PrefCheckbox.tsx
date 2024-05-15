import React from "react";
import useSWR from "swr";
import styles from "../styles/PrefCheckbox.module.css";
import { PREFECTURES_API_URL } from "@/pages/api/PrefecturesList";
import { fetcher } from "../lib/fetcher";
import { Prefectures } from "@/types";

type Props = {
  onChange: (prefCode: number, checked: boolean) => void;
};

const PrefCheckbox: React.FC<Props> = ({ onChange }) => {
  const { data, error, isLoading } = useSWR<Prefectures[]>(
    PREFECTURES_API_URL,
    fetcher
  );

  if (error) return <div>エラーが発生しました。</div>;
  if (isLoading) return <div>Now loading...</div>;

  return (
    <div>
      <form>
        <div className={styles.checkboxContainer}>
          {data?.map((prefecture) => (
            <label key={prefecture.prefCode}>
              <input
                type="checkbox"
                value={prefecture.prefCode}
                onChange={(e) =>
                  onChange(prefecture.prefCode, e.target.checked)
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
