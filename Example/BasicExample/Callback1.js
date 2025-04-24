// 함수 안에서 다른 함수 호출
// 가독성 낮고, 콜백 지옥이 있을 수 있다.
function greet(name, callback) {
  console.log("안녕, " + name);
  callback();
}

function sayBye() {
  console.log("잘 가~");
}

greet("철수", sayBye);
