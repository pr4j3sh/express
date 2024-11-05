const {
  errorHandler,
  notFoundHandler,
  logHandler,
  asyncHandler,
} = require("exhandlers");
const express = require("express");

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

const server = express();
server.use(logHandler);

server.get(
  "/api/check",
  asyncHandler((req, res) => {
    res.status(200).json({
      success: true,
      message: "server online",
    });
  }),
);

server.use(notFoundHandler);
server.use(errorHandler);

server.listen(port, hostname, () => {
  console.log(`server running @ http://${hostname}:${port}`);
});
