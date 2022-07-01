import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
//import * as LocalAuthentication from "expo-local-authentication";
import LottieView from "lottie-react-native";
import * as Device from "expo-device";
import { styles } from "./style";
import ErrorModal from "../../../components/Modals/ErrorModal";
import { userLoginMain } from "../../../store/actions/authActions";
import { config } from "../../../config/Config";
import { theme } from "../../../config/Theme";

const Login = ({ navigation }) => {
  const auth = useSelector((state) => state.auth);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [username, setUsername] = useState();
  const [type, setType] = useState([]);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [user, setUser] = useState({
    userId: "",
    password: "",
  });

  //INPUT HANDLER
  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  //Submit Login to backend
  const handleSubmit = () => {
    let payload = {
      userId: user.userId,
      password: user.password,
    };

    setUsername(user.userId);
    setLoading(true);
    navigation.navigate("Main"); //Navigate to home screen
    setLoading(false);
    //dispatch(userLoginMain(payload));

    // if (isEnabled) {
    //   dispatch(
    //     ToggleRememberUserId({
    //       remember: true,
    //       userId: user.userId,
    //     })
    //   );
    // }
  };

  useEffect(() => {
    // if (auth.success) {
    //console.log(auth);
    //Remove Loading Spinner
    // if (!isEnabled) {
    //   //Reset Username
    //   setUser({
    //     userId: "",
    //     password: "",
    //   });
    //   return;
    // } else {
    //   setUser({
    //     userId: rememberUserId ? profile.userId : "",
    //     password: "",
    //   });
    // }
    //Auth Failed
    // } else if (auth?.success == false && auth?.error) {
    //   setLoading(false); //Remove Loading Spinner
    //   setError(auth?.error);
    //   setShowErrorModal(true); //Show Error Modal
    //   // //Reset Username
    //   // setUser({
    //   //   userId: rememberUserId ? profile.userId : "",
    //   //   password: "",
    //   // });
    // }
  }, [auth]);
  //Toggle Remember UserId
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  // //////////////////////////////////////////////////////////////////////////////////////////////////////////
  // const checkHardware = async () => {
  //   const types = await LocalAuthentication.supportedAuthenticationTypesAsync();

  //   setType(types);
  //   const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
  //   return savedBiometrics;
  // };

  // // Check if hardware supports biometrics
  // useEffect(() => {
  //   const compatible = LocalAuthentication.hasHardwareAsync();
  //   setIsBiometricSupported(compatible);
  //   //setShowLogin(!compatible);
  //   checkHardware();

  //   ///Get bitpanel settings
  //   dispatch(GetBitPanel);
  // }, []);

  // const bioLogin = async () => {
  //   //Set message to display with bio login
  //   const result = await LocalAuthentication.authenticateAsync({
  //     promptMessage:
  //       type[0] == 1 && Device.osName == "ios"
  //         ? "Sign In with Touch ID"
  //         : type[0] == 1 && Device.osName == "android"
  //         ? "Sign In With FingerPrint"
  //         : type[0] == 2
  //         ? "Sign In with Face ID"
  //         : type[0] == 3
  //         ? "Use Iris Recognition"
  //         : "Your device is not compatible with Touch Id or facial recognition",
  //     cancelLabel: "Cancel",
  //     disableDeviceFallback: false,
  //     fallbackLabel: "Use Password",
  //   });

  //   //If Successful Bio Auth Submit Login
  //   if (result.success === true) {
  //     handleSubmit();
  //   }
  // };
  //Close Error Modal
  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  // // useEffect(() => {
  // //   if (!rememberUserId) {
  // //     setUser({
  // //       ...user,
  // //       userId: "",
  // //     });
  // //   }
  // // }, [isFocused]);

  return (
    <KeyboardAvoidingView
      behavior={Device.osName === "ios" ? "padding" : "padding"}
    >
      <ScrollView>
        <View style={{ paddingBottom: Device.osName == "android" ? -200 : 50 }}>
          {loading ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "flex-start",
                height: "100%",
                paddingTop: 25,
              }}
            >
              <LottieView
                loop
                autoPlay
                style={{
                  width: 160,
                  height: 160,
                }}
                source={require("../../../../assets/lottie/loading-spinner.json")}
              />
            </View>
          ) : loading == false && showLogin ? (
            <View style={{ backgroundColor: "white" }}>
              <View style={styles.container}>
                <View style={styles.inputContainer}>
                  <View style={styles.inputView}>
                    <TextInput
                      underlineColor="gray"
                      style={styles.input}
                      label="User ID"
                      placeholder="Enter your username"
                      value={user.userId}
                      onChangeText={(value) => handleChange("userId", value)}
                      textContentType="username"
                    />
                  </View>

                  <View style={styles.inputView}>
                    <TextInput
                      underlineColor="gray"
                      style={styles.input}
                      label="Password"
                      placeholder="Enter your Password"
                      onChangeText={(value) => handleChange("password", value)}
                      value={user.password}
                      secureTextEntry
                      textContentType="password"
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: config.wp("4%"),
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() => setIsEnabled(!isEnabled)}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 50,
                      backgroundColor: isEnabled
                        ? theme.colors.primary
                        : "lightgray",
                      marginRight: 10,
                      borderWidth: 1,
                      borderColor: "gray",
                    }}
                  ></TouchableOpacity>
                  <Text style={styles.switchText}>Remember User ID</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => {
                    setShowLogin(false);
                    checkHardware();
                  }}
                  style={styles.signIn}
                >
                  {type[0] == 1 && Device.osName == "ios" ? (
                    <Image
                      source={require("../../../../assets/icons/fingerprint.png")}
                      style={{ height: 50, width: 50 }}
                    ></Image>
                  ) : type[0] == 1 && Device.osName == "android" ? (
                    <Image
                      source={require("../../../../assets/icons/fingerprint.png")}
                      style={{ height: 50, width: 50 }}
                    ></Image>
                  ) : type[0] == 2 ? (
                    <Image
                      source={require("../../../../assets/icons/faceid.png")}
                      style={{ height: 50, width: 50 }}
                    ></Image>
                  ) : undefined}
                  {/* <Text style={{ color: "black" }}>
                    {type[0] == 1 && Device.osName == "ios"
                      ? "Sign In with Touch ID"
                      : type[0] == 1 && Device.osName == "android"
                      ? "Sign In With FingerPrint"
                      : type[0] == 2
                      ? "Sign In with Face ID"
                      : type[0] == 3
                      ? "Use Iris Recognition"
                      : "Your device is not compatible with Touch Id or facial recognition"}
                  </Text> */}
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => handleSubmit()}
                  style={{
                    ...styles.button,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "flex-end",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Forgot")}
                  >
                    <Text
                      style={{
                        paddingVertical: 10,
                        fontSize: 16,
                        textAlign: "right",
                      }}
                    >
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : loading == false && !showLogin ? (
            <View style={styles.bioContainer}>
              <View style={styles.buttonContainer}>
                {isBiometricSupported ? (
                  <TouchableOpacity
                    // disabled={!formOneIsFilled}
                    activeOpacity={0.85}
                    style={styles.touchId}
                    onPress={bioLogin}
                  >
                    <Text
                      style={{
                        ...styles.buttonText,
                        //paddingVertical: 5,
                        textAlign: "center",
                        textAlignVertical: "center",
                        width: "100%",
                      }}
                    >
                      {type[0] == 1 && Device.osName == "ios"
                        ? "Sign In with Touch ID"
                        : type[0] == 1 && Device.osName == "android"
                        ? "Sign In With FingerPrint"
                        : type[0] == 2
                        ? "Sign In with Face ID"
                        : type[0] == 3
                        ? "Use Iris Recognition"
                        : "Your device is not compatible with Touch Id or facial recognition"}
                    </Text>
                  </TouchableOpacity>
                ) : undefined}
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => setShowLogin(true)}
                  style={{
                    ...styles.signIn,
                  }}
                >
                  <Text style={{ color: "black", paddingVertical: 5 }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : undefined}
        </View>
        <ErrorModal
          showErrorModal={showErrorModal}
          closeErrorModal={closeErrorModal}
          error={error}
          error2={
            auth?.status == 401
              ? `To Protect your account, after ${strikeBlocking} failed attempts, your account will be locked and you will have to give us a call to unlock your account.`
              : undefined
          }
        ></ErrorModal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
