"use strict";
//* 이 파일이 서버의 중심 파일 (express로 구현한 서버) */

// 모듈
const express = require("express");
const app = express();

// 라우팅 컨트롤러 가져오기
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views"); // views 란 폴더를 만들고 그 폴더를 views 환경(렌더링 폴더)으로 셋팅한다.
app.set("view engine", "ejs"); // ejs 엔진으로 views 폴더 내부에 있는 html 파일을 렌더링 한다.

app.use("/", home); // 미들 웨어 구현 메서드.

module.exports = app;