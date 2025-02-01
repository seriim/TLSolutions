<template>
  <div 
    :class=" [
      'border border-gray-300 rounded-3xl p-[25px] flex flex-col justify-between mx-auto', // Core styles
      bgColor,
      'max-w-md w-full max-sm:w-[90%] sm:max-w-sm' // Responsive width for cards
    ]"
  >
    <h3 :class="['text-2xl font-semibold mb-8', textColor]">{{ plan }}</h3>
    <ul class="space-y-4 mb-8">
      <li v-for="(feature, index) in features" :key="index" class="flex items-center gap-3">
        <Check :class="iconColor" size="20" />
        <span :class="textColor">{{ feature }}</span>
      </li>
    </ul>
    <div class="flex flex-row max-lg:flex-col max-lg:items-center">
      <div class="flex items-baseline gap-1 mb-6 max-md:items-center">
        <span :class="['text-3xl font-bold', textColor]">${{ price }}</span>
        <span :class="subTextColor">/ JMD</span>
      </div>
      <button :class="[' ml-5 py-2 px-3 rounded-lg w-[35%] max-lg:w-[50%] cursor-pointer h-[45px] text-[14px] max-md:w-[70%] ', buttonColor]">
        <a :href="href">
          {{ buttonText }}
        </a>
        
      </button>
    </div>
  </div>
</template>

<script setup>
import { Check } from 'lucide-vue-next';

const props = defineProps({
  plan: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'bg-white'
  },
  textColor: {
    type: String,
    default: 'text-black'
  },
  subTextColor: {
    type: String,
    default: 'text-gray-500'
  },
  buttonColor: {
    type: String,
    default: 'bg-[#00aaff] hover:bg-[#0171a9] text-white'
  },
  iconColor: {
    type: String,
    default: 'text-black'
  },
  href: {
    type: String,
    default: '#',
  },
});
</script>

<style scoped>
.border {
  border-width: 1px;
}
</style>
