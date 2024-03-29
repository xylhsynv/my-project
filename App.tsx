import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
export default function App() {
  const buttonClk = () => {
    console.log("Forgot yur password");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello World</Text>
      <Text style={styles.subTitle}>Sign In account</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="email-address"
        placeholder="xylshynv17@gamil.com"
      />
      <TextInput
        style={styles.textInput}
        placeholder="password"
        keyboardType="number-pad"
      />
      <Text style={styles.forgetPassword}>Forgot yur password</Text>
      <Button title="Login" onPress={buttonClk} />
      <Text style={styles.forgetPassword}>Don't have an account </Text>
      <StatusBar style="light" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 28,
    color: "gray",
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: "67%",
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "white",
    height: 50,
  },
  forgetPassword: {
    fontSize: 15,
    padding: 15,
    color: "gray",
  },
});
