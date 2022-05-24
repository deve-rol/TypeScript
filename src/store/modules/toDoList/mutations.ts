import * as mutation_types from "./mutation_types";
import ToDoItem from "@/types/ToDoList/ToDoItem";
import ToDoListState from "@/types/Store/ToDoListState";

export default {
  [mutation_types.MutationTypes.M_SET_TO_DO_LIST](
    state: ToDoListState,
    payload: ToDoItem[]
  ): void {
    state.toDoList = payload;
  },
  [mutation_types.MutationTypes.M_ADD_ITEM](
    state: ToDoListState,
    payload: ToDoItem
  ): void {
    const item = { ...payload };
    const lastItem: ToDoItem = state.toDoList[state.toDoList.length - 1];
    const lastId = lastItem?.id || 0;
    item.id = state.toDoList.length ? lastId + 1 : 1;

    state.toDoList.push(item);
    localStorage.setItem("toDoList", JSON.stringify(state.toDoList));
  },
  [mutation_types.MutationTypes.M_EDIT_ITEM](
    state: ToDoListState,
    payload: ToDoItem
  ): void {
    state.toDoList = state.toDoList.map((item) =>
      item.id === payload.id ? payload : item
    );
    localStorage.setItem("toDoList", JSON.stringify(state.toDoList));
  },
  [mutation_types.MutationTypes.M_REMOVE_ITEM](
    state: ToDoListState,
    payload: number
  ): void {
    state.toDoList = state.toDoList.filter((item) => item.id !== payload);
    localStorage.setItem("toDoList", JSON.stringify(state.toDoList));
  },
};
