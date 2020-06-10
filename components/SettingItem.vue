<template>
  <tr>
    <td class="col-icon">
      <plate :color="plate.color" />
    </td>
    <td class="col-price">
      <div class="price">
        <slot />
      </div>
    </td>
    <td class="col-edit">
      <router-link to="">
        <pencil />
      </router-link>
    </td>
  </tr>
</template>

<script>
import Plate from '@/components/Plate.vue'
import Pencil from '@/components/Pencil.vue'

export default {
  components: {
    Plate,
    Pencil
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

  .col-edit {
  }

  .price {
    font-size: 24px;
  }
</style>
