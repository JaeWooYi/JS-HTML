import "./index.css"; // 현재 있는 위치에서(index.js안에있으니까), 또 css같은경우 따로 from을 적지 않는다.
import axious from "axios";
import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { API_URL } from "../config/constants.js";

dayjs.extend(relativeTime);

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axious
      .get(`${API_URL}/products`)
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
      <div id="banner">
        <img src="images/banners/banner1.png" />
      </div>
      <h1>Products Sold</h1>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                    <div className="product-footer">
                      <div className="product-seller">
                        <img
                          className="product-avatar"
                          src="images/icons/avatar.png"
                        />
                        <span>{product.seller}</span>
                      </div>
                      <span className="product-date">
                        {dayjs(product.createdAt).fromNow()}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
