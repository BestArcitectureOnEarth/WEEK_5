// 콜백 지옥
// 사용자 로그인 -> 유저 정보 가져오기 -> UI 업데이트

function loginUser(id, callback) {
  setTimeout(() => {
    console.log(`사용자 ${id} 로그인`);
    callback(id);
  }, 1000);
}

function getUserProfile(id, callback) {
  setTimeout(() => {
    console.log(`${id}의 프로필 정보 가져오기`);
    callback({ id: id, name: "홍길동" });
  }, 1000);
}

function updateUI(profile, callback) {
  setTimeout(() => {
    console.log(`UI 업데이트: ${profile.name}님 환영합니다!`);
    callback();
  }, 1000);
}

// 콜백 지옥 시작
loginUser("user01", (id) => {
  getUserProfile(id, (profile) => {
    updateUI(profile, () => {
      console.log("모든 작업 완료!🎉");
    });
  });
});

// 1. loginUser : 1초 후, ("사용자 user01 로그인"), 콜백 getUserProfile 호출
// 2. getUserProfile : 1초 후, ("`user01의 프로필 정보 가져오기`"), 콜백 updateUI 호출
// 3. updateUI : 1초 후, ("UI 업데이트: 홍길동님 환영합니다!"), 콜백("모든 작업 완료!🎉") 실행
