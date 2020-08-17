import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchStudy } from "modules/study";
import API from "../api";

export const useStudy = (init = false) => {
	const dispatch = useDispatch();
	const study = useSelector((state) => state.study);

	useEffect(() => {
		init && getStudy({});
	}, [init]);

	const getStudy = async ({
		latitude = 37.5555764,
		longitude = 127.0078127,
	}) => {
		const { response } = await API.getStudy({
			latitude,
			longitude,
			offset: 0,
			limit: 20,
		});
		dispatch(fetchStudy(response));
	};

	return {
		study,
		getStudy,
	};
};
