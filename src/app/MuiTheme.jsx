/** @format */

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import * as React from "react";

export const theme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#16a085",
			light: "rgb(68, 179, 157)",
			dark: "rgb(15, 112, 93)",
			contrastText: "rgba(81,80,79,255)",
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: "rgb(240 240 240)",
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					textDecoration: "none",
				},
			},
		},
	},
});

const MuiTheme = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default MuiTheme;
