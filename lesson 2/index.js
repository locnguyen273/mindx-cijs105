import { clickMe } from "./components/demo.js";
// import { sumArray } from "./components/bai1.js";
import sumArray from "./components/bai1.js";
import countOccurrences from "./components/bai2.js";
import removeDuplicates from "./components/bai3.js";
import flattenArray from "./components/bai4.js";
import isSymmetric from "./components/bai5.js";
import findSecondLargest from "./components/bai6.js";
import sortProductsByPrice from "./components/bai7.js";
import findMostExpensiveProduct from "./components/bai8.js";
import groupByType from "./components/bai9.js";
import isSubset from "./components/bai10.js";
import findMaxKey from "./components/bai11.js";

// document.querySelector('.demo').addEventListener('click', clickMe);
document.querySelector(".bai1").addEventListener("click", () => {
  sumArray([1, 2, 3, 4, 5]);
});

document.querySelector(".bai2").addEventListener("click", () => {
  countOccurrences([1, 2, 2, 3, 2, 4], 2);
});

document.querySelector(".bai3").addEventListener("click", () => {
  removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
});

document.querySelector(".bai4").addEventListener("click", () => {
  flattenArray([
    [1, 2],
    [4, 5],
  ]);
});

document.querySelector(".bai5").addEventListener("click", () => {
  isSymmetric([1, 2, 3, 4, 5, 3, 2, 1]);
});

document.querySelector(".bai6").addEventListener("click", () => {
  findSecondLargest([3, 1, 4, 2, 4, 6]);
});

document.querySelector(".bai7").addEventListener("click", () => {
  sortProductsByPrice([
    { name: "Product A", price: 30 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 50 },
  ]);
});

document.querySelector(".bai8").addEventListener("click", () => {
  findMostExpensiveProduct([
    { name: "Product A", price: 30 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 50 },
  ]);
});

document.querySelector(".bai9").addEventListener("click", () => {
  groupByType([
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" },
    { type: "fruit", name: "banana" },
  ]);
});

document.querySelector(".bai10").addEventListener("click", () => {
  isSubset([1, 2, 3, 4, 5], [2, 3, 6]);
});

document.querySelector(".bai11").addEventListener("click", () => {
  findMaxKey({ a: 10, b: 20, c: 15 });
});
