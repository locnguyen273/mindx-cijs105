export const findNumberMaxOfArr = (arr) => {
  const isNumberMax = arr?.reduce((max, current) => current > max ? current : max);
  console.log("Giá trị lớn nhất là:", isNumberMax);
}