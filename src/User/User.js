import React from 'react';
import { StyleSheet, View, Text,TextInput, Image, TouchableOpacity, ScrollView} from 'react-native'; 

const styles = StyleSheet.create({
  container:{
      flex: 1, 
      justifyContent: 'flex-start',
      paddingHorizontal: "4%"
  }, 
  input: {
    padding: "3%",
    fontSize: 14,
    borderBottomColor: "#D7DEDD",
    borderBottomWidth: 1,
    marginVertical:  "3%",
    backgroundColor: "#ffffff",
    fontFamily: 'Ubuntu',
  },
  inputLabel: {
      fontSize: 13,  
      fontFamily: 'Ubuntu',
  }
}); 
 
 export default function UserScreen()  { 
    return (
      <>
         <View style={{ flex: 3 , justifyContent: 'center' , alignItems: 'center'  }}>
            <TouchableOpacity>
              <Image source={require('../assets/images/photoFrame.png')} style={{ width: 85,resizeMode: 'center', height: 89, marginBottom: '2%'}}/>
            </TouchableOpacity> 
            <TouchableOpacity>
              <Image source={require('../assets/images/uploadBtn.png')} style={{ width: 83,resizeMode: 'center', height: 30}}/>
            </TouchableOpacity> 
          </View>
          <View style={{flex: 8}}>
            <ScrollView>
              <Text style={styles.inputLabel}>First Name</Text>
              <TextInput style={styles.input}  placeholder="First Name"/>
              <Text style={styles.inputLabel}>Last Name</Text>
              <TextInput style={styles.input}  placeholder="Last Name"/>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput style={styles.input}  placeholder="thina@abc.com "/>
              <Text style={styles.inputLabel}>Phone Number</Text>
              <TextInput style={styles.input}  placeholder="+957xxxxxxxx"/>
              <Text style={styles.inputLabel}>Gender</Text>
              <TextInput style={styles.input}  placeholder="Gender"/>
              <Text style={styles.inputLabel}>Birth Date</Text>
              <TextInput style={styles.input}  placeholder="Birth Date"/>
              <Text style={styles.inputLabel}>Government ID </Text>
              <TextInput style={styles.input}  placeholder="+957xxxxxxxx"/>
            </ScrollView> 
          </View>
      </>
    ) 
}
