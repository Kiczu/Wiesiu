import React, { useEffect, useState } from "react";
import woocommerceServices from "../../../services/woocommerceService";
import Slider from "../../../components/Slider/Slider";
import "../RelatedProducts/RelatedProducts.scss";

const RelatedProducts = ({ relatedIDs }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const data = await woocommerceServices.getRelatedProducts(relatedIDs);
        setRelatedProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRelatedProducts();
  }, [relatedIDs]);

  return (
    <div className="related-products">
      <h2>Podobne produkty</h2>
      <Slider
        products={relatedProducts}
        autoPlay={false}
        showProductsPerPage={3}
      />
    </div>
  );
};

export default RelatedProducts;
