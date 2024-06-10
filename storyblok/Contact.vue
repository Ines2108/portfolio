<template>
  <div
      v-editable="blok"
      class="py-10 text-[#E9DFCE] text-center"
      id="contact"
  >
    <div
        v-html="contactHeadline">
    </div>
    <div class="flex justify-center flex-col text-center font-junge">
      <div>
        <p class="text-4xl md:text-6xl">Let's connect</p>
      </div>
      <div class="flex justify-center gap-2 leading-4">
        <div class="flex flex-col text-xl/[15px]">
          <p>and</p>
          <p>create</p>
        </div>
        <div>
          <p class="text-3xl">something</p>
        </div>
      </div>
      <div>
        <p class="text-6xl/[3rem] md:text-7xl/[3rem]">amazing</p>
        <p class="text-6xl md:text-9xl/[9rem] font-bold uppercase">together</p>
      </div>
    </div>
    <div class="flex justify-center">
      <StoryblokComponent
          v-for="blok in blok.contact_icons"
          :key="blok._uid"
          :blok="blok"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { marked } from 'marked';

const props = defineProps({ blok: Object });

const contactHeadline = computed(() => marked(props.blok.headline));
</script>