<template>
  <div class="plate" :style="{ backgroundColor: color }">
    <img src="/image/plate.png">
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .plate {
    width: 60px;
    height: 60px;
    border: .5px solid grey;
    border-radius: 30px;
    background-color: red;
  }

  .plate > img {
    height: 100%;
  }
</style>
