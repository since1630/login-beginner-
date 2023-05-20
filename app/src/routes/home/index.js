"use strict";

// 라우팅 컨트롤러(라우팅 분리 파일)
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl"); // 컨트롤러 모듈 불러오기

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
// router.post("/register", ctrl.process.register);

module.exports = router; // router 내보내기
