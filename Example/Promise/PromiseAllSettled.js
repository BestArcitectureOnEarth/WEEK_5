// Promise.allSettled
// 성공 또는 실채 여부를 개별적으로 처리할 수 있다.

const tasks = [
  Promise.resolve("성공"),
  Promise.reject("실패"),
  Promise.resolve("또 성공"),
];

Promise.allSettled(tasks).then((results) => {
  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(`[${i}] 결과:`, result.value);
    } else {
      console.log(`[${i}] 에러:`, result.reason);
    }
  });
});
// [0] 결과: 성공
// [1] 에러: 실패
// [2] 결과: 또 성공
