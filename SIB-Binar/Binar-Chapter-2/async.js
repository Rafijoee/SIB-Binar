// const requestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     {
//       setTimeout(() => {
//         if (delay > 2000) {
//           reject("Connection timeout");
//         } else {
//           resolve(`Success! ${url} diunduh dalam ${delay}ms`);
//         }
//       }, delay);
//     }
//   });
// };

// requestPromise("www.google.com")

const strArray = ["Javascript", "Python", "PHP", "Java", "C++"];

function foreach (arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(callback(arr[i], i));
  }
  return newArray;
}
  

const lenArray = foreach(strArray, (item, index) => {
  return item.length;
});

console.log(lenArray); // [10, 6, 3, 4, 3]

