import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Image, Text , Button} from "react-native";

const FacilitySignIn = (props) => {
  const [text, onChangeText] = React.useState("johndoe@example.com");
  const [password, onChangePassword] = React.useState("password");

  function onButtonPress() {
    this.props.navigation.navigate('DetailsScreen');
  }

  return (
    <View style={styles.signInContainer}>
      <View style={styles.logoBox}>
        <Image source={require('../assets/images/PackXLogo.png')} style={{ width: 167,resizeMode: 'center', height: 103}}/>
      </View>
      <View  style={styles.logoBox}>
        <Image source={require('../assets/images/FacilitySignIn.png')} style={{ width: 247,resizeMode: 'center', height: 176}}/>
      </View>
      <SafeAreaView style={styles.loginForm}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Enter your email"
          />
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry={true}
            placeholder="Enter your password"
          />
    </SafeAreaView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FFFFFF",
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 12,
    width: "80%",
    height: 36,
    padding: 10,
    marginBottom: "5%",
    fontFamily: 'Ubuntu',
  },
  flexImg:{
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  loginForm:{
    flex: 3, 
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: "left",
    marginLeft: "17%",
  },
  inputLabel: {
    marginBottom: "3%",
    color: "#7C7C7C",
    fontFamily: 'Ubuntu',
  },
  signInContainer:{
    flex: 5,
    flexDirection: "column", 
    backgroundColor: "#FAFAFA"
  },
  logoBox : {
    flex : 2,
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 30
  }
});

export default FacilitySignIn;