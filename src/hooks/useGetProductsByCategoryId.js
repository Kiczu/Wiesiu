import { useState, useEffect } from "react";
import woocommerceApi from "../services/woocommerceService";

const useGetProductsByCategoryId = (categoryId) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await woocommerceApi.getProductsByCategoryId(categoryId);
                setProducts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, [categoryId]);

    return {products, isLoading};
};

export default useGetProductsByCategoryId;
