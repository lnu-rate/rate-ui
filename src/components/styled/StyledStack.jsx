/** @format */

import { Stack } from "@mui/material";

const StyledStack = ({ children }) => {
	return (
		<Stack
			sx={{
				height: { xs: "100%", md: "80%" },
				border: "1px solid rgba(0,0,0,.125)",
				m: { xs: 0, md: 4 },
				backgroundColor: (theme) => theme.palette.common.white,
			}}>
			{children}
		</Stack>
	);
};

export default StyledStack;
