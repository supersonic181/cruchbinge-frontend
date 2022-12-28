const { default: axios } = require("axios");


// get watch history of user
export const getHistory = async () => {
    
    try {
        const config = {
            headers: {
              "Content-type":"application/json"
            },
          }

        const response = await axios.get(
            process.env.REACT_APP_URL + "/api/users/getUser",
            config
        );
        const data = await response.data;
        console.log(data.watched);
        return data.watched;
    } catch (err) {
        return err;
    }
}

// add new id to watch history
export const addToWatched = async (id) => {
    try {
        const config = {
            headers: {
                "Content-type":"application/json"
            },
            withCredentials: true
        }
        const response = await axios.post(
            process.env.REACT_APP_URL + "/api/users/watchHistory", {
                id: id
            },
            config
        );
        console.log("added");
        return response;
    } catch (err) {
        return err;
    }
}