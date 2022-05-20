import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useCallback, useRef, useState} from 'react'
import { Form, Item, Input, Label, Right,Icon } from 'native-base'
import InputCode, {InputCodeHandler} from 'react-native-input-code';

const Otp = ({navigation}) => {

    const inputCode = useRef(null);
    const [code, setCode] = useState('');


    const onChangeCode = useCallback(value => {
        console.log(value);
        setCode(value);
    }, []);

    const onFullFill = useCallback(
        value => {
          console.log(value);
    
          setTimeout(() => {
            setCode('');
            inputCode.current.focus();
          }, 2000);
        },
        [inputCode],
      );

  return (
    <View style={styles.body} >
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={{marginTop:15}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon style={styles.logo}
                    type='Feather'
                    name='chevron-left'
                    fontSize={30}
                />
                </TouchableOpacity>
                
            </View>
            <View style={{marginTop:20}}>
                <Text style={styles.signin} >OTP Sent</Text>
            </View>
            <View style={{marginTop:6}}>
                <Text style={styles.signinSub}>Enter the OTP sent to you</Text>
            </View>
            <View style={{marginTop:25}}>
            <Form>
                <View>
                <InputCode
                    code={code}
                    length={5}
                    ref={inputCode}
                    onChangeCode={onChangeCode}
                    onFullFill={onFullFill}
                    // passcode
                    // passcodeChar="*"
                    autoFocus
                    codeContainerStyle={styles.codeContainerStyle}
                    codeContainerCaretStyle={styles.codeContainerCaretStyle}
                />
                </View>
                <View style={{flex:1,alignContent:'flex-end'}}>
                    <Text onPress={()=>{navigation.navigate('ChangePassword')}}  style={styles.forgot}>Didn’t receive any code? Resend in 01:00</Text>
                </View>
                
            </Form>
            </View>

            
        </ScrollView>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.btndone} onPress={()=>navigation.navigate('ChangePassword')}>
                <Text style={styles.btntxt}>Next</Text>
            </TouchableOpacity>
            <View style={styles.bottomView}>
                <Text style={styles.bottomTxtx}>Do not have an Account? <Text onPress={()=>{navigation.navigate('Signup')}} style={{color:'#006175'}}>Sign up</Text></Text>
            </View>
        </View>
    </View>
  )
}

export default Otp
const styles = StyleSheet.create({
    body:{
        flex:1,
        marginVertical:25,
        marginHorizontal:20,
        
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
    forgot:{
        color:'black',
        textAlign:'left',
        fontFamily:'Poppins-Light',
        color:'#006175',
        paddingTop:20,
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
    codeContainerStyle: {
        borderWidth: 2,
        borderBottomWidth: 2,
        borderRadius:5,
        color:'black',
        backgroundColor:'#006175'
    },
    codeContainerCaretStyle:{
        borderWidth: 2,
        borderBottomWidth: 2,
        borderRadius:5,
        color:'black',
        backgroundColor:'#fff'
    }
})