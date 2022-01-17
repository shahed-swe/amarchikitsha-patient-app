import Axios from 'axios'
import {API} from '../Api'

const Login = async (data) => {
    return await Axios.post(`${API}/login/`, data)
}

const Registration = async (data) => {
    return await Axios.post(`${API}/patient_registration/`,data)
}

const Authentication = {
    Login,
    Registration
}

export default Authentication