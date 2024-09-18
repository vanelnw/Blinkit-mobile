import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { FC, useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '@features/auth/SplashScreen';
import Geolocation from '@react-native-community/geolocation'

Geolocation.setRNConfiguration({
    skipPermissionRequests:false,
    authorizationLevel:'always',
    enableBackgroundLocationUpdates:true,
    locationProvider:'auto'
})


const Stack = createNativeStackNavigator()

const Navigation:FC = () => {
    useEffect(() =>{
        const fetchUserLocation = async() =>{
            try {
                Geolocation.requestAuthorization()
            } catch (error) {
                Alert.alert('Sorry we need location service to give you better shopping experience')
            }
        }
        const timoutId = setTimeout(fetchUserLocation,1000);
        return () => clearTimeout(timoutId)
    },[]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SplashScreen'
        screenOptions={{
            headerShown:false
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})