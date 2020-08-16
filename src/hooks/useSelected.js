import { useSelector, useDispatch } from "react-redux";
import { selectStudy } from "../modules/selected";

export const useSelected = () => {
	const dispatch = useDispatch();
	const selectedStudy = useSelector((state) => state.selected);

	const isSelected = (study) =>
		selectedStudy ? selectedStudy.id === study.id : false;

	const onSelect = (newStudy) => {
		if (!selectedStudy) {
			return dispatch(selectStudy(newStudy));
		}

		const selected = selectedStudy.id === newStudy.id ? null : newStudy;

		dispatch(selectStudy(selected));
	};

	return {
		selectedStudy,
		onSelect,
		isSelected,
	};
};
