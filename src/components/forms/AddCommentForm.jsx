/** @format */

import React from "react";
import { Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import StyledTextField from "../styled/StyledTextField";

const AddCommentForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onBlur" });

	const [loading, setLoading] = useState(false);

	const onSubmit = async (data) => {
		setLoading(true);
		try {
			console.log(data);

			setLoading(false);
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	};

	return (
		<Stack
			component="form"
			onSubmit={(e) => {
				handleSubmit(onSubmit)(e);
			}}
			justifyContent="center"
			spacing={2}>
			<StyledTextField
				label="Add comment"
				register={{
					...register("text", {
						required: {
							value: true,
							message: "The field is required!",
						},
						minLength: {
							value: 20,
							message: "20 characters minimum",
						},
					}),
				}}
				helperText={errors?.text ? errors.text.message : " "}
				error={!!errors?.text}
			/>
			<LoadingButton
				loading={loading}
				type="submit"
				variant="contained"
				sx={{ alignSelf: "end" }}>
				Post
			</LoadingButton>
		</Stack>
	);
};

export default AddCommentForm;
