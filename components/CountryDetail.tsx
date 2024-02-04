import { GET_COUNTRY_DETAIL_API } from "@/utils/constants";
import { ICountryDetail } from "@/utils/interfaces";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const getCountryData = async(pathName: string) => {
  const response = await fetch(`${GET_COUNTRY_DETAIL_API}/${pathName}`, {cache: 'no-store'})
  const unfilteredData = await response.json()
  const data: ICountryDetail = unfilteredData.map((item: any) => ({
    imageSrc: item.flags.svg,
    imageAlt: item.flags.alt ? item.flags.alt : `${item.name.common} Flag.`,
    name: item.name.official,
    population: item.population,
    region: item.region,
    capital: item.capital,
    slug: item.name.common,
    nativeName: item.name.nativeName,
    subRegion: item.subregion,
    topLevelDomain: item.tld,
    currencies: item.currencies,
    languages: item.languages,
    borderCountries: item.borders,
  }))[0]
  return data
}

const CountryDetail = async({pathName}: {pathName: string}) => {
  const countryData: ICountryDetail = await getCountryData(pathName)
  console.log(countryData.borderCountries);
  
  return (
    <div className="container">
      <Link
        href={"/"}
        className="flex items-center gap-x-2 text-sm theme dark:bg-dark_blue-dark w-fit px-4 py-2 shadow-xl mt-12 mb-16"
      >
        <BsArrowLeft /> Back
      </Link>
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
        <Image
          src={countryData.imageSrc}
          width={200}
          height={200}
          alt={countryData.imageAlt}
          className="w-full object-cover"
        />
        <div className="text-sm lg:text-base">
          <h3 className="font-black text-xl my-6 lg:mt-0 lg:text-3xl">{countryData.name}</h3>
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-4">
            <div className="flex flex-col gap-y-2 mt-3 lg:mt-0">
              <div className="">
                <span className="font-semibold">Native Name:</span> {Object.values(countryData.nativeName)[0].common}
              </div>
              <div className="">
                <span className="font-semibold">Population:</span> {Intl.NumberFormat('en-US').format(Number(countryData.population))}
              </div>
              <div className="">
                <span className="font-semibold">Region:</span> {countryData.region}
              </div>
              <div className="">
                <span className="font-semibold">Sub Region:</span> {countryData.subRegion}
              </div>
              <div className="">
                <span className="font-semibold">Capital:</span> {countryData.capital}
              </div>
            </div>
            <div className="my-8 lg:my-0 flex flex-col gap-y-2">
              <div className="">
                <span className="font-semibold">Top Level Domain:</span> {countryData.topLevelDomain}
              </div>
              <div className="">
                <span className="font-semibold">Currencies:</span> {Object.values(countryData.currencies)[0].name}
              </div>
              <div className="">
                <span className="font-semibold">Languages:</span> {Object.values(countryData.languages).join(", ")}
              </div>
            </div>
          </div>
          <div className="mb-16 lg:mt-12">
            <h3 className="font-semibold text-base mb-4 lg:hidden">
              Border Countries:
            </h3>
            <div className="flex gap-3 flex-wrap items-center">
              <h3 className="font-semibold text-base hidden lg:block">
                Border Countries:
              </h3>
              <Link
                href={"/"}
                className="text-sm theme dark:bg-dark_blue-dark w-fit px-4 py-2 shadow-xl"
              >
                France
              </Link>
              <Link
                href={"/"}
                className="text-sm theme dark:bg-dark_blue-dark w-fit px-4 py-2 shadow-xl"
              >
                Germany
              </Link>
              <Link
                href={"/"}
                className="text-sm theme dark:bg-dark_blue-dark w-fit px-4 py-2 shadow-xl"
              >
                Netherlands
              </Link>
              <Link
                href={"/"}
                className="text-sm theme dark:bg-dark_blue-dark w-fit px-4 py-2 shadow-xl"
              >
                Zimbabwe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail