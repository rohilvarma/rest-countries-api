import CountryGrid from "@/components/CountryGrid";
import DropdownFilter from "@/components/DropdownFilter";
import Search from "@/components/Search";
import { ICountryCard } from "@/utils/interfaces";

const getAllData = async () => {
  const response = await fetch(`https://restcountries.com/v3.1/all`, {
    cache: "no-store",
  });
  const unfilteredData = await response.json();
  const data: ICountryCard[] = unfilteredData.map((item: any) => ({
    imageSrc: item.flags.svg,
    imageAlt: item.flags.alt ? item.flags.alt : `${item.name.common} Flag.`,
    name: item.name.official,
    population: item.population,
    region: item.region,
    capital: item.capital,
    slug: item.name.common,
  }));
  return data;
};

export default async function Home() {
  const countries = await getAllData();
  return (
    <div className="">
      <div className="container lg:flex lg:justify-between lg:items-center">
        <Search />
        <DropdownFilter />
      </div>
      <CountryGrid countryData={countries} />
    </div>
  );
}
