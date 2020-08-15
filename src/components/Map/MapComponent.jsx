import React from "react";
import * as S from "./styles";
import ReactMapGL from "react-map-gl";
import { MainInput } from "../MainInput";
import { Marker } from "../Marker";
import { useMap } from "hooks/useMap";

const TOKEN =
	"pk.eyJ1IjoibmFhbW9vbm9vIiwiYSI6ImNrZDc3cDd3cTJud2wyeW15ajdnbnpxancifQ.Cfz9n6pSdx77lOZ0kU3nJQ";
// mapStyle="mapbox://styles/mapbox/dark-v10"

const MapComponent = () => {
	const { viewport, setViewport } = useMap();

	const renderMarker = () => {
		return (
			<Marker
				latitude={37.5326}
				longitude={127.024612}
				title={"노션으로 일잘러되기"}
			/>
		);
	};

	return (
		<S.Container>
			<ReactMapGL
				mapboxApiAccessToken={TOKEN}
				{...viewport}
				onViewportChange={setViewport}
				style={{ position: "relative" }}
			>
				{renderMarker()}
			</ReactMapGL>
			<MainInput />
		</S.Container>
	);
};

export default MapComponent;

//const home = [37.516085, 126.896757].reverse();
// const seoul = [127.024612, 37.5326];
// var marker = new mapboxgl.Marker()
// 	.setLngLat([128.524612, 37.5326])
// 	.addTo(map);

// //https://docs.mapbox.com/mapbox-gl-js/example/fitbounds/
// const search = (location: [number, number]) =>
// 	// map.flyTo({
// 	// 	center: [128.524612, 37.5326],
// 	// 	zoom: 10,
// 	// 	speed: 0.5,
// 	// 	curve: 1,
// 	// 	easing(t) {
// 	// 		return t;
// 	// 	},
// 	// });
// 	map.fitBounds([
// 		location.map((x) => (x -= 0.005)),
// 		location.map((x) => (x += 0.005)),
// 		{ easing: true, zoom: 10 },
// 	]);

// //marker
// const addMarker = () => {
// 	var el = document.createElement("div");
// 	el.className = "marker";
// 	el.style.backgroundImage = "url(https://placekitten.com/g/100/100/)";
// 	el.style.width = "100px";
// 	el.style.height = "100px";
// 	el.style.borderRadius = "20px";

// 	// add marker to map
// 	new mapboxgl.Marker(el).setLngLat(seoul).addTo(map);

// 	const marker = new mapboxgl.Marker(el)
// 		.setLngLat(home)
// 		.setPopup(
// 			new mapboxgl.Popup().setHTML(
// 				"<h1>왼쪽 사이드바에 내용이 추가될거유</h1>"
// 			)
// 		)
// 		.addTo(map);
// 	el.addEventListener("click", function () {
// 		marker.togglePopup();
// 	});
// };

// addMarker();
