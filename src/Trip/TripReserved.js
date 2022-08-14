import React from 'react';
import { useTheme } from '@react-navigation/native'; 
import { StyleSheet, View, Text, Image , TouchableOpacity, StatusBar} from 'react-native';  

const styles = StyleSheet.create({
  container:{
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: "4%",
      justifyContent: 'center',
      alignItems: 'center' 
  },
  title: {
      fontSize: 21,
      color: "#1B9494",
      textTransform: 'uppercase',
      fontFamily: 'UbuntuBold',
      marginHorizontal : "10%", 
      textAlign: 'center' 
  },
  text: {
      fontSize: 16,
      color: "#333333",
      textAlign: 'center',
      paddingVertical: "10%",
      paddingHorizontal: "3%",
      marginBottom: "5%",
      lineHeight: 22,
      fontFamily: 'Ubuntu',
  },
  introImg: {
    resizeMode: 'center',
    width: 162,
    height: 181,
    marginVertical : "7%",
  }
});
 
 
export default function TripReserved ({ navigation }){  
  const theme = useTheme();  
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <View style={styles.container}>
          <View style={styles.logoBox}>
            <Image source={require('../assets/images/PackXLogo.png')} style={{ width: 167,resizeMode: 'center', height: 103}}/>
          </View>
          <Image source={require('../assets/images/successPack.png')} style={styles.introImg}/>
          <Text style={styles.title}>Your package</Text>
          <Text style={styles.title}>has been reserved</Text>
          <Text style={styles.text}>You will receive an amount due upon the confirmation of your package by the facility.</Text>

          <TouchableOpacity onPress={() => navigation.navigate('PACKAGE')}>
            <Image source={require('../assets/images/packageBtn.png')} style={{ width: 316,resizeMode: 'center', height: 45}}/>
          </TouchableOpacity>
        </View>
      </View>
    ); 
}
