import { createWebHistory, createRouter } from "vue-router";

// import Signup from "./components/Signup.vue";
// import Login from "./components/Login.vue";
// import LogoutLink from "./components/LogoutLink.vue";
import TodoIndex from "./components/TodoIndex.vue";
import TodoNew from "./components/TodoNew.vue";
import Todo from "./components/Todo.vue";

const routes = [
  // { path: "/signup", component: Signup },
  // { path: "/login", component: Login },
  // { path: "/logout", component: LogoutLink },
  { path: "/todos", component: Todo },
  { path: "/todos/new", component: TodoNew },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;