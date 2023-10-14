import { Text, View } from "react-native"
import styled from "styled-components/native"

const TopBg = styled.View`
    background-color: #000;
    width: 75%;
    height: 25%;
`

const Dashboard = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>Dashboard circles</Text>
      <TopBg />
    </View>
  )
}

export default Dashboard;
