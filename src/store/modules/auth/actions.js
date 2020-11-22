let timer //? global variable, storing the setTimeout so we have only 1 timer.

export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    })
  },

  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    })
  },

  async auth(context, payload) {
    //* check witch mode are we in 'login' or 'signup' and sets the firebase url accordingly
    //* than save the data in the local storage and in the Vuex store.

    const mode = payload.mode
    let url = ''
    mode === 'signup'
      ? (url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRYmYK-NdPhyjZ-dErnZ22d8X0i6puYsY')
      : (url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRYmYK-NdPhyjZ-dErnZ22d8X0i6puYsY')

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    const responseData = await response.json()
    console.log(responseData)

    if (!response.ok) {
      const error = new Error(
        responseData.error.message || 'Failed to Authenticate. Try agin later!'
      )
      throw error
    }

    //* get the firebase expiration token time in ms and store it in the local storage as well as the token and the userId.
    const expiresIn = +responseData.expiresIn * 1000
    const expirationDate = new Date().getTime() + expiresIn

    localStorage.setItem('token', responseData.idToken)
    localStorage.setItem('userId', responseData.localId)
    localStorage.setItem('tokenExpiration', expirationDate)

    timer = setTimeout(() => {
      context.dispatch('autoLogout')
    }, expiresIn)

    //* storing the data in the Vuex store
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId
    })
  },

  tryLogin(context) {
    //* tries to auto login, using the local storage and checking the expiration time.

    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const tokenExpiration = localStorage.getItem('tokenExpiration')
    const expiresIn = +tokenExpiration - new Date().getTime()

    if (expiresIn < 0) {
      return
    }

    timer = setTimeout(() => {
      context.dispatch('autoLogout')
    }, expiresIn)

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId
      })
    }
  },

  logout(context) {
    //* removes the local storage data and resets the state back to it's default values.
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('tokenExpiration')
    clearTimeout(timer)

    context.commit('setUser', {
      token: null,
      userId: null
    })
  },

  autoLogout(context) {
    context.commit('logout')
    context.commit('setAutoLogout')
  }
}
