<script>
export default {
  name: "todo-index",
  props: {
    todos: Array,
    completed: Boolean,
  },
  computed: {
    filteredTodos() {
      return this.todos.filter((todo) => todo.completed === this.completed);
    },
  },
};
</script>

<template>
  <div>
    <h1>All Tasks</h1>
    <div v-for="todo in todos" v-bind:key="todo.id">
      <h2>{{ todo.title }}</h2>
      <p>{{ todo.description }}</p>
      <p>{{ todo.completed }}</p>
      <button v-on:click="$emit('showTodo', todo)">Show</button>
    </div>
  </div>
</template>

<style></style>