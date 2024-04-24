import { useState, useEffect } from "react";
import woocommerceApi from "../services/woocommerceService";

const useGetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await woocommerceApi.getCategories();
        const allCategory = { id: "all", name: "Wszystko", slug: "all" };
        const filteredCategories = data.filter((category) => category.count !== 0);
        setCategories([allCategory, ...filteredCategories]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { categories, isLoading };
};

export default useGetCategories;
