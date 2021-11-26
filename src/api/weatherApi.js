import axios from "axios";

const API = "0632670317d0494e1c9f59d40d86a2a2";

const handleRequest = async (value) => {
    const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API}`
    );
    const result = await response.data;
    console.log(result);
    return result;
};

export { handleRequest };
