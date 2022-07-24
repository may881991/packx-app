import React from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Image , TouchableOpacity, ScrollView} from 'react-native';
import OrderDetails from './OrderDetails';

function OrderLists({navigation}){   
  let tripData = [
      {
        "tripID": "00001",
        "tripInfo": {
          "dropOff": "Yangon",
          "desVal": "Bangkok",
          "dropOffDate": "25/07/2022",
          "pickUpDate": "25/08/2022",
          "dropOffAddress": "52 Baho Road, Sanchaung Tsp.,Yangon",
          "secdropOffAddress": "",
          "pickUpAddress": "46-03 11th street, Elmhurst, NY, 11373",
          "secpickUpAddress": "",
          "facilityInfo": "Facility Info"
        },
        "categoryLists": [
          {
            "category": "Phone",
            "item": "mobile-alt",
            "weight": "lb",
            "price": "200",
            "currency": "USD"
          }, 
          {
            "category": "General Item",
            "item": "box",
            "weight": "lb",
            "price": "1000",
            "currency": "USD"
          }
        ],
        "prohibitedLists": [
          {
            "category": "Radioactive materials",
            "item": "fan",
          }, 
          {
            "category": "Strong Acid",
            "item": "flask",
          }],
          "trackingStatus" : "On Route",
          "packageLists" : "7"        
      },
      {
        "tripID": "00002",
        "tripInfo": {
          "dropOff": "Yangon",
          "desVal": "LOS ANGELES",
          "dropOffDate": "24/07/2022",
          "pickUpDate": "29/08/2022",
          "dropOffAddress": "52 Baho Road, Sanchaung Tsp.,Yangon",
          "secdropOffAddress": "",
          "pickUpAddress": "46-03 11th street, Elmhurst, NY, 11373",
          "secpickUpAddress": "",
          "facilityInfo": "Facility Info"
        },
        "categoryLists": [
          {
            "category": "Phone",
            "item": "mobile-alt",
            "weight": "lb",
            "price": "200",
            "currency": "USD"
          }, 
          {
            "category": "General Item",
            "item": "box",
            "weight": "lb",
            "price": "1000",
            "currency": "USD"
          }
        ],
        "prohibitedLists": [
          {
            "category": "Radioactive materials",
            "item": "fan",
          }, 
          {
            "category": "Strong Acid",
            "item": "flask",
          }],
          "trackingStatus" : "Reserved",
          "packageLists" : "6"    
      },
      {
        "tripID": "00003",
        "tripInfo": {
          "dropOff": "Yangon",
          "desVal": "SINGAPORE",
          "dropOffDate": "24/07/2022",
          "pickUpDate": "29/08/2022",
          "dropOffAddress": "52 Baho Road, Sanchaung Tsp.,Yangon",
          "secdropOffAddress": "",
          "pickUpAddress": "46-03 11th street, Elmhurst, NY, 11373",
          "secpickUpAddress": "",
          "facilityInfo": "Facility Info"
        },
        "categoryLists": [
          {
            "category": "Phone",
            "item": "mobile-alt",
            "weight": "lb",
            "price": "200",
            "currency": "USD"
          }, 
          {
            "category": "General Item",
            "item": "box",
            "weight": "lb",
            "price": "1000",
            "currency": "USD"
          }
        ],
        "prohibitedLists": [
          {
            "category": "Radioactive materials",
            "item": "fan",
          }, 
          {
            "category": "Strong Acid",
            "item": "flask",
          }],
          "trackingStatus" : "Received",
          "packageLists" : "5" 
      }
  ];
  function goToDetail(data){   
    navigation.navigate('OrderDetail', { 
      otherParam: data
    });
  } 
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainText}> ORDER </Text>
        <Text style={styles.text}> TRIP LIST  </Text>
      </View>
      <View style={styles.itemLists}>
        {tripData.map((item, index) => (
          <TouchableOpacity style={styles.item} key={index} onPress={() => navigation.navigate('OrderDetail', { otherParam: item})}>
            <View style={styles.tripHeader}> 
              <Text style={styles.title}>TRIP NUMBER - <Text style={styles.numberText}>{item.tripID} | </Text></Text>
              <Text style={styles.title}>Tracking : {item.trackingStatus}</Text>
            </View>
            <View style={styles.tripList}>
              <View style={{flex: 2}}>
                <Text style={styles.triplabel}>From</Text>
                <Text style={styles.tripname}>{item.tripInfo.dropOff}</Text>
                <Text style={styles.datelabel}>Last Drop Off</Text>
                <Text style={styles.dateText}>{item.tripInfo.dropOffDate}</Text>
              </View>
              <View style={{flex: 2}}>
                <Text style={styles.triplabel}>To</Text>
                <Text style={styles.tripname}>{item.tripInfo.desVal}</Text>
                <Text style={styles.datelabel}>Est. Arrival</Text>
                <Text style={styles.dateText}>{item.tripInfo.pickUpDate}</Text>
              </View>
              <View style={{flex: 2 ,flexDirection: "row",justifyContent: "center", alignItems:"center" }}>
                <Text style={styles.title}>{item.packageLists}</Text>
                <Image source={require('../assets/images/Supplier.png')} style={{ width: 28,resizeMode: 'center', height: 20 }}/>
              </View>
              </View> 
          </TouchableOpacity> 
        ))} 
       </View> 
    </ScrollView>
  );
} 

const Stack = createNativeStackNavigator();
export default function OrderScreen(info) {
  console.log(info.data)
  return (  
    <Stack.Navigator initialRouteName="OrderLists" >
      <Stack.Screen name="OrderLists" component={OrderLists} options={{headerShown: false }}/> 
    </Stack.Navigator> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    marginHorizontal: 20
  },
  header: { 
    flexDirection: 'column', 
    paddingTop: 60,
    paddingBottom: 10
  },
  mainText: {
    fontSize: 25,
    fontFamily: 'UbuntuBold',
    paddingLeft: 5, 
  },
  text: {
    fontSize: 18,
    fontFamily: 'UbuntuBold',
    padding : 10,
  },
  itemLists:{  
    alignContent: 'flex-start'
  },
  item: {
    color: "#185354",
    fontSize: 14,
    backgroundColor: "#FFFFFF",
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderRadius: 10,
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    marginBottom: "2%",
  },
  title: {
    marginBottom: 10,
    color: "#185354",
    fontSize: 14,
    fontFamily: "UbuntuMedium", 
  },
  numberText:{ 
    color:  '#169393', 
    fontFamily: "UbuntuBold",
  },
  tripHeader:{ 
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between', 
    borderBottomColor: '#E5F1F2',
    borderBottomWidth: 2,
    marginBottom: "2%",
  },
  tripList: {
    display: "flex",
    flexDirection: "row"
  },
  triplabel: {
    fontSize: 12,
    marginBottom: 8,
    color: "rgba(23,25,48,0.6)"
  },
  tripname: {
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: "UbuntuMedium",
  },
  datelabel: { 
    fontSize: 10,
    marginVertical: 8,
    color:  '#169393',
  },
  dateText: {
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: "UbuntuMedium",
    color: "#185354",
  }
});
