/** @format */

import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";

const User = ({ user }) => {
	return (
		<Box
			sx={{
				width: "fit-content",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				cursor: "pointer",
			}}>
			<Avatar
				alt={user.name}
				variant="circular"
				src={user.src}
				sx={{
					width: 22,
					height: 22,
					mr: 1,
				}}
			/>
			<Typography
				variant="body1"
				sx={{ color: (theme) => theme.palette.primary.main }}>
				{user.username}
			</Typography>
		</Box>
	);
};

export default User;
