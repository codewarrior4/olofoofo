import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Form, Item, Input, Label, Right,Icon } from 'native-base'


const ChangePassword = ({navigation}) => {
  return (
    <View style={styles.body} >
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={{marginTop:15}}>
                <Text style={styles.logo}>Olòfòófò</Text>
                
            </View>
            <View style={{marginTop:15}}>
                <Text style={styles.signin} >Pick a new Password</Text>
            </View>
            <View style={{marginTop:6}}>
                <Text style={styles.signinSub}>Help secure your account</Text>
            </View>
            <View style={{marginTop:25}}>
            <Form>
                <View>
                    <Label style={styles.label}>New Password</Label>
                    <Item regular>
                        <Input secureTextEntry={true}  style={styles.input} />
                    </Item>
                </View>

                <View style={{marginTop:16}}>
                    <Label style={styles.label}>Confirm new Password</Label>
                    <Item regular>
                        <Input secureTextEntry={true}  style={styles.input} />
                    </Item>
                </View>
                
                
            </Form>
            </View>

            
        </ScrollView>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.btndone} onPress={()=>navigation.navigate('Welcome')}>
                <Text style={styles.btntxt}>Done</Text>
            </TouchableOpacity>
            <View style={styles.bottomView}>
                <Text style={styles.bottomTxtx}>Do not have an Account? <Text onPress={()=>{navigation.navigate('Signup')}} style={{color:'#006175'}}>Sign up</Text></Text>
            </View>
        </View>
    </View>
  )
}

export default ChangePassword

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
        position:'relative',
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
    }
})