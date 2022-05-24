import { createStore } from "vuex";

import Auth from "./modules/auth/store";
import ToDoList from "./modules/toDoList/store";

export default createStore({
  modules: {
    auth: Auth,
    toDoList: ToDoList,
  },
});
