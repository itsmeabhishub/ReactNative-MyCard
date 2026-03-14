import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>more..</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>😁</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 8,
  },
  elevatedCard: {
    backgroundColor: '#CAD5E2',
    elevation:5,
    shadowOffset:{
        width:1,
        height:1,
    },
    shadowColor:'#EF5354',
    shadowOpacity:0.5,
    shadowRadius:5,
  },
});
