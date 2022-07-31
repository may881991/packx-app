import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; 
import Feather from 'react-native-vector-icons/Feather';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Profile = () => {
    return (
      <View style={styles.container}> 
            <View style={styles.item}> 
                <View style={{flex: 2, alignContent: "center"}}> 
                    <Image source={require('../assets/images/profile.png')} style={{ width: 89,resizeMode: 'center', height: 89 }}/>
                </View> 
                <View style={{flex: 3, alignItems: 'flex-start', paddingTop: 10}}>
                    <Text style={styles.title}>ABC CARGO</Text>  
                    <Text style={styles.subtitle}>TOMMY</Text>
                    <Text style={styles.text}>Facility ID:NYC001</Text>
                </View>
                <View style={{flex: 1 ,flexDirection: "column",paddingTop: 10 }}>
                    <View style={styles.itemCount}>
                      <Text style={styles.count}>2127</Text>
                      <Image source={require('../assets/images/Package.png')} style={{ width: 28,resizeMode: 'center', height: 27 }}/> 
                    </View> 
                    <View style={styles.itemCount}>
                      <Text style={styles.count}>213</Text>
                      <Image source={require('../assets/images/plane.png')} style={{ width: 28,resizeMode: 'center', height: 20}}/> 
                    </View> 
                </View>
            </View> 
            <View style={styles.account}> 
                <Text style={styles.accountTitle}>Account</Text> 
                <TouchableOpacity style={styles.accountLabel}> 
                  <Icon style={styles.icon} name='person-outline' size={16} />
                  <Text style={styles.accountText}>Personal Information</Text>  
                  <Icon style={styles.righticon} name='chevron-forward' size={16} />
                </TouchableOpacity> 
                <TouchableOpacity style={styles.accountLabel}>
                  <Icon style={styles.icon} name='person-outline' size={16} />
                  <Text style={styles.accountText}>Facility Information</Text>  
                  <Icon style={styles.righticon} name='chevron-forward' size={16} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.accountLabel}>  
                  <Icon style={styles.icon} name='reader-outline' size={16} />
                  <Text style={styles.accountText}>Transaction History</Text> 
                  <Icon style={styles.righticon} name='chevron-forward' size={16} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.accountLabel}>
                  <Feather style={styles.icon} name='settings' size={16} />
                  <Text style={styles.accountText}>Setting</Text>
                  <Icon style={styles.righticon} name='chevron-forward' size={16} />
                </TouchableOpacity>
            </View> 
            <View style={styles.account}> 
                <Text style={styles.accountTitle}>Support</Text> 
                <TouchableOpacity style={styles.accountLabel}> 
                  <Icon style={styles.icon} name='person-outline' size={16} />
                  <Text style={styles.accountText}>How PackX Works? </Text>  
                  <Icon style={styles.righticon} name='chevron-forward' size={16} />
                </TouchableOpacity>  
                <TouchableOpacity style={styles.accountLabel}>  
                  <Icon style={styles.icon} name='reader-outline' size={16} />
                  <Text style={styles.accountText}>FAQ</Text> 
                  <Icon style={styles.righticon} name='chevron-forward' size={16} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.accountLabel}>
                  <Feather style={styles.icon} name='pie-chart' size={16} />
                  <Text style={styles.accountText}>Get Help</Text>
                  <Icon style={styles.righticon} name='chevron-forward' size={16} />
                </TouchableOpacity>
            </View> 
            <View style={styles.account}> 
                <Text style={styles.accountTitle}>Legal</Text> 
                <TouchableOpacity style={styles.accountLabel}> 
                  <Icon style={styles.icon} name='person-outline' size={16} />
                  <Text style={styles.accountText}>Terms of Service</Text>  
                  <Icon style={styles.righticon} name='chevron-forward' size={16} />
                </TouchableOpacity>  
                <TouchableOpacity style={styles.accountLabel}>  
                  <Icon style={styles.icon} name='reader-outline' size={16} />
                  <Text style={styles.accountText}>Privacy Policy</Text> 
                  <Icon style={styles.righticon} name='chevron-forward' size={16} />
                </TouchableOpacity> 
            </View> 
      </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding : "3%",  
    backgroundColor: '#FAFAFA', 
    fontFamily: "Ubuntu",
  },
  text:{ 
    fontSize: 12,  
    color: "#7B6F72",
    textTransform: 'capitalize',
    fontFamily: "UbuntuMedium",  
  },
  count:{ 
    fontSize: 12,  
    textTransform: 'capitalize',
    fontFamily: "UbuntuMedium", 
    paddingTop: "6%",
    paddingLeft:  "2%"
  },
  title: { 
    color: "#185354",
    fontSize: 16,
    fontFamily: "UbuntuMedium", 
    textTransform: 'uppercase',
    paddingTop: "2%"
  }, 
  subtitle: { 
    color: "#1D1617",
    fontSize: 14, 
    textTransform: 'uppercase',
    paddingVertical: "3%"
  }, 
  itemCount : {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between', 
  },
  item: { 
    flexDirection: 'row',
    color: "#185354",
    fontSize: 14, 
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    marginTop: "10%",
  },
  icon: {
    color: "#185354",
    marginRight: "2%"
  },
  righticon: {
    alignSelf: 'flex-end',
    color: "#185354",
  },
  account: { 
    backgroundColor: "#FFFFFF",
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    borderRadius: 10,
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    marginBottom: "2%",
  },
  accountTitle:{ 
    fontSize: 16,   
    fontFamily: "UbuntuMedium", 
    paddingBottom: "2%",
  },
  accountLabel : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: "4%",  
    borderBottomColor: "#D7DEDD",
    borderBottomWidth: 1,
  },
  accountText:{ 
    flex: 6,
    fontSize: 13,   
    textTransform: 'capitalize', 
    fontFamily: "UbuntuLight",
  },
});
