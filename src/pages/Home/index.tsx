// ./src/pages/Home/index.tsx

import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const Home = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Helmet>
        <title>TsSSR test</title>
        <meta name="description" content="服务端渲染" />
      </Helmet>
      <div>
        <h1>helslo-ssr</h1>
        <button
          onClick={(): void => {
            alert("hello-ssr");
          }}
        >
          alert
        </button>
        <a href="http://127.0.0.1:3000/demo">链接跳转</a>
        <span
          onClick={(): void => {
            navigate("/demo");
          }}
        >
          路由跳转
        </span>
      </div>
    </Fragment>
  );
};

export default Home;
