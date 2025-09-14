import { defineStore } from 'pinia'
import  axios  from 'axios'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile:{}
  }),
  actions: {
    async fetchProfile(){
      const {data} = await axios.get('https://api.github.com/users/chanborey70')
      this.profile = data
    }
  }
})
