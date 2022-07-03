import { TabActions } from "@react-navigation/native";

const Get_Timeline = "Get_Timeline";

const initialState = {
  posts: [
    {
      id: 1,
      userId: 2,
      username: "testuser",
      date: new Date().toLocaleDateString("en-US"),
      file: "https://storage.googleapis.com/backstagevideos/bali.mp4",
      type: "Video",
      comment: "Nothing crazy just chilling in Bali!",
      location: undefined,
      hashtags: ["Travel", "Bali", "Rain"],
      taggedUsers: [],
      likes: [], //array of ids, from people who liked
    },
    {
      id: 2,
      userId: 1,
      username: "Thisuser",
      date: new Date().toLocaleDateString("en-US"),
      file: "https://storage.googleapis.com/backstagevideos/nemo.mp4",
      type: "Video",
      comment: "Guess whats for dine=ner tonight! Cheffing it up.",
      location: undefined,
      hashtags: ["Cooking", "Chef", "Ramen"],
      taggedUsers: [],
      likes: [], //array of ids, from people who liked
    },
    {
      id: 3,
      userId: 1,
      username: "Thatuser",
      date: new Date().toLocaleDateString("en-US"),
      file: "https://storage.googleapis.com/backstagevideos/lioins.mp4",
      type: "Video",
      comment: "Nothing crazy just chilling in Bali!",
      location: undefined,
      hashtags: ["Travel", "Bali", "Rain"],
      taggedUsers: [],
      likes: [], //array of ids, from people who liked
    },
    {
      id: 4,
      userId: 2,
      username: "Thatuser",
      date: new Date().toLocaleDateString("en-US"),
      file: "https://storage.googleapis.com/backstagevideos/twerk.mp4",
      type: "Video",
      comment: "She said she wanna Twerk",
      location: undefined,
      hashtags: ["Twerk", "Dance", "Tik Tok"],
      taggedUsers: [],
      likes: [], //array of ids, from people who liked
    },
  ],
  status: false,
  error: undefined,
  message: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Get_Timeline:
      return {
        ...state,
        posts: [...state.posts, action.payload.posts],
      };

    default:
      return state;
  }
};
