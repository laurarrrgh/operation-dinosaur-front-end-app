const axios = require("axios");
const BASE_URL = "https://medirep-api.herokuapp.com/api/";

const getMeds = async user_id => {
  const { data } = await axios.get(`${BASE_URL}/meds/app/${user_id}`);
  return data;
};

const getUser = async user_id => {
  const {
    data: { user }
  } = await axios.get(`${BASE_URL}/users/${user_id}`);
  return user;
};

const getEvents = async user_id => {
  const {
    data: { events }
  } = await axios.get(`${BASE_URL}/events/${user_id}`);
  return events;
};

const getQuiz = async user_id => {
  const {
    data: { quizzes }
  } = await axios.get(`${BASE_URL}/quiz/app/${user_id}`);
  return quizzes;
};

const get4DigitNumber = async user_id => {
  const {
    data: { code }
  } = await axios.get(`${BASE_URL}/codes/requestnew/${user_id}`);
  return code.code;
};

const postNewMedication = async (user_id, type, due) => {
  const newMeds = { type: type, due: due };
  const { data } = await axios.post(`${BASE_URL}/meds/${user_id}`, {
    ...newMeds
  });
  return data;
};

const patchMedication = async med_id => {
  const { medication } = await axios.patch(`${BASE_URL}/meds/${med_id}`, {
    status: 5
  });
  return medication;
};

const signUp = async (firstName, surname) => {
  const newUser = { first_name: firstName, surname: surname };
  const { data } = await axios.post(`${BASE_URL}/users`, {
    ...newUser
  });
  return data;
};

module.exports = {
  getMeds,
  getUser,
  getEvents,
  getQuiz,
  get4DigitNumber,
  postNewMedication,
  patchMedication,
  signUp
};
