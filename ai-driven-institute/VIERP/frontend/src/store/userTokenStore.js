import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useTokenStore = create(
	devtools(
		persist(
			(set) => ({
				"erpToken": "",
				setErptoken: (data) => set({ erpToken: data }),
				clearErptoken: () => set({ erpToken: "" }),
			}),
			{
				name: "erp-auth-token", // persist key name
			}
		),
		{
			name: "TokenStore", // devtools store name
		}
	)
);

export default useTokenStore;
