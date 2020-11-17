export default {
  registerCoach(state, payload) {
    //* adding a new coach to the coaches array
    state.coaches.push(payload)
  },
  setCoaches(state, payload) {
    state.coaches = payload
  }
}
