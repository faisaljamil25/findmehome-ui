import React from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

function AuthContextProvider(props) {
  const object = {
    isLoggedIn: false,
    id: '',
  };
  const [authdata, setAuthdata] = React.useState(object);

  async function getLoggedIn() {
    try {
      const LoggedInData = await axios.get(
        `${process.env.REACT_APP_BACKEND}/auth/isLoggedIn`
      );

      setAuthdata(LoggedInData.data);
      //console.log(authdata);
    } catch (e) {
      console.log(e);
    }
  }

  React.useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ authdata, getLoggedIn }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthContext;
export { AuthContextProvider };
