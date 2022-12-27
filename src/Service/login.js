const { default: axios } = require("axios");

// find user in db to let him/her login
export const login = async (email, password) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true
        }

        const { data } = await axios.post(
            process.env.REACT_APP_URL + "/api/users/login",
            {
                email,
                password
            },
            config
        );

        return data;
    }
    catch (err) {
        throw err;
    }
}
