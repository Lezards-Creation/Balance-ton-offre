import { createRouter, createWebHistory } from 'vue-router'
import { useUser } from '../stores/user'
import HomeView from '../views/Dashboard.vue'
import ConnexionVue from '../views/Connexion.vue'
import OffreVue from '../views/Offre.vue'
import UtilisateursVue from '../views/Utilisateurs.vue'
import UtilisateurVue from '../views/Utilisateur.vue'
import TutorielsVue from '../views/Tutoriels.vue'
import MediasVue from '../views/Medias.vue'
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
                  component: ConnexionVue,
            },
            {
                  path: '/offre/:slug',
                  name: 'offre',
                  component: OffreVue,
            },
            {
                  path: '/utilisateurs',
                  name: 'utilisateurs',
                  component: UtilisateursVue,
            },
            {
                  path: '/utilisateur/:id',
                  name: 'utilisateur',
                  component: UtilisateurVue,
            },
            {
                  path: '/tutoriels',
                  name: 'tutoriels',
                  component: TutorielsVue,
            },
            {
                  path: '/medias',
                  name: 'medias',
                  component: MediasVue,
            },
            {
                  path: '/:pathMatch(.*)*',
                  name: 'not-found',
                  component: () => import('../views/Introuvable.vue'),
            },
      ],
})

router.beforeEach((to) => {
      const user = useUser()
      console.log(user.user)
})

export default router
