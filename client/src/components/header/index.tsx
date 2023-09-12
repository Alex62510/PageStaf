import s from './index.module.css'
import {Layout, Space, Typography} from "antd";
import {LoginOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {CustomButton} from "../custom-batton";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../paths";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../../features/auth/authSlice";

export const Header = () => {
    const user = useSelector(selectUser)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogoutClick = () => {
        dispatch(logout());
        localStorage.removeItem('token')
        navigate('/login')
    }
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
            {user ? (
                <CustomButton type='ghost' icon={<LoginOutlined />} onClick={onLogoutClick}>
                    Logout
                </CustomButton>
            ) : (<Space>
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
            </Space>)
            }
        </Layout.Header>
    )
}