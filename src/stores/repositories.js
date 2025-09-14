import { defineStore } from 'pinia'
import axios from 'axios'
export const useRepositoriesStore = defineStore('repositories', {
  state: () => ({
    repositories: []
  }),
  actions:{
    async fetchRepository(){
      const {data} = await axios.get('https://api.github.com/users/chanborey70/repos')
      this.repositories = data
    }
  }
})