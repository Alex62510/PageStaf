import React from 'react';
import {Employee} from "@prisma/client";
import {Card, Form, Space} from "antd";
import {CustomInput} from "../custom-input";
import {ErrorMessge} from "../error-message";
import {CustomButton} from "../custom-batton";

type Props<T>={
    onFinish:(value:T)=>void,
    btnText:string,
    title:string,
    error?:string,
    employee?:T
}
export const EmployeeForm = ({onFinish,title,btnText,error,employee}:Props<Employee>) => {
    return (
        <Card title={title} style={{width:'30rem'}}>
            <Form name='employee-form' onFinish={onFinish} initialValues={employee}>
                <CustomInput type='text' name='firstName' placeholder='Name'/>
                <CustomInput type='text' name='lastName' placeholder='LastName'/>
                <CustomInput type='number' name='age' placeholder='Age'/>
                <CustomInput type='text' name='address' placeholder='Address'/>
                <Space>
                    <ErrorMessge message={error}/>
                    <CustomButton htmlType='submit'>
                        {btnText}
                    </CustomButton>
                </Space>
            </Form>
        </Card>
    );
};

