/**
 * promise.then相当于监听,resolve/reject会给每个监听的一个信号,所以下面每个promise.then监听都会收到信号,所以都会执行;
 *  pending---resolved
 */
const promise = new Promise((resolve, reject) => {
  resolve('lucy');
});

promise.then((res) => {
  console.log('success', res);
});
promise.then((res) => {
  console.log('success', res);
});
promise.then((res) => {
  console.log('success', res);
});
promise.then((res) => {
  console.log('success', res);
});
