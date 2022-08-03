import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View, Text, StyleSheet, TouchableOpacity, Image , ScrollView} from 'react-native';

function OrderDetails ({route, navigation}) {
  const tripData = route.params.otherParam;  
  console.log(tripData.prohibitedLists) 
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

  function showModal(){   
    navigation.navigate('ORDER' );
  } 
    return (
      <ScrollView style={styles.container}> 
        <View style={styles.tripList}> 
          <Text style={styles.mainText}>TRIP - {tripData.tripID}</Text> 
          <View style={{flex: 4, flexDirection: 'row' }}> 
            <View style={{flex: 3, marginBottom: "3%", flexDirection: 'column'  }}>
              <View style={{flex: 2, paddingLeft: 5 }}>
                <Text style={styles.triplabel}>From</Text>
                <Text style={styles.tripname}>{tripData.tripInfo.dropOff}</Text> 
                <Text style={styles.triplabel}>{tripData.tripInfo.dropOffDate}</Text>
              </View>
              <View style={{flex: 2, paddingTop: 10}}>
                <Text style={styles.triplabel}><Icon style={styles.icon} name='location-sharp' size={14} /> DROP OFF ADDRESSS</Text>
                <Text style={styles.locText}>{tripData.tripInfo.dropOffAddress}</Text> 
              </View> 
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>  
              <Image source={require('../assets/images/stopFlight.png')} style={{ width: 43,resizeMode: 'center', height: 135}}/>  
            </View>
            <View style={{flex: 3, flexDirection: 'column' }}>
              <View style={{flex: 2, paddingLeft: 5 }}>
                <Text style={styles.triplabel}>To</Text>
                <Text style={styles.tripname}>{tripData.tripInfo.desVal}</Text> 
                <Text style={styles.triplabel}>{tripData.tripInfo.pickUpDate}</Text>
              </View>  
              <View style={{flex: 2, paddingTop: 10}}>
                <Text style={styles.triplabel}><Icon style={styles.icon} name='location-sharp' size={14} /> PICK UP ADDRESS</Text>
                <Text style={styles.locText}>{tripData.tripInfo.pickUpAddress}</Text> 
              </View> 
            </View>
          </View>
        </View>   
        <View style={styles.item}> 
            <View style={{flex: 1, alignContent: "center"}}> 
                <Image source={require('../assets/images/profile.png')} style={{ width: 52,resizeMode: 'center', height: 53 }}/>
            </View> 
            <View style={{flex: 3, alignItems: 'flex-start'}}>
                <Text style={styles.title}>ABC CARGO</Text>  
                <Text style={styles.tripname}>TOMMY</Text>  
            </View>
            <View style={{flex: 1 ,flexDirection: "column" }}>
                <View style={styles.itemCount}>
                  <Text style={styles.numberText}>2127</Text>
                  <Image source={require('../assets/images/Package.png')} style={{ width: 28,resizeMode: 'center', height: 27, marginBottom: 5 }}/> 
                </View> 
                <View style={styles.itemCount}>
                  <Text style={styles.numberText}>213</Text>
                  <Image source={require('../assets/images/plane.png')} style={{ width: 28,resizeMode: 'center', height: 20}}/> 
                </View> 
            </View>
        </View> 
        <View style={styles.itemLists}> 
          <View style={{flex: 1, alignItems: "center"}}>
            <Text style={styles.mainText}>CATEGORY</Text> 
          </View>
          <View style={{flex: 4, flexDirection: 'column' }}>  
                {tripData.categoryLists.map((data ) => (
                  <View style={styles.itembox}>
                    <Text style={styles.itemlabel}> <FontAwesome5 style={styles.icon} name={data.item} size={16} />  {data.category}</Text> 
                    <Text style={styles.catText}>{data.price} {data.currency} / {data.weight}</Text>  
                  </View>
                 ))}
          </View>
        </View> 
        <View style={{flex: 1 }}>
          <Text style={styles.mainText}>FACILITY INFO</Text> 
          <Text style={styles.facilityInfo}>{tripData.tripInfo.facilityInfo}</Text> 
        </View>   
        <View style={styles.itemLists}> 
          <View style={{flex: 1, alignItems: "center"}}>
            <Text style={styles.mainText}>PROHIBITED ITEMS</Text> 
          </View>
          <View style={{flex: 4, flexDirection: 'column' }}>  
                {tripData.prohibitedLists.map((data ) => (
                  <View style={styles.itembox}>
                    <Text style={styles.itemlabel}> <FontAwesome5 style={styles.icon} name={data.item} size={16} />  {data.category}</Text>  
                  </View>
                 ))}
          </View>
        </View> 
          <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center' }}> 
              <TouchableOpacity onPress={showModal}>
                <Image source={require('../assets/images/reserveBtn.png')} style={{ width: 316,resizeMode: 'center', height: 45}}/>
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
    fontSize: 16,
    color:  '#185354', 
    paddingLeft: 5,
    fontFamily: 'UbuntuBold',
    paddingBottom : "3%", 
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
    fontSize: 12,
    fontFamily: "Ubuntu",
    paddingTop: "5%",
    paddingLeft: "10%",
  },
  tripHeader:{ 
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between', 
    marginVertical: "2%",
  },
  tripList: { 
    flexDirection: "column",     
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    backgroundColor: "#FFFFFF",
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 11,
    marginVertical: "5%",
  },
  triplabel: {
    fontSize: 12,
    marginBottom: 8, 
    textTransform: "uppercase",
    fontFamily: "UbuntuLight",
  },
  tripname: {
    fontSize: 13,
    marginBottom: 8, 
    textTransform: "uppercase",
    fontFamily: "UbuntuMedium",
  }, 
  icon: {
    color: "#185354",
  }, 
  facilityInfo: {
    fontFamily: 'Ubuntu',
    fontSize: 12,
    paddingLeft: 5,
    lineHeight: 20 
  },
  catText: {
    color: "#1B9494",
    fontFamily: 'UbuntuMedium',
    fontSize: 13,
    paddingLeft: 5 
  },
  itemLists: { 
    flexDirection: "column",  
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    backgroundColor: "#FFFFFF",
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    borderRadius: 5,
    marginVertical: "4%",
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
  },
  itemlabel: { 
    fontSize: 14, 
    fontFamily: 'Ubuntu',
  },
  itembox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30
  }
});
