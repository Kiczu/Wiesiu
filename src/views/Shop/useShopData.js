import { useState, useEffect } from "react";
import woocommerceServices from "../../services/woocommerceService";

const useShopData = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const data = await woocommerceServices.getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getAllProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await woocommerceServices.getCategories();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);

  const handleCategoryClick = (e) => {
    const categoryId = e.target.getAttribute("data-category-id");
    const getFilteredProducts = async () => {
      try {
        const data = await woocommerceServices.getProductsByCategoryId(
          categoryId
        );
        setProducts(data);
        setActiveCategory(categoryId);
        console.log(categoryId);
      } catch (error) {
        console.error(error);
      }
    };
    getFilteredProducts();
  };

  return {
    activeCategory,
    products,
    categories,
    setProducts,
    handleCategoryClick,
  };
};

export default useShopData;
