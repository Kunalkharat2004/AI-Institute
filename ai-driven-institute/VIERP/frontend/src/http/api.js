import axios from "axios";
import config from "../config/config";
import useTokenStore from "../store/userTokenStore";

const api = axios.create({
	baseURL: config.backendUrl,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use((config)=>{
	const token = useTokenStore.getState().erpToken;
	if(token){
		config.headers["Authorization"] = `Bearer ${token}`;
	}
	return config;
})

// Auth requests
export const login = async (data) => {
	return api.post("/users/login", data);
};
export const resetPassword = async (data) => {
	return api.post("/users/reset-password", data);
};
export const register = async (data) => {
	return api.post("/users/register", data);
};

// Form Data requests
export const instituteDetails = async(data) => api.post("/institute/institute-details",data)
export const instituteTrust = async(data) => api.post("/institute/institute-trust",data)
export const registrationSPOC = async(data) =>  api.post("/institute/institute-registrationSPOC", data);
export const submitInstituteInfo = async(data) => api.post("/institute/institute-instituteInfo", data);
export const submitFinancialDetails = async(data) => api.post("/institute/institute-financialManagement",data)


export const getInstituteDetails = async() => api.get("/institute/institute-details")
export const getInstituteTrust = async() => api.get("/institute/institute-trust")
export const getRegistrationSPOC = async() => api.get("/institute/institute-registrationSPOC")
export const getInstituteInfo = async() => api.get("/institute/institute-instituteInfo")
export const getFinancialDetails = async() => api.get("/institute/institute-financialManagement")