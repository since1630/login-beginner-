"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const signbutton = document.querySelector("#button");

signbutton.addEventListener("click", register);

function register() {
  if (!id.value) return alert("아이디를 입력하세요.");
  if (password.value !== confirmPassword.value)
    return alert("비밀번호가 일치하지 않습니다.");

  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
    // confirmPassword: confirmPassword.value,
  };

  fetch("/register", {
    method: "POST", // 요청 메서드
    headers: {
      "Content-Type": "application/json", // 보내는 데이터가 json 파일임을 알려줘야함.
    },
    body: JSON.stringify(req), // 요청을 JSON화(문자열)한다.
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    });
}
