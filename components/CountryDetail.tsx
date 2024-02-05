import { ICountryDetail } from "@/utils/interfaces";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const getCountryData = async (pathName: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/name${pathName}?fullText=true`);
  const unfilteredData = await response.json();  
  const data: ICountryDetail = {
    imageSrc: unfilteredData[0].flags.svg,
    imageAlt: unfilteredData[0].flags.alt ? unfilteredData[0].flags.alt : `${unfilteredData[0].name.common} Flag.`,
    name: unfilteredData[0].name.official,
    population: unfilteredData[0].population,
    region: unfilteredData[0].region,
    capital: unfilteredData[0].capital,
    slug: unfilteredData[0].name.common,
    nativeName: unfilteredData[0].name.nativeName,
    subRegion: unfilteredData[0].subregion,
    topLevelDomain: unfilteredData[0].tld,
    currencies: unfilteredData[0].currencies,
    languages: unfilteredData[0].languages,
    borderCountries: unfilteredData[0].borders,
  }
  return data;
};
const getCountryBorders = async (countryCode: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
  const data = await response.json();
  return data[0].name.common;
};

const CountryDetail = async ({ pathName }: { pathName: string }) => {
  const countryData: ICountryDetail = await getCountryData(pathName);
  const getBorderCountries = () => {
    const response = countryData.borderCountries?.map(async (country, index) => {
      const countryName: string = await getCountryBorders(country);
      return (
        <Link
          key={index}
          href={countryName}
          className="text-sm theme dark:bg-dark_blue-dark w-fit px-4 py-2 shadow-xl"
        >
          {countryName}
        </Link>
      );
    });
    return response
  };
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
          <h3 className="font-black text-xl my-6 lg:mt-0 lg:text-3xl">
            {countryData.name}
          </h3>
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-4">
            <div className="flex flex-col gap-y-2 mt-3 lg:mt-0">
              <div className="">
                <span className="font-semibold">Native Name:</span>{" "}
                {Object.values(countryData.nativeName)[0].common}
              </div>
              <div className="">
                <span className="font-semibold">Population:</span>{" "}
                {Intl.NumberFormat("en-US").format(
                  Number(countryData.population)
                )}
              </div>
              <div className="">
                <span className="font-semibold">Region:</span>{" "}
                {countryData.region}
              </div>
              <div className="">
                <span className="font-semibold">Sub Region:</span>{" "}
                {countryData.subRegion}
              </div>
              <div className="">
                <span className="font-semibold">Capital:</span>{" "}
                {countryData.capital}
              </div>
            </div>
            <div className="my-8 lg:my-0 flex flex-col gap-y-2">
              <div className="">
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {countryData.topLevelDomain}
              </div>
              <div className="">
                <span className="font-semibold">Currencies:</span>{" "}
                {Object.values(countryData.currencies)[0].name}
              </div>
              <div className="">
                <span className="font-semibold">Languages:</span>{" "}
                {Object.values(countryData.languages).join(", ")}
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
              {getBorderCountries()}
              {/* <Link
                href={"/"}
                className="text-sm theme dark:bg-dark_blue-dark w-fit px-4 py-2 shadow-xl"
              >
                France
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;