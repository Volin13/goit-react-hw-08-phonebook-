export const selectIsLoggedIn = state => {
  return state.auth.isLoggedIn;
};
export const selectIsRefreshing = state => {
  return state.auth.isRefreshing;
};

export const selectToken = state => {
  return state.auth.user.token;
};

export const selectUserName = state => {
  return state.auth.user.name;
};
