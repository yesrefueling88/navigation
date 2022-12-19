export const mutations = {
  setVersion(state, payload) {
    const { version } = payload
    state.version = version
  }
}
