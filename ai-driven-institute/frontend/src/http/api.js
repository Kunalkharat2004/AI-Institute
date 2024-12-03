import axios from "axios";
import config from "../config/config";
// import useTokenStore from "../store/userTokenStore";

const api = axios.create({
	baseURL: config.backendUrl,
	headers: {
		"Content-Type": "application/json",
	},
});

// api.interceptors.request.use((config)=>{
// 	const token = useTokenStore.getState().erpToken;
// 	if(token){
// 		config.headers["Authorization"] = `Bearer ${token}`;
// 	}
// 	return config;
// })

export const login = async (data) => {
	return api.post("/users/login", data);
};
export const resetPassword = async (data) => {
	return api.post("/users/reset-password", data);
};
export const register = async (data) => {
	return api.post("/users/register", data);
};
