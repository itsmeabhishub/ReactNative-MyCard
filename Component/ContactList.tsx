import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
    {
      uid: 1,
      name: 'Rahul Sharma',
      status: 'Learning React Native ',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I Love To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      uid: 4,
      name: 'Priya Verma',
      status: 'Frontend Developer ',
      imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      uid: 5,
      name: 'Amit Kumar',
      status: 'Building mobile apps ',
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    }
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.conatiner}
      scrollEnabled={false}>
        {contacts.map(({uid,name,status,imageUrl}) =>(
            <View key={uid} style={styles.userID}>
                <Image 
                source={{
                    uri:imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        color:'#FFFFFF',
        fontWeight:'bold',
        paddingHorizontal:10,
    },
    conatiner:{ 
        paddingHorizontal:16,
    },
    userID:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#8D3DAF',
        padding:8,
        borderRadius:10,

    },
    userImage:{
        height:50,
        width:50,
        borderRadius:25,
        marginRight:12,
    },
    userName:{
      fontSize:16, 
      fontWeight:'600',
        color:'#ffffff',
    },
    userStatus:{
        fontSize:12,
        color:'#36243b',
    }
})