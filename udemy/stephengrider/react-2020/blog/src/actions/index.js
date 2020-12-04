/* action creators
if u put an async call inside the fetch posts an error is generated
Error: Actions must be plain objects. Use custom middleware for async actions.
for async actions we must use redux-thunk.
*/

import jsonplaceholder from "../apis/jsonPlaceHolder";

// export const fetchPosts = async () => {
//   const response = await jsonplaceholder.get("/posts");
//   // return a function

//   return {
//     type: "Fetch_POSTS",
//     payload: response,
//   };
// };

export const fetchPosts = () => {
  return async (dispatch) => {
    const { data } = await jsonplaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: data,
    });
  };
};
