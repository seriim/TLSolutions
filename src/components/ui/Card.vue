<template>
  <!-- Card Component -->
  <div v-if="isCard" :class="`rounded-lg border-1 border-[#b6b6b6] bg-card text-card-foreground shadow-sm ${className}`">
    <slot />
  </div>

  <!-- CardHeader Component -->
  <div v-else-if="isCardHeader" :class="`flex flex-col space-y-1.5 p-6 ${className}`">
    <slot />
  </div>

  <!-- CardTitle Component -->
  <h3 v-else-if="isCardTitle" :class="`text-2xl font-semibold leading-none tracking-tight ${className}`">
    <slot />
  </h3>

  <!-- CardContent Component -->
  <div v-else-if="isCardContent" :class="`p-6 pt-0 ${className}`">
    <slot />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  className: {
    type: String,
    default: "",
  },
  isCard: {
    type: Boolean,
    default: false,
  },
  isCardHeader: {
    type: Boolean,
    default: false,
  },
  isCardTitle: {
    type: Boolean,
    default: false,
  },
  isCardContent: {
    type: Boolean,
    default: false,
  },
});
</script>

<!-- Named Exports -->
<script>
export { default as Card } from "./Card.vue";
export { default as CardHeader } from "./Card.vue";
export { default as CardTitle } from "./Card.vue";
export { default as CardContent } from "./Card.vue";
</script>