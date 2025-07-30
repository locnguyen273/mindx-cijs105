export const checkNumberIsPrime = (number) => {
  if (isNaN(number)) {
    console.log("Giá trị nhập không hợp lệ.");
  } else {
    if (number) {
      console.log(number + " là số nguyên tố.");
    } else {
      console.log(number + " không phải là số nguyên tố.");
    }
  }
};
