<template>
  <div
      v-editable="blok"
      class="w-full relative mb-10 flex items-center justify-center font-poppins"
      ref="projectContainer"
  >
    <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl h-full
        opacity-0 invisible place-items-center"
        ref="projectItem"
    >
      <div
          ref="leftPanel"
          :class="{'md:order-1': isEvenIndex, 'md:order-2': !isEvenIndex}"
          class="flex flex-col justify-center py-8 opacity-0"
      >
        <h3 class="text-xl md:text-2xl text-white font-bold uppercase">{{ blok.headline }}</h3>
        <div class="text-white text-justify" v-html="projectDescription"></div>
      </div>
      <div
          ref="rightPanel"
          :class="{'md:order-2': isEvenIndex, 'md:order-1': !isEvenIndex}"
          class="panel justify-items-center items-center opacity-0"
      >
        <div class="mac-screen relative mx-auto pt-4 bg-white rounded-lg shadow-lg">
          <div class="flex justify-start space-x-2 pb-2 px-4">
            <span class="w-3 h-3 bg-red-500 rounded-full"></span>
            <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span class="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <a :href="blok.link.url" target="_blank" rel="noopener noreferrer">
            <img :src="getOptimizedImage(blok.image.filename, '1000x0', 'webp')"
            class="filter grayscale hover:filter-none transition duration-500">
          </a>
          <div>
            <h3 class="text-xl font-bold p-3 text-center uppercase">{{ blok.project_title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
const { $anime } = useNuxtApp();
const props = defineProps({
  blok: Object,
  index: Number
});
const projectDescription = computed(() => renderRichText(props.blok.description));

const leftPanel = ref(null);
const rightPanel = ref(null);
const projectItem = ref(null);
const projectContainer = ref(null);

const animationTriggered = ref(false);
const isEvenIndex = computed(() => props.index % 2 === 0);

const handleScroll = () => {
  if (!projectContainer.value) return;

  const scrollY = window.scrollY;
  const sectionTop = projectContainer.value.offsetTop;
  const windowHeight = window.innerHeight;

  const componentRect = projectContainer.value.getBoundingClientRect();
  const componentTop = componentRect.top + scrollY;
  const componentBottom = componentTop + componentRect.height;
  const viewportMiddle = scrollY + windowHeight / 2;

  if (
      scrollY + windowHeight > sectionTop &&
      !animationTriggered.value &&
      componentTop < viewportMiddle &&
      componentBottom > viewportMiddle
  ) {
    $anime.set(projectItem.value, { opacity: 1, visibility: 'visible' });

    $anime({
      targets: leftPanel.value,
      translateX: '0%',
      opacity: 1,
      easing: 'easeOutQuad',
      duration: 1000
    });

    $anime({
      targets: rightPanel.value,
      translateX: '0%',
      opacity: 1,
      easing: 'easeOutQuad',
      duration: 1000
    });

    animationTriggered.value = true;
  }
};

onMounted(() => {
  $anime.set(leftPanel.value, {
    translateX: '-50%',
    opacity: 0
  });

  $anime.set(rightPanel.value, {
    translateX: '50%',
    opacity: 0
  });

  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>


<style scoped>
.mac-screen {
  max-width: 500px;
}
</style>
