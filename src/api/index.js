import axios from 'axios';

const url = process.env.REACT_APP_BACKEND;

export const registerUser = async ({
  name,
  email,
  password,
  phone,
  city,
  role,
}) => {
  try {
    if (role === 'landlord') {
      const res = await axios.post(`${url}/auth/lregister`, {
        name,
        email,
        password,
        phone,
        city,
      });
      return res;
    } else {
      const res = await axios.post(`${url}/auth/tregister`, {
        name,
        email,
        password,
        phone,
        city,
      });
      return res;
    }
  } catch (err) {
    return err;
  }
};

export const loginUser = async ({ email, password, role }) => {
  try {
    const res = await axios.post(`${url}/auth/login`, {
      email,
      password,
      role,
    });
    return res;
  } catch (err) {
    return err;
  }
};
