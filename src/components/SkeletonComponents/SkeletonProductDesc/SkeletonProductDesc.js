import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonProductDesc = () => {
  return (
    <div className="desc-container">
      <div className="product-page-image-container">
        <Skeleton count={1} height={'100%'} />
      </div>
      <div className="product-page-desc-container">
        <h1 className="product-page-name">
          <Skeleton count={1} height={100} />
        </h1>
        <p className="product-page-price">
          <Skeleton count={1} height={50} width={100} />
          <Skeleton count={1} height={80} width={250} />
        </p>
        <Skeleton count={8} height={20} />
      </div>
    </div>
  );
};

export default SkeletonProductDesc;
