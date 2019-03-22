import React from 'react';
import { Input, Icon, Checkbox, Button, Form, Col } from 'antd';

const UserDropdownLogin = () => {
    return (
        <div>
            <Form>
                <Form.Item>
                    <Input
                        placeholder="Email"
                        prefix={<Icon type="user" style={{ color: '#B5B5B5' }} />}
                    />
                </Form.Item>
                <Form.Item>
                    <Input.Password
                        placeholder="Password"
                        prefix={<Icon type="lock" style={{ color: '#B5B5B5' }} />}
                    />
                </Form.Item>
                <Form.Item>
                    <Col span={15}>
                        <Checkbox className="loginFormRememberMe">Ingat Saya</Checkbox>
                    </Col>
                    <Col span={9}>
                        <a href="#" className="loginFormForget">Lupa Password?</a>
                    </Col>
                    <Button className="loginFormButton">Log In</Button>
                </Form.Item>
                <Form.Item>
                    <h5 className="loginFormOrRegisterWith">atau daftar dengan</h5>
                    <Button className="loginFormButtonGoogle"><Icon type="google" />Google</Button>
                    <Button className="loginFormButtonFacebook"><Icon type="facebook" />Facebook</Button>
                </Form.Item>
                <Form.Item>
                    <h5 className="loginFormLastRegister">Belum punya akun? yuk <a href="#" className="loginFormLastRegisterDaftar">Daftar</a></h5>
                </Form.Item>
            </Form>
        </div>
    );
}

export default UserDropdownLogin;