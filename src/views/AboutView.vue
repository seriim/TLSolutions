<template>
  <div ref="page" class="min-h-screen bg-white opacity-0 transition-opacity duration-700 ease-in-out">
    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section class="relative overflow-hidden bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 bg-white lg:grid lg:grid-cols-2 lg:gap-8 items-center min-h-[600px]">
            <transition name="fade" appear>
              <div class="px-4 sm:px-6 lg:px-8">
                <div class="text-left">
                  <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                    <span class="block xl:inline">Your trusted partner for</span>
                    <span class="block text-blue-600 xl:inline">
                      J1 Visa Services and Tax Returns!
                    </span>
                  </h1>
                  <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                    Let J1 Solutions be your trusted partner. We provide comprehensive support
                    for your visa journey and ensure accurate tax compliance. Reach out to us
                    today and take the next step with confidence.
                  </p>
                  <div class="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-3">
                    <Button 
                      size="lg" 
                      class="rounded-md shadow w-full sm:w-auto px-8 py-3 text-base font-medium"
                      href="/ContactView"
                    >
                      Contact Us
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg" 
                      class="rounded-md w-full sm:w-auto px-8 py-3 text-base font-medium"
                      href="/"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </transition>
            
            <transition name="fade" appear>
              <div class="mt-8 lg:mt-0">
                <img
                  class="h-full w-full object-cover rounded-lg shadow-xl"
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Professional working environment"
                />
              </div>
            </transition>
          </div>
        </div>
      </section>

      <!-- Who We Are Section -->
      <transition name="fade" appear>
        <div class="relative bg-white">
          <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div class="text-center">
              <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Who We Are
              </h2>
              <p class="mt-4 text-lg leading-6 text-gray-500">
                J1 Solutions was founded with a vision to support J1 students through personalized and reliable services. 
                We understand the challenges you face and aim to ease your journey with expert guidance and unmatched professionalism.
              </p>
            </div>
          </div>
        </div>
      </transition>

      <!-- Core Values Section -->
      <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <transition name="fade" appear>
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span class="font-bold">Our Core</span> Values
              </h2>
            </transition>
          </div>

          <div class="mt-10">
            <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <transition name="fade" appear v-for="(value, index) in coreValues" :key="index">
                <div class="text-center">
                  <h3 class="mt-2 text-xl font-semibold text-gray-900">{{ value.title }}</h3>
                  <p class="mt-2 text-base text-gray-500">{{ value.description }}</p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </section>

      <!-- Offerings Section -->
      <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <transition name="fade" appear>
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What We Offer
              </h2>
            </transition>
          </div>

          <div class="mt-10">
            <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <transition name="fade" appear v-for="(service, index) in services" :key="index">
                <div class="text-center">
                  <div class="flex justify-center">
                    <img :src="service.image" :alt="service.title" class="h-20 w-20" />
                  </div>
                  <h3 class="mt-4 text-xl font-medium text-gray-900">{{ service.title }}</h3>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Button from "@/components/ui/Button.vue";

const page = ref(null);

const coreValues = ref([
  { title: "Integrity", description: "We are committed to honesty, transparency, and ethical practices in everything we do." },
  { title: "Excellence", description: "Our team strives for the highest quality in every service we provide." },
  { title: "Dedication", description: "We are passionate about helping J1 students succeed in their journeys." },
]);

const services = ref([
  { title: "Visa Assistance", image: "https://cdn.builder.io/api/v1/image/assets/4e82ab55d19f44d8bd973869b6372672/77639b8a1ab8229f00c41b1e7b66dde82f3f55ab5e4a707039cb8bfffefd4a6c" },
  { title: "Tax Preparation", image: "https://cdn.builder.io/api/v1/image/assets/4e82ab55d19f44d8bd973869b6372672/5250a1097a18fa85f62b04d9a0f137d5977191812ae2e3b7586961ed7c9d9c5b" },
  { title: "Consultations", image: "https://cdn.builder.io/api/v1/image/assets/4e82ab55d19f44d8bd973869b6372672/e0057e2bef4b3960b196ac1e655bca10a63b49cee15ef090817b5f84c4ef1da5" },
]);

onMounted(() => {
  if (page.value) {
    page.value.classList.remove("opacity-0");
  }
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
