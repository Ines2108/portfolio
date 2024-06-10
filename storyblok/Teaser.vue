<template>
  <div
      v-editable="blok"
      class="py-10 flex flex-col items-center mx-auto w-full max-w-4xl"
  >
    <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#E9DFCE]
      font-junge font-bold text-center">{{ blok.headline }}</h1>
    <div ref="teaserContainer">
      <div class="py-10 px-2 md:px-8 font-poppins"
           ref="textContainer">
        <div class="text-xl md:text-2xl text-white font-bold uppercase"
             v-html="teaserSubHeadline" />
        <div class="text-white text-justify" v-html="teaserDescription"/>
      </div>
      <div class="mt-8 aspect-w-16 aspect-h-9 w-full"
          ref="videoContainer"
      >
        <iframe
            :src="youtubeUrl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";

const { $anime } = useNuxtApp();
const props = defineProps({ blok: Object })
const teaserDescription = computed(() => renderRichText(props.blok.description));
const teaserSubHeadline = computed(() => renderRichText(props.blok.subHeadline));

const textContainer = ref(null);
const videoContainer = ref(null);
const teaserContainer = ref(null);
const animationTriggered = ref(false);

// Function to extract the video ID from a YouTube URL
const getYoutubeEmbedUrl = (url) => {
  // Prüfen, ob der URL bereits im Embed-Format ist
  if (url.includes('youtube.com/embed/')) {
    return url; // URL unverändert zurückgeben
  }

  let videoId = '';

  if (url.includes('shorts')) {
    videoId = url.split('shorts/')[1]?.split('?')[0];
  } else if (url.includes('youtu.be')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0];
  } else if (url.includes('youtube.com/watch')) {
    const urlParams = new URLSearchParams(url.split('?')[1]);
    videoId = urlParams.get('v');
  }

  return `https://www.youtube.com/embed/${videoId}`;
};

const youtubeUrl = getYoutubeEmbedUrl(props.blok.video_url.url);

onMounted(() => {
  // Initiale Positionierung und Opazität der Panels setzen
  $anime.set(textContainer.value, {
    translateX: '-50%',
    opacity: 0
  });

  $anime.set(videoContainer.value, {
    translateX: '50%',
    opacity: 0
  });

  // Scroll-Event-Listener hinzufügen
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const sectionTop = teaserContainer.value.offsetTop;
    const windowHeight = window.innerHeight;

    const componentRect = teaserContainer.value.getBoundingClientRect();
    const componentTop = componentRect.top + scrollY;
    const componentBottom = componentTop + componentRect.height;
    const viewportMiddle = scrollY + windowHeight / 2;

    if (
        scrollY + windowHeight > sectionTop &&
        !animationTriggered.value &&
        componentTop < viewportMiddle &&
        componentBottom > viewportMiddle
    ) {

      // Animationen starten, wenn die Sektion in den Viewport kommt
      $anime({
        targets: textContainer.value,
        translateX: '0',
        opacity: 1,
        easing: 'easeOutQuad',
        duration: 1000
      });

      $anime({
        targets: videoContainer.value,
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

