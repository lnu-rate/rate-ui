/** @format */

import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { COURSES_ROUTE } from "../../app/Routes";

const Course = ({ course }) => {
	return (
		<Link
			component={RouterLink}
			to={`${COURSES_ROUTE}/${course.id}`}
			sx={{
				width: "fit-content",
				color: "primary.dark",
				"&:hover": {
					color: "primary.main",
				},
			}}>
			<Typography variant="h6">{course.name}</Typography>
		</Link>
	);
};

export default Course;
