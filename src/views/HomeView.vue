<template>
  <div class="flex flex-col items-center font-CustomFont">
    <!-- Hero section -->
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 fade-in">
      <div class="flex flex-col lg:flex-row gap-8 items-center">
        <!-- Left content -->
        <div class="flex-1 text-center lg:text-left slide-left">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Professional Tax & Visa
            <span class="text-blue-600 block">Solutions</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Let our experts handle your paperwork while you focus on what matters most. We provide seamless tax and visa services tailored to your needs.
          </p>
          <div class="flex flex-wrap justify-center lg:justify-start gap-4">
            <Button size="lg max-sm:md" class="fade-in-delay hover:bg-[#232323]" href="/TaxView">
              Tax Services
              <ArrowRight class="ml-[5px] h-5 w-3 sm:h-5 sm:w-3 md:h-5 md:w-3 lg:h-5 lg:w-3" />
            </Button>
            <Button size="lg" class="fade-in-delay" variant="outline" href="/VisaView">
              Visa Services
            </Button>
          </div>
        </div>

        <!-- Right content -->
        <div class="flex-1 w-full lg:w-auto slide-right ">
          <HeroCard
            image="https://ezy2nf0evx.ufs.sh/f/esJyRudlUqbDlldud6DYWUj6G0SZLHuzv2kQt37XN5MyVqoT"
            altText="Professional tax services"
            title="Expert Help when you need it!"
            buttonText="More About Us"
            className="h-[300px] sm:h-[350px] md:h-[400px] w-full max-w-[550px] mx-auto lg:mx-0"
            href="/AboutView"
          />
        </div>
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
      <div class="relative flex justify-center items-center bg-gray-100 p-1 rounded-full mb-8 w-64 mx-auto">
        <!-- Sliding Background -->
        <div
          :class="[
            'absolute h-10 bg-black rounded-full transition-all duration-300',
            activeTab === 'visa' ? 'left-1' : 'left-[calc(100%-7.5rem)]',
          ]"
          style="width: calc(50% - 0.5rem);"
        ></div>

        <!-- Buttons -->
        <button
          @click="activeTab = 'visa'"
          :class="[
            'px-6 py-2 max-sm:px-4 max-sm:text-sm transition-colors relative z-10 flex items-center justify-center w-1/2 cursor-pointer',
            activeTab === 'visa' ? 'text-white' : 'text-gray-700',
          ]"
        >
          Visa
        </button>
        <button
          @click="activeTab = 'tax'"
          :class="[
            'px-6 py-2 max-sm:px-4 max-sm:text-sm transition-colors relative z-10 flex items-center justify-center w-1/2 cursor-pointer',
            activeTab === 'tax' ? 'text-white' : 'text-gray-700',
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
          :features="['Help with creating a Resume', '30 minutes Consultation', 'Visa Interview Prep', 'Visa Application', 'Premium Support']"
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
          :price="6300"
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
          :features="['Tax Filing', 'Deduction Optimization', 'Same day Filing', 'Premium Support']"
          :price="7000"
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
          :features="['Tax Filing', 'Deduction Optimization', 'Same day Filing', 'Learn how to file taxes', 'Premium Support']"
          :price="10000"
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
import { ref } from 'vue';
import HeroCard from "../components/HeroCard.vue";
import ServiceCard from "../components/ServiceCard.vue";
import PricingCard from "../components/PricingCard.vue";
import PaymentMethods from '@/components/PaymentMethods.vue';
import Button from '@/components/ui/Button.vue';
import { ArrowRight } from 'lucide-vue-next';

// Reactive state for active tab
const activeTab = ref('visa'); // Default to 'visa'
</script>

<style scoped>
/* Fade in effect */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in {
  animation: fadeIn 1s ease-in-out;
}
.fade-in-delay {
  animation: fadeIn 1.5s ease-in-out;
}

/* Slide in from left */
@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.slide-left {
  animation: slideLeft 1s ease-in-out;
}

/* Slide in from right */
@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.slide-right {
  animation: slideRight 1s ease-in-out;
}

/* Slide up effect */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.slide-up {
  animation: slideUp 1s ease-in-out;
}
</style>