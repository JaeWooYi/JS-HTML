import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
import { API_URL } from "../config/constants.js";
import dayjs from "dayjs";
import React, { Component } from "react";
import { Button, message } from "antd";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProduct = () => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then(function(result) {
        setProduct(result.data.product);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  useEffect(function() {
    getProduct();
  }, []);

  if (product == null) {
    return <h1>Getting Prodcut Information....</h1>;
  }

  const onClickPurchase = () => {
    axios
      .post(`${API_URL}/purchase/${id}`)
      .then(result => {
        message.info("구매가 완료 되었습니다.");
        getProduct();
      })
      .catch(error => {
        message.error(`Error!! ${error.message}`);
      });
  };

  return (
    <div>
      <div id="image-box">
        <img src={`${API_URL}/${product.imageUrl}`} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">
          {dayjs(product.createdAt).format("YYYY/MM/DD")}
        </div>

        <Button
          disabled={product.soldout === 1 ? true : false}
          size="large"
          type="primary"
          danger
          id="purchase-button"
          onClick={onClickPurchase}
        >
          재빨리 구매하기.
        </Button>

        <pre id="description">{product.description}</pre>
      </div>
    </div>
  );
}

export default ProductPage;
