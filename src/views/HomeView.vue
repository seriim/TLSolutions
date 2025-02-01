<template>
  <div ref="page" class="flex flex-col items-center font-CustomFont opacity-0 transition-opacity duration-700 ease-in-out">
    <!-- Hero section -->
    <div class="w-[85%] h-[20%] grid grid-cols-[1fr_1fr] gap-3 px-5 max-md:grid-cols-1 max-sm:px-3">
      <!-- Left Hero Card -->
      <transition name="fade" appear>
        <div class="h-full">
          <HeroCard
            image="src/assets/images/HeroImage1.jpg"
            altText="Person overwhelmed with paperwork"
            title="Say Bye to paperwork. Let us get the job done for you!"
            buttonText="Learn About Our Tax Services"
            className="h-full"
            titleClass="text-xl sm:text-2xl md:text-3xl"
            subTitleClass="text-sm sm:text-base"
            buttonClass="text-sm sm:text-base"
            href="/TaxView"
          />
        </div>
      </transition>

      <!-- Right Hero Cards -->
      <div class="flex flex-col gap-5 h-full">
        <transition name="fade" appear>
          <HeroCard
            image="src/assets/images/HeroImage2.jpg"
            altText="Professional consultant"
            title="Our goal is to make the process stress-free for you"
            buttonText="Learn About Our Visa Services"
            className="h-[calc(50%-0.625rem)]"
            titleClass="text-lg sm:text-xl md:text-2xl"
            subTitleClass="text-sm sm:text-base"
            buttonClass="text-sm sm:text-base"
            href="/VisaView"
          />
        </transition>
        <transition name="fade" appear>
          <HeroCard
            image="https://images.unsplash.com/photo-1557425955-df376b5903c8"
            altText="Professional handshake"
            title="Expert Help when you need it!"
            buttonText="Learn More About us"
            className="h-[calc(50%-0.625rem)]"
            titleClass="text-lg sm:text-xl md:text-2xl"
            subTitleClass="text-sm sm:text-base"
            buttonClass="text-sm sm:text-base"
            href="/AboutView"
          />
        </transition>
      </div>
    </div>

    <!-- Service Section (Commented Out) -->
    <!--
    <div class="max-w-[1254px] w-full mt-20 px-5 max-sm:px-3">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-5">
          Our Services
        </h2>
        <p class="text-lg text-gray-500 sm:text-xl mx-auto max-w-2xl">
          We provide reliable and efficient services to help J1 students succeed in their journeys.
        </p>
      </div>
      <div class="grid grid-cols-[repeat(3,1fr)] gap-10 place-items-center max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-1">
        <ServiceCard
          icon="src/assets/icons/landmark.svg"
          title="Tax Return Preparation"
          description="Send us the required information and answer simple questions to easily get starting."
        />
        <ServiceCard
          icon="Passport"
          title="J1 Visa Assistance"
          description="Let us help you navigate through the J1 Visa application process with ease."
        />
        <ServiceCard
          icon="MessagesSquare"
          title="Consultations"
          description="Book a free consultation to get started with your journey today."
        />
      </div>
    </div>
    -->

    <!-- Pricing Section -->
    <div class="max-w-[1100px] w-full mt-20 px-5 max-sm:px-3">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
          Take a Look at What We Have to Offer
        </h2>
        <p class="text-lg text-gray-500 sm:text-xl">
          Choose a plan that fits your needs to get the best results!
        </p>
      </div>

      <!-- Toggle Buttons -->
      <div class="flex justify-center items-center gap-4 mb-8 ">
        <button
          @click="activeTab = 'visa'"
          :class="[
            'px-6 py-2 rounded-full max-sm:px-4 max-sm:text-sm transition-colors',
            activeTab === 'visa' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700',
          ]"
        >
          Visa
        </button>
        <button
          @click="activeTab = 'tax'"
          :class="[
            'px-6 py-2 rounded-full max-sm:px-4 max-sm:text-sm transition-colors',
            activeTab === 'tax' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700',
          ]"
        >
          Tax
        </button>
      </div>

      <!-- Visa Plans -->
      <div v-if="activeTab === 'visa'" class="grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:gap-5">
        <PricingCard
          plan="Basic"
          :features="['Visa Interview Prep', 'Visa Application', 'General Support']"
          :price="5000"
          buttonText="Start now"
          bgColor="bg-white"
          textColor="text-black"
          subTextColor="text-gray-500"
          buttonColor="bg-[#00aaff] hover:bg-[#0093dc] text-white"
          iconColor="text-black"
          href="/VisaView"
        />
        <PricingCard
          plan="Professional"
          :features="['Consultation', 'Visa Interview Prep', 'Visa Application', 'Premium Support']"
          :price="6000"
          buttonText="Start now"
          bgColor="bg-black"
          textColor="text-white"
          subTextColor="text-gray-400"
          buttonColor="bg-[#00aaff] hover:bg-[#0171a9]/90 text-white"
          iconColor="text-white"
          href="/VisaView"
        />
        <PricingCard
          plan="Try Hard"
          :features="['Help with creating a Resume', 'Consultation', 'Visa Interview Prep', 'Visa Application', 'Premium Support']"
          :price="7000"
          buttonText="Contact"
          bgColor="bg-white"
          textColor="text-black"
          subTextColor="text-gray-500"
          buttonColor="bg-[#00aaff] hover:bg-[#0171a9] text-white"
          iconColor="text-black"
          href="/VisaView"
        />
      </div>

      <!-- Tax Plans -->
      <div v-if="activeTab === 'tax'" class="grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:gap-5">
        <PricingCard
          plan="Basic Tax"
          :features="['Tax Filing', 'Deduction Optimization', 'General Support']"
          :price="3000"
          buttonText="Start now"
          bgColor="bg-white"
          textColor="text-black"
          subTextColor="text-gray-500"
          buttonColor="bg-[#00aaff] hover:bg-[#0093dc] text-white"
          iconColor="text-black"
          href="/TaxView"
        />
        <PricingCard
          plan="Professional Tax"
          :features="['Tax Filing', 'Deduction Optimization', 'Audit Support', 'Premium Support']"
          :price="4000"
          buttonText="Start now"
          bgColor="bg-black"
          textColor="text-white"
          subTextColor="text-gray-400"
          buttonColor="bg-[#00aaff] hover:bg-[#0171a9]/90 text-white"
          iconColor="text-white"
          href="/TaxView"
        />
        <PricingCard
          plan="Premium Tax"
          :features="['Tax Filing', 'Deduction Optimization', 'Audit Support', 'Financial Planning', 'Premium Support']"
          :price="5000"
          buttonText="Contact"
          bgColor="bg-white"
          textColor="text-black"
          subTextColor="text-gray-500"
          buttonColor="bg-[#00aaff] hover:bg-[#0171a9] text-white"
          iconColor="text-black"
          href="/TaxView"
        />
      </div>

      <!-- Payment Methods Section -->
      <PaymentMethods/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted  } from 'vue';
import HeroCard from "../components/HeroCard.vue";
import ServiceCard from "../components/ServiceCard.vue";
import PricingCard from "../components/PricingCard.vue";
import PaymentMethods from '@/components/PaymentMethods.vue';

// Reactive state for active tab
const activeTab = ref('visa'); // Default to 'visa'
const page = ref(null);
const pricingTitle = ref(null);
const pricingSubtitle = ref(null);

onMounted(() => {
  // Fade in the whole page
  if (page.value) {
    page.value.classList.remove('opacity-0');
  }
  
  // Slide-in Pricing Section
  setTimeout(() => {
    if (pricingTitle.value && pricingSubtitle.value) {
      pricingTitle.value.classList.remove('opacity-0', 'translate-y-4');
      pricingSubtitle.value.classList.remove('opacity-0', 'translate-y-4');
    }
  }, 500);
});
</script>

<style scoped>
/* Fade Animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Slide Animation */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.7s ease-in-out, opacity 0.7s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>