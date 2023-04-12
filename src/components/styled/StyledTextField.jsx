/** @format */

import { TextField } from "@mui/material";

const StyledTextField = ({
	type,
	label,
	placeholder,
	helperText,
	register,
	error,
	onChangeValue,
	value,
}) => {
	return (
		<TextField
			fullWidth
			type={type}
			label={label}
			placeholder={placeholder}
			helperText={helperText}
			onChange={(value) => onChangeValue(value)}
			value={value}
			{...register}
			error={error}
			sx={{
				input: {
					boxShadow:
						"inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px rgba(255, 255, 255,1)",
				},
			}}
		/>
	);
};

export default StyledTextField;
