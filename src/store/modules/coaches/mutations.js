export default {
  registerCoach(state, payload) {
    //* adding a new coach to the coaches array
    state.coaches.push(payload)
  },
  setCoaches(state, payload) {
    //* getting the coach details form the db
    state.coaches = payload
  },
  setFetchTimestamp(state) {
    // * making timestamp for the latest fetched data from the db
    state.lastFetched = new Date().getTime()
  }
}
