// Destructuring
// const user = {
//   name: "Long",
//   age: 24,
//   job: "Developer",
// };
// const { name, age, job } = user;
// const { name: userName, age: userAge, job: userJob } = user;
// const list = [
//   1,
//   function sum(a, b) {
//     return a + b;
//   },
// ];
// const [value1, value2] = list;
// console.log(value2(3, 4));
// console.log(userName, userAge, userJob);

//spead syntax

const user = {
  name: "Long",
  age: 24,
  job: ["Developer"],
};
const cloneUser = { ...user };
console.log(cloneUser == user); //Trong JavaScript, toán tử so sánh == sẽ so sánh hai biến dựa trên giá trị của chúng. Tuy nhiên, khi áp dụng toán tử so sánh == cho hai đối tượng, nó sẽ so sánh chỉ định vị của hai đối tượng trong bộ nhớ, không phải so sánh các giá trị của các thuộc tính bên trong đối tượng.
// Do đó, khi bạn sao chép một đối tượng vào một đối tượng khác bằng cách sử dụng toán tử spread { ...user }, bạn đang tạo ra một bản sao mới của đối tượng, nhưng đây vẫn là một đối tượng mới, không phải cùng một đối tượng với user. Và khi bạn so sánh hai đối tượng này bằng toán tử ==, nó sẽ trả về false vì hai đối tượng này có vị trí bộ nhớ khác nhau.

//Rest parameters
// const handle = (a, b, ...c) => {
//   return c;
// };
// const value = handle(1, 2, 3, 4, 5, 6);
const handle = ({ a, b, ...c }) => {
  return c;
};
const value = handle({ a: 1, b: 2, c: 3, d: 4, e: 5 });
console.log(value);
