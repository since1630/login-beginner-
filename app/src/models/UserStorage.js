// 기존에 갖고있는 유저 데이터를 관리하는 UserStorage 페이지.
"use strict";
// db 모듈 불러오기
const db = require("../config/db");

// fs 모듈 프로미스로 불러오기.
// const fs = require("fs").promises;
class UserStorage {
  // 어떤 유저 필드가 데이터를 받아올 수 있도록 메서드 만들기
  static getUsers(isALL, ...fields) {}

  // 유저 정보 가져오기
  static getUserInfo(id) {
    const query = "SELECT * FROM users WHERE id = ?;";
    return new Promise((resolve, reject) => {
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        resolve(data[0]);
      });
    });
    // //fs 모듈로 파일 읽어오기
    // return fs
    //   .readFile("./src/databases/home/users.json")
    //   .then((data) => {
    //     return this.#getUserInfo(data, id);
    //   })
    //   .catch(console.error);
  }

  // 회원 가입 정보 저장하기
  static async save(userInfo) {
    const query = "INSERT INTO users(id,name,password) VALUES(?,?,?);";
    return new Promise((resolve, reject) => {
      db.query(
        query,
        [userInfo.id, userInfo.name, userInfo.password],
        (err, data) => {
          if (err) reject(`${err}`);
          resolve({ success: true });
        }
      );
    });
  }

  // // 가독성을 위해 만든 메서드
  // static #getUserInfo(data, id) {
  //   const users = JSON.parse(data);
  //   const idx = users.id.indexOf(id);
  //   const usersKeys = Object.keys(users);
  //   const userInfo = usersKeys.reduce((newUser, info) => {
  //     newUser[info] = users[info][idx];
  //     return newUser;
  //   }, {});
  //   return userInfo;
  // }
  // // 가독성을 위해 만든 메서드
  // static #getUsers(data, isALL, fields) {
  //   const users = JSON.parse(data);
  //   if (isALL) return users;
  //   const newUsers = fields.reduce((newUsers, field) => {
  //     if (users.hasOwnProperty(field)) {
  //       newUsers[field] = users[field];
  //     }
  //     return newUsers;
  //   }, {});

  //   return newUsers;
  // }
}

module.exports = UserStorage;
