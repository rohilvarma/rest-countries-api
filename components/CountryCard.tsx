import { ICountryCard } from "@/utils/interfaces";
import Image from "next/image";
import Link from "next/link";

const CountryCard = (props: ICountryCard) => {
  return (
    <Link href={props.slug}>
      <div className="rounded-lg bg-white shadow-lg mx-auto dark:bg-dark_blue-dark w-[250px] overflow-hidden">
        <Image
          src={props.imageSrc}
          width={200}
          height={200}
          alt={props.imageAlt}
          className="h-48 object-cover w-full"
        />
        <div className="px-6 pb-8">
          <h3 className="font-black text-lg my-6">{props.name}</h3>
          <div className="flex flex-col gap-y-1 mt-3 text-sm">
            <div className="">
              <span className="font-bold">Population:</span> {Intl.NumberFormat('en-US').format(Number(props.population))}
            </div>
            <div className="">
              <span className="font-bold">Region:</span> {props.region}
            </div>
            <div className="">
              <span className="font-bold">Capital:</span> {props.capital}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
