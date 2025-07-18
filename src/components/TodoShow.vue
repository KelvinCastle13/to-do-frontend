<script>
export default {
  props: {
    todo: Object,
  },
  data: function () {
    return {
      editTodoParams: {},
    };
  },
  created: function () {
    this.editTodoParams = { ...this.todo };
  },
  methods: {
    handleSubmit: function () {
      this.$emit("updateTodo", this.todo.id, this.editTodoParams);
    },
  },
};
</script>

<template>
  <div>
    <h1>Task information</h1>
    <p>Title: {{ todo.title }}</p>
    <p>Description: {{ todo.description }}</p>
    <p>Completed: {{ todo.completed ? "Yes" : "No" }}</p>
    <form v-on:submit.prevent="handleSubmit">
       <div>
         Title:
         <input v-model="editTodoParams.title" type="text" />
       </div>
       <div>
         Description:
         <input v-model="editTodoParams.description" type="text" />
       </div>
       <div>
         Completed:
         <input v-model="editTodoParams.completed" type="checkbox" />
       </div>
       <button type="submit">Update Task</button>
     </form>
     <button v-on:click="$emit('destroyTodo', todo)">Destroy</button>
  </div>
</template>

<style></style>
