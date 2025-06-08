// 无论pending变成fulfilled还是rejected,一定会执行;
const promise = new Promise((resolve, reject) => {
  resolve('213');
});

promise
  .then((res) => {
    console.log('success', res);
  })
  .catch((err) => {
    console.log('err', err);
  })
  .finally(() => {
    console.log('一定会执行');
  });
