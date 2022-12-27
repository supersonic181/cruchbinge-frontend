const { default: axios } = require("axios");

export const verifyUser = async (email) => {

    try {
        const config = {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true
        }

        const response = await axios.post(
            process.env.REACT_APP_URL + "/api/users/verifyUser",
            {
                email
            },
            config
        );
        return response.status;
    }
    catch (err) {
        // console.log("Catch Block",err.response.status);
        return err.response.status;
    }
}

// module.exports = {
//     verifyUser
// }