<template>
    <div class="container mt-4">    
        <table class="table table-bordered table-hover">
            <thead class="table-dark">
                <tr>
                    <th>Nombre del Equipo</th>
                    <th>Dirección IP Privada</th>
                    <th>Dirección IP Pública</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(entrada, index) in configuraciones" :key="index">
                    <td><input class="form-control" v-model="entrada.nombreEquipo" placeholder="Nombre del Equipo" />
                    </td>
                    <td><input class="form-control" v-model="entrada.ipPrivada" placeholder="Dirección IP Privada" />
                    </td>
                    <td><input class="form-control" v-model="entrada.ipPublica" placeholder="Dirección IP Pública" />
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="d-flex justify-content-between mt-3">
            <button class="btn btn-primary" @click="guardarConfiguracion">Guardar</button>
            <button class="btn btn-success" @click="cargarConfiguracion">Cargar</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            configuraciones: [
                { nombreEquipo: '', ipPrivada: '', ipPublica: '' },
                { nombreEquipo: '', ipPrivada: '', ipPublica: '' },
                { nombreEquipo: '', ipPrivada: '', ipPublica: '' },
            ],
        };
    },
    methods: {
        guardarConfiguracion() {
            localStorage.setItem('configuracionRed', JSON.stringify(this.configuraciones));
            alert('Configuración guardada en localStorage');
        },
        cargarConfiguracion() {
            const datosGuardados = localStorage.getItem('configuracionRed');
            if (datosGuardados) {
                this.configuraciones = JSON.parse(datosGuardados);
                alert('Configuración cargada desde localStorage');
            } else {
                alert('No hay datos guardados en localStorage');
            }
        },
    },
};
</script>

<style scoped>
.table th,
.table td {
    text-align: center;
}
</style>