import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './Component/FlatCards'
import ElevatedCards from './Component/ElevatedCards'
import FancyCard from './Component/FancyCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     padding:10,
//   }
// })