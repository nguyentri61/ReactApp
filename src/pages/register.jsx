import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, EyeInvisibleOutlined, EyeTwoTone, UserAddOutlined } from '@ant-design/icons';
import { Input, Button, Form, notification, Row, Col, Card, Typography, Divider } from "antd";
import { RegisterAPI } from "../services/api.service";
import { useNavigate, Link } from "react-router-dom";

const { Title, Text } = Typography;

const RegisterPage = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log(values);
        const dataRequest = {
            fullName: values.fullName,
            email: values.email,
            password: values.password,
            phone: values.phone
        }

        const res = await RegisterAPI(dataRequest);
        if (res.data) {
            notification.success({
                message: "Register Successfully",
                showProgress: true,
                duration: 3,
            })
            navigate("/login")
        } else {
            notification.error({
                message: "Register Failed",
                showProgress: true,
                description: JSON.stringify(res.message),
                duration: 3,
            })
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center p-5">
            <Row justify="center" align="middle" className="w-full min-h-screen">
                <Col xs={22} sm={20} md={14} lg={10} xl={10}>
                    <Card
                        className="rounded-2xl shadow-2xl border-0 bg-white/95 backdrop-blur-sm"
                        bodyStyle={{ padding: '40px' }}
                    >
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/30">
                                <UserAddOutlined className="text-3xl text-white" />
                            </div>
                            <Title level={2} className="!m-0 !mb-2 !text-gray-800">
                                Create Account
                            </Title>
                            <Text type="secondary" className="text-base">
                                Join us today and get started
                            </Text>
                        </div>

                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            size="large"
                        >
                            <Form.Item
                                label="Full Name"
                                name="fullName"
                                rules={[
                                    { required: true, message: 'Please input your full name!' },
                                    { min: 2, message: 'Full name must be at least 2 characters!' }
                                ]}
                            >
                                <Input
                                    prefix={<UserOutlined className="text-gray-400" />}
                                    placeholder="Enter your full name"
                                    className="!rounded-lg !border-2 !border-gray-200 !p-3"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Email Address"
                                name="email"
                                rules={[
                                    { required: true, message: 'Please input your email!' },
                                    { type: 'email', message: 'Please enter a valid email!' }
                                ]}
                            >
                                <Input
                                    prefix={<MailOutlined className="text-gray-400" />}
                                    placeholder="Enter your email"
                                    className="!rounded-lg !border-2 !border-gray-200 !p-3"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    { required: true, message: 'Please input your password!' },
                                    { min: 6, message: 'Password must be at least 6 characters!' }
                                ]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="text-gray-400" />}
                                    placeholder="Create a strong password"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    className="!rounded-lg !border-2 !border-gray-200 !p-3"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Phone Number"
                                name="phone"
                                rules={[
                                    { required: true, message: 'Please input your phone number!' },
                                    { pattern: /^[0-9]{10,11}$/, message: 'Please enter a valid phone number!' }
                                ]}
                            >
                                <Input
                                    prefix={<PhoneOutlined className="text-gray-400" />}
                                    placeholder="Enter your phone number"
                                    className="!rounded-lg !border-2 !border-gray-200 !p-3"
                                />
                            </Form.Item>

                            <Form.Item className="mb-6">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    size="large"
                                    className="bg-gradient-to-r from-indigo-500 to-purple-600 border-0 rounded-lg h-12 text-base font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300"
                                >
                                    Create Account
                                </Button>
                            </Form.Item>

                            <Divider className="my-6 text-gray-400">
                                <Text type="secondary">or</Text>
                            </Divider>

                            <div className="text-center">
                                <Text className="text-gray-500">
                                    Already have an account?{' '}
                                    <Link
                                        to="/login"
                                        className="text-indigo-500 no-underline font-semibold hover:text-indigo-600 transition-colors"
                                    >
                                        Sign in here
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

export default RegisterPage;