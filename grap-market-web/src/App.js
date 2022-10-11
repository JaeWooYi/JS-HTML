import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import MainPageComponent from "./main/index.js";
// import MainPageComponent from "./main" // 생략가능
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload/index.js";
import ProdcutPage from "./product/index.js";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import React, { Component } from "react";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            {/* "/" 기본 경로로 가겠다. */}
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function() {
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            Product Upload!!
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/products/:id">
            <ProdcutPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
