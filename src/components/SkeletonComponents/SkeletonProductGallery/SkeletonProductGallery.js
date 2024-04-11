import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonProductGallery = () => {
  return (
    <div className="gallery-product-container">
      <ul className="gallery-product">
          <li className="gallery-product-element">
            <Skeleton count={1} />
            <Skeleton count={1} />
          </li>
      </ul>
    </div>
  );
};

export default SkeletonProductGallery;
