import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>First Text</Text>
      <Text style={styles.dummyText}>Text below</Text>
      <Button title="Tap Here" />
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
