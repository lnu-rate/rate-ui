/** @format */

import { Stack, Typography } from "@mui/material";
import { CourseInfoLections } from "./CourseInfoLections";
import CourseInfoLection from "./CourseInfoLection";

const CourseInfoLectionList = () => {
	return (
		<Stack>
			<Stack
				spacing={3}
				sx={{
					p: 8,
				}}>
				<Typography variant="h5">Лекції</Typography>
				{CourseInfoLections.map((lection, id) => (
					<CourseInfoLection lection={lection} key={id} />
				))}
			</Stack>
		</Stack>
	);
};

export default CourseInfoLectionList;
