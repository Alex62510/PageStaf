import {createApi,fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react'
import {RootState} from "../store";
const baseQuery=fetchBaseQuery({
    baseUrl:'http://localhost:8000/api',
    prepareHeaders:(headers,{getState})=>{
const token=(getState() as RootState).auth
    }
})