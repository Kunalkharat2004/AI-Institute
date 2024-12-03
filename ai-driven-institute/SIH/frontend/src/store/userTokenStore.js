import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useTokenStore = create(
	devtools(
		persist(
			(set) => ({
				token: "",
				setToken: (data) => set({ token: data }),
				clearToken: () => set({ token: "" }),
			}),
			{
				name: "auth-token", // persist key name
			}
		),
		{
			name: "TokenStore", // devtools store name
		}
	)
);

export default useTokenStore;
