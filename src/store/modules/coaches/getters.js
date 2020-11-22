export default {
  coaches(state) {
    //* return all the coaches in the coaches list.
    return state.coaches
  },
  hasCoaches(state) {
    //* checks if there is coaches in the coaches list - return true or false.
    return state.coaches && state.coaches.length > 0
  },
  isCoach(_, getters, _2, rootGetters) {
    //* checks if the user is registered as a coach - return true or false.
    const coaches = getters.coaches
    const userId = rootGetters.userId
    return coaches.some(coach => coach.id === userId)
  },
  shouldUpdate(state) {
    //* return ture/false if it's been 5 min since we last fetched data from the database.
    const lastFetch = state.lastFetched
    if (!lastFetch) {
      return true
    }
    const currentTimestamp = new Date().getTime()
    return (currentTimestamp - lastFetch) / 1000 > 300
  }
}
