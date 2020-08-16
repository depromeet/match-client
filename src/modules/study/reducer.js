import { createReducer } from "typesafe-actions";
import { FETCH_STUDY } from "./actions";

const participants = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRh1FTNHzTdC7scs2jzPxmJN3MJ53sLJEhP6teRgTWUdielrfWStqGkiHo30sgC265noEprqtk50wr7NzePqAAHCQ&usqp=CAU&ec=45690271",
  "https://spnimage.edaily.co.kr/images/Photo/files/NP/P/2009/03/PP09030300006.JPG",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS60Jmo8r4GCdgL3qfufRTrHGb_5ePanVyKK2ptlNWodyj-xKOGGIA1Io4hlhvO1A_HH3OGxgLeMQ0OOuZg7gdviw&usqp=CAU&ec=45690271",
];

const initialState = [
  {
    id: 1,
    latitude: 37.5236,
    longitude: 127.023612,
    title: "노션으로 일잘러되기",
    schedule: "8월 22일부터 · 매주 토요일 · 오후 2:00",
    participants,
  },
  {
    id: 2,
    latitude: 37.5628,
    longitude: 127.036614,
    title: "리액트 공부하기",
    schedule: "8월 22일부터 · 매주 토요일 · 오후 2:00",
    participants,
  },
  {
    id: 3,
    latitude: 37.5144,
    longitude: 126.80461,
    title: "갓자이너님들 짱짱맨",
    schedule: "8월 22일부터 · 매주 토요일 · 오후 2:00",
    participants,
  },
  {
    id: 4,
    latitude: 37.741,
    longitude: 127.203611,
    title: "동길형님 존잘임",
    schedule: "8월 22일부터 · 매주 토요일 · 오후 2:00",
    participants,
  },
  {
    id: 5,
    latitude: 37.5952,
    longitude: 126.907613,
    title: "배고플땐 라면이 최고",
    schedule: "8월 22일부터 · 매주 토요일 · 오후 2:00",
    participants,
  },
  {
    id: 6,
    latitude: 37.5036,
    longitude: 127.023612,
    title: "이름 짓기 귀찮다",
    schedule: "8월 22일부터 · 매주 토요일 · 오후 2:00",
    participants,
  },
  {
    id: 7,
    latitude: 37.5628,
    longitude: 127.156614,
    title: "잠을 자고싶은뎅",
    schedule: "8월 22일부터 · 매주 토요일 · 오후 2:00",
    participants,
  },
  {
    id: 8,
    latitude: 37.5344,
    longitude: 126.79461,
    title: "현우랑 배우는 술게임",
    schedule: "8월 22일부터 · 매주 토요일 · 오후 2:00",
    participants,
  },
  {
    id: 9,
    latitude: 37.641,
    longitude: 127.293611,
    title: "나현님 뒷일을 부탁드립니다...",
    schedule: "8월 22일부터 · 매주 토요일 · 오후 2:00",
    participants,
  },
  {
    id: 10,
    latitude: 37.5752,
    longitude: 126.857613,
    title: "마라탕 먹고싶다...",
    schedule: "8월 22일부터 · 매주 토요일 · 오후 2:00",
    participants,
  },
];

const study = createReducer(initialState, {
  [FETCH_STUDY]: (state, { payload }) => payload,
});

export default study;
