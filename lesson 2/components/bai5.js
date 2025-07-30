const isSymmetric = (arr) => {
  // 1234321 => 1234321
  const isFlagSymmetric = JSON.stringify(arr) === JSON.stringify(arr.reverse());
  console.log(`Mảng ${isFlagSymmetric ? 'đối xứng' : 'không đối xứng'}`);
}

export default isSymmetric;