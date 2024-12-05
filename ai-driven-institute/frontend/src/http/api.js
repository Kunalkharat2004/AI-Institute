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
	const token = useTokenStore.getState().token;
	if(token){
		config.headers["Authorization"] = `Bearer ${token}`;
	}
	return config;
})

export const login = async (data) => api.post("/users/login", data);
export const resetPassword = async (data) => api.post("/users/reset-password", data);
export const register = async (data) => api.post("/users/register", data);


export const fetchInstituteDetails = async() => api.get("/institute/institute-instituteData") 
export const updateInstituteDetailsAPI = async(data) => api.post("/institute/institute-instituteData",data)

export const paymentIntent = async(data) => api.post("/payment/create-payment-intent",data)
export const updatePaymentStstus = async(data) => api.post("/payment/update-payment-status",data)
export const fetchPaymentStatus = async() => api.get("/payment/payment-status")
export const getReceiptUrl = async(data) => api.post("/payment/get-receipt-url",data)