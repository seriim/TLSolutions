<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      size === 'lg' ? 'px-8 py-3' : 'px-4 py-2',
      variant === 'outline' ? 'border border-gray-300 bg-transparent hover:bg-gray-50' : 'bg-black text-white hover:bg-[#000000c7]',
    ]"
    v-bind="$attrs"
  >
    <!-- External Link (Opens in New Tab) -->
    <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer" class="w-full h-full flex items-center justify-center">
      <slot />
    </a>

    <!-- Internal Navigation -->
    <RouterLink v-else :to="href" class="w-full h-full flex items-center justify-center" @click.native="scrollToTop">
      <slot />
    </RouterLink>
  </button>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'lg'].includes(value),
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'outline'].includes(value),
  },
  href: {
    type: String,
    default: '#', // Internal navigation (Vue Router)
  },
  link: {
    type: String,
    default: '', // External link (opens in new tab)
  },
});

// Function to scroll to the top smoothly
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
