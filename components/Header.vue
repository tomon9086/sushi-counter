<template>
  <div class="container">
    {{ title }}
  </div>
</template>

<script>
export default {
  computed: {
    title () {
      return this.$store.getters.headerText || 'すしカウンター'
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    font-size: 24px;
    background-color: #ffd31d;
  }
</style>
