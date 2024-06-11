<template>
  <div
      ref="borderDiv"
      v-editable="blok"
      class="py-10 border-div my-8 mx-auto w-full max-w-4xl p-4 md:p-8 lg:p-12"
  >
    <div class="relative flex items-center flex-col">
      <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#E9DFCE] font-junge font-bold text-center mb-8">
        {{ blok.headline }}
      </h1>
      <div class="svg-div relative opacity-0 invisible w-full md:w-3/4 h-0 pb-[82%] sm:pb-[63%]"
           ref="svgDiv"> <!-- Aspect ratio 824/684 = 1.205 -->
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 824 684" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 434.431V4H820V680H204.95" stroke="white" stroke-width="8" stroke-miterlimit="10"/>
        </svg>
        <div class="grid grid-cols-3 gap-4 sm:gap-8 md:mt-8 px-8 sm:px-20 md:px-10 pt-8 md:pt-4 md:p-10 place-items-center">
          <div v-for="icon in blok.tech_icons" :key="icon.id" class="tech-icon flex justify-center">
            <img :src="icon.filename" :alt="icon.alt || 'Tech Icon'" class="w-full max-w-[30px] sm:max-w-[70px] lg:max-w-[80px]
            max-h-[45px] md:max-h-[65px] lg:max-h-[75px] flex-shrink
            filter grayscale hover:filter-none transition duration-500">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const { $anime } = useNuxtApp()
const props = defineProps({ blok: Object })

const borderDiv = ref(null);
const svgDiv = ref(null);

const animationTriggered = ref(false);


onMounted(() => {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const sectionTop = borderDiv.value.offsetParent.offsetTop;
    const windowHeight = window.innerHeight;

    const componentRect = borderDiv.value.getBoundingClientRect();
    const componentTop = componentRect.top + scrollY;
    const componentBottom = componentTop + componentRect.height;
    const viewportMiddle = scrollY + windowHeight / 2;

    if (
        scrollY + windowHeight > sectionTop &&
        !animationTriggered.value &&
        componentTop < viewportMiddle &&
        componentBottom > viewportMiddle
    ) {
      $anime.set(svgDiv.value, { opacity: 1, visibility: 'visible' });

      $anime({
        targets: '.svg-div path',
        strokeDashoffset: [$anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (el, i) {
          return i * 250;
        },
      });

      animationTriggered.value = true;
    }
  });
});
</script>

