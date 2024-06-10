<template>
  <div class="bg-[#1F2125] overflow-x-hidden">
    <div v-if="isLoading">
      <LoadingSpinner />
    </div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: 'default',
  components: {
    Footer,
    Header,
    LoadingSpinner,
  },
  setup() {
    const isLoading = ref(true);

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 2000);
    });

    return {
      isLoading,
    };
  },
};
</script>

<style scoped>
.fade-in-dynamic {
  opacity: 0.5;
  animation: fadeInScale 0.01s ease forwards;
}

@keyframes fadeInScale {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
