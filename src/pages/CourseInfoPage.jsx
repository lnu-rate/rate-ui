/** @format */

import { Stack, Typography } from "@mui/material";
import StyledStack from "../components/styled/StyledStack";
import CourseInfoLabList from "../components/coursesInfo/labs/CourseInfoLabList";
import CourseInfoLectionList from "../components/coursesInfo/lections/CourseInfoLectionList";

const CourseInfoPage = () => {
	// let { id } = useParams();
	// const COURSE_DATA = getLecturer(id);
	// id = null;

	return (
		<StyledStack>
			<Stack
				spacing={3}
				sx={{
					py: 4,
					px: 8,
					borderBottom: "1px solid rgba(0,0,0,.125)",
				}}>
				<Typography variant="h4">Назва курсу</Typography>
			</Stack>
			<CourseInfoLectionList />
			<CourseInfoLabList />
		</StyledStack>
	);
};

export default CourseInfoPage;
