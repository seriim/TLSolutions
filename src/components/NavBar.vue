<template>
  <nav class="bg-white shadow-sm flex w-full items-center justify-between px-6 lg:px-20 py-4 sticky top-0 z-50 border-b border-gray-100">
    <!-- Logo and Brand Name -->
    <router-link 
      to="/" 
      class="flex items-center gap-3 hover:opacity-90 transition-opacity"
    >
      <span class="text-2xl font-semibold tracking-tight text-gray-900">TL Solutions</span>
    </router-link>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center gap-8 text-base">
      <router-link
        v-for="link in navLinks"
        :key="link.label"
        :to="link.to"
        class="relative text-gray-600 hover:text-black transition-colors duration-200 font-semibold text-sm tracking-wide px-2 py-1"
        :class="{ 'active-link': isActive(link.to) }"
      >
        {{ link.label }}
      </router-link>
    </div>

    <!-- Mobile Navigation -->
    <div>
      <!-- Sheet Trigger (Hamburger Menu) -->
      <button
        class="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
        @click="openSheet"
      >
        <Menu class="h-6 w-6 text-gray-600" />
      </button>

      <!-- Sheet Overlay -->
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 bg-black/50"
        @click="closeSheet"
      />

      <!-- Sheet Content (Mobile Menu) -->
      <div
        v-if="isOpen"
        :class="[
          'fixed z-50 bg-white p-6 transition-transform duration-300',
          'top-0 right-0 h-full w-[300px] sm:w-[400px]',
        ]"
      >
        <div class="flex flex-col gap-2 mt-8">
          <router-link
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            class="text-gray-700 hover:text-black transition-colors duration-200 py-3 px-4 rounded-md hover:bg-gray-50 font-semibold"
            :class="{ 'active-link': isActive(link.to) }"
            @click="closeSheet"
          >
            {{ link.label }}
          </router-link>
        </div>

        <!-- Close Button -->
        <button
          @click="closeSheet"
          class="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-md"
        >
          <X class="h-4 w-4" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Menu, X } from 'lucide-vue-next';

// Navigation links
const navLinks = ref([
  { to: '/', label: 'Home' },
  { to: '/AboutView', label: 'About' },
  { to: '/TaxView', label: 'Tax Services' },
  { to: '/VisaView', label: 'Visa Services' },
  { to: '/ContactView', label: 'Contact' },
]);

const route = useRoute();

// Function to check if a link is active
const isActive = (path) => route.path === path;

// State for Sheet Open/Close
const isOpen = ref(false);

// Open Sheet
const openSheet = () => {
  isOpen.value = true;
};

// Close Sheet
const closeSheet = () => {
  isOpen.value = false;
};
</script>

<style scoped>
/* Active link styling */
.active-link {
  color: black;
  font-weight: 700;
  font-size: .9rem; /* Slightly larger */
}
</style>
