import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Dashboard from "../components/Dashboard.vue";
const routes = [
  {
    title: "Login",
    path: "/login",
    component: Login,
  },
  {
    title: "Register",
    path: "/Register",
    component: Register,
  },
  {
    title: "Dashboard",
    path: "/Dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
