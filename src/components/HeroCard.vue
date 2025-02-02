<template>
  <div :class="`overflow-hidden relative rounded-[20px] ${computedClassName} max-md:rounded-none`">
    <img
      :src="image"
      :alt="altText"
      class="w-full h-full object-cover brightness-[0.85]"
      loading="lazy"
    />
    <div class="absolute p-5 bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent">
      <div :class="`text-white font-light leading-[1.2] mb-2 ${titleClass}`">
        {{ title }}
        <p :class="`text-white font-light mt-2 opacity-70 ${subTitleClass}`">
          {{ subTitle }}
        </p>
      </div>
      <button
        :class="`text-white font-medium cursor-pointer transition-all duration-[0.2s] bg-black/40 hover:bg-black/60 backdrop-blur-sm px-6 py-3 rounded-lg ${buttonClass}`"
      >
        <RouterLink :to="href">
          {{ buttonText }}
        </RouterLink>  
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: false,
  },
  buttonText: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "h-[400px]", // Default height
  },
  titleClass: {
    type: String,
    default: "text-[24px]", // Default title text size
  },
  subTitleClass: {
    type: String,
    default: "text-[14px]", // Default subtitle text size
  },
  buttonClass: {
    type: String,
    default: "text-base", // Default button text size
  },
  href: {
    type: String,
    default: '#',
  },
});

const computedClassName = computed(() => {
  return props.className || "h-[400px]";
});
</script>