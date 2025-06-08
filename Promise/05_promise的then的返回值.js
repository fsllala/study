/** 1
 *  promise.then().catch();
 * 前面demo可得知,可以promise.then();也可以promise.catch();
 * 所以promise.then().catch();说明 promise.then()的返回值也是一个promise
 */
{
  const promise = new Promise((resolve, reject) => {});
  promise.then().catch();
}

/** 2
 * 链式调用:
 * promise.then()的返回值也是一个promise
 * 所以可以一直.then();最后.catch()
 */
{
  const promise = new Promise((resolve, reject) => {});
  promise.then().then().then().then().catch();
}

/** 3
 * 第一个.then是promise的 pending--fulfilled  resolve 执行的;
 * 第二个.then是第一个.then返回的promise.resolve来决定执行的;
 * 第三个.then是第二个.then返回的promise.resolve来决定执行的;
 */
{
  const promise = new Promise((resolve, reject) => {
      resolve("链式.then调用")
  })
  promise.then(res => {
      console.log("第一个", res);
  }).then(res => {
      console.log("第二个", res);  //"第二个",undefined
  }).then(res => {
      console.log("第三个", res); //"第三个",undefined
  }).catch(err => {
      console.log("err", err);
  })
}

/** 4
 * return
 * then函数里面可以有返回值,被下一个then的形参接收;
 * 没写return xxx,就是默认的函数返回值---undefined
 *
 */
{
  const promise = new Promise((resolve, reject) => {
      resolve("链式.then调用")
  })
  promise.then(res => {
    setTimeout(() => {
      console.log("第一个", res);
    }, 0);
      return "Aaaaa";
  }).then(res => {
      console.log("第二个", res);
      return "bbbbb";
  }).then(res => {
      console.log("第三个", res);
  }).catch(err => {
      console.log("err", err);
  })
}

/** 5
 * 如果返回的是一个Promise对象,下一个then的形参接收到的不是这个Promise对象,而是这个Promise对象内部的resolve函数的实际参数;
 */

{
  const promise = new Promise((resolve, reject) => {
    resolve('666');
  });

  const newPromise = new Promise((resolve, reject) => {
    resolve('返回一个promise');
  });

  promise
    .then((res) => {
      setTimeout(() => {
        console.log('first', res); // first 666
      }, 2000);
      return newPromise;
    })
    .then((res) => {
      console.log('Second', res); // Second 返回一个promise
    })
    .catch((err) => {
      console.log('err', err);
    });
}
