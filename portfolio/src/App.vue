<template>
  <div id="app">
    <div id="main-content">
      <p id="title-name">
        Adrian Silva
        <b-badge>{{currentName}}</b-badge>
      </p>
      <p id="title-about">I am a software Developer who loves good software designs.</p>
    </div>
    <div>
      <button></button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      names: ["Software Developer", "Creator", "Me"],
      counter: 0,
      currentCounter: 0,
    };
  },
  created() {
    setInterval(function() {
        this.currentName= this.names[this.counter % (this.names.length-1)];
        this.counter++;
      }.bind(this), 20000);
  },

  name: "app",
  components: {
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
</style>
