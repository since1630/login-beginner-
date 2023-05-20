"use strict";
// 기존에 갖고있는 유저 데이터를 관리하는 UserStorage 페이지.

const fs = require("fs").promises;
class UserStorage {
  // 가독성을 위해 만든 메서드
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static #getUsers(data, isALL, fields) {
    const users = JSON.parse(data);
    if (isALL) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }

  // 어떤 유저 필드가 데이터를 받아올 수 있도록 메서드 만들기
  static getUsers(isALL, ...fields) {
    // const users = this.#users;
    return fs
      .readFile("./src/databases/home/users.json")
      .then((data) => {
        return this.#getUsers(data, isALL, fields);
      })
      .catch(console.error);
  }

  // 유저 정보 가져오기
  static getUserInfo(id) {
    // const users = this.#users; // {id: ["shin", "pream"] , password: ["123", "111"]}
    return fs
      .readFile("./src/databases/home/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }
  // 회원 가입 정보 저장하기
  static async save(userInfo) {
    const users = await this.getUsers(true);
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디 입니다.";
    }
    users.id.push(userInfo.id);
    users.password.push(userInfo.password);
    users.name.push(userInfo.name);
    fs.writeFile("./src/databases/home/users.json", JSON.stringify(users));
    return { success: true };
  }
}

module.exports = UserStorage;
