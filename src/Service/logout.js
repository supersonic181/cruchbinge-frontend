const { default: axios } = require("axios");

export const logout = async () => {
    try {
        await axios.delete(
            process.env.REACT_APP_URL + "/api/users/logout",
            { withCredentials: true }
        );
        return "success";
    } catch (error) {
        console.log(error);
    }
}

// module.exports = {
//     logout
// }