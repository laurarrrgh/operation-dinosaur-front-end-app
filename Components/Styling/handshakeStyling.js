import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  handshakeMain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  handshakeTitle: { fontSize: 20, paddingBottom: 20 },
  handshakeText: { fontSize: 16 },
  codeText: { fontWeight: "bold", fontSize: 17 },
  handshakeBottomText: { textAlign: "center", fontSize: 16 }
}));
