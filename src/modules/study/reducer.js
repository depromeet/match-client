import { createReducer } from "typesafe-actions";
import { FETCH_STUDY } from "./actions";

export const participants = [
  "https://img9.yna.co.kr/etc/inner/KR/2019/10/16/AKR20191016129400005_01_i_P2.jpg",
  "https://post-phinf.pstatic.net/MjAxODA1MTNfMTYy/MDAxNTI2MTkzNzE3MjYx.Vfzp7S5VSQh_p-3BZN-TDZWEMaVCtDvfgH8EGgwt11cg.eYzC2hfL5D7kvkE2lABH49aJiU8WQ4fJzzkws9Eyjj0g.JPEG/201711141026035840_d.jpg?type=w1200",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Nn1c58r836MbgTFFJgnM19Nqa_u0-bdvkw&usqp=CAU",
];

const initialState = [
  {
    id: 1,
    spot: { latitude: 37.5236, longitude: 127.023612 },
    studyName: "노션으로 일잘러되기",
    duration: { start: "8월 22일부터 · ", end: "매주 토요일 · 오후 2:00" },
    participants,
  },
  {
    id: 2,
    spot: { latitude: 37.5628, longitude: 127.036614 },
    studyName: "React 코어 클론",
    duration: { start: "8월 26일부터 · ", end: "격주 수요일 · 오후 10:00" },
    participants,
  },
  {
    id: 3,
    spot: { latitude: 37.5144, longitude: 126.80461 },
    studyName: "피그마 한 달만에 정복하기",
    duration: { start: "8월 24일부터 · ", end: "격주 월요일 · 오후 8:30" },
    participants,
  },
  {
    id: 4,
    spot: { latitude: 37.741, longitude: 127.203611 },
    studyName: "Clean Architecture",
    duration: { start: "8월 22일부터 · ", end: "매주 토요일 · 오전 10:30" },
    participants,
  },
  {
    id: 5,
    spot: { latitude: 37.5952, longitude: 126.907613 },
    studyName: "서비스 플로우 분석해보기",
    duration: { start: "8월 26일부터 · ", end: "격주 수요일 · 오후 10:00" },
    participants,
  },
  {
    id: 6,
    spot: { latitude: 37.5036, longitude: 127.023612 },
    studyName: "배포 및 컨테이너 기술 배워요",
    duration: { start: "8월 22일부터 · ", end: "매주 토요일 · 오전 10:30" },
    participants,
  },
  {
    id: 7,
    spot: { latitude: 37.5628, longitude: 127.156614 },
    studyName: "직장인 실전 마케팅",
    duration: { start: "8월 24일부터 · ", end: "격주 월요일 · 오후 8:30" },
    participants,
  },
  {
    id: 8,
    spot: { latitude: 37.5344, longitude: 126.79461 },
    studyName: "스케치 클라우드 활용법",
    duration: { start: "8월 26일부터 · ", end: "격주 수요일 · 오후 10:00" },
    participants,
  },
  {
    id: 9,
    spot: { latitude: 37.641, longitude: 127.293611 },
    studyName: "코틀린을 다루는 기술",
    duration: { start: "8월 26일부터 · ", end: "격주 수요일 · 오후 10:00" },
    participants,
  },
  {
    id: 10,
    spot: { latitude: 37.5752, longitude: 126.857613 },
    studyName: "프로토파이 완전 정복",
    duration: { start: "8월 22일부터 · ", end: "매주 토요일 · 오후 2:00" },
    participants,
  },
];

const study = createReducer(initialState, {
  [FETCH_STUDY]: (state, { payload }) => payload,
});

export default study;
