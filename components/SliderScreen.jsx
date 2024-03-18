import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { AntDesign } from '@expo/vector-icons';

const SliderScreen = () => {

  return (
    
    <Swiper style={styles.wrapper} showsButtons={false} loop={false} autoplay={true} autoplayTimeout={5000}>
      <View style={styles.slide}>
        <Image source={require('../assets/img3.png')} 
                      contentFit='stretch'
                      style={{width: 360,height:360,marginTop:-100,borderBottomLeftRadius:50, borderBottomRightRadius:50}}
                      className="rounded-[25px]"
        />        
        <Text style={styles.headin1}>Welcome to the IoT App</Text>
        <Text style={styles.text}>Our IoT application revolutionizes home automation, allowing users to control their lights, thermostats, and appliances remotely.</Text>
      </View>
      <View style={styles.slide}>
      <Image source={require('../assets/img1.png')} 
                      contentFit='contain'
                      style={{width: 360,height:360,marginTop:-30,borderBottomLeftRadius:50, borderBottomRightRadius:50, marginBottom:50}}
                      className="rounded-[25px]"
        />        
        <Text style={styles.text}>Welcome to the future of living where every device is at your command.</Text>
      </View>
      <View style={styles.slide}>
      <Image source={require('../assets/img2.png')} 
                      contentFit='center'
                      style={{width: 360,height:360,marginTop:-30,borderBottomLeftRadius:50, borderBottomRightRadius:50, marginBottom:30}}
                      className="rounded-[25px]"
        />        
        <Text style={styles.text}>Connect your world, control your home with just a tap!</Text>
        <TouchableOpacity>
          <Text style={{marginTop:40, fontSize:30, backgroundColor:'#479699', borderRadius:10, padding:5}}>Get Started <AntDesign name="arrowright" size={30} color="black" style={{}} /></Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', // Adjust the width as needed
    height: '50%', // Adjust the height as needed
    resizeMode: 'cover', // Change the resizeMode as needed (contain, cover, stretch, center, repeat)
  },
  headin1: {
    marginTop: 20, // Adjust the margin as needed
    fontSize: 30, // Adjust the font size as needed
    fontWeight: 'bold',
    color: '#479699',
    // fontFamily: 'Raleway-Thin'
  },
  text: {
    marginLeft: 10,
    textAlign: 'center',
    marginRight: 10,
    marginTop: 20, // Adjust the margin as needed
    fontSize: 20, // Adjust the font size as needed
    // fontFamily: 'Raleway-Italic', 
    color: 'black' ,// Adjust the font weight as needed
  },
});

export default SliderScreen;
