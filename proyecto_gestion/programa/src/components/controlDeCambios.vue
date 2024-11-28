<template>
  <div class="container mt-5">
    <!-- Navegación de pestañas -->
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <button class="nav-link" :class="{ active: activeTab === 'sistema' }" @click="activeTab = 'sistema'">
          Sistema Operativo
        </button>
      </li>
      <li class="nav-item">
        <button class="nav-link" :class="{ active: activeTab === 'aplicaciones' }" @click="activeTab = 'aplicaciones'">
          Aplicaciones
        </button>
      </li>
    </ul>

    <!-- Contenido de las pestañas -->
    <div class="mt-3">
      <!-- Tabla 1: Sistema Operativo -->
      <div v-if="activeTab === 'sistema'">

        <table class="table table-bordered">
          <thead class="table-secondary">
            <tr>
              <th>No.</th>
              <th>Descripción</th>
              <th>Sistema Operativo</th>
              <th>Versión</th>
              <th>Licencia</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(sistema, index) in sistemas" :key="index">
              <td>{{ index + 1 }}</td>
              <td><input v-model="sistema.descripcion" class="form-control" /></td>
              <td><input v-model="sistema.sistemaOperativo" class="form-control" /></td>
              <td><input v-model="sistema.version" class="form-control" /></td>
              <td><input v-model="sistema.licencia" class="form-control" /></td>
              <td><input v-model="sistema.fecha" class="form-control" type="date" /></td>
              <td>
                <button class="btn btn-danger btn-sm" @click="removeRow('sistema', index)">
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Tabla 2: Aplicaciones -->
      <div v-if="activeTab === 'aplicaciones'">

        <table class="table table-bordered">
          <thead class="table-secondary">
            <tr>
              <th>No.</th>
              <th>Descripción</th>
              <th>Aplicación</th>
              <th>Versión</th>
              <th>Licencia</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(app, index) in aplicaciones" :key="index">
              <td>{{ index + 1 }}</td>
              <td><input v-model="app.descripcion" class="form-control" /></td>
              <td><input v-model="app.aplicacion" class="form-control" /></td>
              <td><input v-model="app.version" class="form-control" /></td>
              <td><input v-model="app.licencia" class="form-control" /></td>
              <td><input v-model="app.fecha" class="form-control" type="date" /></td>
              <td>
                <button class="btn btn-danger btn-sm" @click="removeRow('aplicaciones', index)">
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="activeTab === 'sistema'">
        <button class="btn btn-success mb-3" @click="addRow('sistema')">
          Agregar Fila
        </button>
      </div>
      <div v-if="activeTab === 'aplicaciones'">
        <button class="btn btn-success mb-3" @click="addRow('aplicaciones')">
          Agregar Fila
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "sistema", // Controla la pestaña activa
      sistemas: [],
      aplicaciones: [],
    };
  },
  methods: {
    // Agregar una nueva fila
    addRow(type) {
      const newRow =
        type === "sistema"
          ? {
            descripcion: "",
            sistemaOperativo: "",
            version: "",
            licencia: "",
            fecha: "",
          }
          : {
            descripcion: "",
            aplicacion: "",
            version: "",
            licencia: "",
            fecha: "",
          };

      if (type === "sistema") {
        this.sistemas.push(newRow);
        this.saveToStorage("sistemas", this.sistemas);
      } else if (type === "aplicaciones") {
        this.aplicaciones.push(newRow);
        this.saveToStorage("aplicaciones", this.aplicaciones);
      }
    },
    // Eliminar una fila
    removeRow(type, index) {
      if (type === "sistema") {
        this.sistemas.splice(index, 1);
        this.saveToStorage("sistemas", this.sistemas);
      } else if (type === "aplicaciones") {
        this.aplicaciones.splice(index, 1);
        this.saveToStorage("aplicaciones", this.aplicaciones);
      }
    },
    // Guardar los datos en localStorage
    saveToStorage(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
    },
    // Cargar los datos desde localStorage
    loadFromStorage(key) {
      return JSON.parse(localStorage.getItem(key)) || [];
    },
  },
  created() {
    // Cargar datos al iniciar el componente
    this.sistemas = this.loadFromStorage("sistemas");
    this.aplicaciones = this.loadFromStorage("aplicaciones");
  },
  watch: {
    // Monitorear cambios en los datos para guardarlos automáticamente
    sistemas: {
      handler(newVal) {
        this.saveToStorage("sistemas", newVal);
      },
      deep: true,
    },
    aplicaciones: {
      handler(newVal) {
        this.saveToStorage("aplicaciones", newVal);
      },
      deep: true,
    },
  },
};
</script>

<style>
.nav-link.active {
  background-color: #0d6efd;
  color: white;
}
</style>
