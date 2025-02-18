const NLPPage = () => {
    return (
        <div style={{ width: "100%" }}>

             <div style={{ position: "relative", height: "100vh", width: "100%", marginTop: "1rem" }}>
                <iframe
                    src="http://127.0.0.1:5004/"
                    title="Faculty Inspection"
                    style={{ width: "100%", height: "100%", border: "none" }}
                />
            </div>
            
            <div style={{ position: "relative", height: "100vh", width: "100%" }}>
                <iframe
                    src="http://127.0.0.1:5005/"
                    title="Document and Certificate"
                    style={{ width: "100%", height: "100%", border: "none" }}
                />
            </div>
            <div style={{ position: "relative", height: "100vh", width: "100%" }}>
                <iframe
                    src="https://rajkhanke-student-satifaction-survery.hf.space/"
                    title="Student Satisfaction  Survey"
                    style={{ width: "100%", height: "100%", border: "none" }}
                />
            </div>
            <div style={{ position: "relative", height: "100vh", width: "100%" }}>
                <iframe
                    src="http://127.0.0.1:5007/"
                    title="Student Satisfaction  Survey"
                    style={{ width: "100%", height: "100%", border: "none" }}
                />
            </div>

           
        </div>
    );
};

export default NLPPage;
