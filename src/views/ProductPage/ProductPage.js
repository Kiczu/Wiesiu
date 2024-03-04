import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import woocommerceServices from "../../services/woocommerceService";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductGallery from "./ProductGallery/ProductGallery";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

import "./ProductPage.scss";
import { endpoints } from "../../api/api";

const ProductPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [variations, setVatiations] = useState([]);
  const [cart, setCart] = useState([]);
  const [nonce, setNonce] = useState(null);

  // Pobierz koszyk przy pierwszym renderowaniu
  useEffect(() => {
    getCart();
  }, [productData]);

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

  const getCart = async () => {
    try {
      fetch("https://localhost/wp-json/wc/store/v1/cart", {
        credentials: "include",
      }).then((r) => {
        const nonce = r.headers.get("x-wc-store-api-nonce");
        setNonce(nonce);
        return r.json();
      });
    } catch (error) {
      console.error("Błąd podczas dodawania produktu do koszyka", error);
    }
  };

  const addToCart = async (productId) => {
    try {
      fetch("https://localhost/wp-json/wc/store/v1/cart/add-item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Nonce: nonce,
          "X-Wc-Store-Api-Nonce": nonce,
        },
        body: JSON.stringify({
          id: productId,
          quantity: 5,
          varriation: [],
        }),
      })
        .then((r) => r.json())
        .then((r) => console.log(r))
        .catch((error) => console.log(error));
    } catch (error) {
      console.error("Błąd podczas dodawania produktu do koszyka", error);
    }
  };

  console.log(cart);

  if (!productData) return "text loading..."; // Tu bedzie szkielet

  const productGallery = productData.images.slice(1);
  const relatedIDs = productData.related_ids;

  return (
    <section className="product-page-container">
      <ProductDescription
        productData={productData}
        productVariations={variations}
        addToCart={addToCart}
      />
      <ProductGallery productGallery={productGallery} />
      <RelatedProducts relatedIDs={relatedIDs} />
    </section>
  );
};

export default ProductPage;
