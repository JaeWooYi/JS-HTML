import "./index.css"; // 현재 있는 위치에서(index.js안에있으니까), 또 css같은경우 따로 from을 적지 않는다.
import axious from "axios";
import React from "react";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axious
      .get(
        "https://4dfcb0c6-21f6-45ec-b9c9-2c959574210f.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        console.log("RESULT!! ---> " + result);
        setProducts(products);
      })
      .catch(function (error) {
        console.log("ERROR!!!! ---> " + error);
      });
  }, []);

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
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div classNaem="product-card">
                <div>
                  <img classNaem="product-img" src={product.imageUrl} />
                </div>
                <div>
                  <div classNaem="product-contents">
                    <span classNaem="product-name">{product.name}</span>
                    <span classNaem="product-price">{product.price}</span>
                    <div classNaem="product-seller">
                      <img
                        classNaem="product-avatar"
                        src="images/icons/avatar.png"
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
