<template>
	<div class="dashboard">
		<header class="header">
			<p>
				Привет,
				<span class="username">{{ username }}</span>
			</p>
			<button @click="logout" class="logout-button">
				Выйти
			</button>
		</header>
		<div class="dashboard__content">
			<div class="dropdown">
				<select 
					v-model="selectedCity" 
					class="dropdown__list" 
					@change="saveCity"
				>
					<option v-for="city in cities" :key="city" class="dropdown__item" >{{ city }}</option>
					<option value="" disabled>Введите город</option>
				</select>
				<div v-if="selectedCity" class="selected-city">
					<h3 class="city__name">{{ selectedCity }}</h3>
					<p class="city__text">
						Lorem ipsum dolor sit amet consectetur. Elementum donec a accumsan egestas et non diam nunc. Semper aenean pharetra sit morbi. Est sed enim ut commodo adipiscing curabitur elementum tristique vel. Felis cras nisi et blandit. Vitae aliquam interdum aliquam ac senectus sit non erat. Euismod eu non id fermentum urna nunc scelerisque cursus vel. Phasellus ullamcorper congue ac tortor quam in mauris. Aliquam suspendisse erat dictumst libero. Commodo facilisis accumsan mattis pellentesque turpis nibh. Amet aliquam volutpat dictum risus nulla rhoncus arcu turpis tellus. Cursus feugiat quam arcu leo purus suspendisse cursus risus quis. Massa lobortis dolor a cras diam. Mi purus volutpat pulvinar accumsan dolor ultricies. Ipsum cursus proin mauris in. Bibendum amet ultrices faucibus tellus mauris magna. Eget leo sed aliquam eget tempus eget viverra tincidunt sit. Tortor non elit felis cras cras mi eget. Ut aliquet nibh eu at. Laoreet tincidunt porttitor tellus tristique.
					</p>
				</div>
				<div v-else>
					<p class="city__no-name">Город не выбран</p>
				</div>
			</div>
		</div>
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
		const cities = [
			'Санкт-Петербург', 'Москва', 'Екатеринбург', 'Тюмень',
			'Новосибирск', 'Казань', 'Владивосток', 'Нижний Новгород',
			'Псков', 'Омск'
		];

		const saveCity = () => {
			localStorage.setItem('selectedCity', selectedCity.value);
		};

		const selectedCity = ref(localStorage.getItem('selectedCity') || '');

		const logout = () => {
			userStore.logout();
			localStorage.removeItem('selectedCity');
			router.push('/'); 
		};

		return {
			username: userStore.username,
			cities,
			selectedCity,
			saveCity,
			logout,
		};
	},
};
</script>


<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

.dashboard {
	padding: 24px;
	width: 100%;
	min-height: 100vh;

	.header {
		@include flex-space-between;

		.username {
			font-weight: 700;
		}

		.logout-button {
			color: $black;
		}
	}

	.dashboard__content {
		height: 100%;

		.dropdown {
			margin-top: 80px;
			@include flex-column-center-space-between;
			gap: 112px;

			.dropdown__list {
				padding: $padding-8-6;
				width: 230px;
				font-family: 'Inter', sans-serif;
				font-size: 12px;
				border: 1px solid $black;
				border-radius: $border-radius;
				background: url('./../img/arrow-down.svg') no-repeat;
				background-position: right 10px center;
				cursor: pointer;
			}

			.selected-city {
				@include flex-column-center-center;
				max-width: 660px;
				gap: 32px;
				
				.city__name {
					font-size: 24px;
					font-weight: 700;
				}

				.city__text {
					text-align: left;
					font-size: 16px;
				}
			}

			.city__no-name {
				margin-top: 136px;
			}
		}
	}
}

</style>
