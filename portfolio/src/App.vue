<template>
  <div id="app">
    <div id="main-content">
      <p id="title-name">
        Adrian Silva
        <b-badge>{{currentName}}</b-badge>
      </p>
      <p id="title-about">I am a software Developer who loves good software designs.</p>
    </div>
    <div id="title-bottom-container">
      <button id="title-start-button"></button>
    </div>
  </div>
</template>

<script>
import ProjectBox from "./components/ProjectBox.vue";
import ContactBox from "./components/ContactBox";

export default {
  data() {
    return {
      names: ["Software Developer", "Creator", "Me"],
      counter: 0,
      currentName: ""
    };
  },

  created: function() {
    setInterval(
      function() {
        let newName = this.names[this.counter % this.names.length];
        this.counter++;
        this.currentName = newName;
      }.bind(this),
      3000
    );
  },

  name: "app",
  components: {
    ProjectBox,
    SendMessage,
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

p {
  font-size: 400%;
  margin: 0 auto;
}

#main-content {
  top: 40%;
  bottom: 50%;
  position: relative;
}

#title-about {
  font-size: 100%;
}

#title-start-button {
  background: url("assets/power.png") no-repeat;
  border: none;
  width: 70px;
  height: 80px;
  top: 180%;
  margin: 0 auto;
}

#title-bottom-container {
  font-size: 1px;
  top: 50%;
  bottom: 30%;
  position: relative;
}
</style>
