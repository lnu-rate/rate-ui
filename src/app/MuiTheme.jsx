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
			contrastText: "rgba(55,55,55,1)",
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
		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					width: "fit-content",
					padding: "10px 20px",
					borderRadius: 12,
					boxShadow: "none",
				}),
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
