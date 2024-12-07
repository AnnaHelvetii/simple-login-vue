import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		username: sessionStorage.getItem('username') || '',
	}),
	actions: {
		setUser(user) {
			this.username = user.username;
			sessionStorage.setItem('username', user.username);
		},
		logout() {
			this.username = '';
			sessionStorage.removeItem('username');
		},
	},
});

