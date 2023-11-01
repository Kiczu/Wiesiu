import { useState, useEffect } from "react";
import woocommerceServices from "../../services/woocommerceService";

const sortFunctions = {
  price_down: (products) => [...products].sort((a, b) => a.price - b.price),
  price_up: (products) => [...products].sort((a, b) => b.price - a.price),
  popularity: (products) => [...products].sort((a, b) => b.total_sales - a.total_sales),
  date_created_oldest: (products) => [...products].sort((a, b) => new Date(a.date_created) - new Date(b.date_created)),
  date_created_newest: (products) => [...products].sort((a, b) => new Date(b.date_created) - new Date(a.date_created)),
};

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
        const filteredCategories = data.filter(
          (category) => category.count !== 0
        );
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

  const handleSelectChange = (e) => {
    if (sortFunctions[e]) {
      const sortedProducts = sortFunctions[e](products);
      setProducts(sortedProducts);
    }
  };

  return {
    activeCategory,
    categories,
    handleCategoryClick,
    handleSelectChange,
    products,
    setProducts,
  };
};

export default useShopData;
