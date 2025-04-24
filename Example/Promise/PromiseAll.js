// Promise.all
// 동시에 실행된다.
// 결과는 배열로 한번에 받고, 하나라도 실패하면 .catch를 실행한다.

const p1 = fetch("/user");
const p2 = fetch("/posts");
const p3 = fetch("/comments");

Promise.all([p1, p2, p3])
  .then(([res1, res2, res3]) => {
    console.log("모든 요청 완료!");
  })
  .catch((err) => {
    console.error("하나라도 실패함:", err);
  });

// fetch 해야하므로 이 예제에서는 결과 확인 불가
