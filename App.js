import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Text component N1</Text>
      <Text>Text component N2</Text> 
      <Button title='Tap Here'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#307BAA',
    color: 'navy',
    alignItems: 'left',
    justifyContent: 'center',
  },
})

