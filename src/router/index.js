import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import VisaView from '@/views/VisaView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import TaxView from '@/views/TaxView.vue'
import NotFoundView from '@/views/NotFound.vue'
import TermsOfService from '@/views/TermsOfService.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home',component: HomeView,},
    {path: '/VisaView',name: 'VisaView',component: VisaView,},
    {path: '/AboutView',name: 'AboutView',component: AboutView,},
    {path: '/ContactView',name: 'ContactView',component: ContactView,},
    {path: '/TaxView',name: 'TaxView',component: TaxView,},
    {path: '/:pathMatch(.*)*',name: 'not-found',component: NotFoundView,},
    {path: '/Terms',name: 'Terms',component: TermsOfService,},
    {path: '/Privacy',name: 'Privacy',component: PrivacyPolicy,},
  ],
})

export default router


