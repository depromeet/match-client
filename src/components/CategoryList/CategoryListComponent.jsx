import React from "react";
import * as S from "./styles";
import { BoxCategory } from "components/BoxCategory";
import { useCategory } from "hooks/useCategory";

const CategoryListComponent = () => {
  const { category } = useCategory();
  const renderCategory = () => {
    return category.map((cate, idx) => (
      <BoxCategory {...cate} key={`cate-${idx}`} />
    ));
  };

  return (
    <>
      <S.Title>EXPLORE</S.Title>

      <S.HorizontalBlur />
      <S.Container>{renderCategory()}</S.Container>
    </>
  );
};

export default CategoryListComponent;
