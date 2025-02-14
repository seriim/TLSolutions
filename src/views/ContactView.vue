<template>
  <div ref="page" class="min-h-screen bg-white opacity-0 transition-opacity duration-700 ease-in-out mt-10">
    <section class="relative overflow-hidden bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="relative z-10 bg-white lg:grid lg:grid-cols-2 lg:gap-8 items-center min-h-[600px]">
          <transition name="fade" appear>
            <div class="px-4 sm:px-6 lg:px-8">
              <div class="text-left">
                <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                  <span class="block xl:inline">Get in touch with</span>
                  <span class="block text-blue-600 xl:inline"> our expert team</span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                  Have questions about our services? Need assistance with your visa or tax matters?
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
                  <transition name="fade" appear>
                    <div>
                      <input 
                        type="text" 
                        name="name"
                        v-model="formData.name"
                        placeholder="Your Name" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </transition>
                  <transition name="fade" appear>
                    <div>
                      <input 
                        type="email" 
                        name="email"
                        v-model="formData.email"
                        placeholder="Email Address" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </transition>
                  <transition name="fade" appear>
                    <div>
                      <input 
                        type="tel" 
                        name="phone"
                        v-model="formData.phone"
                        placeholder="Phone Number" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </transition>
                  <transition name="fade" appear>
                    <div>
                      <textarea 
                        name="message"
                        v-model="formData.message"
                        placeholder="Your Message" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                        required
                      ></textarea>
                    </div>
                  </transition>
                  <transition name="fade" appear>
                    <div>
                      <button 
                        type="submit"
                        class="w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                        :disabled="loading"
                      >
                        {{ loading ? 'Sending...' : 'Send Message' }}
                      </button>
                    </div>
                  </transition>
                </form>
              </div>
            </div>
          </transition>
          <transition name="fade" appear>
            <div class="mt-8 lg:mt-0" >
              <img
                class="h-full w-full object-cover rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21"
                alt="Customer service representative"
              />
            </div>
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const toast = useToast();
const loading = ref(false);
const page = ref(null);

onMounted(() => {
  if (page.value) {
    page.value.classList.remove("opacity-0");
  }
});

const handleSubmit = async () => {
  loading.value = true;
  try {
    const response = await fetch('https://formsubmit.co/truelinessolutions@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      toast.success("Your message has been sent successfully!");
      formData.value = { name: '', email: '', phone: '', message: '' };
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  } catch (error) {
    toast.error("Error sending message.");
  }
  loading.value = false;
};
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
