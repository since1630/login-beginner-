"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const signbutton = document.querySelector("#button");

signbutton.addEventListener("click", register);

function register() {
  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };
  console.log(req);

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
        location.href = "/";
      } else {
        alert(res.msg);
      }
    });
}
