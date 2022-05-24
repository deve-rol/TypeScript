import * as mutation_types from "./mutation_types";
import AuthState from "@/types/Store/AuthState";

export default {
  [mutation_types.MutationTypes.M_AUTH](state: AuthState, payload: boolean) {
    state.isAuth = payload;
  },
};
