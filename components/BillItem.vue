<template>
  <tr>
    <td class="col-icon">
      <plate :color="plate.color" />
    </td>
    <td class="col-price">
      <slot />
    </td>
  </tr>
</template>

<script>
import Plate from '@/components/Plate.vue'

export default {
  components: {
    Plate
  },
  props: {
    plate: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .col-icon {
  }

  .col-price {
    width: 100%;
    padding: 10px;
  }
</style>
