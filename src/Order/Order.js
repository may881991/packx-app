import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet } from 'react-native';

function OrderLists(tripInfo) { 
  console.log(tripInfo) 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Order Screen!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('HOME')} />
    </View>
  );
} 

const RootStack = createNativeStackNavigator();
export default function OrderScreen(info) {
  console.log(info.data)
  return (
    <NavigationContainer independent={true}>
      <RootStack.Navigator>
        <RootStack.Screen name="OrderLists" component={OrderLists} options={{headerShown: false }}  />
        {/* <RootStack.Screen name="CreateFacility" component={FacilityCreateScreen} options={{headerShown: false}}/> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
