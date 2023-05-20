"use strict";
// 유저가 실시간으로 입력하는 값을 관리하는 User 페이지.
const UserStorage = require("./UserStorage");

class User {
  // home.ctrl의 login과 연결되어 있음.
  constructor(body) {
    this.body = body;
  }
  login() {
    const body = this.body;
    const { id, password } = UserStorage.getUserInfo(body.id);
    if (id) {
      if (id === body.id && password === body.password) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 다릅니다" };
    }
    return { success: false, msg: "존재하지 않는 아이디 입니다." };
  }
}

module.exports = User;
