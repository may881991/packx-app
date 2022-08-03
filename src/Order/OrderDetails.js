import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, TouchableOpacity, Image , ScrollView} from 'react-native';

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
      <ScrollView style={styles.container}> 
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
            <Text style={styles.title}>TOTAL {tripData.categoryLists.length}</Text>
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
        <ScrollView>
        {tripData.packages.map((item, index) => (
          <TouchableOpacity style={styles.item} key={index} onPress={() => navigation.navigate('OrderBooked', { otherParam: item})}>
              <View style={{flex: 1, alignContent: "center"}}> 
                <Image source={item.userInfo.profileImg} style={{ width: 52,resizeMode: 'center', height: 52 }}/>
              </View>
              <View style={{flex: 2, alignItems: 'flex-start'}}>
                <Text style={styles.title}>{item.userInfo.username}</Text> 
                <Text style={styles.text}>Confirmed </Text>
              </View>
              <View style={{flex: 1 ,flexDirection: "column" }}>
                <View style={styles.itemCount}>
                  <Text style={styles.title}>{item.items.length}</Text>
                  <Image source={require('../assets/images/Package.png')} style={{ width: 28,resizeMode: 'center', height: 27, marginBottom: 10 }}/> 
                </View> 
                <View style={styles.itemCount}>
                  <Text style={styles.text}>{item.status}</Text>
                  <Image source={require('../assets/images/cashImg.png')} style={{ width: 28,resizeMode: 'center', height: 20}}/> 
                </View> 
              </View>
          </TouchableOpacity>
         ))} 
         </ScrollView>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center' }}> 
              <TouchableOpacity>
                <Image source={require('../assets/images/shipBtn.png')} style={{ width: 316,resizeMode: 'center', height: 45}}/>
              </TouchableOpacity>
          </View>
      </ScrollView>
    );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20 ,
    backgroundColor: '#FAFAFA'
  },
  mainText: {
    fontSize: 18,
    fontFamily: 'UbuntuMedium',
    padding : 10, 
  }, 
  text:{ 
    fontSize: 13,
    fontFamily: "UbuntuMedium", 
    textTransform: 'capitalize',
  },
  title: { 
    color: "#185354",
    fontSize: 16,
    fontFamily: "UbuntuMedium", 
    textTransform: 'uppercase',
    paddingVertical: "3%"
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
    padding: "2%",   
    borderTopColor: '#E5F1F2',
    borderTopWidth: 1,
  },
  triplabel: {
    fontSize: 12,
    marginBottom: 8,
    color: "rgba(23,25,48,0.6)",
    fontFamily: "Ubuntu",
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
    fontFamily: 'Ubuntu',
    color: "rgba(23,25,48,0.6)"
  },
  locText: {
    fontSize: 12,
    paddingLeft: 5 ,
    fontFamily: 'Ubuntu',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    color: "#185354",
    fontSize: 14,
    backgroundColor: "#E5F1F2",
    borderRadius: 20,
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    marginBottom: "3%",
  },
  itemCount : {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between', 
  }
});
