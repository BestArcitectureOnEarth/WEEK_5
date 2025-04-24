// Promise.race
// 성공이든 실패이든 가장 먼저 완료된 하나의 결과만 받는다.

const p1 = Promise.reject("실패1");
const p2 = Promise.resolve("성공1");
const p3 = Promise.reject("실패2");
const p4 = Promise.resolve("성공2");

Promise.race([p1, p2, p3, p4])
  .then((result) => {
    console.log("가장 먼저 완료된 결과(성공):", result);
  })
  .catch((err) => {
    console.error("가장 먼저 완료된 결과(실패):", err);
  });

// 가장 먼저 완료된 결과(실패): 실패1
