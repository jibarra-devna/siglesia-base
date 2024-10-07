<script setup>
import Footer from '@/views/front-pages/footer-inicio.vue';
import Navbar from '@/views/front-pages/navbar-inicio.vue';
import { useConfigStore } from '@core/stores/config';

const store = useConfigStore()

store.skin = 'default'
definePage({
  meta: {
    layout: 'blank',
    public: true,
  },
})
</script>

<template>
  <div class="modulos">
    <Navbar />
    <VCard class="cardmodulo">
      <VContainer class="md4">
        <div class="text-center">
    <slot name="heading">
      <h3 class="text-h3">
        Bienvenido(a) a <b>SIGLESIA</b>
      </h3>
    </slot>
    <slot name="subtitle">
      <p class="subtitle mb-0">
        Seleccione un modulo para acceder al sistema.
      </p>
    </slot>
  </div>
</VContainer>

<VRow class="seccion-modulos">
    <!-- Libros Parroquiales -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard 
      flat
      border
      class="text-high-emphasis text-center"
      >
        <VCardItem class="d-flex flex-column gap-2">
          <template #prepend>
            <VAvatar
              color="primary"
              size="50"
              variant="tonal"
              rounded
            >
            <VIcon
              size="30"
              icon="bx-book"
            />
            </VAvatar>
          </template>
          <h4 class="text-h4">Libros Parroquiales</h4>
          <p class="text-base clamp-text">
            Descripción
          </p>
          <VBtn
          rounded="pill"
          variant="tonal"
          :to="{ name: 'librosparroquiales-resumen' }"
          class="boton"
          >
          Ingresar
          </VBtn>
        </VCardItem>
      </VCard>
    </VCol>

    <!-- Agenda Parroquial -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard 
      flat
      border
      class="text-high-emphasis text-center"
      >
        <VCardItem class="d-flex flex-column gap-2">
          <template #prepend>
            <VAvatar
              color="primary"
              size="50"
              variant="tonal"
              rounded
            >
            <VIcon
              size="30"
              icon="bx-calendar"
            />
            </VAvatar>
          </template>
          <h4 class="text-h4">Agenda Parroquial</h4>
          <p class="text-base clamp-text">
            Descripción
          </p>
          <VBtn
          rounded="pill"
          variant="tonal"
          to="/"
          class="boton"
          >
          Ingresar
          </VBtn>
        </VCardItem>
      </VCard>
    </VCol>

    <!-- Inventario -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard 
      flat
      border
      class="text-high-emphasis text-center"
      >
      <VChip
            :label="false"
            color="secondary"
            size="small"
            class="etiqueta"
          >
            Próximamente
          </VChip>
        <VCardItem class="d-flex flex-column gap-2">
          <template #prepend>
        <br>
            <VAvatar
              color="primary"
              size="50"
              variant="tonal"
              rounded
            >
            <VIcon
              size="30"
              icon="bx-box"
            />
            </VAvatar>
          </template>
          <h4 class="text-h4">Inventario</h4>
          <p class="text-base clamp-text">
            Descripción
          </p>
          <VBtn
          rounded="pill"
          color="secondary"
          variant="tonal"
          class="boton-block"
          >
          Ingresar
          </VBtn>
        </VCardItem>
      </VCard>
    </VCol>

    <!-- Compras -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard 
      flat
      border
      class="text-high-emphasis text-center"
      >
      <VChip
            :label="false"
            color="secondary"
            size="small"
            class="etiqueta"
          >
            Próximamente
          </VChip>
        <VCardItem class="d-flex flex-column gap-2">
          <template #prepend>
        <br>
            <VAvatar
              color="primary"
              size="50"
              variant="tonal"
              rounded
            >
            <VIcon
              size="30"
              icon="bx-cart-download"
            />
            </VAvatar>
          </template>
          <h4 class="text-h4">Compras</h4>
          <p class="text-base clamp-text">
            Descripción
          </p>
          <VBtn
          rounded="pill"
          color="secondary"
          variant="tonal"
          class="boton-block"
          >
          Ingresar
          </VBtn>
        </VCardItem>
      </VCard>
    </VCol>

    <!-- Ventas -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard 
      flat
      border
      class="text-high-emphasis text-center"
      >
      <VChip
            :label="false"
            color="secondary"
            size="small"
            class="etiqueta"
          >
            Próximamente
          </VChip>
        <VCardItem class="d-flex flex-column gap-2">
          <template #prepend>
        <br>
            <VAvatar
              color="primary"
              size="50"
              variant="tonal"
              rounded
            >
            <VIcon
              size="30"
              icon="bx-dollar"
            />
            </VAvatar>
          </template>
          <h4 class="text-h4">Ventas</h4>
          <p class="text-base clamp-text">
            Descripción
          </p>
          <VBtn
          rounded="pill"
          color="secondary"
          variant="tonal"
          class="boton-block"
          >
          Ingresar
          </VBtn>
        </VCardItem>
      </VCard>
    </VCol>
  </VRow>
    </VCard>
    <Footer class="footer" />
  </div>
</template>

<style lang="scss" scoped>
.modulos {
  display: flex;
  flex-direction: column;
  min-block-size: 100vh; // Ocupa toda la altura de la ventana

  .cardmodulo {
    flex-grow: 1; // Permite que el contenido crezca y empuje el footer hacia abajo
    padding-block-start: 100px !important;
  }

  .footer {
    margin: 20px;
    margin-block-start: auto; // Mantiene el footer en la parte inferior
    padding-block-start: 30px;
  }
}

.seccion-modulos {
  padding: 20px;
}

.subtitle {
  padding-block: 1 20px;
}

.md4 {
  flex: 0 0 33.3333%; /* 4/12 columnas */
  max-inline-size: 33.3333%;
}

.icono {
  align-content: center;
}

.boton {
  padding-inline: 70px 70px;
}

.boton-block {
  padding-inline: 70px 70px;
  pointer-events: none;
}

.etiqueta {
  position: absolute;
  margin: 0;
  inset-block-start: 10px;
  inset-inline-end: 10px;
}
</style>
