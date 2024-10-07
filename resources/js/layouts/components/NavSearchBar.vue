<script setup>
import { useConfigStore } from '@core/stores/config';
import Shepherd from 'shepherd.js';
import { withQuery } from 'ufo';

// Variables reactivas para fecha y hora
const currentDate = ref('')
const currentTime = ref('')

// Función para actualizar fecha y hora
const updateDateTime = () => {
  const now = new Date()

  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0') // Enero es 0
  const year = now.getFullYear()

  let hours = now.getHours()
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12 // El formato de 12 horas debe mostrar 12 en lugar de 0
  const strTime = hours + ':' + minutes + ' ' + ampm

  currentDate.value = `${day}/${month}/${year}`
  currentTime.value = strTime
}

onMounted(() => {
  // Actualiza cada segundo
  const interval = setInterval(updateDateTime, 1000)
  updateDateTime() // Llama inmediatamente para inicializar

  // Limpia el intervalo al desmontar el componente
  onBeforeUnmount(() => {
    clearInterval(interval)
  })
})
</script>

<template>
<div class="me-2" style="padding-block-start: 17px;">
          <p>Bienvenido(a) a <b>SIGLESIA</b>, hoy es <b>{{ currentDate }}</b> y son las <b>{{ currentTime }}</b></p>
        </div>
</template>
