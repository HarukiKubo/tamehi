import React from "react";

type PopulationTypeSelectorProps = {
  populationType: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PopulationTypeSelector: React.FC<PopulationTypeSelectorProps> = ({
  populationType,
  onChange,
}) => {
  return (
    <div className="flex justify-center space-x-2 my-4">
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="populationType"
          value="総人口"
          checked={populationType === "総人口"}
          onChange={onChange}
        />
        <span>総人口</span>
      </label>
      <label className="flex items-center space-x-1">
        <input
          type="radio"
          name="populationType"
          value="年少人口"
          checked={populationType === "年少人口"}
          onChange={onChange}
        />
        <span>年少人口</span>
      </label>
      <label className="flex items-center space-x-1">
        <input
          type="radio"
          name="populationType"
          value="生産年齢人口"
          checked={populationType === "生産年齢人口"}
          onChange={onChange}
        />
        <span>生産年齢人口</span>
      </label>
      <label className="flex items-center space-x-1">
        <input
          type="radio"
          name="populationType"
          value="老年人口"
          checked={populationType === "老年人口"}
          onChange={onChange}
        />
        <span>老年人口</span>
      </label>
    </div>
  );
};

export default PopulationTypeSelector;
