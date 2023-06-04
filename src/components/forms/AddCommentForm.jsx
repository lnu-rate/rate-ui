/** @format */

import { useState } from "react";
import {
	Accordion,
	AccordionSummary,
	Button,
	TextField,
	Typography,
} from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const AddCommentForm = ({ onAdd }) => {
	const [comment, setComment] = useState({ id: Date.now(), text: "" });

	return (
		<Accordion
			elevation={0}
			expanded={true}
			sx={{
				background: "transparent",
			}}>
			<AccordionSummary
				expandIcon={
					<ExpandMoreRoundedIcon
						sx={{
							justifySelf: "flex-start",
							color: (theme) => theme.palette.text.contrastText,
						}}
					/>
				}>
				<Typography
					sx={{
						color: (theme) => theme.palette.text.contrastText,
					}}>
					Comments
				</Typography>
			</AccordionSummary>
			<TextField
				fullWidth
				type="text"
				id="post-comment"
				value={comment.description}
				onChange={(e) =>
					setComment((prevComment) => ({
						...prevComment,
						text: e.target.value,
					}))
				}
				InputProps={{
					sx: {
						color: (theme) => theme.palette.text.contrastText,
					},
				}}
				sx={{
					"& .MuiInputLabel-root": {
						color: (theme) => theme.palette.text.contrastText,
					},
					"& .MuiOutlinedInput-root": {
						"&:hover fieldset": {
							borderColor: (theme) =>
								theme.palette.text.contrastText,
						},
					},
					mb: 2,
				}}></TextField>
			<Button
				sx={{
					height: "30px",
					bgcolor: (theme) => theme.palette.primary.main,
					color: (theme) => theme.palette.text.primary,
					mr: 2,
					justifyContent: "flex-end",
				}}
				onClick={() => onAdd(comment)}>
				done
			</Button>
		</Accordion>
	);
};

export default AddCommentForm;
