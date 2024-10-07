<script setup>
import * as demoCode from '@/views/demos/forms/tables/data-table/demoCodeDataTable';
</script>

<template>
  <div style="display: grid; grid-gap: 1.25rem; grid-template-columns: 1fr 1fr;">
    <h6 class="text-h6"><RouterLink :to="{ name: 'librosparroquiales-resumen' }">Libros Parroquiales</RouterLink> / Bautismos</h6>
    <div style="text-align: end;">
      <a href="javascript:void(0);">
        <vBtn class="custom-btn" size="small" :to="{ name: 'librosparroquiales-bautismos-agregar' }">
          <VIcon size="1rem" icon="bx-plus" />Añadir Bautismo
        </vBtn>
      </a>
    </div>
  </div>
  <p></p>
<!-- 👉 Kitchen Sink  -->
  <VRow>
    <VCol cols="12">
      <AppCardCode
        title="Bautismos"
        :code="demoCode.kitchenSink"
        no-padding
      >
        <DemoDataTableKitchenSink />
      </AppCardCode>
    </VCol>
  </VRow>
</template>

<style>
.titulos {
  padding: 20px;
}

.subtitle {
  color: #6c757d;
  font-size: 18px;
}

.dropdown-menu {
  min-inline-size: 150px;
}

.icono {
  align-items: center;
}
</style>
