import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Button } from 'react-native'
import React,{useState,useRef} from 'react'
import { Form, Item, Input, Label, Right, Textarea } from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-neat-date-picker'
import PhoneInput from "react-native-phone-number-input";

const Signup = ({navigation}) => {
    

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const [values, setValues] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef(null);

    const[dob,setDob] = useState(date)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Male', value: 'male'},
      {label: 'Female', value: 'female'}
    ]);
    const [showDatePicker, setShowDatePicker] = useState(false)

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
  }

  const onConfirm = ( date ) => {
    // You should close the modal in here
    setShowDatePicker(false)
    
    setDob(date.dateString)
  }


  return (
    <View style={styles.body} >
        <ScrollView>
            <View style={{marginTop:15}}>
                <Text style={styles.logo}>Olòfòófò</Text>
            </View>
            <View style={{marginTop:15}}>
                <Text style={styles.signin}>Sign up</Text>
            </View>
            <View style={{marginTop:6}}>
                <Text style={styles.signinSub}>Please Fill the Following</Text>
            </View>
            <View style={{marginTop:25}}>
            <Form>
                <View>
                    <Label style={styles.label}>Fullname</Label>
                    <Item regular>
                        <Input style={styles.input} />
                    </Item>
                </View>
                <View style={{marginTop:16}}>
                    <Label style={styles.label}>Email Address</Label>
                    <Item regular>
                        <Input keyboardType='email-address' style={styles.input} />
                    </Item>
                </View>
                <View style={{marginTop:16}}>
                    <Label style={styles.label}>Phone</Label>
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={values}
                        defaultCode="NG"
                        layout="first"
                        onChangeText={(text) => {
                        setValues(text);
                        }}
                        onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                        }}
                        withDarkTheme
                        containerStyle={styles.input}
                        textContainerStyle={{height:60}}
                        textInputStyle={{fontFamily:'Poppins-Regular',paddingVertical:0}}
                        codeTextStyle={{fontFamily:'Poppins-Regular'}}
                    />
                </View>
                <View style={{marginTop:16,flex:1,flexDirection:'row',justifyContent:'space-between',}}>
                    <View style={{width:Dimensions.get('window').width/3}}>
                        <Label style={styles.label}>Date Of Birth</Label>
                        <TouchableOpacity style={styles.input} onPress={openDatePicker}> 
                            <Text style={styles.date}>{dob}</Text>
                        </TouchableOpacity>
                        <DatePicker
                            isVisible={showDatePicker}
                            mode={'single'}
                            onCancel={onCancel}
                            onConfirm={onConfirm}
                        />
                    </View>
                    <View style={{width:Dimensions.get('window').width/3}}>
                        <Label style={styles.label}>Gender</Label>
                        
                        {/* <Item regular> */}
                        <DropDownPicker
                        style={styles.input}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder="Gender"
                        labelStyle={styles.dditem}
                        placeholderStyle={styles.ddplace}
                        schema={{
                            containerStyle: 'containerStyle',
                          }}
                        />
                        {/* </Item> */}
                    </View>
                </View>
                <View style={{marginTop:16}}>
                    <Label style={styles.label}>About</Label>
                    <Textarea rowSpan={5} style={styles.input} bordered />
                </View>
                <View style={{marginTop:16}}>
                    <Label style={styles.label}>Username</Label>
                    <Item regular>
                        <Input style={styles.input} />
                    </Item>
                </View>
                <View style={{marginTop:16}}>
                    <Label style={styles.label}>Password</Label>
                    <Item regular>
                        <Input secureTextEntry={true} style={styles.input} />
                    </Item>
                </View>
                <View style={{marginTop:16}}>
                    <Label style={styles.label}>Confirm Password</Label>
                    <Item regular>
                        <Input secureTextEntry={true} style={styles.input} />
                    </Item>
                </View>
                
                
            </Form>
            </View>

            
        <View >
            <TouchableOpacity style={styles.btndone} onPress={()=>{navigation.navigate('Otp')}}>
                <Text style={styles.btntxt}>Submit</Text>
            </TouchableOpacity>
            <View style={styles.bottomView}>
                <Text style={styles.bottomTxtx}>Already Have an account? <Text onPress={()=>{navigation.navigate('Signin')}} style={{color:'#006175'}}>Sign up</Text></Text>
            </View>
        </View>
        </ScrollView>
    </View>
  )
}

export default Signup

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
    ddplace:{
        paddingLeft:5,
        fontFamily:'Poppins-Regular',
        fontSize:17,
        color:'#006175',
    },
    date:{
        color:'#006175',
        paddingVertical:7,
        fontFamily:'Poppins-Regular',
        fontSize:17
    }
})