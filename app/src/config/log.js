// morgan 스트림 세팅

const fs = require("fs");
const appRoot = require("app-root-path"); // 루트 경로 불러오기.

const accessLogStream = fs.createWriteStream(`${appRoot}/log/access.log`, {
  flags: "a",
});

module.exports = accessLogStream;
