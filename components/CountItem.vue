<template>
  <tr>
    <td class="col-icon">
      <plate :color="plate.color" />
    </td>
    <td class="col-count">
      <div class="count">
        <slot />
      </div>
    </td>
    <td class="col-dec">
      <button class="count-button" @click="count(plate.id, -1)">
        −
      </button>
    </td>
    <td class="col-inc">
      <button class="count-button" @click="count(plate.id, +1)">
        ＋
      </button>
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
  },
  methods: {
    count (id = 0, d = 1) {
      console.log(id, d)
      this.$store.dispatch('count/update', {
        id,
        d
      })
    }
  }
}
</script>

<style scoped>
  .col-icon {
  }

  .col-count {
    width: 100%;
    padding: 10px;
  }

  .count {
    font-size: 24px;
  }

  .count-button {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 20px;
    font-size: 24px;
  }

  .col-inc > .count-button {
    margin: 10px;
    background-color: #f57b51;
  }

  .col-dec > .count-button {
    width: 30px;
    height: 30px;
    margin: 10px;
    background-color: #f6eedf;
  }
</style>
