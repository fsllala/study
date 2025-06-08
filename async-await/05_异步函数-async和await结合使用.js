function foo1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('foo1ing');
    }, 2000);
  });
}

async function foo2() {
  console.log('------f002');
  return 123;
}

async function foo3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('foo3ing');
    }, 1000);
  });
}

async function bar() {
  const res1 = await foo1();
  console.log(res1);

  const res2 = await foo2();
  console.log(res2);

  const res3 = await foo3();
  console.log(res3);
}

bar();
