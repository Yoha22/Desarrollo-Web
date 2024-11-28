import { createRouter, createWebHistory } from 'vue-router';
import DatosEquipo from './components/DatosEquipo.vue';
import ConfiguracionDeEquipo from './components/ConfiguracionDeEquipo.vue';
import ConfiguracionDeRed from './components/ConfiguracionDeRed.vue';

const routes = [
    { path: '/datos', component: DatosEquipo },
    { path: '/configuracion', component: ConfiguracionDeEquipo },
    { path: '/red', component: ConfiguracionDeRed}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

