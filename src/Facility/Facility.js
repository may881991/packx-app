import React from 'react';
import { StyleSheet, Text, StatusBar, View, Button ,TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FacilityHomeScreen from "./FacilityHomeScreen";
import FacilityCreate from './FacilityCreate';
import ProfileHomeScreen from "../Profile/Profile";
import OrderHomeScreen from "../Order/Order";
import OrderDetails from "../Order/OrderDetails";
import OrderBooked from "../Order/OrderBooked";

const Tab = createBottomTabNavigator();

function InBoxScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>InBox Screen!</Text>
      <Button title="Go to Setting" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

function ProfileScreen({navigation}) {
  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity style={{flex:1, flexDirection: 'row'}} onPress={() => navigation.goBack()}>
        <Image source={require('../assets/images/back-arrow.png')} style={{ width: 28,resizeMode: 'center', height: 28, marginLeft: 10, }}/>
        <Text style={{color: "#c8c8c8", paddingLeft: 10, paddingTop: 2, fontSize: 18}}>Back to Home</Text>
      </TouchableOpacity>
    )
  });
  return (
    <ProfileHomeScreen />
  );
}


function OrderScreen() {
    // const { otherParam } = route.params;
    // const tripInfo = JSON.stringify(otherParam); 
    // console.log(tripInfo)
  return (
    <OrderHomeScreen />
  );
}

function FacilityCreateScreen() {
  return (
    <FacilityCreate />
  );
}

const HomeTabs = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({focused, color, size }) => {
            let iconName;
            if (route.name === 'HOME') {
              iconName = 'home-outline';
            } else if (route.name === 'ORDER') {
              iconName = 'cube-outline';
            } else if (route.name === 'INBOX') {
              iconName = 'albums-outline';
            } else if (route.name === 'PROFILE') {
              iconName = 'person-outline';
            }
            color = focused ? '#ffffff' : '#085252';
            return <>
            <Ionicons name={iconName} size={size} color={color} style={{ paddingTop: 5 }}/>
            <Text style={{fontFamily: "UbuntuMedium",fontSize: 12, color: color, paddingTop: 5 }} color={color}>{route.name} </Text>
            </>;
          }, 
          tabBarItemStyle:{
            height: 62,
            padding: 10,
            borderRadius: 10 
          },
          tabBarStyle: {
            marginHorizontal : 10,
            marginBottom: 20,
            borderRadius: 10,
            backgroundColor: "#E5F1F2",
            height: 62,
          },
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#085252',
          tabBarActiveBackgroundColor: "#1B9494"
        })}
      >
        <Tab.Screen name="HOME" component={FacilityHomeScreen} options={{headerShown: false, title:  ''}}/>
        <Tab.Screen name="ORDER" component={OrderScreen} options={{headerShown: false, title:  ''}}/>
        <Tab.Screen name="INBOX" component={InBoxScreen} options={{headerShown: false, title:  ''}}/>
        <Tab.Screen name="PROFILE" component={ProfileScreen} options={{ title:  ''}}/>
      </Tab.Navigator>
  ); 
}

const RootStack = createNativeStackNavigator();
export default function FacilityHome() {
  return (
    <NavigationContainer independent={true}>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeTabs} options={{headerShown: false }}/>
        <RootStack.Screen name="CreateFacility" component={FacilityCreateScreen} options={{headerShown: false}}/> 
        <RootStack.Screen name="OrderDetail" component={OrderDetails} options={{ title: ''}}/>
        <RootStack.Screen name="OrderBooked" component={OrderBooked} options={{ title: ''}}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  } 
});