export default {
  registerCoach(context, data) {
    //* received data from the form and assign it to a new coach object
    // * send the new object to registration method
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.desc,
      hourlyRate: data.rate
    }
    context.commit('registerCoach', coachData)
  }
}
