<template>
  <div
      v-editable="blok"
      class="py-10"
      id="projects"
  >
    <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#E9DFCE] font-junge font-bold text-center mb-4">
      {{ blok.headline }}
    </h1>
    <StoryblokComponent
        v-for="(blok, index) in blok.projects"
        :key="blok._uid"
        :blok="blok"
        :index="index"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

