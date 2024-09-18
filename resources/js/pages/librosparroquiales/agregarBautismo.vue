<template>
      <div style="display: grid; grid-gap: 1.25rem; grid-template-columns: 1fr 1fr;">
    <h6 class="text-h6"><span class="subtitle text-h6">Libros Parroquiales / </span> <span class="subtitle text-h6">Bautismos / </span> Agregar Bautismo</h6>
    <div style="text-align: end;">
      <a href="javascript:void(0);">
        <vBtn class="custom-btn" size="small" to="/librosparroquiales/bautismos">
          <VIcon size="1rem" icon="bx-book" />Ir al Índice
        </vBtn>
      </a>
    </div>
  </div>
  <p></p>
<!-- 👉 Kitchen Sink  -->
<VRow>
    <!-- Bautismos -->
    <VCol cols="12" md="12">
      <VCard class="card">
        <div class="header-resumen d-flex justify-space-between align-center">
          <VCardTitle class="title-resumen"><b>Datos de Bautismo</b></VCardTitle>
        </div>
      </VCard>
    </VCol>
</VRow>
</template>
