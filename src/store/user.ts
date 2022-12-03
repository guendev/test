import { defineStore } from 'pinia'

interface IUserStore {
  user: any
  _token: string
}

export const useUserStore = defineStore({
  id: 'user',

  state: (): IUserStore => ({
    user: null,
    _token: ''
  }),

  getters: {
    auth: (state) => state.user !== null
  },

  actions: {
    setUser(payload: any) {
      this.user = payload
    },

    setToken(token: string) {
      this._token = token
    },

    async getMe() {
      ///

    },

    logout() {
      this._token = ''
      this.user = null
    }
  }
})
