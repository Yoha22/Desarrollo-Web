<template>
    <div class="container mt-5">
     
      
      <!-- Tabla -->
      <table class="table table-bordered">
        <thead class="table-secondary">
          <tr>
            <th>No.</th>
            <th>Área/Dependencia</th>
            <th>Responsable</th>
            <th>Fecha Instalación y/o Traslado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(fila, index) in filas" :key="index">
            <td>{{ index + 1 }}</td>
            <td><input v-model="fila.area" class="form-control" /></td>
            <td><input v-model="fila.responsable" class="form-control" /></td>
            <td><input v-model="fila.fecha" type="date" class="form-control" /></td>
            <td>
              <button
                class="btn btn-danger btn-sm"
                @click="deleteRow(index)"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Botón para agregar filas -->
    <button class="btn btn-success mb-3" @click="addRow">Agregar Fila</button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        filas: [], // Almacena las filas de la tabla
      };
    },
    methods: {
      // Agregar una nueva fila
      addRow() {
        this.filas.push({ area: "", responsable: "", fecha: "" });
        this.saveToLocalStorage();
      },
      // Eliminar una fila
      deleteRow(index) {
        this.filas.splice(index, 1);
        this.saveToLocalStorage();
      },
      // Guardar datos en localStorage
      saveToLocalStorage() {
        localStorage.setItem("tablaFilas", JSON.stringify(this.filas));
      },
      // Cargar datos desde localStorage
      loadFromLocalStorage() {
        const data = localStorage.getItem("tablaFilas");
        if (data) {
          this.filas = JSON.parse(data);
        }
      },
    },
    mounted() {
      // Cargar los datos al iniciar el componente
      this.loadFromLocalStorage();
    },
  };
  </script>
  
  <style>
  /* Opcional: Estilización personalizada */
  </style>
  