/**
 * promise.catch相当于监听,resolve/reject会给每个监听的一个信号,所以下面每个promise.catch监听都会收到信号,所以都会执行;
 *  pending---rejected
 */
{
  const promise = new Promise((resolve, reject) => {
    reject('isErroring');
  });

  promise.catch((err) => {
    console.log('Error', err);
  });
  promise.catch((err) => {
    console.log('Error', err);
  });
  promise.catch((err) => {
    console.log('Error', err);
  });
  promise.catch((err) => {
    console.log('Error', err);
  });
}

console.log('*'.repeat(66));
/**
 * 这样写会报错: Uncaught (in promise) isErroring
 * 因为:失败的时候,reject会给每个监听的一个信号, promise.then也是监听,所以也会告诉的,但是promise.then没有监听(处理)reject,所以会报错;
 */
{
    const promise = new Promise((resolve, reject) => {
        reject("isErroring")
    })

    promise.then(res => {
        console.log("success", res);
    })

    promise.catch(err => {
        console.log("Error", err);
    })
    promise.catch(err => {
        console.log("Error", err);
    })
    promise.catch(err => {
        console.log("Error", err);
    })
    promise.catch(err => {
        console.log("Error", err);
    })
}

console.log('*'.repeat(66));

/**
 * promise.then之后再.catch对reject进行监听;
 * 所以平时写的时候,.then之后一般都会跟一个.catch
 *
 */
const promise = new Promise((resolve, reject) => {
  reject('catch');
});

promise
  .then((res) => {
    console.log('success', res);
  })
  .catch((err) => {
    console.log('Error', err);
  });

promise.catch((err) => {
  console.log('Error', err);
});
promise.catch((err) => {
  console.log('Error', err);
});
promise.catch((err) => {
  console.log('Error', err);
});
promise.catch((err) => {
  console.log('Error', err);
});
