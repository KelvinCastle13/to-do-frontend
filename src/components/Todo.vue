<script>
import axios from "axios";  
import TodoIndex from "./TodoIndex.vue";
import TodoNew from "./TodoNew.vue";
import TodoShow from "./TodoShow.vue";
import Modal from "./Modal.vue";

export default {
  name: "todo",
  components: {
    TodoIndex,
    TodoNew,
    TodoShow,
    Modal,
  },
  data: function () {
    return {
      todos: [],
      currentTodo: {},
      isTodosShowVisible: false,
    }
  },
  created: function () {
    this.handleIndexTodo();
  },
  methods: {
    handleIndexTodo() {
      axios.get("/todos.json").then((response) => {
        console.log("todos index", response.data);
        this.todos = response.data;
      });
    },
    handleCreateTodo: function (params) {
      axios
      .post("/todos.json", params)
      .then((response) => {
        console.log("todo create", response.data);
        this.todos.push(response.data);
        this.newTodo = {};
      })
      .catch((error) => {
        console.log("todo create error", error);
      });
    },
    handleShowTodo: function (todo) {
      console.log("handleShowTodo", todo);
      this.currentTodo = todo;
      this.isTodosShowVisible = true;
    },
    handleDestroyTodo: function (todo) {
      axios.delete(`/todos/${todo.id}.json`).then((response) => {
        console.log("todos destroy", response);
        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
        this.handleClose();
      });
    },
    handleClose: function () {
      this.isTodosShowVisible = false;
    },
    handleUpdateTodo: function (id, params) {
      console.log("handleUpdateTodo", id, params);
      axios
      .patch(`/todos/${id}.json`, params)
      .then((response) => {
        console.log("todos update", response);
        this.todos = this.todos.map((todo) => {
          if (todo.id === response.data.id) {
            return response.data;
          } else {
            return todo;
          }
        });
        this.handleClose();
      })
      .catch((error) => {
        console.log("todos update error", error.response);
      });
    },
  },
};
</script>

<template>
  <main>
    <TodoNew 
    v-on:handleCreateTodo="handleCreateTodo" 
    />
    <TodoIndex  
    v-bind:todos="todos"
    v-on:showTodo="handleShowTodo" 
    v-bind:completed="false" 
    /> 
    <Modal 
    v-bind:show="isTodosShowVisible" 
    v-on:close="handleClose">
      <TodoShow 
      v-bind:todo="currentTodo"
      v-on:updateTodo="handleUpdateTodo"
      v-on:destroyTodo="handleDestroyTodo" />
    </Modal>
  </main>
</template>
<style></style>
