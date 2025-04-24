// promise 사용 예시
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

// 네트워크 요청의 결과로 해결되거나 에러로 거부되는 Promise 객체를 반환한다.
// Promise 객체의 .then 메서드와 .catch 메서드를 사용해 요청 결과를 처리한다.
makeRequest("http://example.com/")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
