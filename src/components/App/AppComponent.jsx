import React from "react";
import * as S from "./styles";
import { Map } from "../Map";
import { Sidebar } from "../Sidebar";
import { MainInput } from "../MainInput";


const AppComponent= () => {
	return (
		<S.Container>
			<Sidebar />
			<Map />
			<MainInput />
		</S.Container>
	);
};

export default AppComponent;
