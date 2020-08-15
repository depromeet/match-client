import { useSelector, useDispatch } from "react-redux";
import { FlyToInterpolator } from "react-map-gl";
import { easeCubic } from "d3-ease";
import { moveMap } from "../modules/map";

export const useMap = () => {
	const dispatch = useDispatch();
	const viewport = useSelector((state) => state.map);

	const setViewport = (viewportProps) => dispatch(moveMap(viewportProps));

	const onMove = (partialViewportProps) =>
		setViewport({
			zoom: 14,
			...partialViewportProps,
			transitionDuration: 5000,
			transitionInterpolator: new FlyToInterpolator(),
			transitionEasing: easeCubic,
		});

	return {
		viewport,
		onMove,
		setViewport,
	};
};
