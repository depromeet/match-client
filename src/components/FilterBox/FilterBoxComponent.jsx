import React, { useState } from "react";
import * as S from "./styles";
import { useCategory } from "hooks/useCategory";
import { RoundCategory } from "components/RoundCategory";
import { useAlert } from "hooks/useAlert";

const FilterBoxComponent = () => {
  const { category } = useCategory();
  const [selectedCategory, setCategory] = useState([]);
  const [showList, setShowList] = useState(false);
  const { changeMessage, toggleAlertMessage } = useAlert();

  const toggleFilterList = () => setShowList(!showList);

  const addSelected = (cate) => {
    if (selectedCategory.length === 3) {
      changeMessage("필터는 최대 3개까지 추가할 수 있습니다");
      toggleAlertMessage();
      return;
    }

    if (selectedCategory.includes(cate)) {
      return;
    }
    setCategory([...selectedCategory, cate]);
  };

  const removeSelected = (cate) => {
    setCategory(selectedCategory.filter(({ id }) => cate.id !== id));
  };

  const renderCategory = () => {
    return category.map((cate) => (
      <RoundCategory
        key={cate.id}
        {...cate}
        onClickHandler={() => addSelected(cate)}
      />
    ));
  };

  const renderSelected = () => {
    return selectedCategory.map((cate) => (
      <RoundCategory
        key={cate.id}
        {...cate}
        nameEng={cate.nameEng + "\tX"}
        onClickHandler={() => removeSelected(cate)}
      />
    ));
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Filter />
        {selectedCategory.length === 0 ? (
          <S.Text>스터디 필터를 추가해보세요</S.Text>
        ) : (
          renderSelected()
        )}

        <S.Add onClick={toggleFilterList} />
      </S.Container>
      <S.FilterList showList={showList}>{renderCategory()}</S.FilterList>
    </S.Wrapper>
  );
};

export default FilterBoxComponent;
