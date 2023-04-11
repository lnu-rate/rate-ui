/** @format */

import { Navigate, Route, Routes } from "react-router-dom";
import {
	DEFAULT_ROUTE,
	FULL_WIDTH_ROUTE,
	PAGE_NOT_FOUND_ROUTE,
} from "./Routes";
import DefaultLayout from "../layouts/DefaultLayout";
import FullWidthLayout from "../layouts/FullWidthLayout";
import NotFoundRoute from "../routes/NotFoundRoute";

const Router = () => {
	// prettier-ignore

	return (
		<Routes>
			<Route path={DEFAULT_ROUTE} element={<DefaultLayout />}>
				<Route
					path={PAGE_NOT_FOUND_ROUTE}
					element={<NotFoundRoute />}
				/>
				<Route
					path="*"
					element={<Navigate to={PAGE_NOT_FOUND_ROUTE} replace />}
				/>
			</Route>
			<Route
				path={FULL_WIDTH_ROUTE}
				element={<FullWidthLayout />}></Route>
		</Routes>
	);
};

export default Router;
