import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './Component/FlatCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View >
          <FlatCards />
        </View>
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