// Promise 객체 전체가 cache[key]에 저장된다.
//

const cache = {};

function fetchData(key) {
  if (!cache[key]) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Fetching from server...");
        resolve("데이터: " + key);
      }, 1000);
    });
    console.log(promise); // Promise { <pending> } // 이면 아직 결과가 정해지지 않은 상태
    cache[key] = promise;
  }
  return cache[key]; // 캐싱된 Promise 반환
}

fetchData("user123").then(console.log); // 1초 후 결과 출력
fetchData("user123").then(console.log); // 바로 결과 출력 (동일 Promise 공유)
