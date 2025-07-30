const findSecondLargest = (arr) => {
  const uniqueArr = [...new Set(arr)];
  if(uniqueArr.length < 2) {
    console.log("Mảng không đủ phần tử để tìm giá trị lớn thứ hai.");
  } else {
    uniqueArr.sort((a, b) => b - a);
    console.log(`Giá trị lớn thứ hai trong mảng là: ${uniqueArr[1]}`);
  }
} 
export default findSecondLargest;