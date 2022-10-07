import {
  Divider,
  Form,
  Input,
  InputNumber,
  Button,
  Upload,
  message,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import "./index.css";
import { API_URL } from "../config/constants.js";
import axios from "axios";
import { useHistory } from "react-router-dom";

function UploadPage() {
  const [imageUrl, setImageUrl] = useState(null);
  const history = useHistory();

  const onSubmit = values => {
    axios
      .post(`${API_URL}/products`, {
        name: values.name,
        description: values.description,
        seller: values.seller,
        price: parseInt(values.price),
        imageUrl: imageUrl,
      })
      .then(result => {
        console.log(result);
        history.replace("/");
      })
      .catch(function (error) {
        console.log("ERROR!!!! ---> " + error);
        message.error(`ERROR! ${error.message}`);
      });
  };

  const onChangeImage = info => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImageUrl(imageUrl);
    }
  };

  return (
    <div id="upload-container">
      <Form name="productUpload" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">Product Photo</div>}
        >
          <Upload
            name="image"
            action={`${API_URL}/image`}
            listType="picture"
            showUploadList={false}
            onChange={onChangeImage}
          >
            {imageUrl ? (
              <img id="upload-img" src={`${API_URL}/${imageUrl}`} />
            ) : (
              <div id="upload-img-placeholder">
                <img src="/images/icons/camera.png" />
                <span>Image Upload Please..</span>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Divider />

        <Form.Item
          label={<div className="upload-label">Solder Name</div>}
          name="seller"
          rules={[{ required: true, message: "Input Seller Name!" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="Input Name Please.."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">Product Name</div>}
          rules={[{ required: true, message: "Input Product Name Please.." }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="Input Product Name Please.."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label">Product Price</div>}
          rules={[{ required: true, message: "Input Product Price Please.." }]}
        >
          <InputNumber defaultValue={0} className="upload-price" size="large" />
        </Form.Item>
        <Divider />

        <Form.Item
          name="description"
          label={<div className="upload-label">Introduction</div>}
          rules={[{ required: true, message: "Input Product Introdution" }]}
        >
          {/* showCount만 쓰면 showCount={true랑 같다} */}
          <Input.TextArea
            size="large"
            id="product-description"
            showCount
            maxLength={300}
            placeholder="Input Product Introdution."
          />
        </Form.Item>

        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
