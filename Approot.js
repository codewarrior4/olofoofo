import React,{useEffect,useState} from 'react';
import Splash from './src/utils/Splash';
import Onboard from './src/utils/Onboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './src/Pages/Auth/Signin';
import Forgot from './src/Pages/Auth/Forgot';

const Approot = () => {
    const [checking,setIsChecking] = useState(true)
    const [isNew,setIsNew] = useState(true)
  
    setTimeout(()=>{
      setIsChecking(false);
      setIsNew(false)
    },3000)

  
    if(checking){
      return <Splash />
    } 
    const Stack = createNativeStackNavigator();
    return (
     <>
       <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group screenOptions={{headerShown:false}}>
              
              {/* use provider to check if user has installed app before  if not show onboard*/}

                <Stack.Screen name='onboard' component={Onboard} />
              {/* else show this guy from here so asynstorage will be used  */}
                <Stack.Screen name='Signin' component={Signin}/>
                <Stack.Screen name='Forgot' component={Forgot}/>
              
              
              </Stack.Group>
          </Stack.Navigator>
      </NavigationContainer>
     </>
  )


}

export default Approot