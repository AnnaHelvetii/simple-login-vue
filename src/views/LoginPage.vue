<template>
	<div class="login-page">
		<p class="login-page__title">Войти в панель</p>
		<form @submit.prevent="login" class="user-form">
			<div class="user-form__data">
				<input 
					type="text" 
					v-model="username" 
					class="user-form__input" 
					placeholder="Введите логин"
					required 
				/>
				<input 
					type="password" 
					v-model="password" 
					class="user-form__input" 
					placeholder="Введите пароль"
					required 
				/>
			</div>
			<button type="submit" class="user-form__button">
				Войти
			</button>
		</form>
	</div>
</template>

<script>
import { useUserStore } from '../stores/user';

export default {
	setup() {
		const userStore = useUserStore();
		const login = () => {
			userStore.setUser({ username: userStore.username });
			userStore.$router.push('/dashboard');
		};
		return {
			username: userStore.username,
			password: '',
			login,
		};
	},
};
</script>

<style scoped lang="scss">

.login-page {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.login-page__title {
	}

	.user-form {
		display: flex;
		flex-direction: column;

		.user-form__data {

			.user-form__input {
			}
		}

		.user-form__button {
		}
	}
}

</style>
