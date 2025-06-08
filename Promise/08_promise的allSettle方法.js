/**
 * 类方法 Promise.allSettled
 * */
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p111');
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2222');
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p3333');
  }, 5000);
});

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log('Err', err);
  });
