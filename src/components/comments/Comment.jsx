/** @format */

import { Stack, Typography } from "@mui/material";

const Comment = ({ comment }) => {
	return (
		<Stack spacing={1} sx={{ overflowWrap: "break-word" }}>
			<Typography>{comment.text}</Typography>
		</Stack>
	);
};
export default Comment;
