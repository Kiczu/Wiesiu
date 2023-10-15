export const endpoints = {
    instagram: {
        me: 'https://graph.instagram.com/v12.0/me/',
        media: 'https://graph.instagram.com/v12.0/me/media/'
    },
    woocommerce: {
      products: 'https://wiesiu.pl/wp-json/wc/v3/products',
      categories: 'https://wiesiu.pl/wp-json/wc/v3/products/categories',
      categoriesById: 'https://wiesiu.pl/wp-json/wc/v3/products',
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

  const api = {
    get,
  }

  export default api
  