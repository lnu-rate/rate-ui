/** @format */

import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const BackButton = ({ sx }) => {
	const navigate = useNavigate();
	const handleClickBack = () => {
		navigate(-1, { replace: true });
	};

	return (
		<Button
			sx={{
				display: "flex",
				alignItems: "center",
				textTransform: "none",
				...sx,
				px: 2,
				mt: 1,
			}}
			onClick={handleClickBack}>
			<ArrowBackIcon color="primary" />
			<Typography variant="h6">Back</Typography>
		</Button>
	);
};

export default BackButton;
