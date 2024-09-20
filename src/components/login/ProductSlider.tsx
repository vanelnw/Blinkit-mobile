import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC, useMemo } from 'react'
import { imageData } from '@utils/dummyData';
import { screenHeight, screenWidth } from '@utils/Scalling';
import AutoScroll from "@homielab/react-native-auto-scroll";

interface ProductSliderProps{

}

const ProductSlider = () => {

    const rows = useMemo(() => {
        const result = [];
        for(let i=0; i < imageData.length; i += 4){
            result.push(imageData.slice(i, i+4))
        }
        return result
    }, [])

  return (
    <View pointerEvents='none'>
      <AutoScroll style={styles.autoScroll} endPaddingWidth={0} duration={10000}>
        <View style={styles.gridContainer}>
            {rows?.map((row:any, rowIndex:number) => {
                return (
                    <MemoizedRow row={row} rowIndex={rowIndex}/>
                )
            })}
        </View>
      </AutoScroll>
    </View>
  )
}

export default ProductSlider


const Row: FC<{row: typeof imageData, rowIndex:number}> = ({row, rowIndex}) => {
    return (
        <View style={styles.row}>
            {row.map((item, index) => {
                const horizontalShift = index%2 === 0 ? -18 : 18
                return (
                    <View key={index} style={[styles.imageContainer, {transform:[{translateX:horizontalShift}]}]}>
                    <Image source={item} style={styles.image}/>
                </View>
                )
            })}
        </View>
    )
}

const MemoizedRow = React.memo(Row)

const styles = StyleSheet.create({
    autoScroll:{
        position:'absolute',
        zIndex:-2
    },

    gridContainer:{
        justifyContent:'center',
        alignItems:'center',
        overflow:'visible',
    },

    row:{
        flexDirection:'row',
        marginBottom:10,
    },

    imageContainer:{
        marginBottom:12,
        marginHorizontal:10,
        width:screenWidth * 0.26,
        height:screenWidth * 0.26,
        backgroundColor:'#e9f7f8',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
    },

    image:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    }
})