import React from 'react';
import { StyleSheet, View , Image, Pressable, Text, TouchableOpacity} from 'react-native';
import Intro from './src/Intro/Intro';
import UserScreen from './src/User/User';
import ShowTripLists from './src/User/UserHome';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FacilitysignIn from './src/Facility/FacilitySignIn';
import FacilityHome from './src/Facility/Facility';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    UbuntuLight: require('./src/assets/fonts/Ubuntu-Light.ttf'),
    Ubuntu: require('./src/assets/fonts/Ubuntu-Regular.ttf'),
    UbuntuMedium: require('./src/assets/fonts/Ubuntu-Medium.ttf'),
    UbuntuBold: require('./src/assets/fonts/Ubuntu-Bold.ttf'),
  });

  if(!loaded){
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="User" component={UserInfoScreen} options={{headerShown: false}}/>
        <Stack.Screen name="UserHome" component={UserHomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignIn" component={FacilitySignIn} options={{headerShown: false}}/>
        <Stack.Screen name="FacilityHome" component={FacilityHomeScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={require('./src/assets/images/PackXLogo.png')} style={{ width: 167,resizeMode: 'center', height: 103}}/>
      </View>
      <View style={{ flex: 5}}>
        <Intro />
      </View>
      <View style={styles.socialBtn}>
            <TouchableOpacity onPress={() => navigation.navigate('User')}>
              <Image source={require('./src/assets/images/gbutton.png')} style={{ width: 130,resizeMode: 'center', height: 44, marginRight: "5%"}}/>
              </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('User')} >
            <Image source={require('./src/assets/images/fbutton.png')} style={{ width: 130,resizeMode: 'center', height: 44}}/>
          </TouchableOpacity>
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center'}}> 
        <Pressable onPress={() => navigation.navigate('SignIn')}>
          <Text style={{color: "#1A77F2"}}>Sign In </Text>
        </Pressable><Text>as Facility</Text>
      </View>
    </View>
  );
}

function UserInfoScreen({ navigation }) {
  return ( 
    <View style={styles.container}>
      <UserScreen style={{ flex: 8}}/>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center'}}>  
          <TouchableOpacity onPress={() => navigation.navigate('UserHome')}>
            <Image source={require('./src/assets/images/saveBtn.png')} style={{ width: 316,resizeMode: 'center', height: 45}}/>
          </TouchableOpacity>
      </View>
    </View>
  );
}


function FacilitySignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <FacilitysignIn />
      <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center'}}> 
        <TouchableOpacity onPress={() => navigation.navigate('FacilityHome')} >
            <Image source={require('./src/assets/images/SignInBtn.png')} style={{ width: 267,resizeMode: 'center', height: 45}}/>
          </TouchableOpacity>
      </View>
    </View>
  );
}


function FacilityHomeScreen() {
  return (
    <FacilityHome />
  );
} 

function UserHomeScreen() {
  return (
    <ShowTripLists />
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      flexDirection: "column",  
      paddingHorizontal: 20 ,
      backgroundColor: "#FAFAFA"
  },
  logoBox : {
    flex : 2,
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: "10%",
  },
  socialBtn: {
    flex: 1, 
    flexDirection: "row", 
    justifyContent: 'center'
  }
});