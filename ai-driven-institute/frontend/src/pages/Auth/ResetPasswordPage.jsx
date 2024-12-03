import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";
import {  resetPassword } from "../../http/api";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const StyledContainer = styled(Container)(({ theme }) => ({
	marginTop: theme.spacing(14),
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
	margin: theme.spacing(1),
	backgroundColor: theme.palette.secondary.main,
}));

const StyledForm = styled("form")(({ theme }) => ({
	width: "100%",
	marginTop: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme }) => ({
	margin: theme.spacing(3, 0, 2),
}));

export default function ResetPasswordPage() {
	const emailRef = useRef("");
	const newPasswordRef = useRef("");
	const confirmNewPasswordRef = useRef("");

	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: resetPassword,
		onSuccess: () => {
			toast.success("Password updated successfully!", {
				autoClose: 3000,
			});
			navigate("/auth/login");
		},
		onError: () => {
			toast.error("Password doesn't matches!", {
				autoClose: 3000,
			});
		},
	});

	const handleOnSubmit = (e) => {
		e.preventDefault();
        const email = emailRef.current.value;
		const confirmNewPassword = confirmNewPasswordRef.current.value;
		const newPassword = newPasswordRef.current.value;
		if (!email || !confirmNewPassword || !newPassword) {
			toast.error("Please provide all the fields", {
				autoClose: 4000,
			});
			return;
		}
        if(newPassword !== confirmNewPassword){
            toast.error("Password doesn't match",
                {
                    autoClose: 4000
                }
            )
            return;
        }
		
		mutation.mutate({ email, newPassword,confirmNewPassword });
	};

	
	return (
		<StyledContainer component="main" maxWidth="xs">
			<CssBaseline />
			<div>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<StyledAvatar>
						<LockOutlinedIcon/>
					</StyledAvatar>
					<Typography component="h1" variant="h5">
						Reset Password
					</Typography>
				</Box>
				<StyledForm noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						inputRef={emailRef}
						autoComplete="email"
						autoFocus
					/>
					
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="newPassword"
						inputRef={newPasswordRef}
						label="New Password"
						type="password"
						id="new_password"
						autoComplete="new-password"
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="confirmNewPassword"
						inputRef={confirmNewPasswordRef}
						label="Confirm New Password"
						type="password"
						id="confirm_new_password"
						autoComplete="new-password"
					/>
					
					<StyledButton
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleOnSubmit}
					>
						Confirm
					</StyledButton>
				</StyledForm>
                <div className="mt-4">
                    <Link href="/auth/login" variant="body2" className="flex items-center gap-2">
                    <IoMdArrowRoundBack className="text-primary" size="20px"/>
                        {"Back to login"}
                    </Link>
                </div>
			</div>
			<Box mt={2}>
				<Copyright />
			</Box>
			<ToastContainer />
		</StyledContainer>
	);
}
