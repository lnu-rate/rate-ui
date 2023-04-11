/** @format */

import { Link as RouterLink } from "react-router-dom";
import KeyboardReturnRoundedIcon from "@mui/icons-material/KeyboardReturnRounded";
import { Button, Stack, Typography } from "@mui/material";
import { DEFAULT_ROUTE } from "../app/Routes";

const NotFoundPage = () => {
	return (
		<Stack spacing={2} alignItems="center" textAlign="center">
			<Typography variant="h4">Oops, page not found</Typography>
			<Button
				component={RouterLink}
				to={DEFAULT_ROUTE}
				variant="contained"
				endIcon={<KeyboardReturnRoundedIcon />}>
				Return to home page
			</Button>
		</Stack>
	);
};

export default NotFoundPage;
