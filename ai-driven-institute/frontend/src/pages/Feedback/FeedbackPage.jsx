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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import useTokenStore from "../../store/userTokenStore";

const FeedbackPage = () => {
	
	const { token } = useTokenStore();
	const [feedback, setFeedback] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const handleFeedbackChange = (e) => setFeedback(e.target.value);

	const handleSubmit = async(e) => {
		e.preventDefault();
		setLoading(true);

		// Simulate feedback submit for UI purposes only
		try{
			e.preventDefault();
			const formData = new FormData(e.target);
			const data = {
			  feedbackDetails: {
				feedback: formData.get("feedback"),
			  },
			};
	  
			console.log("Form Data: ", data);
	  
			const response = await axios.post(
			  "http://localhost:3600/api/feedback",
			  data,
			  {
				headers: {
				  "Content-Type": "application/json",
				  Authorization: `Bearer ${token}`,
				},
			  }
			);
	  
			console.log("Response Status: ", response.status);
	  
			if (response.status === 200) {
			  toast.success("Feedback submitted successfully", {
				autoClose: 4000,
			  });
			}
	  
			// Reset the form
			e.target.reset();
		}catch(err){
			console.error("Error: ", err);
			setError("Failed to submit feedback. Please try again.");
		}
	};

	return (
		<Container maxWidth="sm" sx={{ mt: 18 }}>
			<ToastContainer/>
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
					name="feedback"
					onChange={handleFeedbackChange}
					required
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					sx={{ alignSelf: "flex-start" }}
				>
					Submit Feedback
				</Button>
			</Box>
		</Container>
	);
};

export default FeedbackPage;
