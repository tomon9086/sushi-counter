export const state = () => ({
  headerText: ''
})

export const getters = {
  headerText (state) {
    return state.headerText
  }
}

export const mutations = {
  setHeaderText (state, text) {
    state.headerText = text
  }
}

export const actions = {
  setHeaderText (ctx, text = '') {
    ctx.commit('setHeaderText', text)
  }
}
