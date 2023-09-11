import {Layout} from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import {CustomInput} from "../../components/custom-input";
import {PasswordInput} from "../../components/password-input";
import {CustomButton} from "../../components/custom-batton";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";

export const Register = () => {
    return (
        <Layout>
            <Row align="middle" justify='center'>
                <Card title='Register' style={{width: '30rem'}}>
                    <Form onFinish={() => {
                    }}>
                        <CustomInput name='name' placeholder='name'/>
                        <CustomInput type='email' name='email' placeholder='Email'/>
                        <PasswordInput name='password' placeholder='Password'/>
                        <PasswordInput name='confirmPassword' placeholder='Repit password'/>
                        <CustomButton type='primary' htmlType='submit'>
                            Register
                        </CustomButton>
                    </Form>
                    <Space direction='vertical' size='large'>
                        <Typography.Text>
                            Already registered? <Link to={Paths.login}>Enter</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}
