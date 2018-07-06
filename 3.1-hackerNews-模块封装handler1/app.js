var http = require("http");
var router = require("./router")

var server = http.createServer();

server.on("request", function (req, res) {
  //负责导入路由模块,找了一个路由
  router(req,res)
});

server.listen(8899, function () {
  console.log("服务器启动成功了");
});


