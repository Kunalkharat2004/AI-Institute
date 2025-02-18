const RealTimePage = () => {
    return (
        <div style={{ width: "100%" }}>

        <div style={{ position: "relative", height: "100vh", width: "100%", marginTop: "1rem" }}>
                <iframe
                    src="http://172.16.14.80:8501/"
                    title="Linked IN" 
                    style={{ width: "100%", height: "100%", border: "none" }}
                />
            </div>
            
            <div style={{ position: "relative", height: "100vh", width: "100%" }}>
                <iframe
                    src="http://127.0.0.1:5009/"
                    title="College Research and Publication"
                    style={{ width: "100%", height: "100%", border: "none" }}
                />
            </div>
        </div>
    );
};

export default RealTimePage;
