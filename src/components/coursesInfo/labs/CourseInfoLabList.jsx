/** @format */

import { Stack, Typography } from "@mui/material";
import { CoursesInfoLabs } from "./CoursesInfoLabs";
import CourseInfoLab from "./CourseInfoLab";

const CourseInfoLabList = () => {
	return (
		<Stack>
			<Stack
				spacing={3}
				sx={{
					p: 8,
				}}>
				<Typography variant="h5">Лабораторні</Typography>
				{CoursesInfoLabs.map((lab, id) => (
					<CourseInfoLab lab={lab} key={id} />
				))}
			</Stack>
		</Stack>
	);
};

export default CourseInfoLabList;
