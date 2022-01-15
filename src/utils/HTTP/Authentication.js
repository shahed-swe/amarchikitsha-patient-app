import Axios from 'axios'
import API from '../Api'

const Login = async (data) => {
    const config = {
        headers: {
            'Authorization': `JWT ${localStorage.getItem('token')}`
        }
    }

    return await Axios.post(`${API}/login/`, data,config)
}

const Registration = async (data) => {
    const config = {
        headers: {
            'Authorization': `JWT ${localStorage.getItem("token")}`
        }
    }
    return await Axios.post(`${API}/patient_registration/`,data, config)
}

const Authentication = {
    Login,
    Registration
}

export default Authentication