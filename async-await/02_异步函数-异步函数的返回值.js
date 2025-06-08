//  1. 普通函数 默认返回值是 undefined

// 2. async修饰的函数,默认返回的是 promise(可以鼠标放到函数执行上,可以看到返回值是一个Promise)
{
  async function foo() {}

  const aa = foo();
  console.log(aa); // Promise {<fulfilled>: undefined}
}

// 3.async修饰的函数,里面写了return XXX, 其实是 Promise.resolve(xxx);
{
  async function foo() {
    // 1. 返回一个普通值
    // return 123;

    // 2.返回promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('fsllala');
      }, 2000);
    });
  }

  foo().then((res) => {
    console.log(res);
  });
}
