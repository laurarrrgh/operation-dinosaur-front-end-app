const axios = require("axios");
const BASE_URL = "https://medirep-api.herokuapp.com/api/";

const postNewMedication = async (user_id, type, due) => {
  const newMeds = { type: type, due: due };
  const { data } = await axios.post(`${BASE_URL}/meds/${user_id}`, {
    ...newMeds
  });
  console.log(data);
  return data;
};

const get4DigitNumber = async user_id => {
  const {
    data: { code }
  } = await axios.get(`${BASE_URL}/codes/${user_id}`);
  return code;
};

postNewMedication(1, "ropinerol", "2019-07-29T15:00:00.000Z");
get4DigitNumber(1);
