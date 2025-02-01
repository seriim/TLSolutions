<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-20 max-sm:py-5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <!-- Left Side (Text Content) -->
          <div class="mb-12 lg:mb-0 hero-content">
            <h1 class="text-4xl font-bold text-gray-900 sm:text-3.5xl md:text-6xl mb-6 leading-tight">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Streamline Your Visa
              </span>
              Application Process
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional assistance with your visa application to ensure a smooth and successful process.
            </p>
            <Button
              size="lg"
              class="text-lg px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105"
              href="https://docs.google.com/forms/d/e/1FAIpQLScb6aE3MMJz6SltJxCZ1SAiWMkU_VnnlOYlW_BhnDs0_3W_cw/viewform?usp=header"
            >
              Get Started
            </Button>
          </div>

          <!-- Right Side (Image) -->
          <div class="relative max-sm:hidden hero-image">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>
            <img
              src="../assets/images/VisaImage1.jpg"
              alt="Visa Services"
              class="relative rounded-2xl shadow-2xl w-full object-cover transform transition-all duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- How to Get Started Section -->
    <section class="py-20 bg-white max-sm:py-5 w-full">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center bg-clip-text text-black mb-12">
          How to Get Started
        </h2>
        <div class="space-y-6 max-w-3xl mx-auto">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
          >
            <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold">
              {{ index + 1 }}
            </span>
            <p class="flex-grow text-gray-700">{{ step }}</p>
            <ArrowRight class="w-5 h-5 text-blue-600" />
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-gray-100 max-sm:py-5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center bg-clip-text text-black mb-12">
          Our Pricing
        </h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card :isCard="true" class="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader :isCardHeader="true" class="text-center pb-4">
              <DollarSign class="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <CardTitle :isCardTitle="true" class="text-xl">Service Fee</CardTitle>
              <div class="mt-4">
                <div class="text-3xl font-bold">USD $25</div>
                <div class="text-sm text-gray-500">JMD $4,000</div>
              </div>
            </CardHeader>
          </Card>

          <Card :isCard="true" class="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader :isCardHeader="true" class="text-center pb-4">
              <DollarSign class="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <CardTitle :isCardTitle="true" class="text-xl">U.S. Embassy Fee</CardTitle>
              <div class="mt-4">
                <div class="text-3xl font-bold">USD $160</div>
                <div class="text-sm text-gray-500">JMD $24,800</div>
              </div>
            </CardHeader>
          </Card>

          <Card :isCard="true" class="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <CardHeader :isCardHeader="true" class="text-center pb-4">
              <DollarSign class="w-12 h-12 mx-auto mb-4 text-white" />
              <CardTitle :isCardTitle="true" class="text-xl text-white">Total Cost</CardTitle>
              <div class="mt-4">
                <div class="text-3xl font-bold">USD $185</div>
                <div class="text-sm text-gray-100">JMD $28,800</div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>

    <!-- Documents Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center bg-clip-text text-black mb-12">
          Documents Needed
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <Card :isCard="true" class="border-0 shadow-lg">
            <CardHeader :isCardHeader="true">
              <CardTitle :isCardTitle="true" class="flex items-center gap-2">
                <FileText class="w-5 h-5 text-blue-600" />
                Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent :isCardContent="true">
              <ul class="space-y-3">
                <li
                  v-for="(doc, index) in requiredDocuments"
                  :key="index"
                  class="flex items-center gap-2"
                >
                  <CheckCircle2 class="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{{ doc }}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card :isCard="true" class="border-0 shadow-lg">
            <CardHeader :isCardHeader="true">
              <CardTitle :isCardTitle="true" class="flex items-center gap-2">
                <FileText class="w-5 h-5 text-purple-600" />
                Optional Documents
              </CardTitle>
            </CardHeader>
            <CardContent :isCardContent="true">
              <ul class="space-y-3">
                <li
                  v-for="(doc, index) in optionalDocuments"
                  :key="index"
                  class="flex items-center gap-2"
                >
                  <CheckCircle2 class="w-4 h-4 text-purple-600 flex-shrink-0 items-start" />
                  <span>{{ doc }}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Button from "@/components/ui/Button.vue";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card.vue";
import { ArrowRight, FileText, DollarSign, CheckCircle2 } from "lucide-vue-next";
import { onMounted } from 'vue';

const steps = [
  "Fill out our application form.",
  "Upload the required documents via the form or email them to us.",
  "Make the service fee payment.",
  "We'll prepare your application and keep you updated.",
  "Book a consultation for additional help, if needed.",
];

const requiredDocuments = [
  "Valid Passport (6 months beyond program end date)",
  "DS-2019 Form (issued by your sponsor)",
  "SEVIS Fee Receipt (proof of payment)",
  "Completed DS-160 Form (online application)",
  "Transcript From School",
  "Status Letter From School",
];

const optionalDocuments = [
  "Cover Letter (supporting your application)",
  "Recommendation Letter (from your program sponsor)",
  "Proof of Funds (showing financial support)",
];

// Trigger animations when the page loads
onMounted(() => {
  const heroContent = document.querySelector('.hero-content');
  const heroImage = document.querySelector('.hero-image');

  // Add a slight delay to stagger the animations
  setTimeout(() => {
    heroContent.classList.add('animate-in');
  }, 100);

  setTimeout(() => {
    heroImage.classList.add('animate-in');
  }, 300);
});
</script>

<style scoped>
/* Hero content and image animations */
.hero-content,
.hero-image {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.hero-content.animate-in,
.hero-image.animate-in {
  opacity: 1;
  transform: translateY(0);
}
</style>