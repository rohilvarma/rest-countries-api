import CountryCard from "@/components/CountryCard";
import { GET_ALL_DATA_API } from "@/utils/constants";
import { ICountryCard } from "@/utils/interfaces";

const getAllData = async() => {
  const response = await fetch(GET_ALL_DATA_API, { cache: "no-store" });
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
}

export default async function Home() {
  const countries = await getAllData()
  return (
    <main className="card-grid">
      {countries.map((country, index) => (
        <CountryCard key={index} {...country} />
      ))}
    </main>
  );
}
