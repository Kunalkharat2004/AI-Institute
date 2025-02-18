const CampusGreeneryAndFacilityNavigation = () => {
    return (
        <div style={{ width: "100%" }}>

             {/* Facility Inspection Section */}
             <div style={{ position: "relative", height: "100vh", width: "100%", marginTop: "1rem" }}>
                <iframe
                    src="http://127.0.0.1:5002/"
                    title="Facility Inspection"
                    style={{ width: "100%", height: "100%", border: "none" }}
                />
            </div>
            
            {/* Campus Greenery Section */}
            <div style={{ position: "relative", height: "100vh", width: "100%" }}>
                <iframe
                    src="https://sikeaditya-geomap-2.hf.space/"
                    title="Campus Greenery"
                    style={{ width: "100%", height: "100%", border: "none" }}
                />
            </div>

           
        </div>
    );
};

export default CampusGreeneryAndFacilityNavigation;
