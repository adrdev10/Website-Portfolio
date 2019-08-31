<template>
  <div id="main-content">
    <p id="title-name">
      Adrian Silva
      <b-badge>{{currentName}}</b-badge>
    </p>
    <p id="title-about">I am a software Developer who loves good software designs.</p>
    <div id="title-bottom-container">
      <button id="title-start-button" v-on:click="startApp()"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ["Software Developer", "Content Creator", "Golang Language User"],
      counter: 0,
      currentName: "",
      data: []
    };
  },
  methods: {
    startApp() {
      this.$router.replace({ path: "/projects" });
      console.log(this.$router.history.current);
      if (this.$router.history.current.path === "/projects") {
        this.currentPath = "/projects";
        this.show = false;
      } else {
        this.currentPath = "/";
        this.show = true;
      }
    }
  },
  mounted: function() {
    fetch("application/vnd.github.inertia-preview+json").then(resp => {
      console.log(resp);
    });
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
  }
};
</script>


<style>
p {
  font-size: 300%;
  margin: 0 auto;
}

#main-content {
  top: 30%;
  border: 1px solid white;
  bottom: 50%;
  position: relative;
}

#title-about {
  font-size: 100%;
}

#title-start-button {
  background: url("../assets/power.png") no-repeat;
  border: none;
  width: 70px;
  height: 80px;
  top: 280%;
  margin: 0 auto;
}

#title-bottom-container {
  font-size: 1px;
  top: 150%;
  bottom: 160%;

  border: 1px solid white;
  position: relative;
}
</style>