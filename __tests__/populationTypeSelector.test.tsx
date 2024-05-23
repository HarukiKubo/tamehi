import { render, screen, fireEvent } from "@testing-library/react";
import PopulationTypeSelector from "@/components/populationTypeSelector";
import { describe, it, expect } from "@jest/globals";

describe("PopulationTypeSelector component", () => {
  it("should render PopulationTypeSelector with given props", () => {
    const handleChange = jest.fn();
    render(
      <PopulationTypeSelector populationType="総人口" onChange={handleChange} />
    );

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(4);

    fireEvent.click(radioButtons[1]);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
