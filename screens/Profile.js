import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function Profile() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/default.png")}
            style={styles.image}
          ></Image>
          <Text style={styles.imageText}>KYC Verified</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.name}>Sagar Goyal</Text>
          <Text style={styles.phone}>7452052435</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <ScrollView>
          <View style={styles.listOption}>
          <View style={styles.icon}>
              <Feather name="user" size={30} />
          </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>User Verification</Text>
              <Text style={styles.optionDetailText}>Complete your KYC to buy, sell & withdraw</Text>
            </View>
          </View>
          <View style={styles.listOption}>
          <View style={styles.icon}>
          <MaterialCommunityIcons name="bank-outline" size={30} />
              
          </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Bank Details</Text>
            </View>
          </View>
          <View style={styles.listOption}>
            <View style={styles.icon}>
            <MaterialIcons name="history" size={30} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>History</Text>
              <Text style={styles.optionDetailText}>All your transactions on DhanLaxmi</Text>
            </View>
          </View>
          <View style={styles.listOption}>
            <View style={styles.icon}>
                <Ionicons name="gift-outline" size={30} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Redeem Gift Voucher</Text>
              <Text style={styles.optionDetailText}>Got a voucher? Redeem here</Text>
            </View>
          </View>
          <View style={styles.listOption}>
            <View style={styles.icon}>
                <Feather name="lock" size={30} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Secure Lock</Text>
            </View>
          </View>
          <View style={styles.listOption}>
            <View style={styles.icon}>
                <AntDesign name="customerservice" size={30} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Help and Support</Text>
              <Text style={styles.optionDetailText}>Create a ticket and we will contact you</Text>
            </View>
          </View>
          <View style={styles.listOption}>
            <View style={styles.icon}>
                <AntDesign name="staro" size={30} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Rate Us</Text>
              <Text style={styles.optionDetailText}>Tell us what you think</Text>
            </View>
          </View>
          <View style={styles.listOption}>
            <View style={styles.icon}>
                <Feather name="user" size={30} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>About DhanLaxmi</Text>
              <Text style={styles.optionDetailText}>v1.0.0</Text>
            </View>
          </View>
          <View style={styles.listOption}>
            <View style={styles.icon}>
                <AntDesign name="poweroff" size={30} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Logout</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FBFC",
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    flex: 2.5,
    alignItems: "center",
    justifyContent: "space-around",
  },
  listContainer: {
    flex: 7.5,
  },
  image: {
    height: 54,
    width: 54,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  detailContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  listOption:{
      flexDirection:'row',
      backgroundColor: "white",
      marginTop:8,
      height:70,
  },
  optionTextContainer:{
    marginLeft:10,
    justifyContent: "center"
  },
  imageText: {
    color: "grey",
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  phone: {
    color: "grey",
  },
  optionDetailText: {
    color: "grey",
  },
  optionText: {
      fontSize: 18,
  },
  icon: {
      margin:10,
      alignItems: "center",
      justifyContent: "center"
  }
});
