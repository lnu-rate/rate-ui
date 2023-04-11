/** @format */

import { Stack, Typography } from "@mui/material";
import User from "../../users/User";

const Comment = ({ comment }) => {
	return (
		<Stack spacing={1} sx={{ overflowWrap: "break-word" }}>
			<User user={comment.owner} />
			<Typography>{comment.text}</Typography>
		</Stack>
	);
};
export default Comment;
