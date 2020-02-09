import React from 'react'
import "antd/dist/antd.css";
import './index.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import AuthControlller from '../../database/controller/authController';


function NormalLoginForm(props) {

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const authController = new AuthControlller();
        authController.authWithEmailPassword(values.username, values.password)
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}
        <a className="login-form-forgot" href="">
          Forgot password
          </a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
          </Button>
        Or <a href="/register">register now!</a>
      </Form.Item>
    </Form>
  );
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;

/* ReactDOM.render(<WrappedNormalLoginForm />, mountNode);  */