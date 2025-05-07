import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Studies from "../views/Studies.vue";
import Projects from "../views/Projects.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Luis Caroca - Inicio",
    },
  },
  {
    path: "/studies",
    name: "Studies",
    component: Studies,
    meta: {
      title: "Luis Caroca - Estudios",
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      title: "Luis Caroca - Proyectos",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not_found",
    component: Home,
    meta: {
      title: "Luis Caroca - Inicio",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? "Luis Caroca - Portafolio";
});

export default router;
