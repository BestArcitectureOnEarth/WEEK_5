// 비동기 작업의 성공/실패를 미래 시점에 처리
// .then()과 .catch()를 사용함
export function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) resolve("데이터 가져옴");
      else reject("에러 발생");
    }, 6000);
  });
}

fetchData()
  .then((result) => {
    console.log(result); // 성공 처리
  })
  .catch((error) => {
    console.error(error); // 실패 처리
  });
