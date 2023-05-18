"use strict";

// 라우팅 컨트롤러(라우팅 분리 파일)
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl"); // 컨트롤러 모듈 불러오기

router.get("/", ctrl.hello);

router.get("/login", ctrl.login);

module.exports = router; // router 내보내기