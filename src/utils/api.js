import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
        'ec5855f02dmsh090a17dd1093ceap1432d0jsnfdba1c653a18'|| "YOUR_API_KEY",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};
// '9df6c0dcccmsh63f5283228f2ea3p154f4fjsndf33d62d8fe5'

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
