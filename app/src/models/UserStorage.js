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

  // 어떤 유저 필드가 데이터를 받아올 수 있도록 메서드 만들기
  static getUsers(...field) {
    // const users = this.#users;
    fs.readFile("./package.json", (err, data) => {
      if (err) throw err;
      console.log(data);
    });

    const newUsers = field.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
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

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    return { success: true };
  }
}

module.exports = UserStorage;
