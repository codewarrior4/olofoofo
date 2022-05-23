import { View, Text, ScrollView, StyleSheet, StatusBar,FlatList, TouchableOpacity, Image} from 'react-native'
import React,{useState} from 'react'
import { Icon,Item,Input,Content, Card, CardItem, Thumbnail, Button, Left, Body, Right  } from 'native-base'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/EvilIcons';

const Index = () => {
  const [people, setPeople] = useState([
    { name: 'Codewarrior', id: '1' ,image:'https://i.imgur.com/l49aYS3l.jpg',sub:require('../../../assets/img/user/codewarrior.webp')},
    { name: 'Generalfocus1', id: '2', image:'https://i.imgur.com/SsJmZ9jl.jpg',sub:require('../../../assets/img/user/focus.jpeg') },
    { name: 'Oyindollarpo', id: '3' ,image:'https://i.imgur.com/5tj6S7Ol.jpg',sub:require('../../../assets/img/user/dolapo.jpg')},
    { name: 'Fayokemi', id: '4',image:'https://i.imgur.com/pmSqIFZl.jpg',sub:require('../../../assets/img/user/kemi.jpeg') },
    { name: 'TheOlogbon', id: '5',image:'https://i.imgur.com/cA8zoGel.jpg',sub:require('../../../assets/img/user/ojogbon.jpeg') },
    { name: 'Mayor', id: '6' ,image:'https://i.imgur.com/pewusMzl.jpg',sub:require('../../../assets/img/user/codewarrior.webp')},
    { name: 'MasterRahl', id: '7' ,image:'https://i.imgur.com/MABUbpDl.jpg',sub:require('../../../assets/img/user/focus.jpeg')},
  ]);
  const storyhead =()=>{
    return (
        <TouchableOpacity>
          <View style={Styles.userStory}>

            <View style={{position:'absolute',bottom:-27, borderRadius:50,borderWidth:1,borderColor:'#000',width:50,height:50,right:22,backgroundColor:'#F2F2F2'}}>
              <Text style={{color:'#000',fontFamily:'Poppins-Regular',fontSize:50,bottom:7,left:9}}>+</Text>
              <Text style={{color:'#000',textAlign:'center',paddingTop:2,fontFamily:'Poppins-Regular'}}>Abdul</Text>
            </View>
          </View>
        </TouchableOpacity>
    )
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'white'}}>
      <StatusBar backgroundColor='#006175' animated={true} />

      {/* status bar */}
        <View style={Styles.header}>
            <View style={Styles.inputArea}>
                <Item style={{borderWidth:0}}>
                  <Icon style={{color:'#006175'}} active name='search' />
                  <Input style={{color:'#006175',fontFamily:'Poppins-Regular'}} placeholderTextColor="#006175"  placeholder='Type something...........' />
                </Item>
            </View>
            <View style={Styles.notifiArea}>
              <Icon
                name='bell'
                fontSize={15}
                type="SimpleLineIcons"
                style={{color:'#006175'}} 
              />
            </View>
        </View>
      {/* status bar end */}

      <View style={Styles.container}>
      {/* stories start */}
        <FlatList 
        showsHorizontalScrollIndicator={false}
          // numColumns={2}
          keyExtractor={(item) => item.id} 
          data={people} 
          renderItem={({ item }) => ( 
            <TouchableOpacity>
              <Image source={{uri:(item.image)}}  style={Styles.item}/>
              <Image source={item.sub} style={{position:'absolute',borderColor:'#000',borderRadius:50,borderWidth:0.8,bottom:35, borderRadius:50,width:50,height:50,right:34,backgroundColor:'#F2F2F2'}} />
              <Text style={{color:'#000',textAlign:'center',top:-12,fontFamily:'Poppins-Regular'}}>{item.name}</Text>
            </TouchableOpacity>
          )}
          horizontal={true}
          ListHeaderComponent={storyhead}
        />
      {/* stories end */}


      {/* ofoofo  start*/}

      <Content>
        <TouchableOpacity style={{marginBottom:14}}>
          <View style={{borderRadius:10,backgroundColor:'#F2F2F2'}}>
              <CardItem style={{elevation:0,borderWidth:0,backgroundColor:'transparent'}}>
                <Left>
                  <Thumbnail source={require('../../../assets/img/user/codewarrior.webp')} />
                  <Body>
                    <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:12}}>Codewarrior</Text>
                    <Text style={{color:'black',fontFamily:'Poppins-Light',fontSize:12}} note>1hr ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <View style={{marginHorizontal:14}} >
                <View>
                  <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:12,textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra </Text>
                </View>
                <View>

                <Image source={{uri: 'https://i.imgur.com/SsJmZ9jl.jpg'}} style={{height: 200, width: '100%', borderRadius:14}}/>
                </View>
              </View>
              <View style={{marginHorizontal:14,marginVertical:9,borderWidth:0,backgroundColor:'transparent',flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{}}>
                  <View>
                    <Text style={{fontFamily:'Poppins-Light',color:'#000',fontSize:10}}>
                      Liked by <Text style={{fontFamily:'Poppins-Regular'}}>codewarrior </Text> and <Text style={{fontFamily:'Poppins-Regular'}}>100 + others </Text> 
                    </Text>
                  </View>
                  <View><Text style={{fontFamily:'Poppins-Light',color:'#000',fontSize:10}}>View all 57 comments</Text></View>
                  
                </View>
                
                <View style={{alignContent:'flex-end'}}>
                  
                    <TouchableOpacity style={{marginRight:1}}>
                      <Text style={{color:'black',fontFamily:'Poppins-Light'}}> <Foundation name="heart"  color={'red'} size={20} /> 247</Text>
                    </TouchableOpacity>
                  
                 </View>
                 <View>
                    <TouchableOpacity style={{marginLeft:1}}>
                      <Text style={{color:'black',fontFamily:'Poppins-Light'}}> <FontAwesome5 name="comment-dots" color={"black"} size={20} /> 57</Text>
                    </TouchableOpacity>
                  
                </View>
              </View>
        
        
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom:14}}>
          <View style={{borderRadius:10,backgroundColor:'#F2F2F2'}}>
              <CardItem style={{elevation:0,borderWidth:0,backgroundColor:'transparent'}}>
                <Left>
                  <Thumbnail source={require('../../../assets/img/user/focus.jpeg')} />
                  <Body>
                    <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:12}}>Generalfocus1</Text>
                    <Text style={{color:'black',fontFamily:'Poppins-Light',fontSize:12}} note>2hr ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <View style={{marginHorizontal:14}} >
                <View>
                  <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:12,textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra </Text>
                </View>
                <View>

                <Image source={{uri: 'https://i.imgur.com/l49aYS3l.jpg'}} style={{height: 200, width: '100%', borderRadius:14}}/>
                </View>
              </View>
              <View style={{marginHorizontal:14,marginVertical:9,borderWidth:0,backgroundColor:'transparent',flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{}}>
                  <View>
                    <Text style={{fontFamily:'Poppins-Light',color:'#000',fontSize:10}}>
                      Liked by <Text style={{fontFamily:'Poppins-Regular'}}>codewarrior </Text> and <Text style={{fontFamily:'Poppins-Regular'}}>100 + others </Text> 
                    </Text>
                  </View>
                  <View><Text style={{fontFamily:'Poppins-Light',color:'#000',fontSize:10}}>View all 57 comments</Text></View>
                  
                </View>
                
                <View style={{alignContent:'flex-end'}}>
                  
                    <TouchableOpacity style={{marginRight:1}}>
                      <Text style={{color:'black',fontFamily:'Poppins-Light'}}> <Foundation name="heart"  color={'red'} size={20} /> 247</Text>
                    </TouchableOpacity>
                  
                 </View>
                 <View>
                    <TouchableOpacity style={{marginLeft:1}}>
                      <Text style={{color:'black',fontFamily:'Poppins-Light'}}> <FontAwesome5 name="comment-dots" color={"black"} size={20} /> 57</Text>
                    </TouchableOpacity>
                  
                </View>
              </View>
        
        
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom:14}}>
          <View style={{borderRadius:10,backgroundColor:'#F2F2F2'}}>
              <CardItem style={{elevation:0,borderWidth:0,backgroundColor:'transparent'}}>
                <Left>
                  <Thumbnail source={require('../../../assets/img/user/ojogbon.jpeg')} />
                  <Body>
                    <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:12}}>Ojogbon</Text>
                    <Text style={{color:'black',fontFamily:'Poppins-Light',fontSize:12}} note>3hr ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <View style={{marginHorizontal:14}} >
                <View>
                  <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:12,textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra </Text>
                </View>
                <View>

                <Image source={{uri: 'https://i.imgur.com/5tj6S7Ol.jpg'}} style={{height: 200, width: '100%', borderRadius:14}}/>
                </View>
              </View>
              <View style={{marginHorizontal:14,marginVertical:9,borderWidth:0,backgroundColor:'transparent',flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{}}>
                  <View>
                    <Text style={{fontFamily:'Poppins-Light',color:'#000',fontSize:10}}>
                      Liked by <Text style={{fontFamily:'Poppins-Regular'}}>codewarrior </Text> and <Text style={{fontFamily:'Poppins-Regular'}}>100 + others </Text> 
                    </Text>
                  </View>
                  <View><Text style={{fontFamily:'Poppins-Light',color:'#000',fontSize:10}}>View all 57 comments</Text></View>
                  
                </View>
                
                <View style={{alignContent:'flex-end'}}>
                  
                    <TouchableOpacity style={{marginRight:1}}>
                      <Text style={{color:'black',fontFamily:'Poppins-Light'}}> <Foundation name="heart"  color={'red'} size={20} /> 247</Text>
                    </TouchableOpacity>
                  
                 </View>
                 <View>
                    <TouchableOpacity style={{marginLeft:1}}>
                      <Text style={{color:'black',fontFamily:'Poppins-Light'}}> <FontAwesome5 name="comment-dots" color={"black"} size={20} /> 57</Text>
                    </TouchableOpacity>
                  
                </View>
              </View>
        
        
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom:14}}>
          <View style={{borderRadius:10,backgroundColor:'#F2F2F2'}}>
              <CardItem style={{elevation:0,borderWidth:0,backgroundColor:'transparent'}}>
                <Left>
                  <Thumbnail source={require('../../../assets/img/user/dolapo.jpg')} />
                  <Body>
                    <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:12}}>Oyindollarpo</Text>
                    <Text style={{color:'black',fontFamily:'Poppins-Light',fontSize:12}} note>1hr ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <View style={{marginHorizontal:14}} >
                <View>
                  <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:12,textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra </Text>
                </View>
                <View>

                <Image source={{uri: 'https://i.imgur.com/cA8zoGel.jpg'}} style={{height: 200, width: '100%', borderRadius:14}}/>
                </View>
              </View>
              <View style={{marginHorizontal:14,marginVertical:9,borderWidth:0,backgroundColor:'transparent',flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{}}>
                  <View>
                    <Text style={{fontFamily:'Poppins-Light',color:'#000',fontSize:10}}>
                      Liked by <Text style={{fontFamily:'Poppins-Regular'}}>dolapo </Text> and <Text style={{fontFamily:'Poppins-Regular'}}>100 + others </Text> 
                    </Text>
                  </View>
                  <View><Text style={{fontFamily:'Poppins-Light',color:'#000',fontSize:10}}>View all 57 comments</Text></View>
                  
                </View>
                
                <View style={{alignContent:'flex-end'}}>
                  
                    <TouchableOpacity style={{marginRight:1}}>
                      <Text style={{color:'black',fontFamily:'Poppins-Light'}}> <Foundation name="heart"  color={'red'} size={20} /> 247</Text>
                    </TouchableOpacity>
                  
                 </View>
                 <View>
                    <TouchableOpacity style={{marginLeft:1}}>
                      <Text style={{color:'black',fontFamily:'Poppins-Light'}}> <FontAwesome5 name="comment-dots" color={"black"} size={20} /> 57</Text>
                    </TouchableOpacity>
                  
                </View>
              </View>
        
        
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom:14}}>
          <View style={{borderRadius:10,backgroundColor:'#F2F2F2'}}>
              <CardItem style={{elevation:0,borderWidth:0,backgroundColor:'transparent'}}>
                <Left>
                  <Thumbnail source={require('../../../assets/img/user/kemi.jpeg')} />
                  <Body>
                    <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:12}}>Fayokemi</Text>
                    <Text style={{color:'black',fontFamily:'Poppins-Light',fontSize:12}} note>1hr ago</Text>
                  </Body>
                </Left>
              </CardItem>
              <View style={{marginHorizontal:14}} >
                <View>
                  <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:12,textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra </Text>
                </View>
                <View>

                <Image source={{uri: 'https://i.imgur.com/MABUbpDl.jpg'}} style={{height: 200, width: '100%', borderRadius:14}}/>
                </View>
              </View>
              <View style={{marginHorizontal:14,marginVertical:9,borderWidth:0,backgroundColor:'transparent',flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{}}>
                  <View>
                    <Text style={{fontFamily:'Poppins-Light',color:'#000',fontSize:10}}>
                      Liked by <Text style={{fontFamily:'Poppins-Regular'}}>codewarrior </Text> and <Text style={{fontFamily:'Poppins-Regular'}}>100 + others </Text> 
                    </Text>
                  </View>
                  <View><Text style={{fontFamily:'Poppins-Light',color:'#000',fontSize:10}}>View all 57 comments</Text></View>
                  
                </View>
                
                <View style={{alignContent:'flex-end'}}>
                  
                    <TouchableOpacity style={{marginRight:1}}>
                      <Text style={{color:'black',fontFamily:'Poppins-Light'}}> <Foundation name="heart"  color={'red'} size={20} /> 247</Text>
                    </TouchableOpacity>
                  
                 </View>
                 <View>
                    <TouchableOpacity style={{marginLeft:1}}>
                      <Text style={{color:'black',fontFamily:'Poppins-Light'}}> <FontAwesome5 name="comment-dots" color={"black"} size={20} /> 57</Text>
                    </TouchableOpacity>
                  
                </View>
              </View>
        
        
          </View>
        </TouchableOpacity>
      </Content>
      {/* ofoofo  end*/}
      </View>


    </ScrollView>
  )
}

