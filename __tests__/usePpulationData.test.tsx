import { renderHook } from "@testing-library/react-hooks";
import { describe, it } from "@jest/globals";
import { SWRConfig } from "swr";
import { usePopulationData } from "@/components/usePopulationData";

const mockData = {
  result: {
    data: [
      {
        label: "総人口",
        data: [
          { year: 1960, value: 5000000 },
          { year: 1965, value: 5200000 },
        ],
      },
    ],
  },
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockData),
  })
);

describe("usePopulationData hook", () => {
  it("should return population data for given prefs and type", async () => {
    const prefCodes = [1];
    const populationType = "総人口";

    const { result, waitForNextUpdate } = renderHook(
      () => usePopulationData(prefCodes, populationType),
      {
        wrapper: ({ children }) => (
          <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>
        ),
      }
    );

    await waitForNextUpdate();

    expect(result.current.combinedData[1]).toEqual([
      { year: 1960, value: 5000000 },
      { year: 1965, value: 5200000 },
    ]);
  });
});
