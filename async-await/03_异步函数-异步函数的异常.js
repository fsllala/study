//  1. 函数内语法错了,会捕获异常
{
  async function foo() {
    console.log('-----------------1');
    console.log('-----------------2');
    'xxx'.map();
    console.log('-----------------3');

    return 123;
  }

  foo()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log('err',err); // err TypeError: "xxx".map is not a function
    });
}

// 直接return promise reject

{
  async function foo() {
    console.log('-----------------1');
    console.log('-----------------2');
    console.log('-----------------3');

    return new Promise((resovle, reject) => {
      reject('cuola!~~');
    });
  }

  foo()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log('err',err); // err cuola!~~
    });
}
