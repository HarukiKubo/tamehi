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
    <div>
      <label>
        <input
          type="radio"
          name="populationType"
          value="総人口"
          checked={populationType === "総人口"}
          onChange={onChange}
        />
        総人口
      </label>
      <label>
        <input
          type="radio"
          name="populationType"
          value="年少人口"
          checked={populationType === "年少人口"}
          onChange={onChange}
        />
        年少人口
      </label>
      <label>
        <input
          type="radio"
          name="populationType"
          value="生産年齢人口"
          checked={populationType === "生産年齢人口"}
          onChange={onChange}
        />
        生産年齢人口
      </label>
      <label>
        <input
          type="radio"
          name="populationType"
          value="老年人口"
          checked={populationType === "老年人口"}
          onChange={onChange}
        />
        老年人口
      </label>
    </div>
  );
};

export default PopulationTypeSelector;
