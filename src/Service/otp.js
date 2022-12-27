const { default: axios } = require("axios");

export const generateOTP = async (email) => {

    try {
        const config = {
            headers: {
                "Content-type": "application/json"
            },
        }

        const response = await axios.post(
            process.env.REACT_APP_URL + "/api/users/generateOTP",
            {
                email
            },
            config
        );
        return response;
    }
    catch (err) {
        // console.log("Catch Block",err.response.status);
        return err.response;
    }
}

// module.exports = {
//     generateOTP
// }