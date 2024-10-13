import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvides/AuthProviders';

const axiosSecure=axios.create({
    baseURL:'https://car-doctor-server-9an3kxpsn-sirajulnoman7s-projects.vercel.app',
    withCredentials:true,
})
const useAxiosBaseUrl = () => {
    const {logOut}=useContext(AuthContext)
    const navigate=useNavigate()
    useEffect(()=>{
        axiosSecure.interceptors.response.use((response)=>{
          return response
        },(error)=>{
            if(error.response.status===401||error.response.status===403){
                 logOut(res=>{
                    navigate('/sign_in')
                 })
                 .then()
                 .then(error=>console.log(error))
                console.log('unauthorized user')
            }
        })
    },[])
    return axiosSecure
};

export default useAxiosBaseUrl;