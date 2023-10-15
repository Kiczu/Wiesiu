import api, { endpoints } from "../api/api";

const getProducts = async (perPage = 100) => {
  return api.get(endpoints.woocommerce.products, {
    per_page: perPage,
    consumer_key: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_KEY,
    consumer_secret: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_SECRET,
  });
};

const getCategories = async (params) => {
  return api.get(endpoints.woocommerce.categories, {
    consumer_key: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_KEY,
    consumer_secret: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_SECRET,
  });
};

const getProductsByCategoryId = async (YOUR_CATEGORY_ID) => {
  return api.get(endpoints.woocommerce.categoriesById, {
    category: YOUR_CATEGORY_ID,
    consumer_key: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_KEY,
    consumer_secret: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_SECRET,
  });
};

const woocommerceServices = {
  getProducts,
  getCategories,
  getProductsByCategoryId
};

export default woocommerceServices;
