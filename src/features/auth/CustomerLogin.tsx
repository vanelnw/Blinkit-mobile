import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import React, {useState, FC } from 'react'
import CustomSafeAreaView from '@components/common/CustomSafeAreaView'
import {GestureHandlerRootView, PanGestureHandler, State} from 'react-native-gesture-handler'
import ProductSlider from '@components/login/ProductSlider'
import { resetAndNavigate } from '@utils/NavigationUtils'

const CustomerLogin:FC = () => {
  const [gestureSequence, setGestureSequence] = useState<string[]>([]);

  const handleGesture = ({nativeEvent}:any) => {
    if(nativeEvent.state === State.END){
      const  {translationX, translationY} = nativeEvent;
      let direction = ''
      if(Math.abs(translationX) > Math.abs(translationY)){
        direction = translationX > 0 ? 'right' : 'left'
      }else{
         direction = translationY > 0 ? 'down' : 'up'
      }

      const newSequence = [...gestureSequence,direction].slice(-5)
      setGestureSequence(newSequence);
      if(newSequence.join('') === 'up up down left right'){
        setGestureSequence([])
        resetAndNavigate('DeliveryLogin')
      }
    }
  }
  return (
    <GestureHandlerRootView style={styles.container}>
      <CustomSafeAreaView>
        <ProductSlider/>
        <PanGestureHandler onHandlerStateChange={handleGesture}>
          <Animated.ScrollView
            bounces={false}
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='handled'
            contentContainerStyle={styles.subContainer}
          >
            <View style={styles.content}>
              <Image source={require('@assets/images/logo.png')} style={styles.logo}/>

            </View>

          </Animated.ScrollView>
        </PanGestureHandler>
      </CustomSafeAreaView>
    </GestureHandlerRootView>
  )
}

export default CustomerLogin

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  subContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 20
  },

  content:{
    justifyContent:'center',
    alignItems:'center', 
    width:'100%',
    backgroundColor:'white',
    paddingHorizontal:20,
    paddingBottom:20,
  },

  logo:{
    height:50,
    width:50,
    borderRadius:20,
    marginVertical:10
  }
})