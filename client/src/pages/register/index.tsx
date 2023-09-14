import {Layout} from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import {CustomInput} from "../../components/custom-input";
import {PasswordInput} from "../../components/password-input";
import {CustomButton} from "../../components/custom-batton";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../paths";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice";
import {useState} from "react";
import {useRegisterMutation} from "../../app/services/auth";
import {User} from "@prisma/client";
import {isErrorMessage} from "../../utils/is-error-message";
import {ErrorMessge} from "../../components/error-message";

type RegisterData = Omit<User, 'id'> & { confirmPassword: string }

export const Register = () => {
    const navigate = useNavigate()
    const user = useSelector(selectUser)
    const [error, setError] = useState('')
    const [registerUser] = useRegisterMutation()
    const register = async (data: RegisterData) => {
        try {
            await registerUser(data).unwrap()
            navigate('/')
        } catch (err) {
            const maybeError = isErrorMessage(err)
            if (maybeError) {
                setError(err.data.message)
            } else {
                setError("Unknown error")
            }
        }
    }
    return (
        <Layout>
            <Row align="middle" justify='center'>
                <Card title='Register' style={{width: '30rem'}}>
                    <Form onFinish={register}>
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
                        <ErrorMessge message={error}/>
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}
