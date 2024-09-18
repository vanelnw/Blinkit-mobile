import {Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, FC } from 'react'
import { Colors } from '@utils/Constants'
import { screenHeight, screenWidth } from '@utils/Scalling'
import Logo from '@assets/images/splash_logo.jpeg'
import Geolocation from '@react-native-community/geolocation'
import { useAuthStore } from '@state/authStore'
import { tokenStorage } from '@state/storage'
import { resetAndNavigate } from '@utils/NavigationUtils'

Geolocation.setRNConfiguration({
    skipPermissionRequests:false,
    authorizationLevel:'always',
    enableBackgroundLocationUpdates:true,
    locationProvider:'auto'
})

const SplashScreen:FC = () => {
    const {user, setUser} = useAuthStore();

    const tokenCkeck = async()=>{
        const accessToken = tokenStorage.getString('accessToken') as string;
        const refreshToken = tokenStorage.getString('refreshToken') as string;

        if(accessToken){

        }
        resetAndNavigate("CustomerLogin")
        return false
    }


    useEffect(() => {

    },[]);

    useEffect(() =>{
        const fetchUserLocation = async() =>{
            try {
                Geolocation.requestAuthorization()
                tokenCkeck();
            } catch (error) {
                Alert.alert('Sorry we need location service to give you better shopping experience')
            }
        }
        const timoutId = setTimeout(fetchUserLocation,1000);
        return () => clearTimeout(timoutId)
    },[]);
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