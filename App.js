import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Text component N1</Text>
      <Text 
      style={{
        backgroundColor:'silver',
        borderRadius:10,
        margin:50, 
        borderWidth:3, 
        borderColor:'silver', 
        padding:16, 
        color:'black'}}
      >Text component N2
      </Text> 
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

