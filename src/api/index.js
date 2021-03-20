import axios from "axios";

const url = process.env.REACT_APP_BACKEND;

// export const getUsers = () => axios.get(url);



export const registerUser = ({ name, email, password, phone, role }) => {

    return axios.post("https://findmehome-server.herokuapp.com/auth/tregister", { name, email, password, phone }).then((res) => res).catch((err) => err)
}