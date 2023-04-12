/** @format */

import { Stack, Typography } from "@mui/material";
import { CourseInfoLections } from "./CourseInfoLections";
import CourseInfoLection from "./CourseInfoLection";
import { useState } from "react";

const CourseInfoLectionList = () => {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Stack spacing={3} sx={{ py: 4, px: 8 }}>
			<Typography variant="h5">Лекції</Typography>
			{CourseInfoLections.map((lection, id) => (
				<CourseInfoLection
					lection={lection}
					key={id}
					open={open}
					onClose={handleClose}
				/>
			))}
		</Stack>
	);
};

export default CourseInfoLectionList;
