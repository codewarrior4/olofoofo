import { View, Text,Image, TouchableOpacity,StyleSheet, ScrollView ,Dimensions, SafeAreaView} from 'react-native'
import React, { useRef ,useEffect} from 'react'
import Onboarding from 'react-native-onboarding-swiper';


export default function Onboard({navigation}) {

  const onboardingRef = useRef(null);
 
  const Move = () =>{
    onboardingRef.current.goNext()
  }

  
  
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <Onboarding
      controlStatusBar={false}
      ref={onboardingRef}
      showDone={false}
      showPagination={false}
      pages={[
        {
          title: 'Connect with Friends and Family',
          titleStyles:{
            fontFamily:'Poppins-Black',
            fontSize:30,
            textAlign:'left',
            paddingRight:20,
            marginTop:20
          },
          subtitle: (
            <View style={styles.subtitleView}>
              <Text style={styles.subtitleText}>Connecting with Family and Friends provides a sense of belonging and security </Text>
              <View>
                <TouchableOpacity style={styles.btnnext} onPress={Move}>
                  <Text style={styles.btnntxt}>Next</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.btnskip} onPress={()=>navigation.navigate('Signin')}>
                  <Text style={styles.btnstxt}>Skip</Text>
                </TouchableOpacity>
              </View>
              <View style={{padding:10}}>
                <Text onPress={()=>navigation.navigate('Signin')} style={styles.Signin}>Already Have an account?  <Text style={{color:'gray'}}>Sign in</Text></Text>
              </View>
            </View>
          ),
          subTitleStyles:{
            fontFamily:'Poppins-Light',
            fontSize:16,
            color:'gray',
            textAlign:'justify',
            paddingLeft:10,
            paddingRight:15,
            marginTop:20
          },
          backgroundColor: 'white',
          image: (
            <Image style={styles.image} source={require('./../../assets/img/onboard/slide1.png')} />
          ),
          
        },
        {
          
          title: 'Make new friends with ease',
          titleStyles:{
            fontFamily:'Poppins-Black',
            fontSize:30,
            textAlign:'left',
            paddingRight:20,
            marginTop:20
          },
          subtitle: (
            <View style={styles.subtitleView}>
              <Text style={styles.subtitleText}>Allowing you to make new Friends is our Number one priority..... </Text>
              <View>
                <TouchableOpacity style={styles.btnnext} onPress={Move}>
                  <Text style={styles.btnntxt}>Next</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.btnskip} onPress={()=>navigation.navigate('Signin')}>
                  <Text style={styles.btnstxt}>Skip</Text>
                </TouchableOpacity>
              </View>
              <View style={{padding:10}}>
                <Text onPress={()=>navigation.navigate('Signin')} style={styles.Signin}>Already Have an account?  <Text style={{color:'gray'}}>Sign in</Text></Text>
              </View>
            </View>
          ),
          subTitleStyles:{
            fontFamily:'Poppins-Light',
            fontSize:16,
            color:'gray',
            textAlign:'justify',
            paddingLeft:10,
            paddingRight:15,
            marginTop:20
          },
          backgroundColor: 'white',
          image: (
            <Image style={styles.image} source={require('./../../assets/img/onboard/slide2.png')} />
          ),
          
        },
        {
          
          title: 'Express yourself to the world',
          titleStyles:{
            fontFamily:'Poppins-Black',
            fontSize:30,
            textAlign:'left',
            paddingRight:20,
            marginTop:20
          },
          subtitle: (
            <View style={styles.subtitleView}>
              <Text style={styles.subtitleText}>Let your voice be heard on the internet through the OFOFO features on the App without restrictions </Text>
              <View>
                <TouchableOpacity style={styles.btnnext} onPress={()=>navigation.navigate('Signin')}>
                  <Text style={styles.btnntxt}>Continue</Text>
                </TouchableOpacity>
              </View>
              
              <View style={{padding:70}}>
                <Text onPress={()=>navigation.navigate('Signin')} style={styles.Signin}>Already Have an account?  <Text style={{color:'gray'}}>Sign in</Text></Text>
              </View>
            </View>
          ),
          subTitleStyles:{
            fontFamily:'Poppins-Light',
            fontSize:16,
            color:'gray',
            textAlign:'justify',
            paddingLeft:10,
            paddingRight:15,
            marginTop:20
          },
          backgroundColor: 'white',
          image: (
            <Image style={styles.image} source={require('./../../assets/img/onboard/slide3.png')} />
          ),
          
        },
        
      ]}
      />
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  subtitleView:{
    marginTop:20,margin:15,flex:1,justifyContent:'flex-start'
  },
  subtitleText:{
    color:'gray',fontFamily:'Poppins-Light',fontSize:16,color:'black',textAlign:'left',paddingLeft:10,paddingRight:15
  },
  btnnext:{
    backgroundColor:'#006175',marginTop:20,borderRadius:5,elevation:1,padding:10,alignItems:'center'
  },
  btnntxt:{
    fontFamily:'Poppins-Light',fontSize:20,color:'white'
  },
  btnskip:{
    backgroundColor:'white',marginTop:20,borderRadius:5,elevation:1,padding:10,alignItems:'center',borderColor:'black',borderWidth:2
  },
  btnstxt:{
    fontFamily:'Poppins-Light',fontSize:20,color:'black'
  },
  Signin:{
    color:'black',textAlign:'center',fontFamily:'Poppins-Light'
  },
  image:{
    marginTop:20,height:Dimensions.get('window').width / 1.2
  }
})