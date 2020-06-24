export const state = () => ({
  plates: []
})

export const getters = {
  plates (state) {
    return state.plates
  }
}

export const mutations = {
  setPlates (state, plates = []) {
    state.plates = plates.map(p => ({
      ...p,
      count: p.count || 0
    }))
  },
  update (state, { id = 0, d = 0 }) {
    const updated = state.plates.map(p => ({ ...p }))
    const plate = updated.filter(p => p.id === id)[0]
    if (!plate) {
      return
    }
    plate.count += d
    if (plate.count < 0) {
      return
    }
    state.plates = updated
  }
}

export const actions = {
  update (ctx, payload = {}) {
    ctx.commit('update', payload)
  }
}
