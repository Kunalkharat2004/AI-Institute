import { useState } from "react";
import {
	Container,
	Typography,
	TextField,
	Button,
	Box,
	CircularProgress,
	Snackbar,
	Alert,
} from "@mui/material";

const FeedbackPage = () => {
	const [feedback, setFeedback] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const handleFeedbackChange = (e) => setFeedback(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// Simulate feedback submit for UI purposes only
		setTimeout(() => {
			setLoading(false);
			setSuccess(true);
			setFeedback("");
		}, 2000);
	};

	return (
		<Container maxWidth="sm" sx={{ mt: 18 }}>
			<Typography variant="h4" component="h1" gutterBottom>
				Feedback
			</Typography>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
			>
				<TextField
					label="Your Feedback"
					multiline
					rows={6}
					variant="outlined"
					fullWidth
					value={feedback}
					onChange={handleFeedbackChange}
					required
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					disabled={loading}
					sx={{ alignSelf: "flex-start" }}
				>
					{loading ? <CircularProgress size={24} /> : "Submit Feedback"}
				</Button>
			</Box>

			<Snackbar
				open={success}
				autoHideDuration={6000}
				onClose={() => setSuccess(false)}
			>
				<Alert onClose={() => setSuccess(false)} severity="success">
					Feedback submitted successfully!
				</Alert>
			</Snackbar>

			<Snackbar
				open={!!error}
				autoHideDuration={6000}
				onClose={() => setError("")}
			>
				<Alert onClose={() => setError("")} severity="error">
					{error}
				</Alert>
			</Snackbar>
		</Container>
	);
};

export default FeedbackPage;
