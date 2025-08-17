import React from "react";
import { Form, Input, Modal, Button } from "antd";

const ViewDetail = (props) => {
  const {
    userDetail,
    setUserDetail,
    isOpenModalView,
    handleOkUserDetail,
    handleCancelUserDetail,
    handleCancelCreateUser,
    handleUpdateUser,
  } = props;

  React.useEffect(() => {
    console.log(userDetail);
  }, []);

  const handleChangeFormData = (event) => {
    setUserDetail((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <Modal
        title="User Detail"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isOpenModalView}
        onOk={handleOkUserDetail}
        onCancel={handleCancelUserDetail}
        destroyOnClose
        footer={
          <div className="row">
            <Button onClick={handleCancelCreateUser}>Cancel</Button>
            <Button type="primary" onClick={handleUpdateUser}>
              Save
            </Button>
          </div>
        }
      >
        {userDetail ? (
          <Form layout="vertical" autoComplete="off">
            <Form.Item name="fullname" label="Full Name">
              <Input
                value={userDetail.fullname}
                name="fullname"
                onChange={handleChangeFormData}
                placeholder="Input full name"
              />
            </Form.Item>

            <Form.Item name="email" label="Email address">
              <Input
                value={userDetail.email}
                name="email"
                onChange={handleChangeFormData}
                placeholder="Input email address"
              />
            </Form.Item>

            <Form.Item name="phoneNumber" label="Phone Number">
              <Input
                value={userDetail.phoneNumber}
                name="phoneNumber"
                onChange={handleChangeFormData}
                placeholder="Input phone number"
              />
            </Form.Item>

            <Form.Item name="password" label="Password">
              <Input
                type="password"
                value={userDetail.password}
                name="password"
                onChange={handleChangeFormData}
                placeholder="Input password"
              />
            </Form.Item>

            <Form.Item name="location" label="Location (optional)">
              <Input
                value={userDetail.location}
                name="location"
                onChange={handleChangeFormData}
                placeholder="Input location"
              />
            </Form.Item>
          </Form>
        ) : (
          <p>Loading user data...</p>
        )}
      </Modal>
    </div>
  );
};

export default ViewDetail;
