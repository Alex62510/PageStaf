import s from './index.module.css'
import {Button, Layout, Space, Typography} from "antd";
import {TeamOutlined} from "@ant-design/icons";
export const Header=()=>{
    return(
        <Layout.Header className={s.header}>
<Space>
    <TeamOutlined className={s.teamIcon}/>
    <Button type="link">Click</Button>
</Space>
        </Layout.Header>
    )
}