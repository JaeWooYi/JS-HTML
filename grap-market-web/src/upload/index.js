import { Divider, Form, Input, InputNumber, Button } from "antd";
import FormItem from "antd/es/form/FormItem";
import "./index.css";

function UploadPage() {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div id="upload-container">
      <Form name="productUpload" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">Product Photo</div>}
        >
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" />
            <span>Image Upload Please..</span>
          </div>
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
          <InputNumber className="upload-price" size="large" defaultValue={0} />
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
            Problem Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
