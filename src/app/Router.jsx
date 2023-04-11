/** @format */

import { Navigate, Route, Routes } from "react-router-dom";
import {
	COURSES_ROUTE,
	DEFAULT_ROUTE,
	FULL_WIDTH_ROUTE,
	LOGIN_ROUTE,
	PAGE_NOT_FOUND_ROUTE,
} from "./Routes";
import DefaultLayout from "../layouts/DefaultLayout";
import FullWidthLayout from "../layouts/FullWidthLayout";
import NotFoundRoute from "../routes/NotFoundRoute";
import LoginRoute from "../routes/LoginRoute";
import CoursesRoute from "../routes/CoursesRoute";

const Router = () => {
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
				<Route path={LOGIN_ROUTE} element={<LoginRoute />} />
			</Route>
			<Route path={FULL_WIDTH_ROUTE} element={<FullWidthLayout />}>
				<Route path={COURSES_ROUTE} element={<CoursesRoute />} />
				<Route
					index
					element={<Navigate to={COURSES_ROUTE} replace />}
				/>
			</Route>
		</Routes>
	);
};

export default Router;
