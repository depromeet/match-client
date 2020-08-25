import { createReducer } from "typesafe-actions";
import { FETCH_CATEGORY } from "./actions";

const colorMapper = {
  DESIGN: "#16DAF4",
  BUSINESS: "#C6E0FF",
  DEVELOP: "#0DFFC5",
};

const initialState = [
  {
    id: 1,
    abbr: "UIX",
    nameEng: "UI/UX",
    nameKr: "디자인",
    category: "DESIGN",
    counts: 30,
  },
  {
    id: 2,
    abbr: "GUI",
    nameEng: "GUI",
    nameKr: "디자인",
    category: "DESIGN",
    counts: 126,
  },
  {
    id: 3,
    abbr: "BX",
    nameEng: "BX",
    nameKr: "브랜딩",
    category: "DESIGN",
    counts: 25,
  },
  {
    id: 4,
    abbr: "Ma",
    nameEng: "MARKETING",
    nameKr: "마케팅",
    category: "BUSINESS",
    counts: 29,
  },
  {
    id: 5,
    abbr: "Bu",
    nameEng: "BUSINESS",
    nameKr: "비즈니스",
    category: "BUSINESS",
    counts: 30,
  },
  {
    id: 6,
    abbr: "Wr",
    nameEng: "WRITING",
    nameKr: "라이팅",
    category: "BUSINESS",
    counts: 29,
  },
  {
    id: 7,
    abbr: "Ba",
    nameEng: "BACK END",
    nameKr: "백엔드",
    category: "DEVELOP",
    counts: 30,
  },
  {
    id: 8,
    abbr: "Fr",
    nameEng: "FRONT END",
    nameKr: "프론트",
    category: "DEVELOP",
    counts: 30,
  },
];

const category = createReducer(
  initialState.map((cate) => ({
    ...cate,
    color: colorMapper[cate.category],
  })),
  {
    [FETCH_CATEGORY]: (state, { payload }) => payload,
  }
);

export default category;
