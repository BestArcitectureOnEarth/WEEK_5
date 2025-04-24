function retryPromise(fn, retries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    // 함수 선언
    function attempt(remaining) {
      fn()
        .then(resolve) // 성공하면 "성공!" 출력됨
        .catch((err) => {
          if (remaining === 0) {
            reject(err); // 계속 끝까지 실패하는 경우 "실패!" 출력됨
          } else {
            // 실패했지만 앞으로 재시도 기회가 남은 경우
            console.log(`재시도 중... 남은 횟수: ${remaining}`);
            setTimeout(() => attempt(remaining - 1), delay);
          }
        });
    }

    // 함수 호출
    attempt(retries);
  });
}

// 실패할 수도 있는 비동기 함수
function fetchData() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      reject("실패!");
    } else {
      resolve("성공!");
    }
  });
}

retryPromise(fetchData, 5, 500).then(console.log).catch(console.error);
