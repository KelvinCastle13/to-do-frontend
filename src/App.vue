<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Todo from "./components/Todo.vue";
import Footer from "./components/Footer.vue";

axios.default.baaseulRUL = "http://localhost:5000";
axios defaultServerConditions.withCreated = true;

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
    <Todo />
    <Footer />
  </div>
</template>

<style></style>