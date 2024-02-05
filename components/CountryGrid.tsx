'use client'
import { ICountryCard } from "@/utils/interfaces"
import CountryCard from "./CountryCard"
import { useDataStore, useInputStore } from "@/utils/store"
import { useEffect } from "react"

const CountryGrid = ({countryData}: {countryData: ICountryCard[]}) => {
  const {renderCountries, filterCountries, setCountries} = useDataStore()
  const {searchValue} = useInputStore()

  useEffect(() => {
    setCountries(countryData)    
    filterCountries(searchValue)
  }, [searchValue, filterCountries, setCountries, countryData])
  
  return (
    <main className="card-grid">
    {renderCountries.map((country, index) => (
      <CountryCard key={index} {...country} />
    ))}
  </main>
  )
}

export default CountryGrid