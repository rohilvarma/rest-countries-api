const SkeletonCard = () => {
  return (
    <div className="rounded-lg bg-white shadow-lg mx-auto dark:bg-dark_blue-dark w-[250px] animate-pulse overflow-hidden">
      <div className="bg-gray-300 dark:bg-gray-700 h-48 w-full"></div>
      <div className="px-6 pb-8">
        <div className="bg-gray-300 dark:bg-gray-700 rounded-full h-3 w-3/4 my-6"></div>
        <div className="flex flex-col gap-y-1">
          <div className="bg-gray-300 dark:bg-gray-700 rounded-full h-2 w-1/2"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded-full h-2 w-1/4"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded-full h-2 w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
