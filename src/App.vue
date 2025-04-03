<template>
  <head>
    <meta name="google-site-verification" content="-EzOBkRanxAvBZqMz4ildnFjWFAI4Chleq1-twc29rI" />
  </head>
  <NavBar/>
  <div class="flex flex-col items-center center font-CustomFontl mx-10 my-5">
    
    <RouterView/>
    <main>
      
    </main>
    
  </div>
  <Footer />
  
  
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
import NotFound from './views/NotFound.vue'; 
// import HomeView from './views/HomeView.vue';


</script>

<style lang="scss" scoped>

</style>