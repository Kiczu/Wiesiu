import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import woocommerceServices from "../../services/woocommerceService";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductGallery from "./ProductGallery/ProductGallery";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import "./ProductPage.scss";

const ProductPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [variations, setVatiations] = useState([]);

  useEffect(() => {
    const fetchProductVariations = async () => {
      try {
        const data = await woocommerceServices.getVariations(id);
        setVatiations(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductVariations();
  }, [id]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await woocommerceServices.getProduct(id);
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (!productData) return "text loading..."; // Tu bedzie szkielet

  const productGallery = productData.images.slice(1);
  const relatedIDs = productData.related_ids;

  return (
    <section className="product-page-container">
      <ProductDescription
        productData={productData}
        productVariations={variations}
      />
      <ProductGallery productGallery={productGallery} />
      <RelatedProducts relatedIDs={relatedIDs} />
    </section>
  );
};

export default ProductPage;
