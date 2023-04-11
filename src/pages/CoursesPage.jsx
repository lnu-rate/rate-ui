/** @format */

import { Stack, Typography } from "@mui/material";
import StyledStack from "../components/styled/StyledStack";
import CoursesList from "../components/courses/CoursesList";

const CoursesPage = () => {
	return (
		<>
			<StyledStack>
				<Stack
					spacing={3}
					sx={{
						py: 4,
						px: 8,
						borderBottom: "1px solid rgba(0,0,0,.125)",
					}}>
					<Typography variant="h4">Мої курси</Typography>
				</Stack>
				<CoursesList />
			</StyledStack>
		</>
	);
};

export default CoursesPage;
