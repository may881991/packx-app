import React ,  { useState } from 'react';
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View, Text, StyleSheet, TouchableOpacity, Image , ScrollView, TextInput} from 'react-native';

function OrderDetails ({route, navigation}) {

  const [isModalVisible, setModalVisible] = useState(false); 
  const [itemList,setItemLists] = useState([]);
  const [item, setItem] = useState(null);
  const [qty, setQty] = useState(null);
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
    setModalVisible(true);
  } 

  function hideModal(){   
    setModalVisible(false);
    navigation.navigate('Reserved');
  } 

  function addList(){
    setItemLists(itemList => [{  
      item : item, 
      qty : qty
    },...itemList]);
  }
    
    return (
      <ScrollView style={styles.container}> 
        <View style={styles.tripList}> 
          <Text style={styles.mainText}>TRIP - {tripData.tripID}</Text> 
          <View style={{flex: 4, flexDirection: 'row' }}> 
            <View style={{flex: 3, marginBottom: "2%", flexDirection: 'column'  }}>
              <View style={{flex: 1 }}>
                <Text style={styles.triplabel}>From</Text>
                <Text style={styles.tripname}>{tripData.tripInfo.dropOff}</Text> 
                <Text style={styles.triplabel}>{tripData.tripInfo.dropOffDate}</Text>
              </View>
              <View style={{flex: 1, paddingTop: "5%"}}>
                <Text style={styles.triplabel}><Icon style={styles.icon} name='location-sharp' size={14} /> DROP OFF ADDRESSS</Text>
                <Text style={styles.itemlabel}>{tripData.tripInfo.dropOffAddress}</Text> 
              </View> 
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>  
              <Image source={require('../assets/images/stopFlight.png')} style={{ width: 43,resizeMode: 'center', height: 140}}/>  
            </View>
            <View style={{flex: 3, flexDirection: 'column' }}>
              <View style={{flex: 1 }}>
                <Text style={styles.triplabel}>To</Text>
                <Text style={styles.tripname}>{tripData.tripInfo.desVal}</Text> 
                <Text style={styles.triplabel}>{tripData.tripInfo.pickUpDate}</Text>
              </View>  
              <View style={{flex: 1 }}>
                <Text style={styles.triplabel}><Icon style={styles.icon} name='location-sharp' size={14} /> PICK UP ADDRESS</Text>
                <Text style={styles.itemlabel}>{tripData.tripInfo.pickUpAddress}</Text> 
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
                {tripData.categoryLists.map((data , index) => (
                  <View key={index} style={styles.itembox}>
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
                {tripData.prohibitedLists.map((data ,index) => (
                  <View key={index} style={styles.itembox}>
                    <Text style={styles.itemlabel}> <FontAwesome5 style={styles.icon} name={data.item} size={16} />  {data.category}</Text>  
                  </View>
                 ))}
          </View>
        </View> 
          <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center' }}> 
              <TouchableOpacity onPress={showModal}>
                <Image source={require('../assets/images/reserveBtn.png')} style={{ width: 316,resizeMode: 'center', height: 45 , marginBottom: "3%"}}/>
              </TouchableOpacity> 
              <Modal isVisible={isModalVisible} wipeDirection={['up', 'left', 'right', 'down']} style={styles.view} > 
                <View style={styles.modalView}>
                    <Text style={styles.title}>Reserve your package </Text> 
                    <Text style={styles.subtitle}>Package Summary</Text> 
                    <View style={{ flex: 2, flexDirection: "column" }}>  
                        <View style={styles.itemHeader} > 
                          <Text style={styles.itemTitle}>Item Description</Text>
                          <Text style={styles.itemTitle}>Qty</Text>
                        </View>   
                        {itemList.length != 0  &&
                          <ScrollView>
                          {itemList.map((data, index ) => (
                            <View style={styles.itemRow} key={index}>
                              <Text style={styles.deslabel}> {data.item}</Text>  
                              <Text style={styles.deslabel}> {data.qty} x </Text>  
                            </View>
                          ))}
                          </ScrollView>
                        }
                        <View style={styles.itemRow} > 
                          <TextInput style={styles.itemInputLg} placeholder="Input Your Item Here ...." onChangeText={setItem}/>
                          <TextInput style={styles.itemInputXs} placeholder="Qty" onChangeText={setQty}/>
                        </View>    
                        <TouchableOpacity onPress={addList} style={{ flexDirection: "row", justifyContent: 'center' }}> 
                          <FontAwesome5 style={styles.addicon} name="plus-circle" size={23} />
                          <Text style={styles.addlabel}> Add </Text> 
                        </TouchableOpacity>   
                    </View> 
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <Text style={styles.inputLabel}>Receiver Name</Text>
                        <TextInput style={styles.input}  placeholder="Receiver Name"/>
                        <Text style={styles.inputLabel}>Receiver Contact</Text>
                        <TextInput style={styles.input}  placeholder="Receiver Contact"/>
                      <TouchableOpacity onPress={hideModal} style={{ flex: 1, flexDirection: "row", justifyContent: 'center' }}>
                        <Image source={require('../assets/images/confirmBtn.png')} style={{ width: 316,resizeMode: 'center', height: 45 , marginBottom: "3%"}}/>
                      </TouchableOpacity>  
                    </View>
                </View>
              </Modal>
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
    fontFamily: "UbuntuBold", 
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
    fontSize: 11,
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
    alignSelf: 'flex-start',
  },
  itembox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30
  },
  view: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'flex-end',
    margin: 0,
    height: 20
  },
  modalView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20, 
    marginTop:  '30%',
    padding : '5%'
  },
  subtitle: {
    textAlign: "center",
    color: "#185354",
    fontSize: 20,
    fontFamily: "Ubuntu",  
    paddingVertical: "5%", 
    borderBottomColor: "#D7DEDD",
    borderBottomWidth: 1,
  },
  inputLabel:{
    color: "#333333",
    fontFamily: "Ubuntu",  
    fontSize: 14
  },
  input: {
    padding: 10,
    fontSize: 14,
    borderBottomColor: "#D7DEDD",
    borderBottomWidth: 1,
    marginBottom: "5%",
    fontFamily: "Ubuntu",  
    marginTop: 5
  },
  itemInputLg: {
    flex: 5,
    padding: "3%",
    height: 39,
    fontSize: 14,
    borderColor: "#C8C8C8",
    color: "#535353",
    fontFamily: "Ubuntu",  
    borderWidth: 1,
    borderRadius: 10,
    marginVertical : "2%", 
    marginRight : "2%", 
  },
  itemInputXs: {
    flex: 1,
    padding: "3%",
    height: 39,
    fontSize: 14,
    borderColor: "#C8C8C8",
    color: "#535353",
    fontFamily: "Ubuntu",  
    borderWidth: 1,
    borderRadius: 10,
    marginVertical : "2%",  
  },
  itemHeader: { 
    flexDirection: "row" , 
    justifyContent: 'space-between',  
    marginVertical : "5%",  
  },
  itemRow: { 
    flexDirection: "row" , 
    justifyContent: 'space-between',
    borderTopColor: "#D7DEDD",
    borderTopWidth: 1,
    paddingVertical : "3%",  
  },
  addlabel: {
    fontSize: 24,
    color: "#169393",
    textTransform: "uppercase",
    fontFamily: 'UbuntuBold',
  }, 
  itemTitle: { 
    fontSize: 16,
    color: "#2797A6", 
    fontFamily: 'UbuntuMedium', 
  },
  addicon: {
    color: "#085252", 
    marginVertical: 2
  },
  deslabel: {
    fontSize: 14,
    color: "#707070", 
    fontFamily: 'Ubuntu',
    paddingVertical : "2%", 
  }, 
});
