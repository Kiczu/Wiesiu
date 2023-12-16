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

const getProductsByCategoryId = async (categoryId) => {
  return api.get(endpoints.woocommerce.categoriesById, {
    category: categoryId,
    consumer_key: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_KEY,
    consumer_secret: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_SECRET,
  });
};

const getProduct = async (id) => {
  return api.get(endpoints.woocommerce.categoriesById + `/${id}`, {
    consumer_key: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_KEY,
    consumer_secret: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_SECRET,
  });
};

const getRelatedProducts = async (relatedIDs) => {
  return api.get(endpoints.woocommerce.products, {
    consumer_key: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_KEY,
    consumer_secret: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_SECRET,
    include: relatedIDs,
  });
};

const woocommerceServices = {
  getProducts,
  getCategories,
  getProduct,
  getProductsByCategoryId,
  getRelatedProducts,
};

export default woocommerceServices;
