const _config = {
	backendUrl: import.meta.env.VITE_BACKEND_URL,
	stripePublicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY
};

const config = Object.freeze(_config);
export default config;
