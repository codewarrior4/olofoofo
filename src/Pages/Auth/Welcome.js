import { View, Text, ScrollView, StyleSheet, TouchableOpacity,Image,Dimensions } from 'react-native'
import React, {useCallback, useRef, useState} from 'react'


const Welcome = ({navigation}) => {
  return (
    <View style={styles.body} >
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={{marginTop:15,alignItems:'center'}}>
                <Image style={styles.image} source={require('./../../../assets/img/onboard/welcome.png')} />
                <Text style={styles.signin}>Welcome Back</Text>
            </View>
            <View style={{marginTop:25}}>
            <TouchableOpacity style={styles.btndone} onPress={()=>{navigation.navigate('Signin')}}>
                <Text style={styles.btntxt}>Continue</Text>
            </TouchableOpacity>
            </View>

            
        </ScrollView>
        
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    body:{
        flex:1,
        marginVertical:25,
        marginHorizontal:20,
        
    },
    logo:{
        fontFamily:'Poppins-Black',
        fontSize:30,
        color:'black'
    },
    signin:{
        fontFamily:'Poppins-Regular',
        fontSize:20,
        color:'black'
    },
    signinSub:{
        fontFamily:'Poppins-Light',
        fontSize:16,
        color:'black'
    },
    label:{
        color:'#000',
        fontFamily:'Poppins-Light',
        fontSize:15
    },
    input:{
        borderColor:'#006175',
        borderWidth:1,
        borderRadius:8,
        paddingLeft:15,
        paddingVertical:5,
        fontFamily:'Poppins-Regular',
        fontSize:17,
        color:'#006175',

    },
    forgot:{
        color:'black',
        textAlign:'right',
        fontFamily:'Poppins-Light',
        color:'#006175',
        paddingTop:10,
    },
    footer:{
       bottom:0,
    },
    btndone:{
        backgroundColor:'#006175',
        marginTop:20,
        borderRadius:5,
        elevation:1,
        padding:10,
        alignItems:'center'
    },
    btntxt:{
        fontFamily:'Poppins-Light',fontSize:20,color:'white'
    },
    bottomView:{
        marginVertical:20
    },
    bottomTxtx:{
        color:'#000',
        fontFamily:'Poppins-Regular',
        fontSize:15,
        textAlign:'center'
    },
    image:{
      marginTop:20,height:Dimensions.get('window').width / 1.2
    }
})