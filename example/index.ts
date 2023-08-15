import path from "path";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import history_fallback from "connect-history-api-fallback";

import { router as indexPage } from "@/routes/indexPage";

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

/** 这里开始放路由和api接口 **/
app.use(indexPage);

/** 控制单页应用的history路由 **/
app.use(history_fallback());
/** 这里开始提供前端渲染服务 **/
app.use(express.static(path.resolve(path.dirname(__filename), "./applications/")));


const server = app.listen(5280, () => {
  const { port }: any = server.address();
  console.log("address", `http://localhost:${port}/`, server.address());
});