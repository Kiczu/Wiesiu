import { useState, useEffect } from "react";
import woocommerceApi from "../services/woocommerceService";

const useWooCommerceProducts = (categoryId) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await woocommerceApi.getProductsByCategoryId(categoryId);
                setProducts(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    }, [categoryId]);

    return {products, isLoading};
};

export default useWooCommerceProducts;
