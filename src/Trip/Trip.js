import React from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';  
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View,SafeAreaView, Text, StyleSheet, Image , StatusBar, TouchableOpacity, ScrollView, TextInput} from 'react-native'; 

function TripLists({navigation}){ 
  const theme = useTheme();  
  let tripData = [
      {
        "tripID": "000000001",
        "tripInfo": {
          "dropOff": "Yangon",
          "desVal": "Bangkok",
          "dropOffDate": "25/07/2022",
          "pickUpDate": "25/08/2022",
          "dropOffAddress": "52 Baho Road, Sanchaung Tsp.,Yangon",
          "secdropOffAddress": "",
          "pickUpAddress": "46-03 11th street, Elmhurst, NY, 11373",
          "secpickUpAddress": "", 
          "facilityInfo": "Packaging Details \nPackaged goods are to be tigtly packed to avoid breakages \nor spillage for goods that contain liquid. \nGoods that are to be repacked by the facility will be charged $6.5. \nNote: Free delivery available for packages of 20kg and above \nupon arrival to the destination."
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
            "item": "battery-half",
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
          }, 
          {
            "category": "Explosive stuffs",
            "item": "bahai",
          }
        ],
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
        "tripID": "000000002",
        "tripInfo": {
          "dropOff": "Yangon",
          "desVal": "LOS ANGELES",
          "dropOffDate": "24/07/2022",
          "pickUpDate": "29/08/2022",
          "dropOffAddress": "52 Baho Road, Sanchaung Tsp.,Yangon",
          "secdropOffAddress": "",
          "pickUpAddress": "46-03 11th street, Elmhurst, NY, 11373",
          "secpickUpAddress": "",
          "facilityInfo": "Packaging Details \n Packaged goods are to be tigtly packed to avoid breakages \n or spillage for goods that contain liquid. \n Goods that are to be repacked by the facility will be charged $6.5. \n Note: Free delivery available for packages of 20kg and above \n upon arrival to the destination."
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
        "tripID": "000000003",
        "tripInfo": {
          "dropOff": "Yangon",
          "desVal": "SINGAPORE",
          "dropOffDate": "24/07/2022",
          "pickUpDate": "29/08/2022",
          "dropOffAddress": "52 Baho Road, Sanchaung Tsp.,Yangon",
          "secdropOffAddress": "",
          "pickUpAddress": "46-03 11th street, Elmhurst, NY, 11373",
          "secpickUpAddress": "", 
          "facilityInfo": "Packaging Details \nPackaged goods are to be tigtly packed to avoid breakages \nor spillage for goods that contain liquid. \nGoods that are to be repacked by the facility will be charged $6.5. \nNote: Free delivery available for packages of 20kg and above \nupon arrival to the destination."
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
        <View style={styles.searchBar}> 
          <Image source={require('../assets/images/sm-logoWhite.png')} style={{ width: 40,resizeMode: 'center', height: 38}}/> 
          <View style={{ flexDirection: 'row'}}> 
            <Ionicons name="search-outline" size={18} style={{ padding : '3%', color: '#7C7C7C' }}/>
            <TextInput style={styles.input}  placeholder="Search trip to destination"/>
          </View> 
          <MaterialIcons name="microsoft-xbox-controller-menu" size={30} style={{ paddingTop: '1%', color: '#169393' }}/>
      </View>
        <View style={styles.header}>
          <Text style={styles.mainText}> Welcome to PackX </Text>
          <Text style={styles.text}> Pack & Send Everything Simply with PackX </Text>
        </View>
        <View style={styles.itemLists}>
          {tripData.map((item, index) => (
            <TouchableOpacity style={styles.item} key={index} onPress={() => navigation.navigate('TripDetails', { otherParam: item})}>
               <View style={{flex: 10}}>
                <View style={styles.tripHeader}> 
                  <Text style={styles.title}>TRIP NUMBER - <Text style={styles.numberText}>{item.tripID} </Text></Text> 
                </View>
                <View style={styles.tripList}>
                  <View style={{flex: 2}}>
                    <Text style={styles.triplabel}>From</Text>
                    <Text style={styles.tripname}>{item.tripInfo.dropOff}</Text>
                    <Text style={styles.datelabel}>Last Drop Off</Text>
                    <Text style={styles.dateText}>{item.tripInfo.dropOffDate}</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>  
                    <Image source={require('../assets/images/planeCircle.png')} style={{ width: 33,resizeMode: 'center', height: 33}}/>  
                  </View>
                  <View style={{flex: 2}}>
                    <Text style={styles.triplabel}>To</Text>
                    <Text style={styles.tripname}>{item.tripInfo.desVal}</Text>
                    <Text style={styles.datelabel}>Est. Arrival</Text>
                    <Text style={styles.dateText}>{item.tripInfo.pickUpDate}</Text>
                  </View>
                </View> 
               </View>
               <View style={styles.rightArr}>  
                  <Ionicons name="md-chevron-forward-outline" size={30} style={{marginLeft: 10, color: '#185354' }}/>
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
export default function TripScreen(info) {
  console.log(info.data)
  return (  
    <Stack.Navigator initialRouteName="TripLists" >
      <Stack.Screen name="TripLists" component={TripLists} options={{headerShown: false }}/> 
    </Stack.Navigator> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: "4%"
  },
  input: { 
    fontFamily: 'Ubuntu',
  },
  header: { 
    flex: 1,
    flexDirection: 'column',
    paddingBottom:  "6%",
    paddingTop:  "4%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    fontSize: 25,
    fontFamily: 'UbuntuBold',
    paddingLeft: 5, 
    color: "#1B9494", 
  },
  text: {
    fontSize: 13, 
    fontFamily: 'Ubuntu',
    padding : 10,
    color: "#8E9696",
  }, 
  searchBar:{
    flexDirection: 'row',
    backgroundColor: "#FFFFFF",
    borderColor: "#C8C8C8",
    borderRadius: 15, 
    borderWidth: 1,
    marginVertical: 20,
    padding: 10,
    justifyContent: 'space-between'
  },
  itemLists:{  
    alignContent: 'flex-start'
  },
  item: {
    color: "#185354",
    flexDirection: 'row',
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
    letterSpacing: 1,
    fontSize: 14,
    fontFamily: "UbuntuMedium", 
  },
  numberText:{ 
    color:  '#169393', 
    fontFamily: "UbuntuBold",
  },
  tripHeader:{
    flex: 1,  
    justifyContent: 'space-between', 
    borderBottomColor: '#E5F1F2',
    borderBottomWidth: 1,
    marginBottom: "2%",
  },
  tripList: {
    flex: 1,  
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
  },
  rightArr: {
    flex: 1 ,
    flexDirection: "row", 
    borderLeftColor: "#E5F1F2",
    borderLeftWidth: 1,
    alignItems: "center", 
    justifyContent: 'flex-end',
    marginLeft: "2%",
  }
});
