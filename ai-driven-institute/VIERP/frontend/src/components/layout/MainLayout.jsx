import useTokenStore from "../../store/userTokenStore";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import { Navigate, Outlet } from "react-router-dom";

const MainLayout = () => {
	const { erpToken } = useTokenStore((state) => state);

	if (!erpToken) {
		return <Navigate to={"/auth/login"} replace />;
	}

	return (
		<>
			{" "}
			<div className="flex flex-col min-h-screen">
				<Navbar />
				<main className="flex-grow">
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default MainLayout;
