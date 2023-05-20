"use strict";

const User = require("../../models/User");

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);

    // const id = req.body.id;
    // const password = req.body.password;
    // const users = UserStorage.getUsers("id", "password");
    // const response = {};
    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if (users.password[idx] === password) {
    //     // json()을 이용해 응답결과를 프로미스로 반환 -> public/js/home의 login.js/process 객체 내부의 fetch로 넘길거임
    //     response.success = true;
    //     return res.json(response);
    //   }
    // }
    // // json()을 이용해 응답결과를 프로미스로 반환
    // response.success = false;
    // response.msg = "로그인에 실패했습니다.";
    // return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
