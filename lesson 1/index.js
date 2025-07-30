// const firstName = "Nguyễn";
// const lastName = "Văn A";
// const age = 25;
// console.log("Họ và tên: " + firstName + " " + lastName);
// console.log(`Họ và tên: ${firstName} ${lastName}. Tuổi: ${age}`);
// // console.log("Tuổi: " + age);

// function hello() {
//   console.log("Hello, World!");
// }

// const helloArrow = () => {
//   console.log('arrow function');
// }

// bài 1
// const printLiteralTemplate = (product, price) => {
//   console.log(`Sản phẩm: ${product}, Giá: ${price} VNĐ`);
// };

// printLiteralTemplate("Sách", 50000);

// // bài 2
// const greet = (name) => console.log(`Xin chào, ${name}!`);
// greet("Nguyễn Văn A");

// // bài 3
// const sumUpToNumber = (n) => {
//   // từ 1 đến n
//   const result = (n * (n + 1)) / 2;
//   return `Tổng từ 1 đến ${n} là: ${result}`;
// };

// // bài 4 tính bình phương
// const square = (n) => {
//   return n * n;
// };
// console.log(square(5)); // 25

// const checkEvenOdd = (n) => {
//   if (n % 2 === 0) {
//     // n % 2 === 0 là số chẵn; n % 2 !== 0 || n % 2 === 1 là số lẻ
//     return `${n} là số chẵn`;
//   } else {
//     return `${n} là số lẻ`;
//   }
// };
// console.log(checkEvenOdd(10)); // 10 là số chẵn
// console.log(checkEvenOdd(7)); // 7 là số lẻ

// // bài 6
// const returnFirstElement = (arr) => {
//   // [1, 2, 3]
//   if (arr.length === 0) {
//     return "Mảng rỗng";
//   }
//   // return `Phần tử đầu tiên là: ${arr[0]}`;
//   arr.map((item, index) => {
//     return console.log(`Phần tử ${index} có giá trị ${item}`);
//   });
// };

// // console.log(returnFirstElement([10, 2, 3])); // Phần tử đầu tiên là: 1
// returnFirstElement([10, 2, 3]);

// // bài 7
// const sumWithRestOperators = (...arrInput) => {
//   const arr = [...arrInput];
//   // for(let i = 0 ; i < arr.length; i++) {}
//   return arr.reduce((tong, current) => current + tong, 0); // tong = 0,
// };
// console.log(sumWithRestOperators(1, 2, 3, 4));

// // bài 21 merge arrays
// const mergeArrays = (arr1, arr2) => {
//   return [...arr1, ...arr2];
// };
// console.log(mergeArrays([1, 2], [3, 4]));

// // bài 8
// const destructuringObject = (objInput) => {
//   const { firstName, lastName, age, address } = objInput; // destructuring object
//   console.log(
//     `Họ và tên: ${firstName} ${lastName}, Tuổi: ${age}, địa chỉ: ${address}`
//   );
// };
// destructuringObject({
//   firstName: "Nguyễn",
//   lastName: "Văn A",
//   age: 25,
//   address: "Hà Nội",
// });

// const printListNameOfPeople = (people) => {
//   people?.length > 0 &&
//     people?.map((person) => {
//       console.log(person.fullName);
//       // return person.fullName
//     });
// };

// printListNameOfPeople([
//   { fullName: "Nguyễn Văn A", age: 25, address: "Hà Nội" },
//   { fullName: "Trần Thị B", age: 30, address: "Hải Phòng" },
//   { fullName: "Lê Văn C", age: 28, address: "Đà Nẵng" },
// ]);

// // bài 10
// const convertTextToUpperCase = (text) => {
//   // !! check null với undefined
//   // !!text && console.log(text.toUpperCase());
//   if (!!text) {
//     console.log("viết hoa hết", text.toUpperCase());
//     console.log("viết thường hết", text.toLowerCase());
//   } else {
//     console.log("Không có dữ liệu để chuyển đổi");
//   }
// };

// convertTextToUpperCase("hello world");

// // bài 12
// const convertCurrency = (amount) => {
//   return amount.toLocaleString("vi-VN", {
//     style: "currency",
//     currency: "VND",
//   });
// };

// console.log(convertCurrency(1000000)); // 1.000.000 ₫

// import function from another file
import { findNumberMaxOfArr } from "./findNumberMaxOfArr.js";
import { checkNumberIsPrime } from "./checkNumberIsPrime.js";

document.querySelector(".lesson-13").addEventListener("click", () => {
  const arr = [1, 2, 3, 4, 5];
  findNumberMaxOfArr(arr);
});

document.querySelector(".lesson-14").addEventListener("click", () => {
  const input = prompt("Nhập một số nguyên dương:");
  const number = parseInt(input);
  checkNumberIsPrime(number);
});
