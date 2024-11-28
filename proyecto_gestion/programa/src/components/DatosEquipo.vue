<template>
    <div class="container border p-4">
      <!-- Número de ficha y Fecha -->
      <div class="row">
        <div class="col-8"></div>
        <div class="col-4 text-end">
          <div class="mb-2">
            <label for="numFicha" class="form-label">N° Ficha:</label>
            <input
              type="text"
              id="numFicha"
              class="form-control form-control-sm"
              v-model="formData.numFicha"
            />
          </div>
          <div>
            <label for="fecha" class="form-label">Fecha:</label>
            <input
              type="date"
              id="fecha"
              class="form-control form-control-sm"
              v-model="formData.fecha"
            />
          </div>
        </div>
      </div>
  
      <!-- Datos del equipo -->
      <div class="row">
        <!-- Código Inventario -->
        <div class="col-12 mb-3">
          <label for="codigoInventario" class="form-label">Código Inventario:</label>
          <input
            type="text"
            id="codigoInventario"
            class="form-control form-control-sm"
            v-model="formData.codigoInventario"
          />
        </div>
      </div>
  
      <div class="row">
        <!-- Marca -->
        <div class="col-4">
          <label for="marca" class="form-label">Marca:</label>
          <input
            type="text"
            id="marca"
            class="form-control form-control-sm"
            v-model="formData.marca"
          />
        </div>
        <!-- Modelo -->
        <div class="col-4">
          <label for="modelo" class="form-label">Modelo:</label>
          <input
            type="text"
            id="modelo"
            class="form-control form-control-sm"
            v-model="formData.modelo"
          />
        </div>
        <!-- Serial -->
        <div class="col-4">
          <label for="serial" class="form-label">Serial:</label>
          <input
            type="text"
            id="serial"
            class="form-control form-control-sm"
            v-model="formData.serial"
          />
        </div>
      </div>
  
      <!-- Función del equipo -->
      <div class="row mt-3">
        <div class="col-12">
          <label for="funcionEquipo" class="form-label">FUNCIÓN DEL EQUIPO:</label>
          <textarea
            id="funcionEquipo"
            rows="3"
            class="form-control form-control-sm"
            v-model="formData.funcionEquipo"
          ></textarea>
        </div>
      </div>
  
      <!-- Botones -->
      <div class="row mt-4">
        <div class="col-12 text-end">
          <button class="btn btn-primary me-2" @click="guardarDatos">
            Guardar
          </button>
          <button class="btn btn-secondary" @click="limpiarDatos">
            Limpiar
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FichaDatosEquipo",
    data() {
      return {
        // Objeto para los datos del formulario
        formData: {
          numFicha: "",
          fecha: "",
          codigoInventario: "",
          marca: "",
          modelo: "",
          serial: "",
          funcionEquipo: "",
        },
      };
    },
    created() {
      // Cargar datos desde localStorage al montar el componente
      const savedData = localStorage.getItem("fichaDatosEquipo");
      if (savedData) {
        this.formData = JSON.parse(savedData);
      }
    },
    methods: {
      guardarDatos() {
        // Guardar los datos en localStorage
        localStorage.setItem("fichaDatosEquipo", JSON.stringify(this.formData));
        alert("Datos guardados correctamente en localStorage.");
      },
      limpiarDatos() {
        // Limpiar el formulario y el localStorage
        this.formData = {
          numFicha: "",
          fecha: "",
          codigoInventario: "",
          marca: "",
          modelo: "",
          serial: "",
          funcionEquipo: "",
        };
        localStorage.removeItem("fichaDatosEquipo");
        alert("Datos eliminados correctamente.");
      },
    },
  };
  </script>
  