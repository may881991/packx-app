import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function OrderDetails ({route, navigation}) {
  const tripData = route.params.otherParam;  
  console.log(tripData)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={{flex:1, flexDirection: 'row'}} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/images/back-arrow.png')} style={{ width: 28,resizeMode: 'center', height: 28}}/>
          <Text style={{color: "#c8c8c8", paddingLeft: 10, paddingTop: 2, fontSize: 18}}>Back to Trip List</Text>
        </TouchableOpacity>
      )
    });
  }, [navigation]);
    return (
      <View style={styles.container}> 
        <View style={styles.tripHeader}> 
          <Text style={styles.mainText}>TRIP NUMBER - {tripData.tripID}</Text> 
        </View>
        <View style={styles.tripList}>
          <View style={{flex: 2}}>
            <Text style={styles.triplabel}>From</Text>
            <Text style={styles.tripname}>{tripData.tripInfo.dropOff}</Text>
            <Text style={styles.datelabel}>Last Drop Off</Text>
            <Text style={styles.dateText}>{tripData.tripInfo.dropOffDate}</Text>
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.triplabel}>To</Text>
            <Text style={styles.tripname}>{tripData.tripInfo.desVal}</Text>
            <Text style={styles.datelabel}>Est. Arrival</Text>
            <Text style={styles.dateText}>{tripData.tripInfo.pickUpDate}</Text>
          </View>
          <View style={{flex: 2 ,flexDirection: "row",justifyContent: "center", alignItems:"center" }}> 
            <Text style={styles.title}>TOTAL {tripData.packageLists}</Text>
            <Image source={require('../assets/images/Package.png')} style={{ width: 28,resizeMode: 'center', height: 27 , margin: 10}}/>
          </View>
        </View> 
        <View style={styles.tripList}>
          <View style={{flex: 4}}>
            <Text style={styles.locLabel}><Icon style={styles.icon} name='location-sharp' size={14} /> DROP OFF ADDRESSS</Text>
            <Text style={styles.locText}>{tripData.tripInfo.dropOffAddress}</Text> 
          </View>
          <View style={{flex: 4}}>
            <Text style={styles.locLabel}><Icon style={styles.icon} name='location-sharp' size={14} /> PICK UP ADDRESS</Text>
            <Text style={styles.locText}>{tripData.tripInfo.pickUpAddress}</Text> 
          </View>
          <View style={{flex: 1 ,flexDirection: "column",justifyContent: "center", alignItems:"center" }}> 
            <Text style={styles.dateText}> More </Text> 
            <Icon style={styles.icon} name='ellipsis-horizontal' size={20} />
          </View>
        </View>  
        <View style={styles.tripHeader}> 
          <Text style={styles.mainText}>Tracking Status : {tripData.trackingStatus}</Text> 
        </View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', marginTop: 15}}> 
          <TouchableOpacity>
              <Image source={require('../assets/images/shipBtn.png')} style={{ width: 316,resizeMode: 'center', height: 45}}/>
            </TouchableOpacity>
        </View>
      </View>
    );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20 
  },
  mainText: {
    fontSize: 18,
    fontFamily: 'UbuntuMedium',
    padding : 10, 
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
    marginVertical: "2%",
  },
  tripList: {
    display: "flex",
    flexDirection: "row", 
    padding: 10,   
    borderTopColor: '#E5F1F2',
    borderTopWidth: 2,
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
  icon: {
    color: "#185354",
  },
  dateText: {
    fontSize: 12, 
    fontFamily: "UbuntuMedium",
    color: "#185354",
  },
  locLabel: { 
    fontSize: 10,
    marginVertical: 8, 
    color: "rgba(23,25,48,0.6)"
  },
  locText: {
    fontSize: 12,
    paddingLeft: 5 
  }
});
