import { LockOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Row, Col, Card, Typography, Divider, Space, message, notification } from 'antd';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginAPI } from '../services/api.service';
import { AuthContext } from '../component/context/auth.context';

const { Title, Text } = Typography;

const LoginPage = () => {

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);

        setLoading(true);
        const data = {
            email: values.email,
            password: values.password
        };

        const res = await LoginAPI(data);
        if (res.data) {
            message.success('Login successfully!');
            localStorage.setItem('access_token', res.data.access_token);
            navigate('/');
        } else {
            notification.error({
                message: 'Login failed',
                description: JSON.stringify(res.message),
            });
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center p-5">
            <Row justify="center" align="middle" className="w-full min-h-screen">
                <Col xs={22} sm={20} md={12} lg={8} xl={10}>
                    <Card
                        className="rounded-2xl shadow-2xl border-0 bg-white/95 backdrop-blur-sm"
                        styles={{ body: { padding: '40px' } }}
                    >
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/30">
                                <LockOutlined className="text-3xl text-white" />
                            </div>
                            <Title level={2} className="!m-0 !mb-2 !text-gray-800">
                                Welcome Back
                            </Title>
                            <Text type="secondary" className="text-base">
                                Sign in to your account
                            </Text>
                        </div>

                        <Form
                            form={form}
                            name="login"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            layout="vertical"
                            size="large"
                        >
                            <Form.Item
                                label="Email Address"
                                name="email"
                                rules={[
                                    { required: true, message: 'Please input your email!' },
                                    { type: 'email', message: 'Please enter a valid email!' }
                                ]}
                            >
                                <Input
                                    prefix={<UserOutlined className="text-gray-400" />}
                                    placeholder="Enter your email"
                                    className="!rounded-lg !border-2 !border-gray-200 !p-3"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="text-gray-400" />}
                                    placeholder="Enter your password"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            form.submit();
                                        }
                                    }}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    className="!rounded-lg !border-2 !border-gray-200 !p-3"
                                />
                            </Form.Item>

                            <Form.Item className="mb-6">
                                <Flex justify="space-between" align="center">
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox className="text-gray-500">Remember me</Checkbox>
                                    </Form.Item>
                                    <Link
                                        to="/forgot-password"
                                        className="text-indigo-500 no-underline font-medium hover:text-indigo-600 transition-colors"
                                    >
                                        Forgot password?
                                    </Link>
                                </Flex>
                            </Form.Item>

                            <Form.Item className="mb-6">
                                <Button
                                    loading={loading}
                                    block
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    className="bg-gradient-to-r from-indigo-500 to-purple-600 border-0 rounded-lg h-12 text-base font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300"
                                >
                                    Sign In
                                </Button>
                            </Form.Item>

                            <Divider className="my-6 text-gray-400">
                                <Text type="secondary">or</Text>
                            </Divider>

                            <div className="text-center">
                                <Text className="text-gray-500">
                                    Don't have an account?{' '}
                                    <Link
                                        to="/register"
                                        className="text-indigo-500 no-underline font-semibold hover:text-indigo-600 transition-colors"
                                    >
                                        Sign up now
                                    </Link>
                                </Text>
                            </div>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default LoginPage;