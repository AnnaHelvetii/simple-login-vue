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
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
	setup() {
		const userStore = useUserStore();
		const router = useRouter();

		const username = ref('');
		const password = ref('');

		const login = () => {
			if (username.value && password.value) {
				userStore.setUser({ username: username.value });
				router.push('/dashboard');
			} else {
				alert('Введите логин и пароль')
			}
		};

		return {
			username,
			password,
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
	gap: 31px;

	.login-page__title {
		font-size: 16px;
		font-weight: 500;
	}

	.user-form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 31px;

		.user-form__data {
			display: flex;
			flex-direction: column;
			gap: 12px;

			.user-form__input {
				padding: 8px 16px;
				width: 230px;
				height: 31px;
				border-radius: 8px;
				border: 1px solid #D7D7D7;

				&::placeholder {
					color: #D7D7D7;
				}
			}
		}

		.user-form__button {
			width: 68px;
			padding: 8px 16px;
			background-color: #000;
			color: #fff;
			border-radius: 8px;
		}
	}
}

</style>
