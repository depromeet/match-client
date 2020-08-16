import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchStudy } from "modules/study";

export const useStudy = (init = false) => {
	const dispatch = useDispatch();
	const study = useSelector((state) => state.study);

	useEffect(() => {
		init && getStudy();
	}, [init]);

	const getStudy = () => dispatch(fetchStudy);

	return {
		study,
		getStudy,
	};
};
