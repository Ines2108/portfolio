<template>
  <div
      v-editable="blok"
      class="py-56 text-[#E9DFCE] font-junge font-bold text-center"

  >
    <div v-if="heroHeadline" v-html="heroHeadline" />
    <div>
      <p class="text-xl md:text-3xl">Ines Niedermaier</p>
      <p class="text-sm md:text-xl/[1rem]">Web Developer</p>
      <p>
        <span class="text-base md:text-4xl">Where</span>
        <span class="text-4xl md:text-8xl">Creativity</span>
      </p>
      <p>
        <span class="text-base md:text-3xl">meets</span>
        <span class="text-5xl/[2rem] md:text-9xl/[3rem]">Technology</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { marked } from 'marked';

const props = defineProps({ blok: Object })
const heroHeadline = computed(() => marked(props.blok.headline));
</script>


