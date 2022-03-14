import { GET_POSTS, GET_POST_STREAM, POST_REACTION } from "../actions";

export const appReducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      const { data, error } = action.payload;
      return { ...state, posts: data, isLoading: false, isError: error };
    case GET_POST_STREAM:
      return { ...state, posts: [action.payload, ...state.posts] };
    case POST_REACTION:
      const posts = state.posts.map((p) =>
        p._id === action.payload.id
          ? { ...p, likers: [...action.payload.likers] }
          : p
      );
      return { ...state, posts };
    default:
      return state;
  }
};
