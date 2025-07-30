const groupByType = (products) => {
  const grouped = products.reduce((result, product) => {
    if (!result[product.type]) {
      result[product.type] = [];
    }
    result[product.type].push(product.name);
    return result;
  }, {});

  console.log(grouped)
};

export default groupByType;
