import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { config } from "../../config/Config";
import SubscriptionSavingsChart from "../charts/SubscriptionSavingsChart";
import Button from "../Button";
import { theme } from "../../config/Theme";

const SubscriptionNotification = ({ modalVisible, closeModal }) => {
  const [showSavings, setShowSavings] = useState(false);
  const [result, setResult] = useState(undefined);
  let subscription = { name: "Netflix", price: 14.99, frequency: "monthly" };

  function toggleSavings() {
    setShowSavings(!showSavings);
  }

  const openBrowser = async () => {
    let result = await WebBrowser.openBrowserAsync(
      "https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fcancelplan"
    );
    setResult(result);
  };

  const Savings = () => (
    <View style={styles.savingsContainer}>
      <Text style={styles.info}>
        Save around $200 per month if you were to cancel this subscription.
      </Text>
      <View style={{ alignItems: "center" }}>
        <SubscriptionSavingsChart></SubscriptionSavingsChart>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          paddingTop: config.hp("2%"),
        }}
      >
        <Button
          text="Back"
          color="black"
          fontSize={18}
          width={50}
          onPress={toggleSavings}
        ></Button>
        <Button
          text="Unsubscribe"
          color="white"
          background={theme.colors.primary}
          fontSize={20}
          fontWeight="bold"
          radius={12}
          width={140}
          height={30}
          onPress={() => openBrowser()}
        ></Button>
      </View>
    </View>
  );

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "100%",
                alignItems: "center",
                paddingHorizontal: config.wp("4%"),
                paddingTop: config.hp("1%"),
              }}
            >
              <TouchableOpacity onPress={() => closeModal()}>
                <Ionicons name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            {!showSavings ? (
              <View
                style={{
                  alignItems: "center",

                  paddingHorizontal: 35,
                }}
              >
                <Text style={styles.modalText}>
                  Are you still using {subscription.name}?
                </Text>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: "40%",
                  }}
                >
                  <Text
                    style={{ fontSize: 20, color: "black", fontWeight: "bold" }}
                  >
                    Cost:
                  </Text>
                  <Text
                    style={{ color: "black", fontSize: 24, fontWeight: "bold" }}
                  >
                    ${subscription.price}/{subscription.frequency}
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "flex-end",
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <View style={styles.buttonContainer}>
                    <Button
                      text="Yes"
                      height={40}
                      width={100}
                      color="white"
                      fontSize={22}
                      background={theme.colors.primary}
                      radius={12}
                      onPress={closeModal}
                      shadowOffset={{ width: 0, height: 2 }}
                      shadowColor="black"
                      shadowOpacity={0.25}
                      shadowRadius={4}
                      elevation={5}
                    ></Button>
                    <Button
                      text="No"
                      height={40}
                      width={100}
                      color="white"
                      fontSize={22}
                      background={theme.colors.primary}
                      radius={12}
                      onPress={closeModal}
                      shadowOffset={{ width: 0, height: 2 }}
                      shadowColor="black"
                      shadowOpacity={0.25}
                      shadowRadius={4}
                      elevation={5}
                      onPress={toggleSavings}
                    ></Button>
                  </View>
                </View>
              </View>
            ) : (
              <Savings></Savings>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: config.wp("4%"),
    alignItems: "flex-end",
    paddingTop: 20,
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    top: config.hp("20%"),
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  info: {
    fontSize: 20,
    color: "black",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 26,
    color: theme.colors.primary,
    fontWeight: "bold",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: config.wp("85%"),
    height: 300,
  },
  savingsContainer: {
    paddingHorizontal: config.wp("4%"),
    justifyContent: "space-between",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SubscriptionNotification;
