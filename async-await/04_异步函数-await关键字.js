// 1. await 只能在 异步函数中(async修饰的函数) 使用
{
  async function foo() {
      console.log("-------------");
      const res = await 123;
      console.log(res);
      console.log('+++++++++++');
  }
  foo();
  /**
   * 依次顺序输出
   * -------------
   * 123
   * +++++++++++
   */
}

/**2.
 * 通常使用await是后面会跟上一个表达式，这个表达式会返回一个Promise；
 * 那么await会等到Promise的状态变成fulfilled状态，之后继续执行异步函数；
 *
 * 如果 await 后续返回一个promise,那么等待promise有结果之后,才会执行后续的代码
 * */
{
  function bar() {
      return new Promise(resolve => {
          setTimeout(() => {
              resolve("bar的promise")
          }, 3000);
      })
  }
  async function foo() {
      console.log("-------------");
      // await 后续返回一个promise,那么等待promise有结果之后,才会执行后续的代码
      const res = await bar();
      console.log(res);
      console.log("++++++++++++");
  }
  foo();
}

/**
 * 3.如果await 等待的promise 是reject,那么会作为整个async异步函数promise的异常抛出去
 */

{
  // 3.1 通过异步函数的catch捕获异常
  function bar() {
      return new Promise((resolve,reject) => {
          setTimeout(() => {
              reject("bar的promise")
          }, 3000);
      })
  }
  async function foo() {
      console.log("-------------");
      // await 后续返回一个promise,那么等待promise有结果之后,才会执行后续的代码
      const res = await bar();
      console.log('res',res);
      console.log("++++++++++++");
  }
  foo().catch(err=>{
      console.log('err',err);
  })

  // 3.2通过 try...catch捕获异常
  function bar() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('bar的promise');
      }, 3000);
    });
  }
  async function foo() {
    try {
      console.log('-------------');
      // await 后续返回一个promise,那么等待promise有结果之后,才会执行后续的代码
      const res = await bar();
      console.log('res',res);
      console.log('++++++++++++');
    } catch (error) {
      console.log('error',error);
    }
  }
  foo();
}
