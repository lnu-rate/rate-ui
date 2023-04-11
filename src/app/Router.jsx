/** @format */

import { Route, Routes } from "react-router-dom";
import { DEFAULT_ROUTE, FULL_WIDTH_ROUTE } from "./Routes";
import DefaultLayout from "../layouts/DefaultLayout";
import FullWidthLayout from "../layouts/FullWidthLayout";

const Router = () => {
	// prettier-ignore

	return (
		<Routes>
			<Route path={DEFAULT_ROUTE} element={<DefaultLayout/>}></Route>
			<Route path={FULL_WIDTH_ROUTE} element={<FullWidthLayout />}></Route>
		</Routes>
	);
};

export default Router;
