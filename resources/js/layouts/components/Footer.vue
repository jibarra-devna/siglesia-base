<template>
  <div class="h-100 d-flex align-center justify-md-space-between justify-center">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center d-inline-block text-body-1 text-medium-emphasis">
      Nombre Parroquia
    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-flex align-center d-inline-block text-body-1 text-medium-emphasis">
      &copy;
      {{ new Date().getFullYear() }}
      <b>&nbsp;SIGLESIA</b>.
      Un sistema propiedad de <a
        href="https://devna.mx"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >DEVNA</a>&nbsp;| v1.0
    </span>
  </div>
</template>
