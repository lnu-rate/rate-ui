/** @format */

import { Stack } from "@mui/material";
import Comments from "./Comments";
import Comment from "./Comment";
import AddCommentForm from "../forms/AddCommentForm";
import avatar from "../../assets/images/user/avatar.png";
import { useState } from "react";

const CommentList = () => {
	const [comments, setComments] = useState(Comments);

	const addComment = (comment) => {
		setComments([
			...comments,
			{
				...comment,
				owner: {
					id: 1,
					name: "Софія Тимечко",
					username: "sofiiatymechko",
					src: avatar,
				},
			},
		]);
		// setComment((comment) => ({
		// 	...comment,
		// 	owner: {
		// 		id: 1,
		// 		name: "Софія Тимечко",
		// 		username: "sofiiatymechko",
		// 		src: avatar,
		// 	},
		// }));
	};

	return (
		<Stack spacing={2}>
			<AddCommentForm onAdd={addComment} />
			<Stack spacing={2}>
				{comments.map((comment, id) => (
					<Stack key={id}>
						<Comment comment={comment} />
					</Stack>
				))}
			</Stack>
		</Stack>
	);
};
export default CommentList;
