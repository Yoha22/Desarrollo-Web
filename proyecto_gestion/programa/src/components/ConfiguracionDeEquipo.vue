<template>
    <div class="container border p-4">
      <!-- Configuración del Equipo -->
      <h5 class="mb-4">Configuración del Equipo</h5>
  
      <div class="row mb-3">
        <div class="col-6">
          <label class="form-label">Virtual:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="formConfig.virtual"
          />
        </div>
        <div class="col-6">
          <label class="form-label">Físico:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="formConfig.fisico"
          />
        </div>
      </div>
  
      <div class="row mb-3">
        <div class="col-6">
          <label class="form-label">Producción:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="formConfig.produccion"
          />
        </div>
        <div class="col-6">
          <label class="form-label">Desarrollo:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="formConfig.desarrollo"
          />
        </div>
      </div>
  
      <div class="row mb-3">
        <div class="col-4">
          <label class="form-label">Procesador:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="formConfig.procesador"
          />
        </div>
        <div class="col-4">
          <label class="form-label">Velocidad:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="formConfig.velocidad"
          />
        </div>
        <div class="col-4">
          <label class="form-label">Cantidad:</label>
          <input
            type="number"
            class="form-control form-control-sm"
            v-model="formConfig.cantidadProcesador"
          />
        </div>
      </div>
  
      <div class="row mb-3">
        <div class="col-12">
          <label class="form-label">Memoria RAM:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="formConfig.memoriaRam"
          />
        </div>
      </div>
  
      <div class="row mb-3">
        <div class="col-4">
          <label class="form-label">Cantidad:</label>
          <input
            type="number"
            class="form-control form-control-sm"
            v-model="formConfig.cantidadDisco"
          />
        </div>
        <div class="col-4">
          <label class="form-label">Capacidad:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="formConfig.capacidadDisco"
          />
        </div>
        <div class="col-4">
          <label class="form-label">Tipo de servicio:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="formConfig.tipoServicio"
          />
        </div>
      </div>
  
      <!-- Botones para gestionar la configuración -->
      <div class="row mt-4">
        <div class="col-12 text-end">
          <button class="btn btn-primary me-2" @click="guardarConfiguracion">
            Guardar
          </button>
          <button class="btn btn-danger" @click="eliminarConfiguracion">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ConfiguracionDeEquipo",
    data() {
      return {
        formConfig: {
          virtual: "",
          fisico: "",
          produccion: "",
          desarrollo: "",
          procesador: "",
          velocidad: "",
          cantidadProcesador: 0,
          memoriaRam: "",
          cantidadDisco: 0,
          capacidadDisco: "",
          tipoServicio: "",
        },
      };
    },
    created() {
      // Cargar datos guardados desde localStorage
      const savedConfig = localStorage.getItem("configuracionEquipo");
      if (savedConfig) {
        this.formConfig = JSON.parse(savedConfig);
      }
    },
    methods: {
      guardarConfiguracion() {
        // Guardar datos en localStorage
        localStorage.setItem(
          "configuracionEquipo",
          JSON.stringify(this.formConfig)
        );
        alert("Configuración guardada correctamente.");
      },
      eliminarConfiguracion() {
        // Eliminar datos de localStorage
        localStorage.removeItem("configuracionEquipo");
        this.formConfig = {
          virtual: "",
          fisico: "",
          produccion: "",
          desarrollo: "",
          procesador: "",
          velocidad: "",
          cantidadProcesador: 0,
          memoriaRam: "",
          cantidadDisco: 0,
          capacidadDisco: "",
          tipoServicio: "",
        };
        alert("Configuración eliminada correctamente.");
      },
    },
  };
  </script>
  
  <style>
  .container {
    margin-top: 80px;
  }
  </style>
  