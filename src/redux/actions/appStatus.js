export const mangeLogin = (status, role, username) => {
  return (dispatch, getState) => {
    dispatch({
      type: "MANGE_LOGIN",
      payload: {status,role,username},
    });
  };
};
