import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import CustomSafeAreaView from '@components/common/CustomSafeAreaView'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import ProductSlider from '@components/login/ProductSlider'

const CustomerLogin:FC = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <CustomSafeAreaView>
        <ProductSlider/>
      </CustomSafeAreaView>
    </GestureHandlerRootView>
  )
}

export default CustomerLogin

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})