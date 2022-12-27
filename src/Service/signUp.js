const { default: axios } = require("axios");

// Register new user
export const signUp = async(email, userName, password) => {
    try {
        const config = {
            headers: {
                "Content-type":"application/json" 
            },
            credentials: "include"
        }
        const { data } = await axios.post(
            process.env.REACT_APP_URL + "/api/users/register",
            {
                email: email,
                userName: userName,
                password: password
            },
            config
        );
        return data;
    }
    catch(err) {
        return err;
    }
};