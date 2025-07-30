const countOccurrences = (arr, value) => {
  const arrReplacement = arr.filter(item => item === value);
  console.log(`Số lần xuất hiện của ${value} trong mảng là: ${arrReplacement.length}`);
}

export default countOccurrences;