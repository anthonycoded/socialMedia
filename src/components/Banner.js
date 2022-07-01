import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useTime } from "react-timer-hook";
import { config } from "../config/Config";
import { theme } from "../config/Theme";

const Banner = () => {
  const date = new Date();
  const time = date.toLocaleTimeString("en-US");
  const { seconds, minutes, hours, ampm } = useTime({ format: "12-hour" });

  function minTwoDigits(minutes) {
    return (minutes < 10 ? "0" : "") + minutes;
  }

  var months = new Array(12);
  months[0] = "January";
  months[1] = "February";
  months[2] = "March";
  months[3] = "April";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "August";
  months[8] = "September";
  months[9] = "October";
  months[10] = "November";
  months[11] = "December";

  let current_date = new Date();

  let month_value = current_date.getMonth();
  let day_value = current_date.getDate();
  let year_value = current_date.getFullYear();
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 10,
          width: "100%",
          //marginBottom: config.hp("2%"),
          backgroundColor: theme.colors.faded,
          paddingHorizontal: 20,
          opacity: 1,
        }}
      >
        <View style={{}}>
          <Text
            style={{
              fontSize: 24,
              textAlign: "left",
              fontWeight: "500",
            }}
          >
            Hello John,
          </Text>

          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            <Text style={{ fontSize: 20, textTransform: "uppercase" }}>
              Online (Last sync June 27, 2022{" "}
              {`${hours == 0 ? 12 : hours}:${minTwoDigits(minutes)} ${ampm}`})
            </Text>

            {/* <Text style={{ fontSize: 20 }}>Offline (Last sync: 13min ago)</Text> */}
          </View>
        </View>

        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
          <Text style={{ fontSize: 24 }}>
            {`${months[month_value]} ${day_value}, ${year_value}`}
          </Text>
          <Text style={{ fontSize: 24, textTransform: "uppercase" }}>{`${
            hours == 0 ? 12 : hours
          }:${minTwoDigits(minutes)} ${ampm}`}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingHorizontal: 25,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            width: "50%",
            marginBottom: config.hp("1%"),
            paddingTop: 15,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "500" }}>Attention</Text>
          <Text>
            Due to Covid, all staff are required to wear face masks whenever in
            contact with people.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "50%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/calendar.png")}
            style={{ width: 75, height: 75, marginRight: 20 }}
          ></Image>
          <Image
            source={require("../../assets/teams.png")}
            style={{ width: 75, height: 75 }}
          ></Image>
        </View>
      </View>
    </View>
  );
};

export default Banner;
