import React, { useState } from "react";
import { Form, Input, Button, Card } from "antd";
import { login } from "state/actions/player";
import { withRouter } from "react-router-dom";
import { routes } from "config/routes";

const Login = ({ history }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setSubmitting(true);
    login(values.player1, values.player2, values.gamename)
      .then((data) => {
        history.push({
          pathname: routes.player_score.path,
          data: data,
        });
        setSubmitting(false);
      })
      .catch(() => setSubmitting(false));
  };

  return (
    <div className="LoginStyles">
      <Card style={{ width: 300 }} title="Welcome">
        <Form
          form={form}
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="gamename"
            label="Game name"
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Field is required",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="player1"
            label="Player 1"
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Field is required",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="player2"
            label="Player 2"
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Field is required",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <div className="auth-bottom-container">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="saveButton"
              block
              loading={isSubmitting}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default withRouter(Login);
