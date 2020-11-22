export default {
  // * return all the requests for a specific coach by his coach id.
  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId
    return state.requests.filter(req => req.coachId === coachId)
  },
  hasRequests(_, getters) {
    // * checks if there are requests and return true/false.
    return getters.requests && getters.requests.length > 0
  }
}
