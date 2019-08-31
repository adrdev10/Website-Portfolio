<template>
  <div>
    <b-card-group deck>
      <b-card
        header="featured"
        header-tag="header"
        footer="Card Footer"
        footer-tag="footer"
        title="Title"
      >
        <b-card-text>Header and footers using props.</b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>

      <b-card title="Title" header-tag="header" footer-tag="footer">
        <h6 slot="header" class="mb-0">Header Slot</h6>
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

    // props:[dataArray],
};
</script>


<style scoped>
</style>