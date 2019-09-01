<template>
  <div>
    <b-card-group deck >
      <b-card title="Title" header-tag="header" footer-tag="footer" v-for="(item, index) in data" v-bind:key="index">
        <h6 slot="header" class="mb-0">{{item.name}}</h6>
        <b-card-text>Header and footers using slots.</b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
        <em slot="footer">Footer Slot</em>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
      data: Array,
    }
};
</script>


<style scoped>
h6{
  color: black;
}
b-card-group b-card {
    max-width: 25%;
}
</style>