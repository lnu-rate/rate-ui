/** @format */

import { Box, Typography } from "@mui/material";

const CourseInfoLab = ({ lab }) => {
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
					{lab.name}
				</Typography>
			</Box>
		</>
	);
};

export default CourseInfoLab;
