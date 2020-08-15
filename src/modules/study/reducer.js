import { createReducer } from "typesafe-actions";
import { FETCH_STUDY } from "./actions";

const initialState = [
	{
		id: 1,
		latitude: 37.5236,
		longitude: 127.023612,
		title: "노션으로 일잘러되기",
	},
	{
		id: 2,
		latitude: 37.5628,
		longitude: 127.036614,
		title: "리액트 공부하기",
	},
	{
		id: 3,
		latitude: 37.5144,
		longitude: 126.80461,
		title: "갓자이너님들 짱짱맨",
	},
	{
		id: 4,
		latitude: 37.741,
		longitude: 127.203611,
		title: "동길형님 존잘임",
	},
	{
		id: 5,
		latitude: 37.5952,
		longitude: 126.907613,
		title: "배고플땐 라면이 최고",
	},
];

const study = createReducer(initialState, {
	[FETCH_STUDY]: (state, { payload }) => payload,
});

export default study;
