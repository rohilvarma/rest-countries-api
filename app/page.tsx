import CountryCard from "@/components/CountryCard"
import { GET_ALL_DATA_API } from "@/utils/constants"
import { ICountryCard } from "@/utils/interfaces"

const getAllCountries = async() => {
  const response = await fetch(GET_ALL_DATA_API, { cache: "no-store"})
  return response.json()
}

export default async function Home() {
  const unfilteredData = await getAllCountries()
  const data: ICountryCard[] = unfilteredData.map((item: any) => (
    {
      imageSrc: item.flags.svg,
      imageAlt: item.flags.alt ? item.flags.alt : `${item.name.common} Flag.`,
      name: item.name.official,
      population: item.population,
      region: item.region,
      capital: item.capital,
    }
  ))
  return <main className="card-grid">
    {
      data.map((country, index) => <CountryCard key={index} {...country} />)
    }
  </main>
}
