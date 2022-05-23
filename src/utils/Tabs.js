import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'native-base';
import React from 'react';
import Index from '../Pages/Home/Index';
import Ofofo from '../Pages/Home/Ofofo';
import Profile from '../Pages/Home/Profile';
import Post from '../Pages/Home/Post';
import Message from '../Pages/Home/Message';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function Tabs () {
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator
      screenOptions={
        ({route})=>({
          tabBarIcon:({focused,size,color})=>{
            let iconName;
            if(route.name ==='Index'){
              iconName ='home',
              size = focused ? 25:20
            }else if(route.name ==='Post'){
              iconName ='plus-square',
              size = focused ? 25:20
            }else if(route.name ==='Profile'){
              iconName ='user',
              size = focused ? 25:20
            }else if(route.name ==='Ofofo'){
              iconName ='chart-pie',
              size = focused ? 25:20
            }else if(route.name ==='Message'){
              iconName ='comment-dots',
              size = focused ? 25:20
            }

            return (
              <FontAwesome5

              name={iconName}
              size={size}
              color={color} 
              
              />
            )
          },tabBarShowLabel:false
        })
      }
      
    >
      <Tab.Screen  name={'Index'} options={{headerShown:false,tabBarActiveTintColor:'#006175',tabBarInactiveTintColor:'#000'}} component={Index} />
      <Tab.Screen name={'Ofofo'} options={{headerShown:false,tabBarActiveTintColor:'#006175',tabBarInactiveTintColor:'#000'}} component={Ofofo} />
      <Tab.Screen name={'Post'} options={{headerShown:false,tabBarActiveTintColor:'#006175',tabBarInactiveTintColor:'#000'}} component={Post} />
      <Tab.Screen name={'Message'} options={{headerShown:false,tabBarActiveTintColor:'#006175',tabBarInactiveTintColor:'#000'}} component={Message} />
      <Tab.Screen name={'Profile'} options={{headerShown:false,tabBarActiveTintColor:'#006175',tabBarInactiveTintColor:'#000'}} component={Profile} />
    </Tab.Navigator>
  )
}

