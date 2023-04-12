/** @format */

import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { LECTURERS_ROUTE } from "../../app/Routes";

const MyLecturer = ({ lecturer }) => {
	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
			}}>
			<Link
				component={RouterLink}
				to={`${LECTURERS_ROUTE}/${lecturer.id}`}
				sx={{
					flex: "2",
					color: (theme) => theme.palette.primary.dark,
					":hover": {
						opacity: "0.8",
					},
				}}>
				<Typography variant="p">{lecturer.fullName}</Typography>
			</Link>
			<Typography
				sx={{
					flex: { sm: "0.4", lg: "1.1" },
					display: { xs: "none", sm: "block" },
				}}
				variant="p">
				{lecturer.degree}
			</Typography>
			<Link
				component={RouterLink}
				href={lecturer.email}
				sx={{
					flex: "1.1",
					display: { xs: "none", lg: "block" },
					color: (theme) => theme.palette.primary.dark,
					":hover": {
						opacity: "0.8",
					},
				}}>
				<Typography variant="p">{lecturer.email}</Typography>
			</Link>
		</Box>
	);
};

export default MyLecturer;
