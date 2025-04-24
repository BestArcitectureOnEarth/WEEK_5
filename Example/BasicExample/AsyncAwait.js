// async 함수 안에서 await로 동기 코드처럼 작성 가능
// 에러 처리는 try...catch로 쉽게 가능
import { fetchData } from "./Promise.js";

async function getData() {
  try {
    const result = await fetchData(); // fetchData는 Promise를 반환해야 함
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getData();
