/**
 * 类方法 Promise.any
 * any方法和race方法区别为:any方法会等到一个fulfilled状态，才会决定新Promise的状态；
 * 即:any方法是获取到第一个成功的结果
 * 都失败,会走catch ,err为: AggregateError: All promises were rejected
 * */
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p1');
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2');
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3');
  }, 5000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log('Err', err);
  });
