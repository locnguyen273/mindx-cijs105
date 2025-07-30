const sortProductsByPrice = (products) => {
  const sortedProducts = products.sort((a, b) => a.price - b.price);
  console.log("Danh sách sản phẩm theo giá từ thấp đến cao: ", sortedProducts);
}
export default sortProductsByPrice;