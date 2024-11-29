<template>
  <nav class="navbar">
    <button @click="goToDatosEquipo">Datos del Equipo</button>
    <button @click="goToConfiguracion">Configuración del Equipo</button>
    <button @click="goToConfiguracionRed">Configuracion de Red</button>
    <button @click="goToCotrolCambios">Control de cambios</button>
    <button @click="goToUbicacionTabla">Ubicacion</button>
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
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: absolute;
  text-align: center;
  color: #2c3e50;
}

#componente {
  margin-top: 300px;
}

.navbar {
  display: absolute;
  justify-content: space-around;
  background-color: #f8f9fa;
  padding: 10px;
}

button {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}
</style>