export default Index

const Styles = StyleSheet.create({
  body:{
    flex:1,
    marginHorizontal:10,

  },
  header:{
    paddingHorizontal:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    marginVertical:20,
  },
  inputArea:{
    paddingHorizontal:15,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    width:'85%',
    borderColor:'#006175',
    borderWidth:1,
    borderRadius:10,
    paddingLeft:15,
    paddingVertical:1,
    fontFamily:'Poppins-Regular',
    fontSize:5,
    color:'#006175',
    height:50
},

notifiArea:{
  paddingRight:10,
  flexDirection:'row',
  alignItems:'flex-end',
  justifyContent:'flex-end',
  width:'15%',
  elevation:5,
  height:40,
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
container: {
  flex: 1,
  // paddingTop: 10,
  paddingHorizontal: 20,
  backgroundColor: '#fff',
  
},
item: {
  flex: 1,
  marginHorizontal: 10,
  marginTop: 10,
  padding: 30,
  backgroundColor: '#F2F2F2',
  width:100,
  height:140,
  borderRadius:10,
  marginBottom:40
},
sub:{
flex: 1,
marginHorizontal: 10,
marginTop: 10,
padding: 30,
backgroundColor: '#F2F2F2',
width:30,
height:30,
borderWidth:1,
borderColor:'#000',
borderRadius:10,
marginBottom:40
},
userStory:{
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    padding: 30,
    backgroundColor: '#F2F2F2',
    width:100,
    height:140,
    borderWidth:1,
    borderColor:'#000',
    borderRadius:10,
    marginBottom:40
}
})