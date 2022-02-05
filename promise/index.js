// callback function

function fetchData(url, cb) {
  setTimeout(() => {
    cb(url);
  }, 1000);
}

// callback hell
fetchData('example.com', (data) => {
  fetchData(`example.com/${data}`, () => {
    fetchData(`example.com/${data}`, () => {
      fetchData(`example.com/${data}`, () => {
        fetchData(`example.com/${data}`, () => {
          console.log(data);
        });
      });
    });
  });
});

/**
 * 三种状态
 * pending resolved(fulfilled) rejected
 *
 * 状态变化不可逆
 * pending -> resolved
 * pending -> rejected
 *
 * 为了获取resolved的结果，我们用.then函数来监听
 * .then 接受一个callback function，在这个callback function里返回的是一个新的promise
 * 为了获取rejected的结果，或者抓取错误
 * .catch 接受一个callback function，在这个callback function里返回的是一个新的promise
 */
// res -> resolve
// rej -> reject
const promise = new Promise((res, rej) => {
  setTimeout(() => {
    // throw new Error
    res({ name: 'mason' });
  }, 1000);
});

let isLoading = true;
// promise chain
promise
  .then(
    (res) => {},
    (error) => {}
  )
  .catch((result) => {
    return 1;
  })
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((result) => {})
  .catch((result) => {})
  .finally(() => {
    isLoading = false;
  });

// syntax sugar
// 如果出现await，一定需要加上async
async function main() {
  try {
    const result = await promise;
    const result1 = await foo(result);

    console.log(1);
  } catch (e) {
    console.log(e);
  }

  try {
    const result = await promise;
  } catch (e) {}

  const a = await 1;
  // await Promise.resolve(1);
}

// Promise.all([promise, promise]);

// Promise.resolve(1) => new Promise((res, rej) => res(1));
// async () => {}
