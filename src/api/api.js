export const endpoints = {
    instagram: {
        me: 'https://graph.instagram.com/v12.0/me/',
        media: 'https://graph.instagram.com/v12.0/me/media/'
    },
    woocommerce: {
      products: 'https://wiesiu.pl/wp-json/wc/v3/products',
      categories: 'https://wiesiu.pl/wp-json/wc/v3/products/categories',
      categoriesById: 'https://wiesiu.pl/wp-json/wc/v3/products',
      cart: 'https://wiesiu.pl/wp-json/wc/v3/cart',
      addToCart: 'https://wiesiu.pl/wp-json/wc/v3/cart/add',
  }
}

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
  }

  export default api
  