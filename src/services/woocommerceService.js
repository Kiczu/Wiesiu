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

const getProductsByIds = async (relatedIDs) => {
  return api.get(endpoints.woocommerce.products, {
    consumer_key: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_KEY,
    consumer_secret: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_SECRET,
    include: relatedIDs,
  });
};
const getVariations = async (productId, perPage = 100) => {
  return api.get(endpoints.woocommerce.categoriesById + `/${productId}/variations`, {
    per_page: perPage,
    consumer_key: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_KEY,
    consumer_secret: process.env.REACT_APP_WOOCOMMERCE_CONSUMER_SECRET,
  });
};
const getCart = async () => {
  const headers = {
    Authorization: `Bearer ${process.env.REACT_APP_WOOCOMMERCE_CONSUMER_KEY}:${process.env.REACT_APP_WOOCOMMERCE_CONSUMER_SECRET}`,
  };
  return api.get(endpoints.woocommerce.cart, {}, headers);
};

const addToCart = async (
  productId,
  quantity,
  productName,
  // productImg,
  productPrice
) => {
  const data = {
    product_id: productId,
    quantity: quantity,
    product_name: productName,
    // product_img: productImg,
    product_price: productPrice,
    // Dodaj inne niezbędne informacje o produkcie
  };

  const headers = {
    Authorization: `Bearer ${process.env.REACT_APP_WOOCOMMERCE_CONSUMER_KEY}:${process.env.REACT_APP_WOOCOMMERCE_CONSUMER_SECRET}`,
    "Content-Type": "application/json",
  };

  return api.post(endpoints.woocommerce.addToCart, data, headers);
};

const woocommerceServices = {
  getProducts,
  getCategories,
  getProductsByCategoryId
};

export default woocommerceServices;
