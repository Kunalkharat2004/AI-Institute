import { Navigate, Outlet } from "react-router-dom";
import useTokenStore from "../../store/userTokenStore";

const Auth = () => {
	const { erpToken } = useTokenStore((state) => state);
	if (erpToken) {
		return <Navigate to={"/"} replace />;
	}
	return (
		<>
			<Outlet />
		</>
	);
};

export default Auth;
