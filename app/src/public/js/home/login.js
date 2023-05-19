"use strict";

// DOM으로 사용자의 입력 값 제어하기
// 1.DOM 으로 태그에 해당하는 선택자를 선택해 변수에 담아준다.
// 2.이벤트를 실행할 태그의 이벤트 리스너(콜백 함수)를 정의한다.
// 3.이벤트를 실행할 태그에 addEventListener를 이용해 이벤트 리스너를 등록한다.
// 4.이벤트 리스너를 실행하면 담았던 '변수.value'를 이용해 사용자의 값을 불러온다.

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    password: password.value,
  };
  console.log(req);
  console.log("로그인 버튼을 클릭 했습니다.");

  // fetch를 이용해 사용자가 입력한 정보를 서버로 전달한다.
  fetch("/login", {
    method: "POST", // 요청 메서드
    headers: {
      "Content-Type": "application/json", // 보내는 데이터가 json 파일임을 알려줘야함.
    },
    body: JSON.stringify(req), // 요청을 JSON화(문자열)한다.
  })
    .then((res) => res.json())
    .then(console.log);
}
