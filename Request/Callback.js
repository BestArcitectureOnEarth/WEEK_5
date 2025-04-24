// 콜백 사용 예시
function makeRequest(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(null, data))
    .catch((error) => callback(error));
}

// makeRequest함수에 콜백 함수를 전달하고, 이 콜백 함수는
// 결과 데이터 또는 에러를 매개변수로 가져와 사용할 수 있다.
makeRequest("http://example.com/", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
