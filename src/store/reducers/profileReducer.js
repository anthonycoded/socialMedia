const Get_User_Profile = "Get_User_Profile";

const initialState = {
  //All array of ids
  followers: [],
  following: [],
  likes: [],
  posts: [],
  stories: [],
  fleets: [],
  bio: undefined,
  username: undefined,
  title: undefined,
  profilePic: undefined,
  email: undefined,
  phone: undefined,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Get_User_Profile:
      return { ...state, ...payload };

    default:
      return state;
  }
};
