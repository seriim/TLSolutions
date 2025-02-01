<template>
  <div class="flex flex-col justify-center items-center text-center p-6 sm:p-8 rounded-2xl border-2 border-[#b6b6b6] w-full max-w-sm">
    <i :class="`ti ${icon} text-5xl text-[#00aaff]`"></i>
    
    <div class="text-xl font-extrabold mt-6 mb-4">
      {{ title }}
    </div>

    <div class="text-sm font-light leading-relaxed mb-6">
      {{ description }}
    </div>

    <button class="text-white text-sm font-medium cursor-pointer transition duration-200 bg-[#00aaff] px-6 py-3 rounded-lg hover:bg-[#0088cc]">
      Get Started
    </button>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
</style>
