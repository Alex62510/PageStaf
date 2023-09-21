import React, {useState} from 'react';
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";
import {useGetEmployeeQuery, useRemoveEmployeeMutation} from "../../app/services/employees";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice";
import {Layout} from "../../components/layout";
import {Descriptions, Divider, Modal, Space} from "antd";
import {CustomButton} from "../../components/custom-batton";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {ErrorMessge} from "../../components/error-message";
import {Paths} from "../../paths";
import {isErrorMessage} from "../../utils/is-error-message";

export const Employee = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const params = useParams<{ id: string }>()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {data, isLoading} = useGetEmployeeQuery(params.id || '')
    const [removeEmployee] = useRemoveEmployeeMutation()
    const user = useSelector(selectUser)
    if (isLoading) {
        return <span>...Loading</span>
    }
    if (!data) {
        return <Navigate to='/'/>
    }
    const showModal = () => setIsModalOpen(true)
    const hideModal = () => setIsModalOpen(false)
    const handleDeleteUser = async () => {
        hideModal()
        try {
            await removeEmployee(data.id).unwrap()
            navigate(`${Paths.status}/deleted`)
        } catch (err) {
            const maybeError = isErrorMessage(err)
            if (maybeError) {
                setError(err.data.message)
            } else {
                setError('unknown error')
            }
        }
    }
    return (
        <Layout>
            <Descriptions title='Info about employee' bordered>
                <Descriptions.Item label='name' span={3}>
                    {`${data.firstName} ${data.lastName}`}
                </Descriptions.Item>
                <Descriptions.Item label='age' span={3}>
                    {data.age}
                </Descriptions.Item>
                <Descriptions.Item label='address' span={3}>
                    {data.address}
                </Descriptions.Item>
            </Descriptions>
            {
                user?.id === data.userId && (
                    <>
                        <Divider orientation="left">Action</Divider>
                        <Space>
                            <Link to={`/employee/edit/${data.id}`}>
                                <CustomButton shape="round" type="default" icon={<EditOutlined/>}>
                                    Edit
                                </CustomButton>
                            </Link>
                            <CustomButton shape="round" danger onClick={showModal} icon={<DeleteOutlined/>}>
                                Delete
                            </CustomButton>
                        </Space>
                    </>
                )
            }
            <ErrorMessge message={error}/>
            <Modal title='Confirm deletion'
                   open={isModalOpen}
                   onOk={handleDeleteUser}
                   onCancel={hideModal}
                   okText='Confirm'
                   cancelText='Cancel'
            >
                Do you really want to remove an employee from the table?
            </Modal>
        </Layout>
    );
};

