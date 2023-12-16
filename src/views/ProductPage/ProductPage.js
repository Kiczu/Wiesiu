import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import woocommerceServices from "../../services/woocommerceService";
import imagePlaceholder from "../../assets/Placeholder_view.png";
import Button from "../../components/Button/Button";
import "./ProductPage.scss";

const ProductPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState();
  const [productGallery, setProductGallery] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await woocommerceServices.getProduct(id);
        setProductData(data);
        const gallery = data.images.slice(1);
        setProductGallery(gallery);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductDetails();
  }, [id]);

if(!productData) return 'text loading...' // Tu bedzie szkielet

  return (
    <section className="product-page-container">
      <div className="desc-container">
        <div className="product-page-image-container">
          <img
            className="product-page-image"
            src={productData.images[0]?.src || imagePlaceholder
            }
            alt={productData.alt}
          />
        </div>
        <div className="product-page-desc-container">
          <h1 className="product-page-name">{productData.name}</h1>
          <p className="product-page-price">{productData.price} zł</p>
          <Button variant={"blue"}>Dodaj do koszyka</Button>
          <p>{productData.description}</p>
        </div>
      </div>
      <div className="gallery-product-container">
        <ul className="gallery-product">
          {productGallery.map((image, i) => (
            <li className="gallery-product-element" key={i}>
              <img src={image.src} alt={image.alt} />
            </li>
          ))} 
        </ul>
      </div>
    </section>
  );
};

export default ProductPage;
