import * as types from "./types";
import * as mutation_types from "./mutation_types";
import ToDoItem from "@/types/ToDoList/ToDoItem";

export default {
  [types.ActionTypes.A_SET_TO_DO_LIST](
    context: { commit: (arg0: string, arg1: any) => void },
    payload: ToDoItem[]
  ) {
    return new Promise((resolve) => {
      context.commit(mutation_types.MutationTypes.M_SET_TO_DO_LIST, payload);
      resolve(true);
    });
  },
  [types.ActionTypes.A_ADD_ITEM](
    context: { commit: (arg0: string, arg1: any) => void },
    payload: ToDoItem
  ) {
    return new Promise((resolve) => {
      context.commit(mutation_types.MutationTypes.M_ADD_ITEM, payload);
      resolve(true);
    });
  },
  [types.ActionTypes.A_EDIT_ITEM](
    context: { commit: (arg0: string, arg1: any) => void },
    payload: ToDoItem
  ) {
    return new Promise((resolve) => {
      context.commit(mutation_types.MutationTypes.M_EDIT_ITEM, payload);
      resolve(true);
    });
  },
  [types.ActionTypes.A_REMOVE_ITEM](
    context: { commit: (arg0: string, arg1: any) => void },
    payload: number
  ) {
    return new Promise((resolve) => {
      context.commit(mutation_types.MutationTypes.M_REMOVE_ITEM, payload);
      resolve(true);
    });
  },
};
