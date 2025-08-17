import React from "react";
import { Button, Form, Input, Space } from "antd";

const Register = (props) => {
  const { formData, setFormData } = props;
  
  const handleChangeFormData = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div>
      <Form layout="vertical" autoComplete="off">
        <Form.Item
          name="fullname"
          label="Full Name"
        >
          <Input value={formData.fullname} name="fullname" onChange={handleChangeFormData} placeholder="input fullname" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email address"
        >
          <Input value={formData.email} name="email" onChange={handleChangeFormData} placeholder="input email address" />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          label="Phone Number"
        >
          <Input value={formData.phoneNumber} name="phoneNumber" onChange={handleChangeFormData} placeholder="input phone number" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
        >
          <Input type="password" value={formData.password} name="password" onChange={handleChangeFormData} placeholder="input password" />
        </Form.Item>

        <Form.Item
          name="location"
          label="Location (optional)"
        >
          <Input value={formData.location} name="location" onChange={handleChangeFormData} placeholder="input location" />
        </Form.Item>
        {/* <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onFill}>
              Fill
            </Button>
          </Space>
        </Form.Item> */}
      </Form>
    </div>
  );
};

export default Register;
