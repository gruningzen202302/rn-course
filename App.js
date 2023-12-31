import { StyleSheet, Text, View, Button } from "react-native";
import Dashboard from "./screens/dashboard";
import Map from "./screens/map";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>HELLO BRUCE</Text>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "black" }} />
      <Map />
      <Text style={styles.dummyText}>First Text</Text>
      <Text style={styles.dummyText}>Text </Text>
      <Button title="Tap Here" color="#22A360" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#307BAA",
    color: "navy",
    alignItems: "left",
    justifyContent: "center",
  },
  greetingText: {
    color: "white",
    margin: 25,
  },
  dummyText: {
    backgroundColor: "silver",
    borderRadius: 10,
    margin: 50,
    borderWidth: 3,
    borderColor: "silver",
    padding: 16,
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
});
