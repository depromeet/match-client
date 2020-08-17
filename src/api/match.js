import Axios from "axios";

const url = "http://15.165.191.68:8080";
const apiConfig = "/api";
const baseURL = `${url}${apiConfig}`;

export const match = Axios.create({
	baseURL: baseURL,
	headers: { "Content-Type": "application/json" },
});
