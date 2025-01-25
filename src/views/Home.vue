<template>
  <div class="home">
    <h1 class="mt-4">Hola! Soy Luis Caroca</h1>
    <h2 class="mt-3">Desarrollo tus ideas al alcance de todos</h2>
    <Accordion_Home />
    <Skills />
    <Knowledges />
  </div>
</template>

<script>
// @ is an alias to /src
import Accordion_Home from "../components/Accordion_Home.vue";
import Knowledges from "../components/Knowledges.vue";
import Skills from "../components/Skills.vue";

export default {
  name: "Home",
  components: {
    Accordion_Home,
    Knowledges,
    Skills,
  },
};
</script>
