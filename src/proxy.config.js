const proxy = [
  {
    context: "/api",
    target: [
      "http://192.168.1.4:45500/",
      "https://gerencia-servico-api.herokuapp.com",
    ],
    pathRewrite: { "^/api": "" },
  },
];
module.exports = proxy;
