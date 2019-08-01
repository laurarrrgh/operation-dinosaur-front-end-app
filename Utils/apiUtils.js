const axios = require("axios");

const BASE_URL = "https://medirep-api.herokuapp.com/api/";

const getMeds = async user_id => {
  const { data } = await axios.get(`${BASE_URL}/meds/${user_id}`);
  return data;
};

const getUser = async user_id => {
  const { data } = await axios.get(`${BASE_URL}/users/${user_id}`);
  return data;
};

const getEvents = async user_id => {
  const { data : {events}} = await axios.get(`${BASE_URL}/events/${user_id}`);
  return events;
};

const getQuiz = async user_id => {
  const { data: {quizzes} } = await axios.get(`${BASE_URL}/quiz/${user_id}`);
  return quizzes;
};

module.exports = { getMeds, getUser, getEvents, getQuiz };
