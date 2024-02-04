"use client";
import { usePathname } from "next/navigation";
import CountryDetail from "@/components/CountryDetail";

const CountryPage = () => {
  const pathName = usePathname();
  return <CountryDetail pathName={pathName} />;
};

export default CountryPage;
