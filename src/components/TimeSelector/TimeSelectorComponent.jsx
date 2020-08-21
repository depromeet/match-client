import React from "react";
import * as S from "./styles";

const TimeSelectorComponent = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleMultiChange = (selectedOption) => {
    setValue("reactSelect", selectedOption);
    setReactSelect({ selectedOption });
  };
  const [values, setReactSelect] = useState({
    selectedOption: [],
  });
  return (
    <S.Container>
      <Select
        className="reactSelect"
        name="filters"
        placeholder="Filters"
        value={values.selectedOption}
        options={options}
        onChange={handleMultiChange}
        isMulti
      />
    </S.Container>
  );
};

export default TimeSelectorComponent;
