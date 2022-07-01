export const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export function localStringToNumber(s) {
  return Number(String(s).replace(/[^0-9.-]+/g, "")); //formats "113456" to 123456
}

// export const formatPhoneNumber = (input) => {
//   if (!input || isNaN(input)) return `input must be a number was sent ${input}`;
//   if (typeof input !== "string") input = input.toString();
//   if (input.length === 10) {
//     return input.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
//   } else if (input.length < 10) {
//     return "was not supplied enough numbers please pass a 10 digit number";
//   } else if (input.length > 10) {
//     return "was supplied too many numbers please pass a 10 digit number";
//   } else {
//     return "something went wrong";
//   }
// };

export function onBlur(e, handleChange) {
  let value = e.target.value;

  let options = {
    maximumFractionDigits: 2,
    currency: "USD",
    style: "currency",
  };

  e.target.value =
    value || value === 0
      ? localStringToNumber(value).toLocaleString(undefined, options)
      : "";

  handleChange("amount", e.target.value);
}
/////////////////////////////// Formats date returned from api into MM/DD/YYYYY///////////////////////////////////////
export function formatBirthday(date) {
  let temp = date?.toString();
  let newDate = temp?.replace(/T00:00:00/, "");
  const birthday = new Date(newDate);

  const day =
    1 +
    Number(
      birthday?.getDate().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })
    );
  const month =
    1 +
    Number(
      birthday?.getMonth().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })
    );

  const formattedDate = `${month}-${
    day.length < 10 ? "0" + day : day
  }-${birthday?.getFullYear()}`;

  return formattedDate;
}

//////////////////////////////////////formatDateYYMMDD to send to api//////////////////////////////////////////////////////////////
export const formatDateYYMMDD = (date) => {
  let newDate = new Date(date);
  const formattedDate =
    newDate?.getFullYear() +
    "-" +
    (newDate?.getMonth() + 1).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) +
    "-" +
    (newDate?.getDate() + 1).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  return formattedDate;
};

///////////////////////////////////Format phone number to send to api///////////////////////////////////
export const phoneNumToString = (phoneNumber) => {
  const string = parseInt(phoneNumber?.replace(/[^0-9]/g, ""), 10).toString();
  return string;
};

///////////////////////////////////Format phone number returned from api "(123) 456-7890"///////////////////////////////////
export function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
}

export const RedirectCheck = (response) => {
  let data = response.data;

  if (typeof data == "string") {
    let redirect = data.includes("<!DOCTYPE");
    if (redirect) {
      return true;
    }
  }

  return false;
};

export function scrollToBottom(id) {
  if (document.getElementById(id)) {
    document.getElementById(id).scrollTop =
      document.getElementById(id).scrollHeight;
  }
}

/////////////////////////////////// Order Account Tiles///////////////////////////////////////////////
export const OrderTiles = (accounts, order) => {
  let array;
  if (accounts && order) {
    array = new Array(...accounts);

    return array.sort(function (obj1, obj2) {
      return order.indexOf(obj1.accountId) - order.indexOf(obj2.accountId);
    });
  }
  return array;
};

/////////////////////////////////// Api Request Error Handler///////////////////////////////////////////////
export function handleError(error, dispatch) {
  const API_Request_Error = "API_Request_Error";
  const API_Request_Completed = "API_Request_Completed";
  console.log(error);
  if (error?.response) {
    if (error?.response.status == 400) {
      dispatch({
        type: API_Request_Error,
        payload: "Bad Request, Contact your financial institution",
      });
      wait(50).then(() => dispatch({ type: API_Request_Completed }));
    }
    if (error?.response.status == 500) {
      dispatch({
        type: API_Request_Error,
        payload:
          "Sorry, looks like our systems may be down.Please try again later.",
      });
      wait(50).then(() => dispatch({ type: API_Request_Completed }));
    }
    if (error?.response.status == 415) {
      dispatch({
        type: API_Request_Error,
        payload:
          "Invalid data type, please update the information and try again.",
      });
      wait(50).then(() => dispatch({ type: API_Request_Completed }));
    }
  }
}

