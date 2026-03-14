import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openWebsite = (websiteLink: string) => {
    // Logic to open a website or perform an action
    Linking.openURL(websiteLink);
  };

  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headerConatiner}>
          <Text style={styles.headerText}>
            Tap the button below to visit our website
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dikezuoz5/image/upload/v1770570946/logo_2_mogenf.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
            Our website provides a wide range of products and services to cater
            to your needs. Whether you're looking for the latest gadgets,
            fashion trends, or home essentials, we have it all. Explore our
            website to discover amazing deals, exclusive offers, and a seamless
            shopping experience. Click the button below to visit our website and
            start shopping today!
          </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={()=>openWebsite('https://mva-construction-umber.vercel.app/mva')}>
                <Text style={styles.footerText}>Read More</Text>
            </TouchableOpacity>
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
    height: 370,
    borderRadius: 6,
    marginHorizontal:16,
    marginVertical:12,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  headerConatiner:{
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  headerText: {
    color:'#000000',
    fontSize:16,
    fontWeight:'600',
  },
  cardImage: {
    height: 200,
    resizeMode:'contain',
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 10,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  footerText:{
    fontSize:16,
    color:'#000000',
    backgroundColor:'#fff',
    paddingHorizontal:20,
    paddingVertical:8,
    borderRadius:5,
  }
});
