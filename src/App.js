import React from "react";
// import logo from "./logo.svg";
import { SideBar } from "./SideBar";
import "./App.css";

function App() {
	const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
	mapboxgl.accessToken =
		"pk.eyJ1IjoibmFhbW9vbm9vIiwiYSI6ImNrZDc3cDd3cTJud2wyeW15ajdnbnpxancifQ.Cfz9n6pSdx77lOZ0kU3nJQ";
	var map = new mapboxgl.Map({
		container: "map",
		style: "mapbox://styles/mapbox/dark-v10",
		center: [127.024612, 37.5326],
		zoom: 8,
	});

	var marker = new mapboxgl.Marker()
		.setLngLat([128.524612, 37.5326])
		.addTo(map);
	return (
		<div className="App">
			<SideBar />
			<SideBar width="300px" />
			<input />
		</div>
	);
}

export default App;
