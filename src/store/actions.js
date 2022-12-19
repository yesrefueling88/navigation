export const actions = {
  setVersionSync({ commit }, payload) {
    const { version } = payload
    setTimeout(() => {
      commit('setVersion', { version })
    }, 2000)
  }
}
