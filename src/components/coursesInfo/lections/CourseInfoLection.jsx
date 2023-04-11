/** @format */

import { Box, Typography } from "@mui/material";
import { useState } from "react";

const CourseInfoLection = ({ lection }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const onDialogClick = () => {
		setIsDialogOpen(true);
	};

	const onDialogClose = () => {
		setIsDialogOpen(false);
	};

	return (
		<>
			<Box onClick={onDialogClick}>
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
			{lection.opensDialog &&
				lection.getDialog({
					open: isDialogOpen,
					onClose: onDialogClose,
				})}
		</>
	);
};

export default CourseInfoLection;
