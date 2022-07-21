import React from 'react';
import { StyleSheet, Text, StatusBar, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FacilityHomeScreen from "./FacilityHomeScreen";
import OrderHomeScreen from "../Order/Order";
import FacilityCreate from './FacilityCreate';

const Tab = createBottomTabNavigator();

function InBoxScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>InBox Screen!</Text>
      <Button title="Go to Setting" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('HOME')} />
    </View>
  );
}


function OrderScreen({ route, navigation}) {
    const { otherParam } = route.params;
    const tripInfo = JSON.stringify(otherParam); 
    console.log(tripInfo)
  return (
    <OrderHomeScreen data={tripInfo}/>
  );
}

function FacilityCreateScreen( ) {
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
            return <Ionicons name={iconName} size={size} color={color} />;
          }, 
          tabBarItemStyle:{
            height: 62,
            padding: 10,
            borderRadius: 10,
            // borderTopLeftRadius: 10, 
            // borderTopBottomRadius: 10, 
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
        <Tab.Screen name="HOME" component={FacilityHomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name="ORDER" component={OrderScreen} options={{headerShown: false}}/>
        <Tab.Screen name="INBOX" component={InBoxScreen} options={{headerShown: false}}/>
        <Tab.Screen name="PROFILE" component={ProfileScreen} options={{headerShown: false}}/>
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