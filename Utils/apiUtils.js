const axios = require("axios");

const BASE_URL = "https://medirep-api.herokuapp.com/api/";

const getMeds = async user_id => {
  const { data } = await axios.get(`${BASE_URL}/meds/${user_id}`);
  return data;
};

module.exports = { getMeds };
