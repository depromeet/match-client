import React, { useState } from "react";
import * as S from "./styles";
import ReactMapGL from "react-map-gl";
import { MainInput } from "../MainInput";
import { Marker } from "../Marker";
import { useMap } from "hooks/useMap";
import { useStudy } from "hooks/useStudy";
import { CheckBox } from "components/CheckBox";
import { FilterBox } from "components/FilterBox";

const TOKEN =
  "pk.eyJ1IjoibmFhbW9vbm9vIiwiYSI6ImNrZDc3cDd3cTJud2wyeW15ajdnbnpxancifQ.Cfz9n6pSdx77lOZ0kU3nJQ";
// mapStyle="mapbox://styles/mapbox/dark-v10"

const MapComponent = () => {
  const { viewport, setViewport } = useMap();
  const [checked, setChecked] = useState(false);
  const { study, getStudy } = useStudy();

  const renderMarker = () => {
    return study.map((studyInfo) => (
      <Marker {...studyInfo} key={studyInfo.id} />
    ));
  };

  const onMoveMapHandler = (viewportProps) => {
    setViewport(viewportProps);
    if (checked) {
      const {
        lngLat: [longitude, latitude],
      } = viewportProps;
      getStudy({ latitude, longitude });
    }
  };

  return (
    <S.Container>
      <ReactMapGL
        onMouseUp={onMoveMapHandler}
        mapboxApiAccessToken={TOKEN}
        {...viewport}
        onViewportChange={setViewport}
        style={{ position: "relative" }}
      >
        {renderMarker()}
      </ReactMapGL>
      <CheckBox checked={checked} setChecked={setChecked} />
      <MainInput />
      <FilterBox />
      <S.ButtonContainer>
        <S.Button
          onClick={() =>
            setViewport({ ...viewport, zoom: viewport.zoom + 0.5 })
          }
        >
          +
        </S.Button>
        <S.Button
          onClick={() =>
            setViewport({ ...viewport, zoom: viewport.zoom - 0.5 })
          }
        >
          -
        </S.Button>
      </S.ButtonContainer>
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
