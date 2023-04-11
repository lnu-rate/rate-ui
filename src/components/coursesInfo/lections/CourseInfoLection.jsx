/** @format */

import { Box, Typography } from "@mui/material";

const CourseInfoLection = ({ lection }) => {
	return (
		<>
			<Box>
				<Typography
					sx={{
						cursor: "pointer",
						color: "primary.dark",
						"&:hover": {
							color: "primary.main",
						},
					}}
					variant="p">
					{lection.name}
				</Typography>
			</Box>
		</>
	);
};

export default CourseInfoLection;
