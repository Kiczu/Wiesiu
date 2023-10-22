import { useState, useEffect } from "react";
import woocommerceApi from "../services/woocommerceService";

const useProductsByCategoryId = (categoryId) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await woocommerceApi.getProductsByCategoryId(categoryId);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [categoryId]);

  return products;
};

const useAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await woocommerceApi.getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);
  return products;
};

const useWooCommerce = {
  useProductsByCategoryId,
  useAllProducts,
};

export default useWooCommerce;
