import axios from "axios";

const url = process.env.REACT_APP_BACKEND;

// export const getUsers = () => axios.get(url);

export const registerUser = ({ name, email, password, phone, city, role }) => {
  return axios
    .post(`${url}/tregister`, { name, email, password, phone, city })
    .then((res) => res)
    .catch((err) => err);
};
