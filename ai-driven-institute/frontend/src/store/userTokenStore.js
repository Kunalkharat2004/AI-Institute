import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useTokenStore = create(
	devtools(
		persist(
			(set) => ({
				token: "",
				setToken: (data) => set({ token: data }),
				clearToken: () => set({ token: "" }),
				hasFetchedData: false,
				setHasfetchData: (data) => set({ hasFetchedData: data }),
				clearHasFetchedData: () => set({ hasFetchedData: false })
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
