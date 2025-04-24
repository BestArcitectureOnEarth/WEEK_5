// async/await 사용 예시
async function makeRequest(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// 네트워크 요청 결과를 기다리기 위해 await 키원드를 사용한다.
// try-catch 키워드로 에러를 처리
makeRequest("http://example.com/");
