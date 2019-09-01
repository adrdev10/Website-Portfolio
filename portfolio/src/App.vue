<template>
  <div id="app">
    <router-view v-bind:data="gitData"></router-view>
  </div>
</template>

<script>
import ProjectBox from "./components/ProjectBox.vue";
import ContactBox from "./components/ContactBox";
export default {
  data() {
    return {
      gitData: []
    };
  },
  mounted: function() {
    fetch("https://api.github.com/users/xdragon1015/repos", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "get"
    })
      .then(resp => {
        return resp.json();
      })
      .then(dJson => {
        this.gitData = dJson;
        console.log(this.gitData);
      });
  },
  name: "app",
  components: {
    ProjectBox,
    ContactBox
  }
};
</script>

<style>
html,
body {
  width: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(51, 51, 51, 0.7);
  background-color: black;
  color: #fff;
}
</style>
