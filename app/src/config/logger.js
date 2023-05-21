// winston 모듈 페이지.

const { createLogger, transports, format } = require("winston");
const { combine, colorize, timestamp, simple, printf, label } = format;
const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level} : ${message}`;
});
const pringLogFormat = {
  file: combine(
    label({
      label: "백엔드 맛보기",
    }),
    //저장할 땐 colorize() 하지 않기.
    //   colorize(),
    timestamp({
      format: "YYYY-MM-DD hh-mm-ss",
    }),
    printFormat // 원래 Object로 출력 되던걸 자체적으로 다듬는 파싱 작업을 함.
  ),
  console: combine(
    //저장할 땐 colorize() 하지 않기.
    colorize(),
    simple() // 원래 Object로 출력 되던걸 자체적으로 다듬는 파싱 작업을 함.
  ),
};

const opts = {
  file: new transports.File({
    filename: "access.log",
    dirname: "./logs",
    level: "info",
    format: pringLogFormat.file, //combine으로 로그 데이터에 변화를 줄거임.
  }),

  console: new transports.Console({
    level: "info",
    format: pringLogFormat.console,
  }),
};

const logger = createLogger({
  transports: [
    // 로그 파일 쓰기. 콘솔에 찍고 싶으면 new transports.Console하면 됨.
    opts.file,
  ],
});

// 만약 실제 서비스중이 아니라면 콘솔로도 로그를 찍어볼 수 있게 하기.
if (process.env.NODE_ENV !== "production") {
  logger.add(opts.console);
}

// 메세지를 받으면 바로 logger.info로 메시지를 띄워주기.
logger.stream = {
  write: (message) => logger.info(message),
};

module.exports = logger;
