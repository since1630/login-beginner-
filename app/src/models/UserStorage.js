"use strict";
// 기존에 갖고있는 유저 데이터를 관리하는 UserStorage 페이지.

class UserStorage {
  static #users = {
    // 외부에서 접근 못하도록 은닉화 처리
    id: ["shin", "pream"],
    password: ["123", "111"],
  };
  //   // 데이터를 받아올 수 있도록 메서드 만들기
  //   static getUsers(...field) {
  //     const users = this.#users;
  //     const newUsers = field.reduce((newUsers, field) => {
  //       if (users.hasOwnProperty(field)) {
  //         newUsers[field] = users[field];
  //       }
  //       return newUsers;
  //     }, {});

  //     return newUsers;
  //   }
  static getUserInfo(id) {
    const users = this.#users; // {id: ["shin", "pream"] , password: ["123", "111"]}
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
