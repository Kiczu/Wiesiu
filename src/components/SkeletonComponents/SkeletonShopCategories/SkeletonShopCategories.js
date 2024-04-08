import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./SkeletonShopCategories.scss";

const SkeletonShopCategories = ({ categories }) => {

  return Array.from({length: categories}).map((_, i) => (
    <p key={i} className="skeleton-category-item">
        <Skeleton count={1} height={20} />
    </p>
  ));
};

export default SkeletonShopCategories;
