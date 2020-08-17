import React from "react";
import * as S from "./styles";
import { BoxCategory } from "components/BoxCategory";
import { useCategory } from "hooks/useCategory";

const CategoryListComponent = () => {
	const { category } = useCategory();
	const renderCategory = () => {
		// const category = [
		// 	{ title: "UIX", category: "디자인", count: 30, color: "#16DAF4" },
		// 	{ title: "GUI", category: "디자인", count: 30, color: "#16DAF4" },
		// 	{ title: "BX", category: "브랜딩", count: 30, color: "#16DAF4" },
		// 	{ title: "Ma", category: "마케팅", count: 30, color: "#C6E0FF" },
		// 	{ title: "Bu", category: "비지니스", count: 30, color: "#C6E0FF" },
		// 	{ title: "Wr", category: "라이팅", count: 30, color: "#C6E0FF" },
		// 	{ title: "Ba", category: "백엔드", count: 30, color: "#0DFFC5" },
		// 	{ title: "Fr", category: "프론트", count: 30, color: "#0DFFC5" },
		// ];

		return category.map((cate, idx) => (
			<BoxCategory {...cate} key={`cate-${idx}`} />
		));
	};

	return (
		<>
			<S.HorizontalBlur />
			<S.Container>{renderCategory()}</S.Container>
		</>
	);
};

export default CategoryListComponent;
