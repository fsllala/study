/**
 * 只会输出success lucy
 * 因为代码从上往下执行, pending状态到了 resolved,状态就不可以修改了,所以reject不会执行;
 */
{
  const promise = new Promise((resolve, reject) => {
    resolve('lucy');
    reject('hhee');
  });

  promise
    .then((res) => {
      console.log('success', res);
    })
    .catch((err) => {
      console.log('error', err);
    });
}

/**
 * 只会输出success lucyOnly
 * 因为代码从上往下执行, pending状态到了 resolved,状态就不可以修改了,所以后面的resolve不会执行;
 */
{
  const promise = new Promise((resolve, reject) => {
    resolve('lucyOnly');
    resolve('lucy2');
    resolve('lucy3');
    resolve('lucy4');
    resolve('lucy5');
    resolve('lucy6');
  });

  promise
    .then((res) => {
      console.log('success', res);
    })
    .catch((err) => {
      console.log('error', err);
    });
}