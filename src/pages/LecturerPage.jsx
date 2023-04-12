/** @format */

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getLecturer } from "../components/lecturers/getLecturer";
import InfoIcon from "@mui/icons-material/Info";
import {
	Avatar,
	Box,
	FormControl,
	InputLabel,
	Link,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import StyledStack from "../components/styled/StyledStack";
import { Link as RouterLink } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import BackButton from "../components/buttons/BackButton";
import LecturerPageComments from "../components/comments/LecturerPageComments";

const LecturerPage = () => {
	let { id } = useParams();
	const LECTURER_DATA = getLecturer(id);
	id = null;

	const [quality, setQuality] = useState(0);
	const [methodologicalSupport, setMethodologicalSupport] = useState(0);
	const [objectivity, setObjectivity] = useState(0);
	const [comment, setComment] = useState("");

	const IS_SEMESTER_DONE = true;

	const handleSubmitRate = (event) => {
		event.preventDefault();
		let DATA = {
			fullName: "Васьків Ярослав Ігорович",
			quality: quality,
			methodologicalSupport: methodologicalSupport,
			objectivity: objectivity,
			comment: comment,
		};

		console.log(DATA);
		DATA = null;
	};

	return (
		<>
			<StyledStack>
				<BackButton sx={{ mt: 2, ml: 2 }} />
				<Box
					spacing={3}
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						alignItems: "center",
						textAlign: { xs: "center", md: "start" },
						gap: 4,
						p: { xs: 2, md: 8 },
						borderBottom: "1px solid rgba(0,0,0,.125)",
					}}>
					<Avatar sx={{ width: 124, height: 124, fontSize: "56px" }}>
						{LECTURER_DATA.fullName.slice(0, 1)}
					</Avatar>
					<Box>
						<Typography variant="h4">
							{LECTURER_DATA.fullName}
						</Typography>
						<Link
							component={RouterLink}
							href={LECTURER_DATA.email}
							sx={{
								color: (theme) => theme.palette.primary.dark,
								":hover": {
									opacity: "0.8",
								},
							}}>
							<Typography variant="h6">
								{LECTURER_DATA.email}
							</Typography>
						</Link>
						<Box>
							<Typography
								variant="h6"
								sx={{ display: "inline", fontSize: "1.25rem" }}>
								<b>Посада: </b>
								{LECTURER_DATA.degree}, кафедрa оптоелектроніки
								та інформаційних технологій
							</Typography>
						</Box>
					</Box>
				</Box>
				{IS_SEMESTER_DONE && (
					<Stack
						component="form"
						onSubmit={handleSubmitRate}
						spacing={3}
						sx={{
							p: { xs: 2, sm: 4, md: 8 },
							borderBottom: "1px solid rgba(0,0,0,.125)",
						}}>
						<Typography variant="h5" color="primary.main">
							Настав час для Rate!
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Typography variant="h7" sx={{ fontWeight: 700 }}>
								Оцініть основні результати викладання дисципліни
								за 10 бальною шкалою за такими критеріями:
								якість викладання (Я), методичне забезпечення
								(М) та об’єктивність оцінювання (О).
							</Typography>
							<Typography
								variant="h7"
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 1,
									mt: 1,
									mb: 2,
								}}>
								<InfoIcon />
								Коментар вважається опціональним та ставити його
								можна за бажанням студента.
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
							}}>
							<FormControl sx={{ width: "30%" }}>
								<InputLabel id="quality-select-label">
									Якість викладання
								</InputLabel>
								<Select
									labelId="quality-select-label"
									id="quality-select"
									value={quality}
									label="Якість викладання"
									onChange={(e) => setQuality(e.target.value)}
									sx={{
										borderRadius: 2,
									}}>
									{Array(11)
										.fill(null)
										.map((num, idx) => (
											<MenuItem key={idx} value={idx}>
												{idx}
											</MenuItem>
										))}
								</Select>
							</FormControl>
							<FormControl sx={{ width: "30%" }}>
								<InputLabel id="methodological-support-select-label">
									Методичне забезпечення
								</InputLabel>
								<Select
									labelId="methodological-support-select-label"
									id="methodological-support-select"
									value={methodologicalSupport}
									label="Методичне забезпечення"
									onChange={(e) =>
										setMethodologicalSupport(e.target.value)
									}
									sx={{
										borderRadius: 2,
									}}>
									{Array(11)
										.fill(null)
										.map((num, idx) => (
											<MenuItem key={idx} value={idx}>
												{idx}
											</MenuItem>
										))}
								</Select>
							</FormControl>
							<FormControl sx={{ width: "30%" }}>
								<InputLabel id="objectivity-select-label">
									Об'єктивність оцінювання
								</InputLabel>
								<Select
									labelId="objectivity-select-label"
									id="objectivity-select"
									value={objectivity}
									label="Об'єктивність оцінювання"
									onChange={(e) =>
										setObjectivity(e.target.value)
									}
									sx={{
										borderRadius: 2,
									}}>
									{Array(11)
										.fill(null)
										.map((num, idx) => (
											<MenuItem key={idx} value={idx}>
												{idx}
											</MenuItem>
										))}
								</Select>
							</FormControl>
						</Box>
						<TextField
							value={comment}
							onChange={(e) => setComment(e.target.value)}
							label="Коментар"
							multiline
							rows={4}
						/>
						<LoadingButton
							type="submit"
							variant="contained"
							sx={{ width: "fit-content", color: "white" }}>
							Залишити оцінку
						</LoadingButton>
					</Stack>
				)}
				<Stack
					spacing={3}
					sx={{
						p: { xs: 2, sm: 4, md: 8 },
						borderBottom: "1px solid rgba(0,0,0,.125)",
					}}>
					<Typography variant="h5">Оцінки та коментарі</Typography>
					<LecturerPageComments />
				</Stack>
			</StyledStack>
		</>
	);
};

export default LecturerPage;
