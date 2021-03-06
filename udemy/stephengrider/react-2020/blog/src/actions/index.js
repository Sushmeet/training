/* action creators
if u put an async call inside the fetch posts an error is generated
Error: Actions must be plain objects. Use custom middleware for async actions.
for async actions we must use redux-thunk.
*/

import jsonplaceholder from "../apis/jsonPlaceHolder";
import _ from "lodash";

// export const fetchPosts = async () => {
//   const response = await jsonplaceholder.get("/posts");
//   // return a function

//   return {
//     type: "Fetch_POSTS",
//     payload: response,
//   };
// };

export const fetchPostsAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((userId) => dispatch(fetchUserById(userId)));
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const { data } = await jsonplaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: data,
    });
  };
};

export const fetchUserById = (id) => {
  return async (dispatch) => {
    const { data } = await jsonplaceholder.get(`/users/${id}`);
    dispatch({
      type: "FETCH_USER",
      payload: data,
    });
  };
};
