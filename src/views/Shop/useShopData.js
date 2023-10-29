import { useState, useEffect } from "react";
import woocommerceServices from "../../services/woocommerceService";

const useShopData = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const data = await woocommerceServices.getProducts();
        setProducts(data);
        setProductsByCategory(sortProductsByCategory(data));
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
        const filteredCategories = data.filter((category) => category.count !== 0);
        setCategories(filteredCategories);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);

  const sortProductsByCategory = (products) => {
    const sortedProducts = {};
    products.forEach((product) => {
      const { categories } = product;
      categories.forEach((category) => {
        if (!sortedProducts[category.id]) {
          sortedProducts[category.id] = [];
        }
        sortedProducts[category.id].push(product);
      });
    });
    return sortedProducts;
  };

  const handleCategoryClick = (e) => {
    const categoryId = e.target.getAttribute("data-category-id");
    setActiveCategory(categoryId);
    setProducts(productsByCategory[categoryId]);
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
