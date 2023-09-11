import {Layout} from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import {CustomInput} from "../../components/custom-input";
import {PasswordInput} from "../../components/password-input";
import {CustomButton} from "../../components/custom-batton";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";

export const Login = () => {
    return (
        <Layout>
            <Row align="middle" justify='center'>
                <Card title='Enter' style={{width: '30rem'}}>
                    <Form onFinish={() => {
                    }}>
                        <CustomInput type='email' name='email' placeholder='Email'/>
                        <PasswordInput name='password' placeholder='Password'/>
                        <CustomButton type='primary' htmlType='submit'>
                            Enter
                        </CustomButton>
                    </Form>
                    <Space direction='vertical' size='large'>
                        <Typography.Text>
                            No account? <Link to={Paths.register}>Register</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}
