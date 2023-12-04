import React, { useEffect, useState } from "react";
import woocommerceServices from "../../services/woocommerceService";
import { useParams } from "react-router-dom";
import "./ProductPage.scss";

const ProductCard = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(0);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await woocommerceServices.getProduct(id);
        setProductData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductDetails();
  }, [id]);
  return <></>;
};

export default ProductCard;
