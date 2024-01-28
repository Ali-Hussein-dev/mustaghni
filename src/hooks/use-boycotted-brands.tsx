import { type CompanyProps } from "@/components/company-card";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  brands: CompanyProps[];
  addBrand: (brand: CompanyProps) => void;
  removeBrand: (brand: CompanyProps) => void;
};

export const useBoycottedBrands = create<State>()(
  persist(
    (set) => ({
      brands: [],
      addBrand: (brand) =>
        set((state) => {
          if (state.brands.some((b) => b._id === brand._id)) {
            // The brand already exists, so don't add it
            return state;
          }
          return { brands: [...state.brands, brand] };
        }),
      removeBrand: (brand) =>
        set((state) => ({ brands: state.brands.filter((b) => b !== brand) })),
    }),
    {
      name: "mustaghni-boycotted-brands",
    },
  ),
);
