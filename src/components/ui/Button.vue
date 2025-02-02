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
    <RouterLink :to="href" class="w-full h-full flex items-center justify-center">
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
    default: '#',
  },
});
</script>

<style scoped>
/* Add any custom styles here */
</style>
