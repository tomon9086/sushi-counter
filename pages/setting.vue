<template>
  <div>
    <table class="plate-list">
      <item v-for="plate in plates" :key="plate.color" :plate="plate">
        {{ plate.price }}円
      </item>
    </table>
  </div>
</template>

<script>
import Item from '@/components/SettingItem'
export default {
  components: {
    Item
  },
  computed: {
    plates () {
      return this.$store.getters['setting/plates']
    }
  },
  beforeMount () {
    const setName = this.$store.getters['setting/usingSetName']
    this.$store.dispatch('setHeaderText', setName)
  }
}
</script>

<style scoped>
  .plate-list {
    width: 100%;
    padding: 10px;
  }
</style>
