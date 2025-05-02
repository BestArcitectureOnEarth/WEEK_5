// 비동기 함수 조합
// 여러 비동기 함수를 조합하여 보다 복잡한 비동기 로직을 구성한다.

// 사용자 데이터 가져오기
async function fetchData() {
  console.log("Fetching data from API...");
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  return data;
}

// 데이터 처리 (예: 이름을 대문자로 바꾸기)
async function processData(data) {
  console.log("Processing data...");
  data.name = data.name.toUpperCase();
  return data;
}

// 처리된 데이터를 서버에 저장 (가상의 POST 요청)
async function saveData(data) {
  console.log("Saving data...");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log("Data saved:", result);
}

// 전체 흐름 조합
async function main() {
  try {
    const data = await fetchData();
    const processed = await processData(data);
    await saveData(processed);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// 실행
main();
