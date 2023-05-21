"use strict";
// 유저가 실시간으로 입력하는 값을 관리하는 User 페이지.
const UserStorage = require("./UserStorage");

class User {
  // home.ctrl의 login과 연결되어 있음.
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    // getUserInfo의 값은 프로미스다. 프로미스 처리가 끝나기 전까지 외부로부터의 출력 혹은 반환을 할 수 없게 await 처리 or then처리 한다.
    try {
      const { id, password } = await UserStorage.getUserInfo(client.id);

      if (id) {
        if (id === client.id && password === client.password) {
          return { success: true };
        }
        return { success: false, msg: "비밀번호가 다릅니다" };
      }
      return { success: false, msg: "존재하지 않는 아이디 입니다." };
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;
