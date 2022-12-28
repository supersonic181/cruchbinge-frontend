const { default: axios } = require("axios");

// Get user profile details
export const profile = async () => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
            credentials: 'include'
        }

        const response = await axios.get(
            process.env.REACT_APP_URL + "/api/users/getUser",
            config
        );

        return response.data;
    }
    catch (err) {
        console.log(err);
        throw new err;
    }
};