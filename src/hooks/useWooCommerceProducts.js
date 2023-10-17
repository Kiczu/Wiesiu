import { useState, useEffect } from "react";
import woocommerceApi from "../services/woocommerceService";

const useWooCommerceProducts = (categoryId) => {
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

export default useWooCommerceProducts;
