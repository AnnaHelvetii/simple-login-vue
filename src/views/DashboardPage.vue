<template>
	<div class="dashboard">
		<header class="dashboard__header">
			<span>Привет, {{ username }}</span> <!-- Показываем имя пользователя -->
			<button @click="logout" class="logout-button">Выйти</button>
		</header>
		<div class="dashboard__content">
			<vue-carousel v-if="images.length">
				<carousel-slide v-for="(image, index) in images" :key="index">
					<img :src="image" alt="Slider Image" />
				</carousel-slide>
			</vue-carousel>
			<div class="dropdown">
				<select v-model="selectedCity" class="dropdown__list">
					<option v-for="city in cities" :key="city">{{ city }}</option>
				</select>
				<div v-if="selectedCity">
					<h3>{{ selectedCity }}</h3>
					<p>Lorem ipsum dolor sit amet...</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import VueCarousel from 'vue-carousel';

export default {
	components: { VueCarousel },
	setup() {
		const userStore = useUserStore();
		const router = useRouter();
		const images = ref(['image1.jpg', 'image2.jpg', 'image3.jpg']);
		const cities = [
			'Санкт-Петербург', 'Москва', 'Екатеринбург', 'Тюмень',
			'Новосибирск', 'Казань', 'Владивосток', 'Нижний Новгород',
			'Псков', 'Омск'
		];
		const selectedCity = ref(null);

		const logout = () => {
			userStore.logout(); // Завершаем сессию
			router.push('/'); // Переход на страницу входа
		};

		return {
			username: userStore.username, // Получаем имя пользователя из хранилища
			images,
			cities,
			selectedCity,
			logout,
		};
	},
};
</script>


<style scoped lang="scss">

.dashboard {
	padding: 24px;
	width: 100%;
	height: 100%;

	.dashboard__header {
		display: flex;
		justify-content: space-between;

		.logout-button {
			color: #000;
		}
	}

	.dashboard__content {

		.dropdown {
			margin-top: 20px;

			.dropdown__list {
				padding: 8px 16px;
				border: 1px solid #000;
				border-radius: 8px;
				position: relative;
				background: url('./../img/arrow-down.svg') no-repeat;

				.dropdown__item {
				}
			}
		}
	}
}
</style>
