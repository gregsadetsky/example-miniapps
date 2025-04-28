var httpProxy = require("http-proxy");

httpProxy
  .createProxyServer({
    target: "http://app1",
    localAddress: "0.0.0.0",
  })
  .listen(8000);
