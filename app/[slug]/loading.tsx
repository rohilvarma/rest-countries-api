import Link from 'next/link'
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

const Loading = () => {
  return <div className="container">
  <Link
    href={"/"}
    className="flex items-center gap-x-2 text-sm theme dark:bg-dark_blue-dark w-fit px-4 py-2 shadow-xl mt-12 mb-16"
  >
    <BsArrowLeft /> Back
  </Link>
  <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 animate-pulse">
  <div className="bg-gray-300 dark:bg-gray-700 h-72 w-full"></div>
    <div className="text-sm lg:text-base">
      <h3 className="bg-gray-300 dark:bg-gray-700 rounded-full h-5 w-1/2 my-6"></h3>
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-4">
        <div className="flex flex-col gap-y-2 mt-3 lg:mt-0">
          <div className="flex items-center">
            <span className="font-semibold">Native Name:</span> <span className="bg-gray-300 dark:bg-gray-700 rounded-full h-3 w-1/2 ml-2"></span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">Population:</span><span className="bg-gray-300 dark:bg-gray-700 rounded-full h-3 w-1/2 ml-2"></span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">Region:</span> <span className="bg-gray-300 dark:bg-gray-700 rounded-full h-3 w-1/2 ml-2"></span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">Sub Region:</span><span className="bg-gray-300 dark:bg-gray-700 rounded-full h-3 w-1/2 ml-2"></span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">Region:</span><span className="bg-gray-300 dark:bg-gray-700 rounded-full h-3 w-1/2 ml-2"></span>
          </div>
        </div>
        <div className="my-8 lg:my-0 flex flex-col gap-y-2">
          <div className="flex items-center">
            <span className="font-semibold">Top Level Domain:</span><span className="bg-gray-300 dark:bg-gray-700 rounded-full h-3 w-[50px] ml-2"></span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">Currencies:</span><span className="bg-gray-300 dark:bg-gray-700 rounded-full h-3 w-1/4 ml-2"></span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">Languages:</span><span className="bg-gray-300 dark:bg-gray-700 rounded-full h-3 w-1/2 ml-2"></span>
          </div>
        </div>
      </div>
      <div className="mb-16 lg:mt-20">
        <h3 className="font-semibold text-base mb-4 lg:hidden">Border Countries:</h3>
        <div className="flex gap-3 flex-wrap items-center">
        <h3 className="font-semibold text-base hidden lg:block">Border Countries:</h3>
          <Link
            href={"/"}
            className="text-sm theme dark:bg-dark_blue-dark w-fit px-4 py-2 shadow-xl"
          >
            Loading...
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
}

export default Loading