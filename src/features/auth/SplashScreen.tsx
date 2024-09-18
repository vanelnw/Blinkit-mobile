import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Colors } from '@utils/Constants'
import { screenHeight, screenWidth } from '@utils/Scalling'
import Logo from '@assets/images/splash_logo.jpeg'

const SplashScreen:FC = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo}  style={styles.logoImage}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.primary,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    logoImage:{
        height:screenHeight * 0.7,
        width: screenWidth *0.7,
        resizeMode:'contain'
    }
})