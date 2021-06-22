
const initalState = {
  login: false,
  role: undefined,
  username: undefined,
};
export const appStatus = (state = initalState, action) => {
  switch (action.type) {
    case "MANGE_LOGIN":
      return { login: action.payload.status, role: action.payload.role, username: action.payload.username };
    default:
      return state;
  }
};
