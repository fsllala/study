/**
 * 类方法 Promise.race
 * race是竞技、竞赛的意思，表示多个Promise相互竞争，谁先有结果，那么就使用谁的结果； 无论是fulfilled还是rejected
 * */
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1');
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2');
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p3');
  }, 5000);
});

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log('Err', err);
  });
