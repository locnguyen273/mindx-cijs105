const removeDuplicates = (arr) => {
  // filter kết hợp với indexOf để loại bỏ các phần tử trùng lặp
  // const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);

  const uniqueArr = [...new Set(arr)];
  console.log(`Mảng sau khi loại bỏ phần tử trùng lặp: ${uniqueArr}`);
}

export default removeDuplicates;