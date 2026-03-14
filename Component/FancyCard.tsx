import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Place</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dikezuoz5/image/upload/v1770572788/mall_bemuhn.jpg',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Mall</Text>
          <Text style={styles.cardLabel}>Constructed by MVA</Text>
          <Text style={styles.cardDescription}>
            This site is designed and developed by MVA construction. We Have
            provided best material to develop this site.
          </Text>
          <Text style={styles.cardLocation}>All Right Reserved @MVA Jamui.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 380,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow:1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 16,
    color: '#00000',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    marginBottom:12,
    marginTop:6,
    flexShrink:1,
  },
  cardLocation: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
  },
});
