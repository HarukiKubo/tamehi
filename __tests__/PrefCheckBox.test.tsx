// __tests__/PrefCheckBox.test.tsx

import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";
import PrefCheckbox from "@/components/prefCheckbox";

// モックデータの定義
const mockPrefs = [
  { prefCode: 1, prefName: "北海道" },
  { prefCode: 2, prefName: "青森県" },
];

describe("PrefCheckbox component", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should render checkboxes for given prefectures", async () => {
    // 最初にモックデータを設定
    fetchMock.mockResponseOnce(
      JSON.stringify({
        message: null,
        result: mockPrefs,
      })
    );

    render(<PrefCheckbox onChange={() => {}} />);

    console.log("fetchMock calls before waitFor:", fetchMock.mock.calls);

    // データが取得されるのを待つ
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(
        "https://api.example.com/prefectures"
      );

      const hokkaidoCheckbox = screen.getByLabelText("北海道");
      const aomoriCheckbox = screen.getByLabelText("青森県");

      expect(hokkaidoCheckbox).toBeInTheDocument();
      expect(aomoriCheckbox).toBeInTheDocument();
    });

    console.log("fetchMock calls after waitFor:", fetchMock.mock.calls);
  });

  it("should call onChange with selected prefectures", async () => {
    // 最初にモックデータを設定
    fetchMock.mockResponseOnce(
      JSON.stringify({
        message: null,
        result: mockPrefs,
      })
    );

    const handleChange = jest.fn();

    render(<PrefCheckbox onChange={handleChange} />);

    console.log("fetchMock calls before waitFor:", fetchMock.mock.calls);

    // データが取得されるのを待つ
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(
        "https://api.example.com/prefectures"
      );

      const hokkaidoCheckbox = screen.getByLabelText("北海道");
      const aomoriCheckbox = screen.getByLabelText("青森県");

      // 北海道のチェックボックスをチェック
      fireEvent.click(hokkaidoCheckbox);
      expect(handleChange).toHaveBeenCalledWith([{ code: 1, name: "北海道" }]);

      // 青森県のチェックボックスをチェック
      fireEvent.click(aomoriCheckbox);
      expect(handleChange).toHaveBeenCalledWith([
        { code: 1, name: "北海道" },
        { code: 2, name: "青森県" },
      ]);

      // 北海道のチェックを外す
      fireEvent.click(hokkaidoCheckbox);
      expect(handleChange).toHaveBeenCalledWith([{ code: 2, name: "青森県" }]);
    });

    console.log("fetchMock calls after waitFor:", fetchMock.mock.calls);
  });
});
