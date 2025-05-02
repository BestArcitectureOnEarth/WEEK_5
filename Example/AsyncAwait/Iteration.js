// 비동기 반복 패턴
// for-wait-of 반복문으로 객체를 순회한다.

// 비동기 반복 가능 객체를 생성한다.
// async function* : 비동기 생성자로, 값을 Promise로 반환하며 반복된다.
async function* createAsyncIterable() {
  yield 1;
  yield 2;
  yield 3;
}

// 비동기 반복문으로 값을 순회한다: for-await-of
async function main() {
  for await (const value of createAsyncIterable()) {
    // 각 반복마다 await iterator.next()가 실행된다.
    console.log(value); // value는 await된 결과
  }
}

// 실행
main();

// 1
// 2
// 3
