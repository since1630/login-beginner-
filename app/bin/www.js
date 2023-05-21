"use strict";
//app.listen 분리
const app = require("../app");
const PORT = process.env.PORT || 3000;
const logger = require("../src/config/logger");

app.listen(PORT, () => {
  logger.info(`${PORT}포트에서 서버가 가동중입니다.`);
});
