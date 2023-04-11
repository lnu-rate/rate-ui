/** @format */

import { Stack, Typography } from "@mui/material";
import StyledStack from "../components/styled/StyledStack";
import LoginForm from "../components/forms/LoginForm";

const LoginPage = () => {
	return (
		<StyledStack>
			<Stack
				sx={{
					borderBottom: "1px solid rgba(0,0,0,.125)",
					p: 4,
				}}>
				<Typography variant="h5" textAlign="center">
					Середовище оцінювання якості викладання
				</Typography>
			</Stack>
			<LoginForm />
		</StyledStack>
	);
};

export default LoginPage;
