import { Navigate, Outlet } from "react-router-dom";
import useTokenStore from "../../store/userTokenStore";

const Auth = () => {
	const { token } = useTokenStore((state) => state);
	if (token) {
		return <Navigate to={"/"} replace />;
	}
	return (
		<>
			<Outlet />
		</>
	);
};

export default Auth;
