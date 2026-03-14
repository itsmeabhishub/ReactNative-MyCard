import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './Component/FlatCards'
import ElevatedCards from './Component/ElevatedCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
          <FlatCards />
          <ElevatedCards />
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