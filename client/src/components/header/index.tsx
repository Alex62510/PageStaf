import s from './index.module.css'
import {Button, Layout, Space, Typography} from "antd";
import {TeamOutlined} from "@ant-design/icons";
import {CustomButton} from "../custom-batton";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";

export const Header = () => {
    return (
        <Layout.Header className={s.header}>
            <Space>
                <TeamOutlined className={s.teamIcon}/>
                <Link to={Paths.home}>
                    <CustomButton type={'text'}>
                        <Typography.Title level={1}>
                            Staffs
                        </Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.register}>
                    <CustomButton type={"text"}>

                    </CustomButton>
                </Link>
                <Link to={Paths.login}>
                    <CustomButton type={"text"}>
                        Enter to login
                    </CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    )
}