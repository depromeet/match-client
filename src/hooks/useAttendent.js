import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAttendent } from "modules/attendent";
import API from "../api";

export const useAttendent = (init = false) => {
  const dispatch = useDispatch();
  const attendent = useSelector((state) => state.attendent);

  useEffect(() => {
    init && getAttendent({});
  }, [init]);

  const getAttendent = async () => {
    // const { response } = await API.getCategory({
    // 	latitude,
    // 	longitude,
    // 	offset: 0,
    // 	limit: 20,
    // });
    // dispatch(fetchCategory(response));
  };

  return {
    attendent,
    getAttendent,
  };
};
