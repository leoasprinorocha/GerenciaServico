const proxy = [
  {
    context: "/api",
    target: [
      "http://192.168.1.4:45500/",
      "https://gerencia-servico-api.herokuapp.com",
      "http://192.168.137.1:45500",
      "http://170.81.86.141:51000"
    ],
    pathRewrite: { "^/api": "" },
  },
];
module.exports = proxy;
