<script setup>
import shoppingBag from '@images/cards/credit-card.png'
import paypalPrimary from '@images/cards/paypal.png'
import walletInfo from '@images/cards/wallet.png'
import IconoBautismo from '@images/icons/modulos/librosparroquiales/bautismo-icon.png'
import IconoComunion from '@images/icons/modulos/librosparroquiales/comunion-icon.png'
import IconoConfirmacion from '@images/icons/modulos/librosparroquiales/confirmacion-icon.png'
import IconoMatrimonio from '@images/icons/modulos/librosparroquiales/matrimonio-icon.png'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const reportData = [
  {
    title: 'TOTAL',
    avatarWidth: 20,
    stats: '0',
    avatarHeight: 24,
    avatarSrc: paypalPrimary,
  },
  {
    avatarWidth: 24,
    title: 'MUJERES',
    stats: '0',
    avatarHeight: 17,
    avatarSrc: shoppingBag,
  },
  {
    title: 'VARONES',
    avatarWidth: 24,
    stats: '0',
    avatarHeight: 21,
    avatarSrc: walletInfo,
  },
]
</script>

<template>
  <VRow>
    <!-- Bautismos -->
    <VCol cols="12" md="6">
      <VCard class="card-resumen">
        <div class="header-resumen d-flex justify-space-between align-center">
          <VCardTitle class="title-resumen"><b>BAUTISMOS</b></VCardTitle>
          <img :src="IconoBautismo" alt="IconoBautismo" class="header-image">
        </div>
        <VRow no-gutters>
          <VCol
            cols="12"
            sm="9"
            xl="10"
            :class="$vuetify.display.smAndUp ? 'border-e' : 'border-b'"
            style="padding-inline-end: 24px;"
          >
            <VCardText class="pb-0">
              <h5 class="text-h5 text-medium-emphasis"><b>Libro de Bautismos</b></h5>
              <p>Gestione todos los Bautismos en el sistema.</p>
              <br>
              <VRow>
                <VCol class="d-flex" cols="12" style="gap: 8px;">
                  <VBtn class="custom-btn" size="small" :to="{ name: 'librosparroquiales-bautismos' }">
                    <VIcon size="1rem" icon="bx-book" />&nbsp;Índice Bautismos
                  </VBtn>
                  <VBtn class="custom-btn" size="small" :to="{ name: 'librosparroquiales-bautismos-agregar' }">
                    <VIcon size="1rem" icon="bx-plus" />&nbsp;Añadir Bautismo
                  </VBtn>
                </VCol>
              </VRow>
            </VCardText>
          </VCol>
          <VCol
            cols="12"
            sm="3"
            xl="2"
            class="stats-section bg-var-theme-background"
          >
            <VCardText class="text-center stats-content">
              <div>
                <h4 class="text-h4 text-medium-emphasis text-dark">0</h4>
                <h6 class="text-h6 text-medium-emphasis">Total</h6>
              </div>
              <div>
                <h4 class="text-h4 text-medium-emphasis">0</h4>
                <h6 class="text-h6 text-medium-emphasis">Mujeres</h6>
              </div>
              <div>
                <h4 class="text-h4 text-medium-emphasis">0</h4>
                <h6 class="text-h6 text-medium-emphasis">Varones</h6>
              </div>
            </VCardText>
          </VCol>
        </VRow>
      </VCard>
    </VCol>
    <!-- Primera comunión -->
    <VCol cols="12" md="6">
      <VCard class="card-resumen">
        <div class="header-resumen d-flex justify-space-between align-center">
          <VCardTitle class="title-resumen"><b>PRIMERA COMUNIÓN</b></VCardTitle>
          <img :src="IconoComunion" alt="IconoComunion" class="header-image">
        </div>
        <VRow no-gutters>
          <VCol
            cols="12"
            sm="9"
            xl="10"
            :class="$vuetify.display.smAndUp ? 'border-e' : 'border-b'"
            style="padding-inline-end: 24px;"
          >
            <VCardText class="pb-0">
              <h5 class="text-h5 text-medium-emphasis"><b>Libro de Primeras Comuniones</b></h5>
              <p>Gestione todas las Comuniones en el sistema.</p>
              <br>
              <VRow>
                <VCol class="d-flex" cols="12" style="gap: 8px;">
                  <VBtn class="custom-btn" size="small" to="/librosparroquiales/primeraComunion">
                    <VIcon size="1rem" icon="bx-book" />&nbsp;Índice Comuniones
                  </VBtn>
                  <VBtn class="custom-btn" size="small" to="/librosparroquiales/agregarPrimeraComunion">
                    <VIcon size="1rem" icon="bx-plus" />&nbsp;Añadir Comunión
                  </VBtn>
                </VCol>
              </VRow>
            </VCardText>
          </VCol>
          <VCol
            cols="12"
            sm="3"
            xl="2"
            class="stats-section bg-var-theme-background"
          >
            <VCardText class="text-center stats-content">
              <div>
                <h4 class="text-h4 text-medium-emphasis text-dark">0</h4>
                <h6 class="text-h6 text-medium-emphasis">Total</h6>
              </div>
              <div>
                <h4 class="text-h4 text-medium-emphasis">0</h4>
                <h6 class="text-h6 text-medium-emphasis">Mujeres</h6>
              </div>
              <div>
                <h4 class="text-h4 text-medium-emphasis">0</h4>
                <h6 class="text-h6 text-medium-emphasis">Varones</h6>
              </div>
            </VCardText>
          </VCol>
        </VRow>
      </VCard>
    </VCol>
    <!-- Confirmaciones -->
    <VCol cols="12" md="6">
      <VCard class="card-resumen">
        <div class="header-resumen d-flex justify-space-between align-center">
          <VCardTitle class="title-resumen"><b>CONFIRMACIONES</b></VCardTitle>
          <img :src="IconoConfirmacion" alt="IconoConfirmacion" class="header-image">
        </div>
        <VRow no-gutters>
          <VCol
            cols="12"
            sm="9"
            xl="10"
            :class="$vuetify.display.smAndUp ? 'border-e' : 'border-b'"
            style="padding-inline-end: 24px;"
          >
            <VCardText class="pb-0">
              <h5 class="text-h5 text-medium-emphasis"><b>Libro de Confirmaciones</b></h5>
              <p>Gestione todas las Confirmaciones en el sistema.</p>
              <br>
              <VRow>
                <VCol class="d-flex" cols="12" style="gap: 8px;">
                  <VBtn class="custom-btn" size="small" to="/librosparroquiales/confirmaciones">
                    <VIcon size="1rem" icon="bx-book" />&nbsp;Índice Confirmaciones
                  </VBtn>
                  <VBtn class="custom-btn" size="small" to="/librosparroquiales/agregarConfirmacion">
                    <VIcon size="1rem" icon="bx-plus" />&nbsp;Añadir Confirmación
                  </VBtn>
                </VCol>
              </VRow>
            </VCardText>
          </VCol>
          <VCol
            cols="12"
            sm="3"
            xl="2"
            class="stats-section bg-var-theme-background"
          >
            <VCardText class="text-center stats-content">
              <div>
                <h4 class="text-h4 text-medium-emphasis text-dark">0</h4>
                <h6 class="text-h6 text-medium-emphasis">Total</h6>
              </div>
              <div>
                <h4 class="text-h4 text-medium-emphasis">0</h4>
                <h6 class="text-h6 text-medium-emphasis">Mujeres</h6>
              </div>
              <div>
                <h4 class="text-h4 text-medium-emphasis">0</h4>
                <h6 class="text-h6 text-medium-emphasis">Varones</h6>
              </div>
            </VCardText>
          </VCol>
        </VRow>
      </VCard>
    </VCol>
    <!-- Matrimonios -->
    <VCol cols="12" md="6">
      <VCard class="card-resumen">
        <div class="header-resumen d-flex justify-space-between align-center">
          <VCardTitle class="title-resumen"><b>MATRIMONIOS</b></VCardTitle>
          <img :src="IconoMatrimonio" alt="IconoMatrimonio" class="header-image">
        </div>
        <VRow no-gutters>
          <VCol
            cols="12"
            sm="9"
            xl="10"
            :class="$vuetify.display.smAndUp ? 'border-e' : 'border-b'"
            style="padding-inline-end: 24px;"
          >
            <VCardText class="pb-0">
              <h5 class="text-h5 text-medium-emphasis"><b>Libro de Matrimonios</b></h5>
              <p>Gestione todos los Matrimonios en el sistema.</p>
              <br>
              <VRow>
                <VCol class="d-flex" cols="12" style="gap: 8px;">
                  <VBtn class="custom-btn" size="small" to="/librosparroquiales/matrimonios">
                    <VIcon size="1rem" icon="bx-book" />&nbsp;Índice Matrimonios
                  </VBtn>
                  <VBtn class="custom-btn" size="small" to="/librosparroquiales/agregarMatrimonio">
                    <VIcon size="1rem" icon="bx-plus" />&nbsp;Añadir Matrimonio
                  </VBtn>
                </VCol>
              </VRow>
            </VCardText>
          </VCol>
          <VCol
            cols="12"
            sm="3"
            xl="2"
            class="stats-section bg-var-theme-background"
          >
            <VCardText class="text-center stats-content">
              <div>
                <h4 class="text-h4 text-medium-emphasis text-dark">0</h4>
                <h6 class="text-h6 text-medium-emphasis">Total</h6>
              </div>
              <div>
                <h4 class="text-h4 text-medium-emphasis">0</h4>
                <h6 class="text-h6 text-medium-emphasis">Mujeres</h6>
              </div>
              <div>
                <h4 class="text-h4 text-medium-emphasis">0</h4>
                <h6 class="text-h6 text-medium-emphasis">Varones</h6>
              </div>
            </VCardText>
          </VCol>
        </VRow>
      </VCard>
    </VCol>
  </VRow>
