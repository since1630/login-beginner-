"use strict";

class UserStorage {
  static #users = {
    // 외부에서 접근 못하도록 은닉화 처리
    id: ["shin", "pream"],
    password: ["123", "111"],
  };
  // 데이터를 받아올 수 있도록 메서드 만들기
  static getUsers(...field) {
    const users = this.#users;
    const newUsers = field.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }
}

module.exports = UserStorage;
