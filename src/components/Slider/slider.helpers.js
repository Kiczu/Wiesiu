export const groupPerSlide = (products, productsPerPage) => {
    const result = [];
    for(let i = 0; i < products.length; i += productsPerPage) {
        const slide = products.slice(i, i + productsPerPage);
        result.push(slide);
    }
    return result;
};