import Skeleton from "react-loading-skeleton";
import SkeletonProductCard from "../SkeletonProductCard/SkeletonProductCard";
import "react-loading-skeleton/dist/skeleton.css";
import "./SkeletonSlider.scss";

const SkeletonSlider = ({ cards }) => {
  return (
    <div className="skeleton-slider">
      <div className="skeleton-slider-container">
        <div className="skeleton-slider-products">
          {Array.from({ length: cards }, (_, i) => (
            <SkeletonProductCard key={i} cards={1} />
          ))}
        </div>
        <div className="skeleton-slider-product">
          <SkeletonProductCard cards={1} />
        </div>
      </div>
      <div className="skeleton-slider-pagination">
        <Skeleton width={150} height={30} />
      </div>
    </div>
  );
};

export default SkeletonSlider;
