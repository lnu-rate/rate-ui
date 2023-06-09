/** @format */

import { Stack } from "@mui/material";

const StyledStack = ({ children, sx }) => {
	return (
		<Stack
			sx={{
				height: { xs: "100%", sm: "80%" },
				border: "1px solid rgba(0,0,0,.125)",
				m: { xs: 0, sm: 4 },
				backgroundColor: (theme) => theme.palette.common.white,
				...sx,
			}}>
			{children}
		</Stack>
	);
};

export default StyledStack;
