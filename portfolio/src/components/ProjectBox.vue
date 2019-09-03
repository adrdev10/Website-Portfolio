<template>
  <div id="app-project">
    <div id="app-children" v-for="(item, index) in data" v-bind:key="index">
      <ul>
        <li>
          <a v-bind:href="item.html_url"><h2>{{item.name}}</h2></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    data: Array
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Anton&display=swap");

html {
  height: 100%;
}

#app-project {
  font-family: "Helvetica";
  text-transform: uppercase;
  color: #333333;
  font-weight: 500;
  line-height: 2.15;
  position: absolute;
  margin: 0 auto;
  top: 20%;
  bottom: 30%;
  background-color: black;
  letter-spacing: 2.10px;
  width: 100%;
  height: 100%;
}

a {
  color: #333333 !important;
  text-decoration: none;
  cursor: default !important;
}

#app-children {
  position: relative;
}

a:hover {
  cursor: default !important;
  color: white !important;
}

li:hover {
    cursor: default !important;
  color: white !important;
}
 
ul {
  list-style: none
}

h2,
.h2 {
  font-size: 3.5rem !important;
}
</style>