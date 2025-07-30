const findMostExpensiveProduct = (products) => {
  if (products.length === 0) {
    console.log("Danh sách sản phẩm rỗng.");
  } else {
    const mostExpensiveProduct = products.reduce(
      (maxProduct, currentProduct) =>
        currentProduct.price > maxProduct.price ? currentProduct : maxProduct,
      products[0]
    );
    console.log("Sản phẩm đắt nhất: ", mostExpensiveProduct);
  }
};
export default findMostExpensiveProduct;
