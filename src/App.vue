<template>
  <div class="container">
    <h1>Math training</h1>
    <hr>
    <app-start-screen v-if="state == 'start'" @onStart="onStart"></app-start-screen>
    <app-question v-else-if="state == 'question'"></app-question>
    <app-message v-else-if="state == 'message'"></app-message>
    <app-result-screen v-else-if="state == 'results'"></app-result-screen>
    <div v-else>Unknown state</div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      state: "start"
    };
  },
  methods: {
    onStart() {
      this.state = "question";
    }
  }
};
</script>

<style scoped>
.container {
}
</style>
