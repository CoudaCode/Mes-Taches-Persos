import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Dashboard from "../components/Dashboard.vue";
import Home from "../components/Home.vue";
const routes = [
  {
    title: "Login",
    path: "/login",
    component: Login,
  },
  {
    title: "Register",
    path: "/register",
    component: Register,
  },
  {
    title: "Dashboard",
    path: "/Dashboard",
    component: Dashboard,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
  },
  {
    title: "Home",
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
