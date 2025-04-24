// 프로미스 순차 실행

const nums = [1, 2, 3];

function delayPrint(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(n);
      resolve();
    }, 1000);
  });
}

nums.reduce((promise, n) => {
  return promise.then(() => delayPrint(n));
}, Promise.resolve());

// Promise.resolve()
//   .then(() => delayPrint(1))
//   .then(() => delayPrint(2))
//   .then(() => delayPrint(3));
