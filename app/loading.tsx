import DropdownFilter from "@/components/DropdownFilter";
import Search from "@/components/Search";
import SkeletonCard from "@/components/SkeletonCard";

const Loading = () => {
  return (
    <div className="">
      <div className="container lg:flex lg:justify-between lg:items-center">
        <Search />
        <DropdownFilter />
      </div>
      <div className="card-grid">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};

export default Loading;
