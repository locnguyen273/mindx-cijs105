const findMaxKey = (obj) => {
  let maxKey = null;
  let maxValue = -Infinity;
  for(const key in obj) {
    if(typeof obj[key] === 'number' && obj[key] > maxValue) {
      maxValue = obj[key];
      maxKey = key;
    }
  }

  console.log(`giá trị lớn nhất là: ${maxValue} có key tương ứng là ${maxKey}`);
}

export default findMaxKey;