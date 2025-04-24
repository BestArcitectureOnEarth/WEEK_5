function fetchData(callback) {
  setTimeout(() => {
    console.log("데이터를 가져왔습니다");
    callback();
  }, 5000);
}

fetchData(() => {
  console.log("이제 데이터를 처리합니다");
});
