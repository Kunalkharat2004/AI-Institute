const PredictPage = () => {
	return (
		<>
			<div style={{ height: "100vh", width: "100%" }}>
				<iframe
					src="http://localhost:8502/"
					title="Streamlit App"
					style={{ width: "100%", height: "100%", border: "none" }}
				/>
			</div>
		</>
	);
};

export default PredictPage;
