const isSubset = (arr1, arr2) => {
  const isFlagSubset = arr2.every((item) => arr1.includes(item));
  console.log(isFlagSubset ? "arr2 is a subset of arr1" : "arr2 is not a subset of arr1");
}

export default isSubset;