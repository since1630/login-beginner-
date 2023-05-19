"use strict";

const user = {
  id: ["shin", "pream"],
  password: ["123", "111"],
};

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
    const id = req.body.id;
    const password = req.body.password;
    if (user.id.includes(id)) {
      const idx = user.id.indexOf(id);
      if (user.password[idx] === password) {
        // json()을 이용해 응답결과를 프로미스로 반환
        return res.json({
          success: true,
        });
      }
    }
    // json()을 이용해 응답결과를 프로미스로 반환
    return res.json({
      success: false,
      msg: "로그인에 실패했습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};
