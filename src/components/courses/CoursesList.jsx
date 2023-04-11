/** @format */

import { Stack } from "@mui/material";
import Course from "./Course";
import { Courses } from "./Courses";

const CoursesList = () => {
	return (
		<Stack
			spacing={3}
			sx={{
				p: 8,
				display: "flex",
				flexDirection: "column",
			}}>
			{Courses.map((course, id) => (
				<Course course={course} key={id} />
			))}
		</Stack>
	);
};

export default CoursesList;
