import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image , ScrollView} from 'react-native';

export default function OrderBooked ({route, navigation}) {
  const userData = route.params.otherParam;  
  console.log(userData)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={{flex:1, flexDirection: 'row'}} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/images/back-arrow.png')} style={{ width: 28,resizeMode: 'center', height: 28}}/>
          <Text style={{color: "#c8c8c8", paddingLeft: 10, paddingTop: 2, fontSize: 18}}>Back to Booked Users</Text>
        </TouchableOpacity>
      )
    });
  }, [navigation]);
    return (
      <View style={styles.container}>  
        <View style={styles.tripHeader}> 
            <Text style={styles.mainText}>BOOKED ORDER</Text> 
        </View>
        <View style={styles.item}> 
            <View style={{flex: 1, alignContent: "center"}}> 
                <Image source={userData.userInfo.profileImg} style={{ width: 52,resizeMode: 'center', height: 52 }}/>
            </View> 
            <View style={{flex: 2, alignItems: 'flex-start'}}>
                <Text style={styles.title}>{userData.userInfo.username}</Text>  
            </View>
            <View style={{flex: 1 ,flexDirection: "column" }}>
                <View style={styles.itemCount}>
                <Text style={styles.title}>{userData.items.length}</Text>
                <Image source={require('../assets/images/Package.png')} style={{ width: 28,resizeMode: 'center', height: 27, marginBottom: 10 }}/> 
                </View> 
                <View style={styles.itemCount}>
                <Text style={styles.text}>{userData.status}</Text>
                <Image source={require('../assets/images/cashImg.png')} style={{ width: 28,resizeMode: 'center', height: 20}}/> 
                </View> 
            </View>
        </View>    
        <View style={{flex: 6}}>
            <View style={styles.tripHeader}> 
                <Text style={styles.mainText}>RESERVED ITEMS</Text> 
            </View>
            <View style={styles.itemList}> 
                <View style={styles.tableTitle}> 
                    <Text style={styles.tableTitledec}>Item Description</Text> 
                    <Text style={styles.tableTitleText}>Qty</Text> 
                    <Text style={styles.tableTitleText}>Wgt</Text> 
                    <Text style={styles.tableTitleText}>$</Text> 
                    <Text style={styles.tableTitleText}>Manage</Text> 
                </View>
            </View>
            {userData.items.map((val, index) => (
                <View key={index} style={styles.tableRow}>  
                    <Text style={styles.dectext}>{val.description}</Text> 
                    <Text style={styles.text}>{val.quality}</Text> 
                    <Text style={styles.text}>{val.weight}</Text> 
                    <Text style={styles.text}>{val.price}</Text> 
                    <Text style={styles.text}>Remove</Text> 
                </View>
            ))}   
            <View style={styles.amountRow}>  
                 <Text style={styles.totalLabel}>TOTAL AMOUNT </Text>
                 <Text style={styles.totalLabel}>116 USD</Text> 
            </View>
        </View>    
          <View style={{ flex: 2, flexDirection: "column", justifyContent: 'center' , alignItems: 'center', marginBottom: 10 }}> 
              <TouchableOpacity>
                <Image source={require('../assets/images/confirmBtn.png')} style={{ width: 316,resizeMode: 'center', height: 45, marginBottom: 10 }}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/images/refuseBtn.png')} style={{ width: 316,resizeMode: 'center', height: 45}}/>
              </TouchableOpacity>
          </View>
      </View>
    );
};
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20 ,
    backgroundColor: '#FAFAFA', 
  },
  mainText: {
    fontSize: 18,
    fontFamily: 'UbuntuMedium',
    marginVertical :  "4%", 
  }, 
  text:{ 
    fontSize: 12, 
    fontFamily: "Ubuntu",
    textTransform: 'capitalize',
    flex: 1,
  },
  title: { 
    color: "#185354",
    fontSize: 16,
    fontFamily: "UbuntuMedium", 
    textTransform: 'uppercase',
    paddingVertical: "3%"
  }, 
  tripHeader:{  
    display: 'flex',
    marginVertical: "1%",
  },
  item: { 
    display: 'flex',
    flexDirection: 'row',
    color: "#185354",
    fontSize: 14,
    backgroundColor: "#E5F1F2",
    borderRadius: 20,
    paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
  itemCount : {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between', 
  },
  itemList: {
    display: "flex",
    flexDirection: "row", 
    padding: "2%",   
    borderTopColor: '#E5F1F2',
    borderTopWidth: 1,
  },
  tableTitle: {
    flex: 1,
    flexDirection: "row",  
    justifyContent: 'space-between',
    paddingVertical: "2%"
  },
  tableTitleText : { 
    flex: 1, 
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#2797A6',
    fontSize: 13,
    fontFamily: "UbuntuMedium", 
    textTransform: 'capitalize'
  },
  tableTitledec : {
    flex: 3,
    color: '#2797A6',
    fontSize: 13,
    fontFamily: "UbuntuMedium", 
    textTransform: 'capitalize' 
  },
  tableRow: { 
    flexDirection: "row",
    justifyContent: 'space-around',
    borderTopColor: '#E5F1F2',
    borderTopWidth: 1,
    paddingHorizontal :  "2%", 
    paddingVertical :  "3%" 
  },
  amountRow: { 
    flexDirection: "row",
    justifyContent: 'flex-end',
    borderTopColor: '#ECEFEF',
    borderTopWidth: 1,
    borderBottomColor: '#ECEFEF',
    borderBottomWidth: 1,
    padding :  "2%" 
  }, 
  dectext: {
    flex: 3, 
    fontSize: 13, 
    textTransform: 'capitalize',
    fontFamily: "Ubuntu",
  },
  totalLabel: {
    fontSize: 13,
    fontFamily: "UbuntuMedium", 
    paddingVertical :  "3%",
    paddingEnd:  "3%"
  } 
});
