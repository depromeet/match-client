import { createReducer } from "typesafe-actions";
import { FETCH_ATTENDENT } from "./actions";

const initialState = [
  {
    id: 1,
    profileImg:
      "https://img9.yna.co.kr/etc/inner/KR/2019/10/16/AKR20191016129400005_01_i_P2.jpg",
    username: "  Yumi Jung",
  },
  {
    id: 2,
    profileImg:
      "https://post-phinf.pstatic.net/MjAxODA1MTNfMTYy/MDAxNTI2MTkzNzE3MjYx.Vfzp7S5VSQh_p-3BZN-TDZWEMaVCtDvfgH8EGgwt11cg.eYzC2hfL5D7kvkE2lABH49aJiU8WQ4fJzzkws9Eyjj0g.JPEG/201711141026035840_d.jpg?type=w1200",
    username: "Seojun Park",
  },
  {
    id: 3,
    profileImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Nn1c58r836MbgTFFJgnM19Nqa_u0-bdvkw&usqp=CAU",
    username: "Woosik Choi",
  },
  {
    id: 4,
    profileImg: "https://t1.daumcdn.net/cfile/tistory/99B8E93B5A38CB9C30",
    username: "Taeri Kim",
  },
  {
    id: 5,
    profileImg:
      "https://image.chosun.com/sitedata/image/202005/08/2020050803651_1.jpg",
    username: "Boyeong p",
  },
];

const attendent = createReducer(initialState, {
  [FETCH_ATTENDENT]: (state, { payload }) => payload,
});

export default attendent;
