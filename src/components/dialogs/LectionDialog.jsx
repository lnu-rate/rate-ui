/** @format */

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Stack } from "@mui/system";
import StyledStack from "../styled/StyledStack";

const LectionDialog = ({ lection, open, onClose }) => {
	const onDialogClose = () => {
		onClose();
	};

	return (
		<Dialog open={open} onClose={onDialogClose}>
			<StyledStack>
				<DialogTitle sx={{ p: 0 }}>
					<Stack
						sx={{
							borderBottom: "1px solid rgba(0,0,0,.125)",
							p: 4,
						}}>
						<Typography variant="h6">лекція</Typography>
						<Typography variant="h4">
							DFD модель побудови
						</Typography>
					</Stack>
				</DialogTitle>
				<DialogContent sx={{ p: 0 }}>
					<Stack spacing={0} sx={{ p: 4 }}>
						<Typography>Lecturer:</Typography>
					</Stack>
				</DialogContent>
				<DialogActions sx={{ py: 1.5, px: 0 }}>
					<IconButton
						onClick={onClose}
						disableRipple
						sx={{
							position: "absolute",
							right: 16,
							top: 20,
						}}>
						<CloseRoundedIcon
							sx={{
								color: (theme) => theme.palette.primary.dark,
							}}
						/>
					</IconButton>
				</DialogActions>
			</StyledStack>
		</Dialog>
	);
};

export default LectionDialog;
