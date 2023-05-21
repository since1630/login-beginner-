// Node.js와 mysql을 연결하는 페이지

const mysql = require("mysql");

// 1. createConnection() : 데이터 베이스 설정 기록하는 메서드
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// 2. 1에서 설정 완료 했으면 connect()로 연결 요청하기.
db.connect();

// 3.외부에서 사용할 수 있게 모듈화
module.exports = db;
