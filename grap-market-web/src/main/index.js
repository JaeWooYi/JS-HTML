import "./index.css"; // 현재 있는 위치에서(index.js안에있으니까), 또 css같은경우 따로 from을 적지 않는다.

function MainPage() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>Products Sold</h1>
        <div id="product-list"></div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
