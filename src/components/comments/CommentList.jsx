/** @format */

import { Stack } from "@mui/material";
import Comments from "./Comments";
import Comment from "./Comment";
import AddCommentForm from "../forms/AddCommentForm";

const CommentList = () => {
	return (
		<Stack spacing={2}>
			<AddCommentForm />
			<Stack spacing={2}>
				{Comments.map((comment, id) => (
					<Stack key={id}>
						<Comment comment={comment} />
					</Stack>
				))}
			</Stack>
		</Stack>
	);
};
export default CommentList;
