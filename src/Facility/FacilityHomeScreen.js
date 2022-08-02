import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, StatusBar ,SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import {Calendar} from 'react-native-calendars';
import Lists from '../components/Lists/Lists';

const Stack = createNativeStackNavigator();

function FacilityMainScreen({navigation}){  
  const theme = useTheme();
  const tripData = [
    {
      title: "Trip Activity : June 10th 2022",
      data: [
        { tripId : "TRIP NUMBER - 00001",from : "Yangon",to : "NEW YORK", tripStatus: "Drop off"},
        { tripId : "TRIP NUMBER - 00002",from : "Yangon",to : "LOS ANGELES", tripStatus: "Pick-Up"}, 
        { tripId : "TRIP NUMBER - 00003",from : "Yangon",to : "Singapore", tripStatus: "Drop off"}
      ]
    },
    {
      title: "Trip Activity : June 19th 2022",
      data: [
        { tripId : "TRIP NUMBER - 00001",from : "Yangon",to : "NEW YORK", tripStatus: "Drop off"},
        { tripId : "TRIP NUMBER - 00002",from : "Yangon",to : "LOS ANGELES", tripStatus: "Pick-Up"}, 
        { tripId : "TRIP NUMBER - 00003",from : "Yangon",to : "Singapore", tripStatus: "Drop off"}
      ]
    }
  ];

  const ListItem = ({ data },index) => {
    return(
      <Lists key={index} data={data} />
    )
  };
 
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
      <ScrollView>
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('CreateFacility')} style={styles.createBtn}>
              <Ionicons name="add-circle-outline" size={35}/>
              <Text style={styles.text}>
                Create New Trip
              </Text>
            </TouchableOpacity>
            <View style={styles.amountDue}>
              <View>
                <Text style={{fontSize: 18}}> Amount Due </Text>
                <Text style={styles.priceLabel}> $ 453.00 </Text>
              </View>
              <View>
                <Image source={require('../assets/images/sm-logo.png')} style={{ width: 38,resizeMode: 'center', height: 31}}/>
                <Ionicons name="arrow-forward-outline" size={30} style={{marginTop: 20}}/>
              </View>
            </View>
            <Calendar
              style={styles.facilityCalendar}
              current={'2022-06-01'}
              minDate={'2021-12-31'}
              maxDate={'2022-12-31'}
              onDayPress={day => {
                console.log('selected day', day);
              }}
              onDayLongPress={day => {
                console.log('selected day', day);
              }}
              monthFormat={'MMMM yyyy'}
              onMonthChange={month => {
                console.log('month changed', month);
              }}hideExtraDays={true}
              disableMonthChange={true}
              firstDay={1}
              onPressArrowLeft={subtractMonth => subtractMonth()}
              onPressArrowRight={addMonth => addMonth()}
              disableAllTouchEventsForDisabledDays={true}
              enableSwipeMonths={true}
            />
            <View>
            {tripData.map((item, index) => (
              <View key={index}> 
                <Text style={styles.header}>{item.title}</Text>  
                {item.data.map((data, index) => (
                  <ListItem data={data} key={index}/>
                 ))}
            </View>
            ))} 
            </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}

const FacilityHomeScreen = () => {
    return (
      <Stack.Navigator initialRouteName="FacilityHome" >
        <Stack.Screen name="FacilityHome" component={FacilityMainScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    );
};


export default FacilityHomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: "4%"
  },
  createBtn:{
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  header: {
    color: "#185354",
    fontSize: 16,
    fontFamily: "UbuntuBold",
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: 'UbuntuBold',
    paddingLeft: 10,
  },
  amountDue:{
    flexDirection: 'row',
    backgroundColor: "#FFFFFF",
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 20,
    height: 125,
    marginVertical: 20,
    padding: 20,
    justifyContent: 'space-between'
  },
  priceLabel: {
    fontSize: 35,
    fontFamily: "UbuntuBold",
    paddingTop: 20
  },
  facilityCalendar: {
    backgroundColor: "#FFFFFF",
    shadowColor: 'rgba(0,0,0,0.09)',
    shadowOffset: {width: 2, height: 16},
    shadowOpacity: 0.2,
    shadowRadius: 9,
    borderRadius: 8,
    marginBottom: 20
  }
});
