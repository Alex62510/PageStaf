import {Button, Form} from "antd";
import React from "react";

type Props = {
    children: React.ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void,
    type?: "link" | "text" | "default" | "primary" | "dashed" | "ghost" | undefined
    danger?: boolean | undefined;
    loading?: boolean | { delay?: number | undefined } | undefined;
    shape?: "default" | "circle" | "round" | undefined;
    icon?: React.ReactNode;
}
export const CustomButton = ({children, htmlType = "button", type, danger, loading, shape, icon, onClick}: Props) => {
    return (
        <Form.Item>
            <Button
                htmlType={htmlType}
                type={type}
                danger={danger}
                loading={loading}
                shape={shape}
                icon={icon}
                onClick={onClick}
            >{children}</Button>
        </Form.Item>
    )
}