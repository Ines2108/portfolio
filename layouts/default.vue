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
