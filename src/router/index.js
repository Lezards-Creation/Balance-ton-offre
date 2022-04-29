import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Dashboard.vue'

const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
            {
                  path: '/',
                  name: 'dashboard',
                  component: HomeView,
            },
            {
                  path: '/connexion',
                  name: 'connexion',
                  component: () => import('../views/Connexion.vue'),
            },
            {
                  path: '/offre/:slug',
                  name: 'offre',
                  component: () => import('../views/Offre.vue'),
            },
            {
                  path: '/utilisateurs',
                  name: 'utilisateurs',
                  component: () => import('../views/Utilisateurs.vue'),
            },
            {
                  path: '/utilisateur/:id',
                  name: 'utilisateur',
                  component: () => import('../views/Utilisateur.vue'),
            },
            {
                  path: '/tutoriels',
                  name: 'tutoriels',
                  component: () => import('../views/Tutoriels.vue'),
            },
            {
                  path: '/medias',
                  name: 'medias',
                  component: () => import('../views/Medias.vue'),
            },
            {
                  path: '/:pathMatch(.*)*',
                  name: 'not-found',
                  component: () => import('../views/Introuvable.vue'),
            },
      ],
})

export default router
