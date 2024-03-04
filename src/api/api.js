const envs = {
  production: "https://wiesiu.pl/wp-json/wc",
  development: "https://localhost/wp-json/wc",
};

const baseUrl = envs[process.env.NODE_ENV];

export const endpoints = {
  instagram: {
    me: "https://graph.instagram.com/v12.0/me/",
    media: "https://graph.instagram.com/v12.0/me/media/",
  },
  woocommerce: {
    products: baseUrl + "/v3/products",
    categories: baseUrl + "/v3/products/categories",
    categoriesById: baseUrl + "/v3/products",
    cart: baseUrl + "/store/v1/cart",
    addToCart: baseUrl + "/store/v1/cart/add-item",
  },
};

const formatParams = (params) => {
  if (!params || Object.keys(params).length === 0) {
    return "";
  }

  const searchParams = new URLSearchParams(params);
  return "/?" + searchParams.toString();
};

const get = async (endpoint, params) => {
  const paramsUri = formatParams(params);
  const response = await fetch(endpoint + paramsUri);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
};

const post = async (endpoint, data) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
};

const api = {
  get,
  post,
};

export default api;
