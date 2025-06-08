/**
 * 类方法 Promise.all
 * 当所有的Promise状态变成fulfilled状态时，新的Promise状态为fulfilled，并且会将所有Promise的返回值组成一个数组；
 * 当有一个Promise状态为reject时，新的Promise状态为reject，并且会将第一个reject的返回值作为参数；
 * */
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1');
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2');
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3');
  }, 5000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log('Err', err);
  });
