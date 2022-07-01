const initialState = {
  status: false,
  investigations: [
    {
      caseNumber: "2022-142170",
      firstName: "Nancy A.",
      lastName: "Jackson",
      address: "Loved Ones Nursing Home,",
      address2: "7030 South Orange Blossom Trail Orlando, FL 32809",
      priority: "Immediate",
      dateAssigned: "2022-06-27",
      status: "closed",
      location: "Institution",
      daysRemaining: 60,
      color: "yellow",
      allegation:
        "Ms. Jackson is a vulnerable adult due to cognitive deficiencies. She is non-verbal and non-ambulatory. Ms. Jackson currently resides at Loved Ones Nursing Home facility. There is concern for Ms. Jackson's care at the facility. On 06/27/22, Ms. Jackson fell out of her wheelchair while she was in her room and laid on the floor for six hours before a staff member checked on her. Ms. Jackson has several open bed sores and a broken toe.",
    },
    {
      caseNumber: "2022-142115",
      firstName: "Mary C.",
      lastName: "Smith",
      priority: "Immediate",
      dateAssigned: "2022-06-01",
      status: "open",
      address: "Central Florida Health",
      address2: "572 John Young Parkway Orlando, FL 35821",
      location: "Facility",
      daysRemaining: 33,
      color: "blue",
      allegation:
        "Mrs. Smith is a vulnerable adult due to being unable to care for herself. Mrs. Smith has Downs Syndrome and lives in a nursing home. On 3/21/22, the alleged perpetrator slapped Mrs. Smith because she made a mess while eating her dinner. The alleged perpetrator is named John Thomas and he is a CNA at Manor Nursing Home. Mrs. Smith has a visible bruise on her cheek. ",
    },
    {
      caseNumber: "2022-157518",
      firstName: "David D.",
      lastName: "Jones",
      priority: "Immediate",
      dateAssigned: "2022-05-28",
      status: "open",
      address: "123 Elm St, Apt 2E",
      address2: "Alamonte, FL 32701",
      location: "Home",
      daysRemaining: 31,
      color: "blue",
      allegation:
        "Mr. Jones is a vulnerable adult due to age. He is currently 97 years old and lives his with his daughter, Sandy Jones. Over the last 3 years, Sandy has forged Mr. Jones' signature on his retirement checks.",
    },
    {
      caseNumber: "2022-140200",
      firstName: "Robert F.",
      lastName: "Wilson",
      priority: "Immediate",
      dateAssigned: "2022-05-26",
      status: "new",
      address: "789 Clark St, ",
      address2: "Edgewood, FL 32809",
      location: "Home",
      daysRemaining: 29,
      color: "blue",
      allegation:
        "Mr. Wilson is a vulnerable adult due to age. Mr. Wilson is currently 79 years old. He is unable to care for himself. Mr. Wilson has fallen several times in the last week. The most recent fall happened yesterday, 5/19/22. Mr. Wilson has not showered and it is unknown when he last ate. ",
    },
    {
      caseNumber: 79944,
      firstName: "Nancy",
      lastName: "Doe",
      priority: "Immediate",
      dateAssigned: "2022-06-22",
      status: "new",
      address: "123 main st, Orlando, fl, 34759",
      location: "Home",
      color: "blue",
      daysRemaining: 60,
    },
    {
      caseNumber: 25479,
      firstName: "Trent",
      lastName: "Doe",
      priority: "Immediate",
      dateAssigned: "2022-06-22",
      status: "new",
      address: "123 main st, Orlando, FL 34759",
      location: "Home",
      daysRemaining: 60,
    },
  ],
  error: undefined,
  message: undefined,
  currentCaseNumber: undefined,
};
const Get_Cases = "Get_Cases";
const Select_Case = "Select_Case";
const New_Investigations = "New_Investigations";
const API_Request_Sent = "API_Request_Sent";
const API_Request_Completed = "API_Request_Completed";
const API_Request_Error = "API_Request_Error";

export const caseReducer = (state = initialState, action) => {
  switch (action.type) {
    case Get_Cases:
      return {
        ...state,
        investigations: action.payload,
      };
    case Select_Case:
      return {
        ...state,
        currentCaseNumber: action.payload,
      };
    case New_Investigations:
      return {
        ...state,
        investigations: [...state.investigations, action.payload],
        status: true,
        message: "Successfully Added Investigations",
      };

    case API_Request_Sent:
      return {
        ...state,
        status: "pending",
      };
    case API_Request_Completed:
      return {
        ...state,
        status: false,
        error: undefined,
      };

    case API_Request_Error:
      return {
        ...state,
        status: "Error",
        error: action.payload,
      };
    default:
      return state;
  }
};
