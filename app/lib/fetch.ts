import axios from "axios";

export const fetchData = async () => {
    const response = await axios.get('/api/v1/data');
    return response.data;
};

// simple backend call to get data 