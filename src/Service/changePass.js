const { default: axios } = require("axios");

export const changePass = async (email, password) => {

    try {
        const config = {
            headers: {
                "Content-type": "application/json"
            },
        }

        const response = await axios.post(
            process.env.REACT_APP_URL + "/api/users/changePass",
            {
                email,
                password
            },
            config
        );
        return response;
    }
    catch (err) {
        // console.log("Catch Block",err.response.status);
        throw err.response;
    }
}

// module.exports = {
//     changePass
// }