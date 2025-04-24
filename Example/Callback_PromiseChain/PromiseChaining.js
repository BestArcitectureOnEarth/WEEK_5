// 앞선 콜백 지옥 예제를 프로미스 체이닝으로 해결해보자.
function loginUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`사용자 ${id} 로그인`);
      resolve(id);
    }, 1000);
  });
}

function getUserProfile(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${id}의 프로필 정보 가져오기`);
      resolve({ id: id, name: "홍길동" });
    }, 1000);
  });
}

function updateUI(profile) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`UI 업데이트: ${profile.name}님 환영합니다!`);
      resolve();
    }, 1000);
  });
}

// 프로미스 체이닝 시작 -> 콜백 지옥 해결
loginUser("user01")
  .then(getUserProfile)
  .then(updateUI)
  .then(() => {
    console.log("모든 작업 완료!🎉");
  })
  .catch((err) => {
    console.error("에러 발생:", err);
  });
