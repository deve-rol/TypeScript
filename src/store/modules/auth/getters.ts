import AuthState from "@/types/Store/AuthState";

export default {
  getIsAuth: (state: AuthState): boolean => {
    return state.isAuth;
  },
};
