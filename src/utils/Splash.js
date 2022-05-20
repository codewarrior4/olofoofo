import { StyleSheet, Text, View,StatusBar, SafeAreaView } from 'react-native'
import React from 'react'

export default function Splash() {
  return (
    
        <View style={styles.body}>
            <Text style={styles.text}>Olòfòófò</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    body:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'},
    text:{color:'black',fontSize:50,fontFamily:'Poppins-Regular'}
})