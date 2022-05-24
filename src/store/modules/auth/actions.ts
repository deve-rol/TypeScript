import * as types from "./types";
import * as mutation_types from "./mutation_types";
import Auth from "@/types/Auth/Auth";

export default {
  [types.ActionTypes.A_AUTH](
    context: { commit: (arg0: string, arg1: boolean) => void },
    payload: Auth
  ) {
    return new Promise((resolve, reject) => {
      const isExist = payload.login === "admin" && payload.password === "12345";

      if (isExist) {
        context.commit(mutation_types.MutationTypes.M_AUTH, true);
        localStorage.setItem("IsAuth", "on");

        resolve(true);
      } else {
        reject();
      }
    });
  },
  [types.ActionTypes.A_LOGOUT](context: {
    commit: (arg0: string, arg1: boolean) => void;
  }) {
    return new Promise((resolve) => {
      context.commit(mutation_types.MutationTypes.M_AUTH, false);
      localStorage.removeItem("IsAuth");
      resolve(true);
    });
  },
};
