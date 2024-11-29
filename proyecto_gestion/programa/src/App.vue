<template>
  <nav class="navbar">
    <button @click="goToDatosEquipo">Datos del Equipo</button>
    <button @click="goToConfiguracion">Configuración del Equipo</button>
    <button @click="goToConfiguracionRed">Configuracion de Red</button>
    <button @click="goToCotrolCambios">Control de cambios</button>
    <button @click="goToUbicacionTabla">Ubicacion</button>
    <button @click="goToMantenimientos">Mantenimiento</button>
    
  </nav>
  <div id="componente">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goToDatosEquipo() {
      this.$router.push('/datos');
    },
    goToConfiguracion() {
      this.$router.push('/configuracion');
    },
    goToConfiguracionRed() {
      this.$router.push('/red');
    },
    goToCotrolCambios() {
      this.$router.push('/control');
    },
    goToUbicacionTabla(){
      this.$router.push('/ubicacionTabla');
    },
    goToMantenimientos(){
      this.$router.push('/MantenimientosTabla');
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#componente {
  margin-top: 50px;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #343a40; /* Fondo oscuro */
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para darle profundidad */
}

button {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background-color: #007bff; /* Azul primario */
  color: white;
  border-radius: 5px;
  margin: 0 10px; /* Espaciado entre botones */
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #0056b3; /* Azul más oscuro al pasar el mouse */
  transform: scale(1.05); /* Efecto de zoom */
}

button:active {
  transform: scale(1); /* Elimina el zoom al hacer clic */
  background-color: #003d80; /* Azul aún más oscuro al hacer clic */
}
</style>

