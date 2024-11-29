<template>
    <div class="container">
        <table class="custom-table">
            <thead>
                <tr>
                    <th>Nombre del Equipo</th>
                    <th>Direcciones IP Privadas</th>
                    <th>Direcciones IP Públicas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <!-- Nombre del Equipo -->
                    <td>
                        <input
                            class="input-cell"
                            v-model="configuracion.nombreEquipo"
                            placeholder="Nombre del Equipo"
                        />
                    </td>

                    <!-- Direcciones IP Privadas -->
                    <td>
                        <input
                            class="input-cell"
                            v-model="configuracion.ipPrivada1"
                            placeholder="IP Privada 1"
                        />
                        <input
                            class="input-cell"
                            v-model="configuracion.ipPrivada2"
                            placeholder="IP Privada 2"
                        />
                        <input
                            class="input-cell"
                            v-model="configuracion.ipPrivada3"
                            placeholder="IP Privada 3"
                        />
                    </td>

                    <!-- Direcciones IP Públicas -->
                    <td>
                        <input
                            class="input-cell"
                            v-model="configuracion.ipPublica1"
                            placeholder="IP Pública 1"
                        />
                        <input
                            class="input-cell"
                            v-model="configuracion.ipPublica2"
                            placeholder="IP Pública 2"
                        />
                        <input
                            class="input-cell"
                            v-model="configuracion.ipPublica3"
                            placeholder="IP Pública 3"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Dominio de Red -->
        <div class="dominio-red">
            <label for="dominio-red">Dominio de Red:</label>
            <input
                id="dominio-red"
                class="input-cell"
                v-model="configuracion.dominioRed"
                placeholder="Dominio de Red"
            />
        </div>
        <div class="actions">
            <button class="btn-guardar" @click="guardarConfiguracion">Guardar</button>
            <button class="btn-cargar" @click="cargarConfiguracion">Cargar</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            configuracion: {
                nombreEquipo: '',
                ipPrivada1: '',
                ipPrivada2: '',
                ipPrivada3: '',
                ipPublica1: '',
                ipPublica2: '',
                ipPublica3: '',
                dominioRed: ''
            }
        };
    },
    methods: {
        guardarConfiguracion() {
            localStorage.setItem('configuracionEquipo', JSON.stringify(this.configuracion));
            alert('Configuración guardada en localStorage');
        },
        cargarConfiguracion() {
            const datosGuardados = localStorage.getItem('configuracionEquipo');
            if (datosGuardados) {
                this.configuracion = JSON.parse(datosGuardados);
                alert('Configuración cargada desde localStorage');
            } else {
                alert('No hay datos guardados en localStorage');
            }
        }
    }
};
</script>

<style scoped>
/* Contenedor principal */
.container {
    margin: 20px auto;
    width: 90%;
    font-family: Arial, sans-serif;
}

/* Tabla */
.custom-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

.custom-table th,
.custom-table td {
    border: 1px solid black;
    text-align: left;
    padding: 10px;
    vertical-align: top;
}

.custom-table thead th {
    background-color: #e0e0e0;
    font-weight: bold;
    text-align: center;
}

/* Celdas de entrada */
.input-cell {
    width: 100%;
    margin: 5px 0;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

/* Sección del dominio de red */
.dominio-red {
    margin-top: 20px;
}

.dominio-red label {
    font-weight: bold;
    margin-right: 10px;
}

/* Botones */
.actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.btn-guardar,
.btn-cargar {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
}

.btn-guardar:hover {
    background-color: #45a049;
}

.btn-cargar {
    background-color: #2196F3;
}

.btn-cargar:hover {
    background-color: #0b7dda;
}
</style>
