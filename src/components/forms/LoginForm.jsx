/** @format */

import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import StyledTextField from "../styled/StyledTextField";

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({ mode: "onBlur" });

	const [isChecked, setIsChecked] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleChange = () => {
		setIsChecked(!isChecked);
	};

	const onSubmit = async (data) => {
		setLoading(true);
		console.log(data);
		try {
			setLoading(false);
		} catch {
			setError("password", {
				type: "invalidPassword",
				message: "Credentials are incorrect",
			});
			setLoading(false);
		}
	};

	return (
		<Stack
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			justifyContent="center"
			spacing={3}
			sx={{ p: 8 }}>
			<StyledTextField
				label="Login"
				register={{
					...register("login", {
						required: {
							value: true,
							message: "The field is required!",
						},
						maxLength: {
							value: 30,
							message: "30 characters maximum",
						},
					}),
				}}
				helperText={errors?.login ? errors.login.message : " "}
				error={!!errors?.login}
			/>
			<StyledTextField
				label="Password"
				type="password"
				register={{
					...register("password", {
						required: {
							value: true,
							message: "The field is required!",
						},
						minLength: {
							value: 8,
							message: "Input 8 characters minimum",
						},
						maxLength: {
							value: 20,
							message: "Input 20 characters maximum",
						},
					}),
				}}
				helperText={errors?.password ? errors.password.message : " "}
				error={!!errors?.password}
			/>
			<FormControlLabel
				control={
					<Checkbox
						onChange={handleChange}
						disableRipple
						sx={{ p: 0, pr: 1 }}
						{...register("rememberMe", { rememberMe: isChecked })}
					/>
				}
				label="Remember me"
			/>
			<LoadingButton
				loading={loading}
				type="submit"
				variant="contained"
				sx={{ width: "100%" }}>
				Login
			</LoadingButton>
		</Stack>
	);
};

export default LoginForm;
