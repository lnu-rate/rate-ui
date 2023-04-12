/** @format */

import { useState } from "react";
import { Divider, Link, ListItemIcon, Modal } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoImage from "../../assets/images/LogoImage";
import { LECTURERS_ROUTE, COURSES_ROUTE } from "../../app/Routes";
import { Logout, Settings } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import RegisterForm from "../forms/RegisterForm";

const USER_NAME = "Вадим Машина";

const Header = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);
	const [isRegisterModalOpen, setRegisterOpenModal] = useState(false);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<>
			<AppBar
				position="sticky"
				elevation={0}
				sx={{
					borderBottom: "3px solid rgba(0,0,0,.125)",
					py: 1,
					backgroundColor: (theme) => theme.palette.common.white,
				}}>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<LogoImage />
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
							}}>
							<IconButton
								disableRipple
								onClick={handleOpenNavMenu}>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link
										component={RouterLink}
										to={COURSES_ROUTE}
										textAlign="center">
										Курси
									</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link
										component={RouterLink}
										to={LECTURERS_ROUTE}
										textAlign="center">
										Викладачі
									</Link>
								</MenuItem>
							</Menu>
						</Box>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href=""
							color="primary.contrastText"
							fontWeight="semi-bold"
							sx={{
								display: { xs: "none", sm: "flex", md: "none" },
								flexGrow: 1,
								textDecoration: "none",
							}}>
							Система оцінювання якості викладання
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
							}}>
							<Button
								disableRipple
								role="link"
								href={COURSES_ROUTE}
								sx={{
									color: (theme) =>
										theme.palette.primary.contrastText,
									fontWeight: "bold",
									fontSize: 16,
								}}>
								Курси
							</Button>
							<Button
								disableRipple
								role="link"
								href={LECTURERS_ROUTE}
								sx={{
									color: (theme) =>
										theme.palette.primary.contrastText,
									fontWeight: "bold",
									fontSize: 16,
								}}>
								Викладачі
							</Button>
							{localStorage.getItem("role") === "admin" && (
								<Button
									disableRipple
									sx={{
										color: (theme) =>
											theme.palette.primary.main,
										fontWeight: "bold",
										fontSize: 16,
									}}
									onClick={() =>
										setRegisterOpenModal(
											!isRegisterModalOpen
										)
									}>
									Зареєструвати користувача
								</Button>
							)}
						</Box>
						<Box
							sx={{
								flexGrow: 0,
								display: "flex",
								alignItems: "center",
							}}>
							<Tooltip title="Open settings">
								<IconButton
									disableRipple
									onClick={handleOpenUserMenu}
									sx={{ p: 0 }}>
									<Typography
										color="primary"
										variant="subtitle1"
										sx={{
											mr: 2,
											display: { xs: "none", md: "flex" },
										}}>
										{USER_NAME}
									</Typography>
									<Avatar alt={USER_NAME} src="" />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: "45px" }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}>
								<MenuItem
									sx={{ display: "flex", gap: 1 }}
									onClick={handleCloseUserMenu}>
									<PersonIcon color="primary" />
									Особистий кабінет
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleCloseUserMenu}>
									<ListItemIcon>
										<Settings fontSize="small" />
									</ListItemIcon>
									Налаштування
								</MenuItem>
								<MenuItem onClick={handleCloseUserMenu}>
									<ListItemIcon>
										<Logout fontSize="small" />
									</ListItemIcon>
									Вийти
								</MenuItem>
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Modal
				open={isRegisterModalOpen}
				onClose={() => setRegisterOpenModal(!isRegisterModalOpen)}
				aria-labelledby="modal-modal-title">
				<Box>
					<RegisterForm
						handleCloseModal={() =>
							setRegisterOpenModal(!isRegisterModalOpen)
						}
					/>
				</Box>
			</Modal>
		</>
	);
};
export default Header;
