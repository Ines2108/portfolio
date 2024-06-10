<template>
<!--Todo: zwei Varianten implementieren für die unterschiedlichen Viewport-Ansichten-->
  <div
      v-editable="blok"
      class="py-10 w-full relative mb-10 flex items-center justify-center"
      id="about"
      ref="aboutContainer"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl place-items-center" ref="grid">
      <div ref="leftPanel" class="panel justify-items-center items-center">
        <img :src="getOptimizedImage(blok.image.filename, '800x0', 'webp')"
        class="max-w-80"/>
      </div>
      <div ref="rightPanel" class="flex flex-col justify-center opacity-0 font-poppins">
        <div class="text-xl md:text-2xl text-white font-bold uppercase"
        v-html="aboutHeadline" />
        <div class="text-white" v-html="aboutDescription" />
      </div>
    </div>
  </div>
</template>


<script setup>
import { onMounted, ref, computed } from 'vue';
const { $anime } = useNuxtApp();
const props = defineProps({ blok: Object });
const aboutDescription = computed(() => renderRichText(props.blok.description));
const aboutHeadline = computed(() => renderRichText(props.blok.headline));

const leftPanel = ref(null);
const rightPanel = ref(null);
const aboutContainer = ref(null);
const grid = ref(null);
const animationTriggered = ref(false);

onMounted(() => {
  // Initiale Positionierung und Opazität der Panels setzen
  $anime.set(rightPanel.value, {
    translateX: '-50%',  // Text von rechts nach links
    opacity: 0
  });

  $anime.set(leftPanel.value, {
    translateX: '50%',  // Bild zentriert anzeigen
    opacity: 1  // Bild direkt sichtbar
  });

  // Scroll-Event-Listener hinzufügen
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const sectionTop = aboutContainer.value.offsetTop;
    const windowHeight = window.innerHeight;

    const componentRect = aboutContainer.value.getBoundingClientRect();
    const componentTop = componentRect.top + scrollY;
    const componentBottom = componentTop + componentRect.height;
    const viewportMiddle = scrollY + windowHeight / 2;

    if (
        scrollY + windowHeight > sectionTop &&
        !animationTriggered.value &&
        componentTop < viewportMiddle &&
        componentBottom > viewportMiddle
    ) {
      $anime.set(grid.value, { gap: '3rem', placeItems: 'center' });

      // Animationen starten, wenn die Sektion in den Viewport kommt
      $anime({
        targets: rightPanel.value,
        translateX: '0',  // Text zur Mitte
        opacity: 1,
        easing: 'easeOutQuad',
        duration: 1000
      });

      $anime({
        targets: leftPanel.value,
        translateX: '0',
        opacity: 1,
        easing: 'easeOutQuad',
        duration: 1000
      });

      animationTriggered.value = true;
    }
  });
});
</script>
