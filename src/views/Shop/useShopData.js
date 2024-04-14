import { useState, useEffect, useMemo } from "react";
import woocommerceServices from "../../services/woocommerceService";
import useAllProducts from "../../hooks/useGetAllProducts";
import { SORTING_OPTION } from "../../components/Selects/SortingSelects/SortingSelect";
import useGetCategories from "../../hooks/useGetCategories";

const sortFunctions = {
  [SORTING_OPTION.PRICE_DOWN]: (a, b) => a.price - b.price,
  [SORTING_OPTION.PRICE_UP]: (a, b) => b.price - a.price,
  [SORTING_OPTION.POPULARITY]: (a, b) => b.total_sales - a.total_sales,
  [SORTING_OPTION.THE_OLDEST]: (a, b) =>
    new Date(a.date_created) - new Date(b.date_created),
  [SORTING_OPTION.THE_NEWEST]: (a, b) =>
    new Date(b.date_created) - new Date(a.date_created),
};

const useShopData = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [activeSort, setActiveSort] = useState("dateCreatedNewest");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const allProductsHook = useAllProducts();
  const allCategoriesHook = useGetCategories();

  const toggleMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  useEffect(() => {
    setProducts(allProductsHook.products);
    setProductsByCategory(sortProductsByCategory(allProductsHook.products));
    setIsLoadingProducts(allProductsHook.isLoading);
  }, [allProductsHook.products, allProductsHook.isLoading]);

  useEffect(() => {
    setAllProducts(allProductsHook.products);
  }, [allProductsHook.products]);

  useEffect(() => {
    setCategories(allCategoriesHook.categories);
    setIsLoadingCategories(allCategoriesHook.isLoading);
  }, [allCategoriesHook.categories, allCategoriesHook.isLoading]);

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

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);

    if (categoryId === "all") {
      setProducts(allProducts);
    } else {
      setProducts(productsByCategory[categoryId]);
    }
  };

  const handleSelectChange = (selectedSort) => {
    setActiveSort(selectedSort);
  };

  const visibleProducts = useMemo(() => {
    if (activeSort) {
      return [...products].sort(sortFunctions[activeSort]);
    }

    return products;
  }, [activeSort, products]);

  return {
    activeCategory,
    categories,
    handleCategoryClick,
    handleSelectChange,
    products,
    setProducts,
    visibleProducts,
    toggleMenu,
    isFilterMenuOpen,
    isLoadingProducts,
    isLoadingCategories,
  };
};

export default useShopData;
