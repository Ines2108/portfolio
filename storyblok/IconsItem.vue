<template>
  <div
      v-editable="blok"
      class="my-8 p-4 flex items-center"
  >
    <div>
      <a :href="blok.link.url" target="_blank" rel="noopener noreferrer"
         :class="{ 'github-filter': isGithubImage, 'filter grayscale hover:filter-none': !isGithubImage }"
         class="transition duration-500">
        <img :src="blok.icon.filename" class="w-full max-w-[40px] sm:max-w-[50px] md:max-w-[70px] lg:max-w-[80px] h-auto">
      </a>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";

const { $anime } = useNuxtApp()
const props = defineProps({ blok: Object })

const isGithubImage = computed(() => props.blok.icon.filename.includes('github2'));


</script>

<style scoped>
.github-filter:hover {
  filter: brightness(0) invert(1);
}
</style>