import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./SkeletonProductCard.scss";

const SkeletonProductCard = ({ cards }) => {

  return Array.from({length: cards}).map((_, i) => (
    <div key={i} className="skeleton-product">
      <div className="skeleton-product-image">
        <Skeleton count={1} style={{ height: "100%" }} />
      </div>
      <div className="skeleton-product-details">
        <Skeleton count={1} height={30} />
        <Skeleton height={30} />
      </div>
    </div>
  ));
};

export default SkeletonProductCard;
