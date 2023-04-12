/** @format */

// import { useForm } from "react-hook-form";
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

	// const {
	// 	// register,
	// 	// handleSubmit,
	// 	// formState: { errors },
	// } = useForm({ mode: "onBlur" });

	// const [loading, setLoading] = useState(false);

	// const onSubmit = async (data) => {
	// 	setLoading(true);
	// 	try {
	// 		// console.log(data);
	// 		onAdd(comment);

	// 		setLoading(false);
	// 	} catch (err) {
	// 		console.log(err);
	// 		setLoading(false);
	// 	}
	// };

	return (
		// <Stack
		// 	// component="form"
		// 	// onSubmit={(e) => {
		// 	// 	handleSubmit(onSubmit)(e);
		// 	// }}
		// 	justifyContent="center"
		// 	spacing={2}>
		// 	<StyledTextField
		// 		onChangeValue={(e) =>
		// 			setComment((prevComment) => ({
		// 				...prevComment,
		// 				description: e.target.value,
		// 			}))
		// 		}
		// 		label="Add comment"
		// 		register={{
		// 			...register("text", {
		// 				required: {
		// 					value: true,
		// 					message: "The field is required!",
		// 				},
		// 				minLength: {
		// 					value: 20,
		// 					message: "20 characters minimum",
		// 				},
		// 			}),
		// 		}}
		// 		helperText={errors?.text ? errors.text.message : " "}
		// 		error={!!errors?.text}
		// 	/>
		// 	<LoadingButton
		// 		loading={loading}
		// 		// type="submit"
		// 		variant="contained"
		// 		onClick={() => onAdd(comment)}
		// 		sx={{ alignSelf: "end" }}>
		// 		Post
		// 	</LoadingButton>
		// </Stack>
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
