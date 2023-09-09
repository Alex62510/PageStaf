import s from './index.module.css'
import {Layout, Space, Typography} from "antd";
import {LoginOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {CustomButton} from "../custom-batton";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";

export const Header = () => {
    return (
        <Layout.Header className={s.header}>
            <Space>
                <TeamOutlined className={s.teamIcon}/>
                <Link to={Paths.home}>
                    <CustomButton type={'ghost'}>
                        <Typography.Title level={1}>
                            Employees
                        </Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.register}>
                    <CustomButton type={"ghost"} icon={<UserOutlined/>}>
                        register
                    </CustomButton>
                </Link>
                <Link to={Paths.login}>
                    <CustomButton type={"ghost"} icon={<LoginOutlined/>}>
                        login
                    </CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    )
}