</template>

<style>
.encabezado {
  display: flex;
  background-color: #e4e9fd;
  margin-block: -10px;
  padding-block-end: 0;
}

.contenido {
  padding-block-start: 20px;
}

.card-resumen {
  overflow: hidden;
  border-radius: 8px;
}

.header-resumen {
  display: flex;
  align-items: center; /* Centra verticalmente */
  justify-content: space-between; /* Alinea el título y la imagen */
  background-color: #e4e9fd;
  padding-block: 0; /* Reducir padding para que el texto esté más cerca del borde superior */
  padding-block-start: 2px;
  padding-inline: 16px; /* Ajusta el padding según sea necesario */
}

.title-resumen {
  font-size: 1.25rem;
  margin-block: 0; /* Elimina márgenes adicionales */
  padding-inline-start: 6px;
}

.header-image {
  block-size: auto;
  inline-size: 55px; /* Ajusta el tamaño de la imagen */
}

.stats-section {
  display: flex;
  align-items: center; /* Centra verticalmente */
  padding-block: 16px;
  padding-inline: 0; /* Reduce padding superior e inferior */
}

.text-dark {
  color: #626c77;
}

.stats-content {
  margin-block-start: -10px; /* Ajusta la distancia al encabezado */
}

.custom-btn {
  background-color: #6875f5;
  color: white;
}

.custom-btn:hover {
  background-color: #5a67d8;
}
</style>
