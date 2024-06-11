<template>
  <div class="font-junge antialiased shadow-2xl" id="app">
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <div id="navBar5" class="ml-1">
          <a href="/" class="">
            <svg width="40" height="40" viewBox="0 0 109 108" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.3814 99.1014L25.185 11.1853C25.185 10.6004 25.6751 10.1265 26.2798 10.1265H33.3303C34.0955 10.1265 34.6229 10.8638 34.3563 11.5567L17.0569 41.4091C16.9852 41.5948 16.925 42.3237 16.9652 42.5178L29.2118 99.3093C29.4697 100.565 31.3814 100.382 31.3814 99.1014Z" fill="white"/>
              <path d="M79.3418 100.03C77.2869 100.03 75.9742 98.8687 74.9969 97.3885C74.9511 97.322 74.9138 97.2499 74.8794 97.1751L59.0502 62.1339C58.5573 61.0446 56.9465 61.0807 56.508 62.1922L39.3863 99.3149C39.1828 99.8305 38.6726 100.171 38.1023 100.171H35.8008C35.0413 100.171 34.428 99.5755 34.428 98.8437L36.9817 11.5679C36.9817 11.5624 36.9817 11.5596 36.9817 11.5541C37.1278 10.0102 36.9501 10.1626 37.9103 10.1044C38.2656 10.0822 38.5924 10.0628 38.8761 10.3649C39.905 11.4598 59.2881 52.9537 60.4775 55.0437C60.5004 55.0825 60.5176 55.1157 60.5348 55.1545L74.61 86.4898C75.4927 88.4578 71.079 48.0975 71.5376 45.9993L71.8529 44.7824C72.0764 43.7652 90.8146 35.131 91.8923 35.131C93.3282 35.131 94.4058 36.4005 94.1249 37.7642C94.1249 37.7642 84.6727 88.71 80.8637 98.9324C80.4309 100.088 79.5912 100.03 79.3418 100.03Z" fill="white"/>
              <path d="M1.91843 68.3372V1.79175H107.721V106.303H27.9737" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="block sm:hidden">
        <button @click="toggle" class="flex items-center px-3 py-2 text-teal-lighter border-teal-light text-white hover:border-white">
          <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div :class="open ? 'block' : 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto md:mr-24">
        <div class="text-base sm:flex-grow"></div>
        <div v-for="(item, index) in navItems" :key="index">
          <a :href="item.href" :id="item.id" class="relative link-underline inline-block text-base px-4 py-2 leading-none text-[#E9DFCE] hover:text-white hover:text-teal mt-4 sm:mt-0">
            {{ item.label }}
          </a>
        </div>
        <div class="relative group md:ml-5" id="navBar5G">
          <div class="invisible md:visible absolute -inset-1 bg-gradient-to-r from-[#E4C7C1] to-[#401922] rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <a id="navBar5" href="/Niedermaier-Ines-CV.pdf" class="relative bg-[#001727] inline-block text-sm px-4 py-2 leading-none border rounded text-white border-[#9D5D6A] mt-4 sm:mt-0 text-[#ed52f9]">
            RESUME
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const open = ref(false);

    function toggle() {
      open.value = !open.value;
      console.log(open.value);
    }


    const navItems = [
      { href: '#about', label: 'About', id: 'navBar1' },
      { href: '#projects', label: 'Projects', id: 'navBar3' },
      { href: '#contact', label: 'Contact', id: 'navBar4' }
    ];

    return {
      toggle,
      open,
      navItems
    };
  }
};
</script>

<style scoped>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent), linear-gradient(#ffffff, #ffffff);
  background-size: 0 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease-in-out;
}

.link-underline:hover {
  background-size: 100% 1px;
  background-position: 0 100%;
}
</style>