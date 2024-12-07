<template>
  <div class="dashboard">
    <header>
      <span>Пользователь: {{ username }}</span>
      <button @click="logout">Выход</button>
    </header>
    <div class="content">
      <vue-carousel v-if="images.length">
        <carousel-slide v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Slider Image" />
        </carousel-slide>
      </vue-carousel>
      <div class="dropdown">
        <select v-model="selectedCity">
          <option v-for="city in filteredCities" :key="city">{{ city }}</option>
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
import { ref } from 'vue';
import VueCarousel from 'vue-carousel';

export default {
  components: { VueCarousel },
  setup() {
    const userStore = useUserStore();
    const images = ref(['image1.jpg', 'image2.jpg', 'image3.jpg']);
    const cities = ['Санкт-Петербург', 'Москва', 'Екатеринбург', 'Тюмень', 'Новосибирск', 'Казань', 'Владивосток', 'Нижний Новгород', 'Псков', 'Омск'];
    const selectedCity = ref(null);

    return {
      username: userStore.username,
      images,
      cities,
      selectedCity,
      logout: () => userStore.logout(),
    };
  },
};
</script>

<style scoped lang="scss">
.dashboard {
  header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .content {
    margin: 20px;
    .dropdown {
      margin-top: 20px;
    }
  }
}
</style>
