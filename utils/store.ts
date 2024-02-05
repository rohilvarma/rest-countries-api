import { create } from "zustand";
import { IDataStore, IInputStore } from "./interfaces";

export const useInputStore = create<IInputStore>()((set) => ({
  searchValue: "",
  cancelSearch() {
    set((state) => ({ searchValue: "" }));
  },
  updateSearch(value) {
    set((state) => ({ searchValue: value }));
  },
}));

export const useDataStore = create<IDataStore>()((set) => ({
  countries: [],
  renderCountries: [],
  setCountries(data) {
    set((state) => ({ countries: data, renderCountries: data }));
  },
  filterCountries(search) {
    set((state) => ({
      renderCountries: state.countries.filter(
        (country) =>
          country.name.toLowerCase().includes(search) ||
          country.region.toLowerCase().includes(search)
      ),
    }));
  },
}));
