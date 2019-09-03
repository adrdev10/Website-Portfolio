<template>
  <div id="app">
    <transition name="fade">
      <router-view v-bind:data="gitData"></router-view>
    </transition>
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
        let filteredJson = dJson.filter((item) => {
          if(item.owner.login === "xdragon1015" && item.stargazers_count > 0) {
            return item;
          }
        })
        console.log(filteredJson);
        this.gitData = filteredJson;
      }).catch(error => {
        console.log("error: " + error);
      }) 
  },
  name: "app",
  components: {
    ProjectBox,
    ContactBox
  }
};
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
  transition-delay: .10s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: black;
  color: #fff;
}
</style>
