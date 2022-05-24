import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "../store/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/Auth",
    name: "Auth",
    meta: { title: "Вход в систему", requiresAuth: false },
    component: () => import("../views/Auth/Auth.vue"),
  },
  {
    path: "/",
    name: "List",
    meta: { title: "Список дел", requiresAuth: true },
    component: () => import("../views/ToDoList/ToDoList.vue"),
  },
  {
    path: "/Add",
    name: "AddList",
    meta: { title: "Добавление", requiresAuth: true },
    component: () => import("../views/ToDoList/ToDoForm.vue"),
  },
  {
    path: "/Edit/:id",
    name: "EditList",
    meta: { title: "Редактирование", requiresAuth: true },
    component: () => import("../views/ToDoList/ToDoForm.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) document.title = to.meta.title as string;

  const isAuth = store.getters["auth/getIsAuth"];
  if (to.meta.requiresAuth && !isAuth) {
    next("/Auth");
  } else if (!to.meta.requiresAuth && isAuth) {
    next("/");
  } else {
    next();
  }
});

export default router;
