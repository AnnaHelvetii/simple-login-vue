import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
  }),
  actions: {
    setUser(user) {
      this.username = user.username;
    },
    logout() {
      this.username = '';
    },
  },
});
