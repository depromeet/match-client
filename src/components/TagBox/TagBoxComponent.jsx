import React, { useState } from "react";
import * as S from "./styles";
import { useCategory } from "hooks/useCategory";
import { RoundCategory } from "components/RoundCategory";

const TagBoxComponent = () => {
  const { category } = useCategory();
  const [selectedCategory, setCategory] = useState([]);
  const [showList, setShowList] = useState(false);
  const toggleFilterList = () => setShowList(!showList);
  const addSelected = (cate) => {
    if (selectedCategory.length === 3) {
      return alert("필터는 최대 3개까지 추가할 수 있습니다");
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
        {selectedCategory.length === 0 ? (
          <S.Text>필터 추가</S.Text>
        ) : (
          renderSelected()
        )}
        <S.Add onClick={toggleFilterList} />
      </S.Container>
      ;<S.FilterList showList={showList}>{renderCategory()}</S.FilterList>
    </S.Wrapper>
  );
};

export default TagBoxComponent;
