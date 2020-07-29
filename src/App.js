import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

	mapboxgl.accessToken =
		"pk.eyJ1IjoibmFhbW9vbm9vIiwiYSI6ImNrZDc3cDd3cTJud2wyeW15ajdnbnpxancifQ.Cfz9n6pSdx77lOZ0kU3nJQ";
	var map = new mapboxgl.Map({
		container: "map",
		style: "mapbox://styles/mapbox/dark-v10",
		center: [12.550343, 55.665957],
		zoom: 8,
	});

	var marker = new mapboxgl.Marker()
		.setLngLat([12.550343, 55.665957])
		.addTo(map);

	return <div className="App"></div>;
}

export default App;
