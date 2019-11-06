<template>
  <div id="main-content">
    <p id="title-name">
      Adrian Silva
      <b-badge>{{currentName}}</b-badge>
    </p>
    <p id="title-about">I am a Miami-based software enginner who loves good software designs. Let's connect through any of the platforms below</p>
    <div id="title-bottom-container">
      <button id="title-start-button" v-on:click="startApp()"></button>
    </div>
    <footer>
      <div>
        <a href="https://twitter.com/Adrian03916975"><img src="../assets/twitter.png"/></a>
        <a href="https://www.instagram.com/dev_adrian10/"> <img src="../assets/instagram.png"/></a>
        <a href="https://github.com/xdragon1015"><img src="../assets/github.png"/></a>
        <a href="https://www.linkedin.com/in/adrian-silva-348356111/"><img src="../assets/linkedin.png"/></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ["Creator", "Innovator", "Software Engineer"],
      counter: 0,
      currentName: ""
    };
  },
  methods: {
    startApp() {
      this.$router.push("/projects");
    }
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
  bottom: 50%;
  height: 50%;
  position: relative;
}

#title-about {
  font-size: 100%;
}

img {
  padding: 10px;
  image-rendering: crisp-edges;
  width: 50px;
  height: 50px;
}

img:hover {
  cursor: pointer;
}

footer {
  position: fixed;
  top: 90%;
  margin: 0 auto;
  left: 50%;
  transform: translate(-100px, 0);
  bottom: 5%;
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
  top: 40%;
  bottom: 60%;
  position: relative;
}
</style>