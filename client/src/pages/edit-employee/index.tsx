import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useEditEmployeeMutation, useGetEmployeeQuery} from "../../app/services/employees";
import {Layout} from "../../components/layout";
import {Row} from "antd";
import {EmployeeForm} from "../../components/employee-form";
import {Employee} from "@prisma/client";
import {Paths} from "../../paths";
import {isErrorMessage} from "../../utils/is-error-message";

export const EditEmployee = () => {
    const navigate = useNavigate()
    const params = useParams<{ id: string }>()
    const [error, setError] = useState('')
    const {data, isLoading} = useGetEmployeeQuery(params.id || '')
    const [editEmployee] = useEditEmployeeMutation()
    if (isLoading) {
        return <span>...Loading</span>
    }
    const handleEditUser = async (employee: Employee) => {
        try {
            const editedEmployee = {
                ...data,
                ...employee
            }
            await editEmployee(editedEmployee).unwrap()
            navigate(`${Paths.status}/updated`)
        } catch (err) {
            const maybeError = isErrorMessage(err)
            if (maybeError) {
                setError(err.data.message)
            } else {
                setError("unknown error")
            }
        }
    }
    return (
        <Layout>
            <Row align='middle' justify='center'>
                <EmployeeForm onFinish={handleEditUser} btnText='Edit' title='Edit employee' error={error}
                              employee={data}/>
            </Row>
        </Layout>
    )
};

