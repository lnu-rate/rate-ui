/** @format */

import { Navigate, Route, Routes } from "react-router-dom";
import {
	COURSES_ROUTE,
	COURSE_INFO_ROUTE,
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
import CourseInfoRoute from "../routes/CourseInfoRoute";

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
					element={<Navigate to={COURSE_INFO_ROUTE} replace />}
				/>
				<Route path={COURSE_INFO_ROUTE} element={<CourseInfoRoute />} />
			</Route>
		</Routes>
	);
};

export default Router;
