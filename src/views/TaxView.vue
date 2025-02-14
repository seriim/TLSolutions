<template>
  <div class="min-h-screen flex flex-col">
    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Hero Section -->
      <section class="relative py-24 max-sm:py-5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <!-- Left Side (Text Content) -->
            <div class="mb-12 lg:mb-0 hero-content">
              <h1 class="text-4xl font-bold text-gray-900 sm:text-4xl md:text-6xl mb-6 leading-tight">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Maximize your tax refund
                </span>
                with our expert tax preparation service.
              </h1>
              <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                Tax season in the United States runs from January 1st to April 15th every year. Let us help you get the maximum refund you deserve.
              </p>
              <Button 
                size="lg" 
                class="text-lg px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105"
                link="https://docs.google.com/forms/d/1DLylSX4cWiL1xpnoGOwN2cUxFNbXi4gcmOxg1WHnRsg/edit"
              >
                Apply Now
              </Button>
            </div>

            <!-- Right Side (Image) -->
            <div class="relative hero-image">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>
              <img
                src="../assets/images/TaxHeroImage.jpg"
                alt="Tax Services"
                class="relative rounded-2xl shadow-2xl w-full object-cover transform transition-all duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Documents Section -->
      <section class="py-20 max-sm:py-5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div class="mb-8 lg:mb-0">
              <Card :isCard="true" class="p-6">
                <CardHeader :isCardHeader="true">
                  <CardTitle :isCardTitle="true" class="text-3xl font-bold mb-4 max-sm:text-center">
                    Our Pricing
                  </CardTitle>
                  <div class="flex items-baseline mb-4 max-sm:justify-center">
                    <span class="text-2xl font-semibold">$</span>
                    <span class="text-5xl font-bold">40</span>
                    <span class="ml-2 text-gray-500">USD</span>
                  </div>
                </CardHeader>
                <CardContent :isCardContent="true">
                  <Button class="w-full bg-black" size="lg" href="https://docs.google.com/forms/d/1DLylSX4cWiL1xpnoGOwN2cUxFNbXi4gcmOxg1WHnRsg/edit">
                    Complete Form
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 class="text-3xl font-bold mb-6">Documents Needed</h2>
              <Card :isCard="true">
                <CardHeader :isCardHeader="true">
                  <CardTitle :isCardTitle="true">Required Documents</CardTitle>
                </CardHeader>
                <CardContent :isCardContent="true">
                  <ul class="space-y-3">
                    <li class="flex items-center">
                      <span>• W-2 Form (from your employer)</span>
                    </li>
                    <li class="flex items-center">
                      <span>• Form 1042-S (if applicable)</span>
                    </li>
                    <li class="flex items-center">
                      <span>• Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN)</span>
                    </li>
                    <li class="flex items-center">
                      <span>• Passport and Visa Details</span>
                    </li>
                    <li class="flex items-center">
                      <span>• Any previous tax returns (if applicable)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <!-- Payment Section -->
      <PaymentMethods />
    </main>
  </div>
</template>

<script setup>
import PaymentMethods from "@/components/PaymentMethods.vue";
import Button from "@/components/ui/Button.vue";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card.vue";
import { onMounted } from 'vue';

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