import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GoBack from "../../components/GoBack";
import Header from "../../components/Header";

import EditContactInfo from "../screens/profile&settings/profile/detailsSection/contactInfoSection/editContactInfo/EditContactInfo";
import AddExpense from "../screens/profile&settings/profile/detailsSection/monthlyExpenses/addExpense/AddExpense";
import EditExpense from "../screens/profile&settings/profile/detailsSection/monthlyExpenses/editExpense/EditExpense";
import ProfileDetails from "../screens/profile&settings/profile/detailsSection/ProfileDetails";
import AddSubscription from "../screens/profile&settings/profile/detailsSection/subscriptionSection/addSubscription/AddSubscription";
import EditSubscription from "../screens/profile&settings/profile/detailsSection/subscriptionSection/editSubscription/EditSubscription";
import AddVehicleDetails from "../screens/profile&settings/profile/detailsSection/vehicleDetailsSection/addVehicleDetails/AddVehicleDetails";
import EditVehicleDetails from "../screens/profile&settings/profile/detailsSection/vehicleDetailsSection/VehicleDetailItem.js/editVehicleDetails/EditVehicleDetails";
import ProfileReminders from "../screens/profile&settings/profile/remindersSection/ProfileReminders";
import RemindersScreen from "../screens/profile&settings/profile/remindersSection/RemindersScreen";
import EditReminder from "../screens/profile&settings/profile/remindersSection/EditReminder";
import ProfileAndSettingsScreen from "../screens/profile&settings/ProfileAndSettingsScreen";
import PasswordAndSecurityQuestionScreen from "../screens/profile&settings/settings/PasswordAndSecurityQuestionScreen";
import DisclosureSection from "../screens/profile&settings/settings/DisclosureSection";

const ProfileAndSettingsStack = createNativeStackNavigator();

const ProfileAndSettingsNavigation = ({ navigation }) => {
  return (
    <ProfileAndSettingsStack.Navigator
      initialRouteName="profileMain"
      screenOptions={{}}
    >
      <ProfileAndSettingsStack.Screen
        name="profileMain"
        component={ProfileAndSettingsScreen}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerBackVisible: false,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack navigation={navigation} />;
          },
        }}
      />
      <ProfileAndSettingsStack.Screen
        name="profileDetails"
        component={ProfileDetails}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack navigation={navigation} />;
          },
        }}
      />
      <ProfileAndSettingsStack.Screen
        name="profileReminders"
        component={ProfileReminders}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack navigation={navigation} />;
          },
        }}
      />
      <ProfileAndSettingsStack.Screen
        name="RemindersScreen"
        component={RemindersScreen}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack goTo={"profileReminders"} navigation={navigation} />;
          },
        }}
      />
      <ProfileAndSettingsStack.Screen
        name="EditReminder"
        component={EditReminder}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack goTo={"profileReminders"} navigation={navigation} />;
          },
        }}
      />
      <ProfileAndSettingsStack.Screen
        name="settings"
        component={PasswordAndSecurityQuestionScreen}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack goTo={"profileMain"} navigation={navigation} />;
          },
        }}
      />
      <ProfileAndSettingsStack.Screen
        name="disclosures"
        component={DisclosureSection}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack goTo={"profileMain"} navigation={navigation} />;
          },
        }}
      />
      <ProfileAndSettingsStack.Screen
        name="editContactInfo"
        component={EditContactInfo}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerLeft: () => {
            return null;
          },
        }}
      />
      <ProfileAndSettingsStack.Screen
        name="addSubscription"
        component={AddSubscription}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack goTo={"profileDetails"} navigation={navigation} />;
          },
        }}
      />
      <ProfileAndSettingsStack.Screen
        name="editSubscription"
        component={EditSubscription}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack goTo={"profileDetails"} navigation={navigation} />;
          },
        }}
      />
      <ProfileAndSettingsStack.Screen
        name="addExpense"
        component={AddExpense}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack goTo={"profileDetails"} navigation={navigation} />;
          },
        }}
      />
      <ProfileAndSettingsStack.Screen
        name="editExpense"
        component={EditExpense}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack goTo={"profileDetails"} navigation={navigation} />;
          },
        }}
      />
      <ProfileAndSettingsStack.Screen
        name="addVehicleDetails"
        component={AddVehicleDetails}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack goTo={"profileDetails"} navigation={navigation} />;
          },
        }}
      />
      <ProfileAndSettingsStack.Screen
        name="EditVehicleDetails"
        component={EditVehicleDetails}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack goTo={"profileDetails"} navigation={navigation} />;
          },
        }}
      />
    </ProfileAndSettingsStack.Navigator>
  );
};

export default ProfileAndSettingsNavigation;
