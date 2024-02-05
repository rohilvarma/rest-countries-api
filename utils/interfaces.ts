export interface ICountryCard {
  imageSrc: string;
  imageAlt: string;
  name: string;
  population: string;
  region: string;
  capital: string;
  slug: string;
}

export interface ICountryDetail extends ICountryCard {
  nativeName: string;
  subRegion: string;
  topLevelDomain: string;
  currencies: string;
  languages: string[];
  borderCountries: string[];
}

export interface ICountryStore {
  countries: ICountryCard[];
  setCountries: (data: ICountryCard[]) => void;
}

export interface IInputStore {
  searchValue: string;
  updateSearch: (value: string) => void;
  cancelSearch: () => void;
}

export interface IDataStore {
  countries: ICountryCard[];
  renderCountries: ICountryCard[];
  setCountries: (data: ICountryCard[]) => void;
  filterCountries: (search: string) => void;
}