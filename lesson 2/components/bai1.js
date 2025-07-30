const sumArray = (array) => {
  const sum = array.reduce((sum, current) => sum + current, 0);
  console.log(`Tổng của mảng là: ${sum}`);
}

export default sumArray;