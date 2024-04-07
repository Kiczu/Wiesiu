import Skeleton from "react-loading-skeleton";
import "./SkeletonProductCard.scss";

const SkeletonProductCard = ({ cards }) => {
  return Array.from(cards)
    .fill(0)
    .map((_, i) => (
      <div className="skeleton-product">
        <div className="skeleton-product-image">
          <Skeleton height={150} width={150} />
        </div>
        <div className="skeleton-product-details">
          <div className="skeleton-product-name">
            <Skeleton height={20} width={100} />
          </div>
          <div className="skeleton-product-price">
            <Skeleton height={20} width={50} />
          </div>
        </div>
      </div>
    ));
};

export default SkeletonProductCard;
