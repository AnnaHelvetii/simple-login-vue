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
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

.login-page {
	@include flex-column-center-center;
	gap: 31px;

	.login-page__title {
		font-size: 16px;
		font-weight: 500;
	}

	.user-form {
		@include flex-column-center-center;
		gap: 31px;

		.user-form__data {
			@include flex-column;
			gap: 12px;

			.user-form__input {
				padding: $padding-8-6;
				width: 230px;
				height: 31px;
				border-radius: $border-radius;
				border: 1px solid $light-gray;

				&::placeholder {
					color: $light-gray;
				}
			}
		}

		.user-form__button {
			width: 68px;
			padding: $padding-8-6;
			background-color: $black;
			color: $white;
			border-radius: $border-radius;
		}
	}
}

</style>
