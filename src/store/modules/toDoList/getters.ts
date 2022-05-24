import ToDoItem from "@/types/ToDoList/ToDoItem";
import ToDoListState from "@/types/Store/ToDoListState";

export default {
  getToDoList: (state: ToDoListState): ToDoItem[] => {
    return state.toDoList;
  },
  getItemById:
    (state: ToDoListState) =>
    (id: string | number): ToDoItem | undefined => {
      return state.toDoList.find((item) => item.id === id);
    },
};
