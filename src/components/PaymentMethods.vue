<template>
    <div class="border-t border-gray-200 pt-16 mt-16">
        <div class="text-center mb-12">
            <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl mb-4">
            Accepted Payment Methods
            </h3>
            <p class="text-lg text-gray-500 sm:text-xl">
            We accept various payment methods for your convenience
            </p>
        </div>

        <div class="flex flex-row gap-8 max-w-3xl mx-auto items-center justify-center">
            <div class="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 w-[160px] h-[110px] justify-center">
            <img src="../assets/images/icons/banknote.svg" alt="">
            <span class="font-medium">Zelle</span>
            </div>

            <div class="flex flex-col items-center gap-3 p-2 rounded-xl border border-gray-200 w-[150px] h-[110px] justify-center">
            <img src="../assets/images/icons/landmark.svg" alt="picture of a bank">
            <span class="font-medium">Bank Transfer</span>
            </div>
        </div>

        <div class="flex justify-center items-center gap-8 mt-12">
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
            alt="Visa"
            class="h-6 opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="Mastercard"
            class="h-6 opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
            alt="American Express"
            class="h-6 opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            class="h-6 opacity-70 hover:opacity-100 transition-opacity"
            />
        </div>
    </div>
</template>