import {
  streaming,
  gaming,
  music,
  food,
} from "../src/screens/profile&settings/profile/detailsSection/subscriptionSection/addSubscription/database";
export function handleTiers(item) {
  let cost;

  if (item == "Netflix") {
    cost = streaming?.filter((item) => item.title == "Netflix");
    return cost[0].tiers;
  } else if (item == "Disney Plus") {
    cost = streaming?.filter((item) => item.title == "Disney Plus");
    return cost[0].tiers;
  } else if (item == "Amazon Prime") {
    cost = streaming?.filter((item) => item.title == "Amazon Prime");
    return cost[0].tiers;
  } else if (item == "Hulu") {
    cost = streaming?.filter((item) => item.title == "Hulu");
    return cost[0].tiers;
    ////Music
  } else if (item == "Apple Music") {
    cost = music?.filter((item) => item.title == "Apple Music");
    return cost[0].tiers;
  } else if (item == "Spotify") {
    cost = music?.filter((item) => item.title == "Spotify");
    return cost[0].tiers;
  } else if (item == "Pandora") {
    cost = music?.filter((item) => item.title == "Pandora");
    return cost[0].tiers;
  } else if (item == "Sirius XM") {
    cost = music?.filter((item) => item.title == "Sirius XM");
    return cost[0].tiers;
    ////Gaming
  } else if (item == "Microsoft Ultimate") {
    cost = gaming?.filter((item) => item.title == "Microsoft Ultimate");
    return cost[0].tiers;
  } else if (item == "Playstation Plus") {
    cost = gaming?.filter((item) => item.title == "Playstation Plus");
    return cost[0].tiers;
  } else if (item == "Stadia") {
    cost = gaming?.filter((item) => item.title == "Stadia");
    return cost[0].tiers;

    ////Food
  } else if (item == "Uber Eats") {
    cost = food?.filter((item) => item.title == "Uber Eats");
    return cost[0].tiers;
  } else if (item == "Door Dash") {
    cost = food?.filter((item) => item.title == "Door Dash");
    return cost[0].tiers;
  } else if (item == "GrubHub") {
    cost = food?.filter((item) => item.title == "GrubHub");
    return cost[0].tiers;
  } else {
    undefined;
  }
}

////////Cache Tile Settings /////////////////////
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function cacheTileSettings(data) {
  try {
    let settings = data.map((item, i) => {
      let object = {
        accountId: item.accountId,
        eStatement: item.false,
        nickName: item.nickName,
        backGroundColor: item.backGroundColor,
        secondaryTextColor: item.secondaryTextColor,
        mainTextColor: item.mainTextColor,
      };
      return object;
    });

    const jsonValue = JSON.stringify(settings);
    await AsyncStorage.setItem("tile_settings", jsonValue);
    return;
  } catch (error) {
    console.log(error);
  }
}

export async function mergeCachedSettings(accounts, cachedSettings) {
  //Merge settings obj from settings array with account obj from accounts array by id
  let accountsWithSettings = [];

  if (accounts && cachedSettings && accounts?.length > 0) {
    //map over accounts
    for (var account of accounts) {
      let tempAccountInfo = {
        accountId: account.accountId,
        accountName: account.accountName,
        accountNumber: account.accountNumber,
        accountNumberText: account.accountNumberText,
        balance: account.balance,
        availableBalance: account.availableBalance,
        isLoan: account.isLoan,
        useAvailableBalance: account.useAvailableBalance,
        backGroundColor: "default",
        mainTextColor: "default",
        secondaryTextColor: "default",
        nickname: "",
        image: "",
      };
      let setting = cachedSettings?.find(
        //find settings with id that matches account id
        (setting) => setting.accountId == account.accountId
      );
      if (setting) {
        tempAccountInfo.backGroundColor = setting.backGroundColor;
        tempAccountInfo.mainTextColor = setting.mainTextColor;
        tempAccountInfo.secondaryTextColor = setting.secondaryTextColor;
        tempAccountInfo.nickname = setting.nickName;
        tempAccountInfo.image = setting.image;
      }

      accountsWithSettings.push(tempAccountInfo);
    }
  }

  return accountsWithSettings;
}
