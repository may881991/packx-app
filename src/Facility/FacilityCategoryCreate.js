import React , { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dropdown } from 'react-native-element-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet,ScrollView, SafeAreaView } from 'react-native';
const Stack = createNativeStackNavigator();

const data = [
  { category: 'General', value: '1' },
  { category: 'Item 2', value: '2' },
  { category: 'Item 3', value: '3' },
  { category: 'Item 4', value: '4' },
  { category: 'Item 5', value: '5' },
  { category: 'Item 6', value: '6' },
  { category: 'Item 7', value: '7' },
  { category: 'Item 8', value: '8' },
];

const weight = [
  { category: 'lb', value: '1' },
  { category: 'kg', value: '2' },
];

function FacilityCategoryForm({navigation}){ 
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={{flex:1, flexDirection: 'row'}} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/images/back-arrow.png')} style={{ width: 28,resizeMode: 'center', height: 28}}/>
          <Text style={{color: "#c8c8c8", paddingLeft: 10, paddingTop: 2, fontSize: 18}}>Back</Text>
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [weightVal , setWeight] = useState(null);
  const [isFocusWeight, setIsFocusWeight] = useState(false);
 
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}> Create New Trip </Text>
        <Text style={styles.text}> 2 of 2 </Text>
      </View>
        <SafeAreaView style={styles.addRoute}>
            <Text style={styles.subTitle}>Add PRICIE CHART</Text> 
        </SafeAreaView>  
        <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="category"
            valueField="value"
            placeholder={!isFocus ? 'Add Category' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          renderLeftIcon={() => (
            <FontAwesome
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="list-alt"
              size={23}
            />
          )}
          renderRightIcon={() => (
            <FontAwesome
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="chevron-down"
              size={23}
            />
          )}
        />
        <View style={styles.addcategory}>
          <View style={styles.category}> 
            <Text style={styles.inputLabel}>Category</Text>
            <TextInput style={styles.input} placeholder="Custom Category"/>
          </View>
          <View style={styles.amount}> 
            <Text style={styles.inputLabel}>Price</Text>
            <TextInput style={styles.input} placeholder="Amount"/>
          </View>
        </View>
        <View style={styles.dateList}>
          <View style={styles.dateBox}>
            <Text style={styles.inputLabel}>Weight</Text>
            <Dropdown
                style={[styles.weight, isFocusWeight && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle} 
                iconStyle={styles.iconStyle}
                data={weight}
                maxHeight={300}
                labelField="category"
                valueField="value"
                placeholder={!isFocusWeight ? 'LB / KG / PC' : '...'} 
                value={weightVal}
                onFocus={() => setIsFocusWeight(true)}
                onBlur={() => setIsFocusWeight(false)}
                onChange={item => {
                  setWeight(item.value);
                  setIsFocusWeight(false);
                }} 
              renderRightIcon={() => (
                <FontAwesome
                  style={styles.icon}
                  color={isFocusWeight ? 'blue' : 'black'}
                  name="chevron-down"
                  size={23}
                />
              )}
            />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.inputLabel}>Currency</Text> 
            <Dropdown
                style={[styles.weight, isFocusWeight && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle} 
                iconStyle={styles.iconStyle}
                data={weight}
                maxHeight={300}
                labelField="category"
                valueField="value"
                placeholder={!isFocusWeight ? 'Choose ' : 'Choose'} 
                value={weightVal}
                onFocus={() => setIsFocusWeight(true)}
                onBlur={() => setIsFocusWeight(false)}
                onChange={item => {
                  setWeight(item.value);
                  setIsFocusWeight(false);
                }} 
              renderRightIcon={() => (
                <FontAwesome
                  style={styles.icon}
                  color={isFocusWeight ? 'blue' : 'black'}
                  name="chevron-down"
                  size={20}
                />
              )}
            />
          </View>
        </View>  
        <TouchableOpacity onPress={() => navigation.navigate('FacilityCategoryForm')} > 
                <FontAwesome
                  style={styles.icon}
                  name="plus-circle"
                  size={23}
                />
        </TouchableOpacity>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center'}}> 
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
            <Image source={require('../assets/images/nextBtn.png')} style={{ width: 316,resizeMode: 'center', height: 45}}/>
          </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default FacilityCategoryForm;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginHorizontal: 20
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  text: {
    fontSize: 18,
    fontFamily: 'UbuntuBold',
    paddingLeft: 10,
  },
  addRoute: {
    flex: 2,
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    backgroundColor: "#FFFFFF",
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 20,
    height: 250,
    marginBottom: "5%",
  }, 
  addcategory: { 
    flex: 2,
    paddingHorizontal: "1%",
    display: "flex",
    flexDirection: "row",
  },
  category: { 
    width: "55%",
    marginRight: "5%",
  },
  amount: { 
    width: "40%",
  },
  inputLabel:{
    color: "#333333",
    fontSize: 12
  },
  input: {
    padding: 10,
    fontSize: 14,
    borderBottomColor: "#D7DEDD",
    borderBottomWidth: 1,
    marginVertical: 10,
    backgroundColor: "#ffffff",
  },
  weight: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontSize: 14,
    borderBottomColor: "#D7DEDD",
    borderBottomWidth: 1,
    marginVertical: 10,
    backgroundColor: "#ffffff",
  },
  dateList: {
    display: "flex",
    flexDirection: "row",
    margin : "1%"
  },
  dateBox: {
    flex: 2,
    marginRight: "5%",
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: 'Ubuntu',
    color: "#333333",
  },
  dropdown: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    color: "#333",
    fontFamily: 'UbuntuBold',
  },
  icon: {
    color: "#085252",
    fontSize: 18,
    marginHorizontal: 10
  } 
});
