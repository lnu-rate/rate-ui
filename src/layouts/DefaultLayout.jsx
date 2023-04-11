/** @format */

import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
	return (
		<Container
			disableGutters
			maxWidth="sm"
			sx={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}>
			<Outlet />
		</Container>
	);
};

export default DefaultLayout;
