import { color } from '@/assets/constants/plate'

export const state = () => ({
  usingSetName: '',
  plates: [],
  presets: [
    {
      name: 'スシロー',
      plates: [
        {
          color: color.YELLOW,
          price: 120
        },
        {
          color: color.RED,
          price: 170
        },
        {
          color: color.BLACK,
          price: 320
        }
      ]
    }
  ]
})

export const getters = {
  usingSetName (state) {
    return state.usingSetName
  },
  plates (state) {
    return state.plates
  },
  presetNames (state) {
    return state.presets.map(p => p.name)
  }
}

export const mutations = {
  usePreset (state, name) {
    // ToDo: detect invalid name
    state.usingSetName = name
    const preset = state.presets.filter(p => p.name === name)[0]
    if (preset) {
      this.commit('setting/setPlates', preset.plates)
    }
  },
  setPlates (state, plates) {
    state.plates = plates
  }
}

export const actions = {
  usePreset (ctx, name) {
    ctx.commit('usePreset', name)
  }
}
