// Promise.any
// 성공한 것들 중 가장 먼저 성공한 결과만 받는다.

const p1 = Promise.reject("실패1");
const p2 = Promise.resolve("성공1");
const p3 = Promise.reject("실패2");
const p4 = Promise.resolve("성공2");

Promise.any([p1, p2, p3, p4])
  .then((result) => {
    console.log("성공한 것 중 제일 먼저 끝난 결과:", result);
  })
  .catch((error) => {
    // 이 에러는 AggregateError 객체
    console.error("모든 Promise가 실패했습니다.");
    console.error(error); // AggregateError: All promises were rejected
  });

// 성공한 것 중 제일 먼저 끝난 결과: 성공1
