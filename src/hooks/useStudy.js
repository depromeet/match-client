import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchStudy } from "modules/study";
import API from "../api";

export const useStudy = (init = false) => {
	const dispatch = useDispatch();
	const study = useSelector((state) => state.study);

	useEffect(() => {
		init && getStudy();
	}, [init]);

	// {
	// 	latitude = 37.5555764,
	// 	longitude = 127.0078127,
	// 	offset = 0,
	// 	limit = 20,
	// }
	const getStudy = async () => {
		const { response } = await API.getStudy({
			latitude: 37.5555764,
			longitude: 127.0078127,
			offset: 0,
			limit: 20,
		});
		console.log(response);
		dispatch(fetchStudy(response));
	};

	return {
		study,
		getStudy,
	};
};
