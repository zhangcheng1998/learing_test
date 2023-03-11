// ./src/server/index.tsx
import express from "express";
import childProcess from "child_process";
import { renderToString } from "react-dom/server";
import path from "path";
import router from "@/router";
import { Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
// import bodyParse from "body-parse";

const app = express();
// const bodyParse = require("body-parse");
// const bodyParse = require('body-parse')
const bodyParser = require("body-parser");

app.use(express.static(path.resolve(process.cwd(), "client_build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 启一个post服务
// app.post("/api/getDemoData", (req, res) => {
//   res.send({
//     data: req.body,
//     status_code: 0,
//   });
// });

app.post("/api/getDemoData", (req, res) => {
  res.send({
    data: req.body,
    status_code: 0,
  });
});

app.get("*", (req, res) => {
  console.log("req__a", req.path);

  const content = renderToString(
    <StaticRouter location={req.path}>
      <Routes>
        {router?.map((item, index) => {
          return <Route {...item} key={index} />;
        })}
      </Routes>
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();
  res.send(`
    <html
    <head>

    ${helmet.title.toString()}
        ${helmet.meta.toString()}
    </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("ssr-server listen on 3000");
});

childProcess.exec("start http://127.0.0.1:3000");
