import "./App.css";
import MainPageComponent from "./main/index.js";
// import MainPageComponent from "./main" // 생략가능
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload/index.js";
import ProdcutPage from "./product/index.js";

function App() {
  return (
    <div>
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
  );
}

export default App;
