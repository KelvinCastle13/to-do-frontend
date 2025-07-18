<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Todo from "./components/Todo.vue";
import Footer from "./components/Footer.vue";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

export default {
  name: "app",
  components: {
    Header,
    Todo,
    Footer,
  },
};
</script>

<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style></style>