import {Layout} from "../../components/layout";
import {Card, Form, Row} from "antd";

export const Login = () => {
    return (
        <Layout>
            <Row align="middle" justify='center'>
                <Card title='Enter' style={{width: '30rem'}}>
                    <Form onFinish={()=>{}}>

                    </Form>
                </Card>
            </Row>
        </Layout>
    )
}
