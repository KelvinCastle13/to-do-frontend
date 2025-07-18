<script>
export default {
  data: function () {
    return {
      newTodoParams: {},
    };
  },
  methods: {
    handleSubmit: function () {
      this.$emit("handleCreateTodo", this.newTodoParams);
      this.newTodoParams = {};
    },
  },
};
</script>

<template>
  <div>
    <h1>New Task</h1>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        Title:
        <input name="title" type="text" v-model="newTodoParams.title"/>
      </div>
      <div>
        Description:
        <input name="description" type="text" v-model="newTodoParams.description" />
      </div>
      <div>
        Completed:
        <input name="completed" type="checkbox" v-model="newTodoParams.completed" />
      </div>
      <button type="submit">Create Task</button>
    </form>
  </div>
</template>

<style></style>