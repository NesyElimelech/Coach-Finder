export default {
  async registerCoach(context, data) {
    //* received data from the registration form and assign it to a new coach object
    // * add the new coach data to the firebase database.
    const userId = context.rootGetters.userId
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.desc,
      hourlyRate: data.rate
    }
    const token = context.rootGetters.token

    const response = await fetch(
      `https://find-a-coach---vue3.firebaseio.com/coaches/${userId}.json?auth=` +
        token,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    )
    const responseData = await response.json()
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to add new data!')
      throw error
    }
    context.commit('registerCoach', {
      ...coachData,
      id: userId
    })
  },

  async loadCoaches(context, payload) {
    //* fetch the data from firebase database and store it in the vuex store
    //* preventing from the page to refetch data every time, it sets a timestamp to make sure that we fetch only after 5 min.

    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return
    }
    const response = await fetch(
      'https://find-a-coach---vue3.firebaseio.com/coaches/.json'
    )
    const responseData = await response.json()
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!')
      throw error
    }

    const coaches = []

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate
      }
      coaches.push(coach)
    }
    context.commit('setCoaches', coaches)
    context.commit('setFetchTimestamp')
  }
}
