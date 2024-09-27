import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import { useRef, useState } from "react";
import GoogleButton from "react-google-button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../http/api";
import { useNavigate } from "react-router-dom";
import useTokenStore from "../../store/userTokenStore";

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

export default function LoginPage() {
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const [rememberMe, setRememberMe] = useState(false);

	const setToken = useTokenStore((state) => state.setToken);

	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: login,
		onSuccess: (response) => {
			const token = response.data.access_token;
			setToken(token);
			toast.success("Login successfull!", {
				autoClose: 3000,
			});
			navigate("/");
		},
		onError: () => {
			toast.error("Incorrect email or password", {
				autoClose: 4000,
			});
		},
	});

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (!emailRef.current.value || !passwordRef.current.value) {
			toast.error("Please fill email and password!", {
				autoClose: 4000,
			});
			return;
		}
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		mutation.mutate({ email, password });
	};

	const handleRememberMe = (e) => {
		setRememberMe(e.target.checked);
		if (!e.target.checked) {
			localStorage.removeItem("auth-token"); // If the user don't click on remember me btn or once clicked an unclick it.
		}
	};
	return (
		<StyledContainer component="main" maxWidth="xs">
			<CssBaseline />
			<div>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<StyledAvatar>
						<LockOutlinedIcon />
					</StyledAvatar>
					<Typography component="h1" variant="h5">
						Sign in
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
						name="password"
						inputRef={passwordRef}
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={
							<Checkbox
								value="remember"
								color="primary"
								checked={rememberMe}
								onChange={handleRememberMe}
							/>
						}
						label="Remember me"
					/>
					<StyledButton
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleOnSubmit}
					>
						Sign In
					</StyledButton>

					<Grid item xs={12}>
						<Typography sx={{ textAlign: "center", marginBottom: "1rem" }}>
							OR
						</Typography>
					</Grid>
					<Grid item xs={12} sx={{ marginBottom: "1rem" }}>
						<GoogleButton
							style={{ width: "100%" }} // This ensures the button takes up the full width of the container
							onClick={() => {
								console.log("Google button clicked");
							}}
						/>
					</Grid>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="/auth/register" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</StyledForm>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
			<ToastContainer />
		</StyledContainer>
	);
}
