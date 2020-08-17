import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategory } from "modules/category";
import API from "../api";

export const useCategory = (init = false) => {
	const dispatch = useDispatch();
	const category = useSelector((state) => state.category);

	useEffect(() => {
		init && getCategory({});
	}, [init]);

	const getCategory = async () => {
		// const { response } = await API.getCategory({
		// 	latitude,
		// 	longitude,
		// 	offset: 0,
		// 	limit: 20,
		// });
		// dispatch(fetchCategory(response));
	};

	return {
		category,
		getCategory,
	};
};
