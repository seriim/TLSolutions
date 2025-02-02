<template>
  <footer class="bg-gray-900 text-white mt-20 pt-14 pb-7 px-5 w-full">
    <div class="flex flex-col items-center text-center md:text-left max-w-screen-lg mx-auto">
      <div class="flex flex-col md:flex-row md:justify-between gap-3">
        <!-- Logo and Socials -->
        <div class="flex flex-col justify-center md:items-start text-[20px] font-bold">
          <span>True Line Solutions</span>
        </div>

        <!-- Footer Links -->
        <div class="flex flex-wrap justify-center md:justify-between w-full gap-2">
          <!-- Learn More Section -->
          <div class="w-40">
            <h3 class="text-lg font-medium mb-4">Learn More</h3>
            <div class="text-sm opacity-90 leading-7">
              <router-link to="/AboutView" @click.native="scrollToTop">About us</router-link><br />
              <router-link to="/ContactView" @click.native="scrollToTop">Contact Us</router-link><br />
              <router-link to="/Terms" @click.native="scrollToTop">Terms of Use</router-link><br /> 
              <!-- <router-link to="/faqs">FAQs</router-link> -->
              <router-link to="/Privacy" @click.native="scrollToTop">Privcay Policy</router-link><br />
            </div>
          </div>

          <!-- Services Section -->
          <div class="w-40">
            <h3 class="text-lg font-medium mb-4">Services</h3>
            <div class="text-sm opacity-90 leading-7">
              <router-link to="/TaxView" @click.native="scrollToTop">Tax Services</router-link><br />
              <router-link to="/VisaView" @click.native="scrollToTop">Visa Services</router-link><br />
            </div>
          </div>

          <!-- Contact Us Section -->
          <div class="w-60">
            <h3 class="text-lg font-medium mb-4">Contact Us</h3>
            <div class="text-sm opacity-90 leading-7">
              <span>WhatsApp: 123-456-7890</span><br />
              <span><a href="mailto:serenamorrisb012@gmail.com">Email: serenamorrisb012@gmail.com</a></span>
            </div>
          </div>

          <!-- Social Section -->
          <div class="w-40">
            <h3 class="text-lg font-medium mb-3">Socials</h3>
            <div class="flex items-center gap-5 justify-center md:justify-start">
              <a href="https://www.facebook.com/yourfacebookpage" target="_blank" class="text-white hover:text-blue-400 transition">
                <i class="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/truelinesolutionsja/" target="_blank" class="text-white hover:text-pink-400 transition">
                <i class="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://www.tiktok.com/@true.line.solutions" target="_blank" class="text-white hover:text-red-400 transition">
                <i class="fab fa-tiktok fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-white/30 mt-3 w-4/5 pt-6">
        <div class="text-center text-sm opacity-75">
          © 2024 TL Solutions | All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>
