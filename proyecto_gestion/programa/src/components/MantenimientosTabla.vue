<template>
  <div class="registro-mantenimiento">
    <h2>Registro de Mantenimiento</h2>
    <!-- Listado de tablas -->
    <div v-for="(registro, index) in registros" :key="index" class="tabla-registro">
      <table class="table table-bordered">
        <thead class="table-dark">
          <tr>
            <th>Preventivo</th>
            <th>Correctivo</th>
            <th>Realizó (Personal Interno o Contratista)</th>
            <th>Fecha (DD/MM/AAAA)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="checkbox"
                v-model="registro.preventivo"
                :id="'preventivo-' + index"
              />
            </td>
            <td>
              <input
                type="checkbox"
                v-model="registro.correctivo"
                :id="'correctivo-' + index"
              />
            </td>
            <td>
              <input
                v-model="registro.realizo"
                type="text"
                class="form-control"
                placeholder="Interno/Contratista"
              />
            </td>
            <td>
              <input v-model="registro.fecha" type="date" class="form-control" />
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Observaciones -->
      <div class="observaciones">
        <h3>Observaciones</h3>
        <textarea
          v-model="registro.observaciones"
          class="form-control"
          placeholder="Escribe tus observaciones aquí..."
        ></textarea>
      </div>
      <!-- Botón para eliminar la tabla -->
      <button class="btn btn-danger btn-sm mt-2" @click="eliminarRegistro(index)">
        Eliminar Registro
      </button>
    </div>
    <!-- Botón para agregar un nuevo registro -->
    <button class="btn btn-success mt-3" @click="agregarRegistro">Agregar Registro</button>
  </div>
</template>

<script>
export default {
  name: "RegistroMantenimiento",
  data() {
    return {
      registros: [], // Lista de registros (cada uno representa una tabla)
    };
  },
  methods: {
    // Agrega un nuevo registro vacío
    agregarRegistro() {
      this.registros.push({
        preventivo: false,
        correctivo: false,
        realizo: "",
        fecha: "",
        observaciones: "",
      });
      this.guardarEnLocalStorage();
    },
    // Elimina un registro específico
    eliminarRegistro(index) {
      this.registros.splice(index, 1);
      this.guardarEnLocalStorage();
    },
    // Guarda los registros en localStorage
    guardarEnLocalStorage() {
      localStorage.setItem("registrosMantenimiento", JSON.stringify(this.registros));
    },
    // Carga los registros desde localStorage
    cargarDesdeLocalStorage() {
      const data = localStorage.getItem("registrosMantenimiento");
      if (data) {
        this.registros = JSON.parse(data);
      }
    },
  },
  mounted() {
    // Carga los registros al montar el componente
    this.cargarDesdeLocalStorage();
  },
};
</script>

<style>
.registro-mantenimiento {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
}

.tabla-registro {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
}

textarea {
  resize: none;
}
</style> 