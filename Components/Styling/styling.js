import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  // Header
  header: {
    backgroundColor: "blue"
    // containerStyle={{
    // backgroundColor: '#3D6DCC',
    //   justifyContent: 'space-around',}}
  },
  // Homepage
  homepageContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    textAlign: "center"
  },
  welcomeMessage: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 24,
    letterSpacing: 2,
    paddingTop: 100
  },
  // Handshake Button
  handshakeButton: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "center"
  },
  // Handshake
  handshakeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "center"
  },
  // MedsScreen button
  medsButtonContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "center"
  },
  // addMedsContainer: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   justifyContent: "center",
  //   textAlign: "center"
  // }
  // Diary
  diaryMain: {
    flex: 1,
    padding: 30,
    paddingTop: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  diarySingle: {
    paddingBottom: 20
  },
  diaryTitle: {
    fontSize: 38,
    fontWeight: "bold",
    paddingBottom: 20,
    textAlign: "center"
  },
  diaryText: {
    backgroundColor: "#fff",
    fontSize: 14,
    paddingBottom: 1
  },
  // Events
  eventsMain: {
    flex: 1,
    padding: 10,
    paddingTop: 100,
    textAlign: "center",
    backgroundColor: "#fff"
  },
  eventsTitle: {
    fontSize: 38,
    fontWeight: "bold",
    paddingBottom: 20,
    textAlign: "center"
  },
  eventsSingle: {
    paddingBottom: 20
  },
  eventsText: {
    padding: 5,
    paddingLeft: 20,
    backgroundColor: "#fff",
    fontSize: 14,
    paddingBottom: 1
  },
  //login
  loginMain: { paddingTop: 50, paddingLeft: 20 },
  // sign up
  signupMain: { paddingTop: 50, paddingLeft: 20 }
}));
