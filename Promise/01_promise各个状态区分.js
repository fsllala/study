// 1.创建一个promise对象,里面有个回调函数,里面普通代码是同步代码,立即执行
{
  const promise = new Promise(() => {
    console.log(1111111);
  });
  console.log(2222222222);
  // 结果为:先打印1 再打印2
}

// 2.promise基本模板
{
  const promise = new Promise((resolve, reject) => {
    console.log(111);
    // 调用resolve,那么then传入的回调会被执行 (有点类似于下面then中的回调函数是声明函数,这边是函数的执行)
    resolve('哈哈哈');
    console.log(222);
    // 调用reject,那么catch传入的回调会被执行 (有点类似于下面catch中的回调函数是声明函数,这边是函数的执行)
    reject('错误信息');
    console.log(333);
  });

  console.log(555);

  promise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
