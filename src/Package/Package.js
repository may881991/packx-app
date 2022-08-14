import React from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native'; 
import { View,SafeAreaView, Text, StyleSheet, Image , StatusBar, TouchableOpacity, ScrollView} from 'react-native'; 

function PackageLists({navigation}){ 
  const theme = useTheme();  
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
            "currency": "USD",
          }, 
          {
            "category": "Clothing",
            "item": "tshirt",
            "weight": "lb",
            "price": "200",
            "currency": "USD"
          }, 
          {
            "category": "Electronics",
            "item": "flash",
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
          "packages" : [
            {
              "packageId" : "6385599269874a0e9b199760",
              "userInfo": {
                "username" : "STELLA",
                "profileImg" : require("../assets/images/profile1.png"),
              },
              "items" :  [
                {
                  "description" : "iPhone 12 pro",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "New Balance 550",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "M.J. Daisy Perfume",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                } 
              ],
              "status" : "paid" 
            }, 
            {
              "packageId" : "fda15a2e7bc04e8ba39d6830",
              "userInfo": {
                "username" : "JASON",
                "profileImg" : require("../assets/images/profile2.png"),
              },
              "items" :  [
                {
                  "description" : "iPhone 12 pro",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "New Balance 550",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "M.J. Daisy Perfume",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                } 
              ],
              "status" : "unpaid" 
            }, 
            {
              "packageId" : "fda15a2e7bc04e8ba39d6830",
              "userInfo": {
                "username" : "EMILY",
                "profileImg" : require("../assets/images/profile3.png"),
              },
              "items" :  [
                {
                  "description" : "iPhone 12 pro",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "New Balance 550",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "M.J. Daisy Perfume",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                } 
              ],
              "status" : "paid" 
            }, 
            {
              "packageId" : "fda15a2e7bc04e8ba39d6830",
              "userInfo": {
                "username" : "LILY",
                "profileImg" : require("../assets/images/profile4.png"),
              },
              "items" :  [
                {
                  "description" : "iPhone 12 pro",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "New Balance 550",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "M.J. Daisy Perfume",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                } 
              ],
              "status" : "unpaid" 
            }
          ]
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
          "packages" : [
            {
              "packageId" : "6385599269874a0e9b199760",
              "userInfo": {
                "username" : "STELLA",
                "profileImg" : require("../assets/images/profile1.png"),
              },
              "items" :  [
                {
                  "description" : "iPhone 12 pro",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "New Balance 550",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "M.J. Daisy Perfume",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                } 
              ],
              "status" : "paid" 
            }, 
            {
              "packageId" : "fda15a2e7bc04e8ba39d6830",
              "userInfo": {
                "username" : "JASON",
                "profileImg" : require("../assets/images/profile2.png"),
              },
              "items" :  [
                {
                  "description" : "iPhone 12 pro",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "New Balance 550",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "M.J. Daisy Perfume",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                } 
              ],
              "status" : "unpaid" 
            }, 
            {
              "packageId" : "fda15a2e7bc04e8ba39d6830",
              "userInfo": {
                "username" : "EMILY",
                "profileImg" : require("../assets/images/profile3.png"),
              },
              "items" :  [
                {
                  "description" : "iPhone 12 pro",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "New Balance 550",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "M.J. Daisy Perfume",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                } 
              ],
              "status" : "unpaid" 
            }, 
            {
              "packageId" : "fda15a2e7bc04e8ba39d6830",
              "userInfo": {
                "username" : "LILY",
                "profileImg" : require("../assets/images/profile4.png"),
              },
              "items" :  [
                {
                  "description" : "iPhone 12 pro",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "New Balance 550",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "M.J. Daisy Perfume",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                } 
              ],
              "status" : "unpaid" 
            }
          ]
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
            "category": "Electronics",
            "item": "flash",
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
          "packages" : [
            {
              "packageId" : "6385599269874a0e9b199760",
              "userInfo": {
                "username" : "STELLA",
                "profileImg" : require("../assets/images/profile1.png"),
              },
              "items" :  [
                {
                  "description" : "iPhone 12 pro",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "New Balance 550",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "M.J. Daisy Perfume",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                } 
              ],
              "status" : "paid" 
            }, 
            {
              "packageId" : "fda15a2e7bc04e8ba39d6830",
              "userInfo": {
                "username" : "JASON",
                "profileImg" : require("../assets/images/profile2.png"),
              },
              "items" :  [
                {
                  "description" : "iPhone 12 pro",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "New Balance 550",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "M.J. Daisy Perfume",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                } 
              ],
              "status" : "unpaid" 
            }, 
            {
              "packageId" : "fda15a2e7bc04e8ba39d6830",
              "userInfo": {
                "username" : "EMILY",
                "profileImg" : require("../assets/images/profile3.png"),
              },
              "items" :  [
                {
                  "description" : "iPhone 12 pro",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "New Balance 550",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "M.J. Daisy Perfume",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                } 
              ],
              "status" : "paid" 
            }, 
            {
              "packageId" : "fda15a2e7bc04e8ba39d6830",
              "userInfo": {
                "username" : "LILY",
                "profileImg" : require("../assets/images/profile4.png"),
              },
              "items" :  [
                {
                  "description" : "iPhone 12 pro",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "New Balance 550",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                },
                {
                  "description" : "M.J. Daisy Perfume",
                  "quality" : "1",
                  "weight" : "200kg",
                  "price" : "100$"
                } 
              ],
              "status" : "unpaid" 
            }
          ]
      }
  ]; 
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
      <ScrollView>
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.mainText}> My Package </Text> 
        </View>
        <View style={styles.itemLists}>
          {tripData.map((item, index) => (
            <TouchableOpacity style={styles.item} key={index} onPress={() => navigation.navigate('OrderDetail', { otherParam: item})}>
              <View style={styles.tripHeader}> 
                <View style={styles.statusBtn}> 
                  <Image source={require('../assets/images/tracking.png')} style={{ width: 19,resizeMode: 'center', height: 15, marginTop: "3%"  }}/> 
                  <Text style={styles.statusText}>  {item.trackingStatus}</Text> 
                </View>
                <Text style={styles.title}>TRIP ID - <Text style={styles.numberText}>{item.tripID} </Text></Text>
              </View>
              <View style={styles.tripList}>
                <View style={{flex: 3}}>
                  <Text style={styles.triplabel}>From</Text>
                  <Text style={styles.tripname}>{item.tripInfo.dropOff}</Text> 
                  <Text style={styles.dateText}>{item.tripInfo.dropOffDate}</Text>
                </View>
                <View style={{flex: 2, justifyContent: 'center', alignItems:"center"}}>  
                  <Image source={require('../assets/images/stopFlight.png')} style={{ width: 43,resizeMode: 'center', height: 40}}/>  
                </View>
                <View style={{flex: 3 }}>
                  <Text style={styles.triplabel}>To</Text>
                  <Text style={styles.tripname}>{item.tripInfo.desVal}</Text> 
                  <Text style={styles.dateText}>{item.tripInfo.pickUpDate}</Text>
                </View>
                <View style={{flex: 1, justifyContent: "center", alignItems:"center" }}>
                  <Ionicons name="md-chevron-forward-outline" size={30} style={{marginLeft: 10, color: '#94A0A0' }}/> 
                </View>
              </View> 
            </TouchableOpacity> 
          ))} 
        </View> 
        </SafeAreaView>
      </ScrollView>
    </View>
  );
} 

const Stack = createNativeStackNavigator();
export default function PackageScreen(info) {
  console.log(info.data)
  return (  
    <Stack.Navigator initialRouteName="PackageLists" >
      <Stack.Screen name="PackageLists" component={PackageLists} options={{headerShown: false }}/> 
    </Stack.Navigator> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: "4%"
  },
  header: { 
    flexDirection: 'column',
    paddingBottom: 10
  },
  mainText: {
    fontSize: 25,
    fontFamily: 'UbuntuBold',
    padding : 5, 
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
  dateText: {
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: "UbuntuMedium",
    color: "#185354",
    marginVertical: 8,
  },
  statusBtn : { 
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E5F1F2",
    borderRadius: 15,  
    paddingEnd: "3%", 
    marginBottom: "2%", 
    paddingLeft: "2%" 
  },
  statusText: {
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: "UbuntuMedium",
    color: "#000000", 
    paddingVertical: "1%" ,
  },
});
