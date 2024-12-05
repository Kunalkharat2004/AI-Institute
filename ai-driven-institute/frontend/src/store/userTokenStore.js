import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useTokenStore = create(
  devtools(
    persist(
      (set) => ({
        token: "",
        paymentStatus: false,
		hasFetchedData: false,
        setToken: (data) => set({ token: data }),
        clearToken: () => set({ token: "" }),
        setPaymentStatus: (status) => set({ paymentStatus: status }),
		setHasfetchData: (data) => set({hasFetchedData: data}),
        clearHasFetchedData: () => set({ hasFetchedData: "" }),
        clearPaymentStatus: () => set({ paymentStatus: false }),
      }),
      { name: "auth-token" }
    )
  )
);

export default useTokenStore;
