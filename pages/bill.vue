<template>
  <div>
    <table class="plate-list">
      <item v-for="plate in plates" :key="plate.color" :plate="plate">
        <div class="cost-detail">
          {{ plate.price }}円 × {{ isNaN(plate.count) ? "--" : plate.count }}枚
        </div>
        <div class="cost">
          {{ plate.cost || 0 }}円
        </div>
      </item>
    </table>
    <div class="sum">
      <div class="label">
        合計
      </div>
      <div>
        {{ sumOfCost }}円
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/BillItem'
export default {
  components: {
    Item
  },
  computed: {
    plates () {
      const setting = this.$store.getters['setting/plates']
      const count = this.$store.getters['count/plates']
      const plates = setting.map((p) => {
        const countPlate = count.filter(cp => cp.id === p.id)[0] || {}
        return {
          ...p,
          ...countPlate,
          cost: p.price * countPlate.count
        }
      })
      return plates
    },
    sumOfCost () {
      return this.plates.reduce((p, c) => p + c.cost, 0)
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

  .cost-detail {
    color: #4f4f4f;
    font-size: 14px;
  }

  .cost {
    font-size: 24px;
  }

  .sum {
    display: flex;
    justify-content: flex-end;
    margin: 0 20px;
    font-size: 24px;
  }

  .sum > .label {
    margin-right: 20px;
  }
</style>
