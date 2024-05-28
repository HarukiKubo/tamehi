import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import PopulationChart from "@/components/showPopulationChart";
import { describe, it } from "@jest/globals";
import { act } from "react";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

// fetchをモック
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () =>
      Promise.resolve({
        result: {
          data: [
            {
              label: "総人口",
              data: [
                { year: 1960, value: 5000000 },
                { year: 1965, value: 5200000 },
                // 必要なデータを追加
              ],
            },
          ],
        },
      }),
  } as Response)
);

// propsで渡す用のデータを作成
const mockData = {
  selectedPrefs: [{ code: 1, name: "北海道" }],
  populationType: "総人口",
};

describe("PopulationChart component", () => {
  it("should render PopulationChart with given props", async () => {
    await act(async () => {
      render(
        <PopulationChart
          selectedPrefs={mockData.selectedPrefs}
          populationType={mockData.populationType}
        />
      );

      // 非同期操作が完了するのを待つ
      await waitFor(() => {
        const chartElement = screen.queryByText(/人口数/i);
        expect(chartElement).toBeInTheDocument();
      });
    });
  });
});
