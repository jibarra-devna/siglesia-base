<template>
    <div style="display: grid; grid-gap: 1.25rem; grid-template-columns: 1fr 1fr;">
  <h6 class="text-h6"><span class="subtitle text-h6">Libros Parroquiales / </span> <span class="subtitle text-h6">Confirmaciones / </span> Agregar Confirmación</h6>
  <div style="text-align: end;">
    <a href="javascript:void(0);">
      <vBtn class="custom-btn" size="small" to="/librosparroquiales/confirmaciones">
        <VIcon size="1rem" icon="bx-book" />Ir al Índice
      </vBtn>
    </a>
  </div>
</div>
<p></p>
<!-- 👉 Kitchen Sink  -->
<v-row>
<v-col cols="12">
  <v-card md="4">
    <v-card-text>
      <v-form>
        <p></p>
        <h3><span style="color: #696cff; vertical-align:1px;">━━━━━━━━━ </span><strong>Datos del Confirmado</strong></h3>
        <v-col v-for="n in 0" :key="n" cols="6" class="mb-3">
          <!-- Contenido de cada columna -->
        </v-col>
        
        <v-col cols="12">
          <v-row>
            <v-col cols="6">
              <VTextField
              :rules="[requiredValidator, emailValidator]"
                label="Nombre"
                variant="outlined"
              />
            </v-col>
            <v-col cols="6">
              <VTextField
                label="Apellidos"
                variant="outlined"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="6">
            <v-row>
            <v-col cols="6">
              <VTextField
                v-model="fecha"
                label="Fecha de Confirmación"
                type="date"
                variant="outlined"
              />
            </v-col>
            <v-col cols="6">
              <VTextField
                label="Hora de Confirmación"
                type="time"
                variant="outlined"
              />
            </v-col>
            </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-col cols="4">
                  <VTextField
                  label="Libro"
                  variant="outlined"
                />
                </v-col>
                <v-col cols="4">
                  <VTextField
                  label="Página"
                  variant="outlined"
                />
                </v-col>
                <v-col cols="4">
                  <VTextField
                  label="Acta"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="6">
              <VTextField
                label="Grupo de Confirmación"
                variant="outlined"
              />
            </v-col>
            <v-col cols="6">
              <VSelect
                label="Celebrante"
                placeholder="Selecciona un Celebrante"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="6">
              <VSelect
                label="Como Cura Certifica"
                placeholder="Selecciona un Cura"
              />
            </v-col>
            <v-col cols="6">
              <VTextarea
                label="Notas Marginales"
                rows="3"
                placeholder="Agregar notas marginales"
                variant="outlined"
              />
            </v-col>
          </v-row>
        </v-col>
        <br>
        <h3><span style="color: #696cff; vertical-align:1px;">━━━━━━━━━ </span><strong>Datos del Bautismo</strong></h3>
        <v-col v-for="n in 0" :key="n" cols="6" class="mb-3">
          <!-- Contenido de cada columna -->
        </v-col>

        <v-col cols="12">
          <v-row>
            <v-col cols="6">
              <VTextField
                label="Bautizado en la Parroquia"
                variant="outlined"
              />
            </v-col>
            <v-col cols="6">
              <VTextField
                label="Fecha de Bautismo"
                type="date"
                variant="outlined"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="6">
              <VTextField
                label="Población Parroquia"
                variant="outlined"
              />
            </v-col>
            <v-col cols="6">
              <VSelect
                label="Estado Parroquia"
                placeholder="Elige un estado"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="6">
              <v-row>
                <v-col cols="4">
                  <VTextField
                  label="Libro"
                  variant="outlined"
                />
                </v-col>
                <v-col cols="4">
                  <VTextField
                  label="Pagina"
                  variant="outlined"
                />
                </v-col>
                <v-col cols="4">
                  <VTextField
                  label="Acta"
                  variant="outlined"
                />
                </v-col>
                </v-row>
            </v-col>
            <v-col cols="6">
                  <VTextField
                  label="Fecha de Nacimiento"
                  type="date"
                  variant="outlined"
                />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="6">
              <VTextField
                label="Diócesis"
                variant="outlined"
              />
            </v-col>
          </v-row>
        </v-col>
        <br>
        <h3><span style="color: #696cff; vertical-align:1px;">━━━━━━━━━ </span><strong>Padres</strong></h3>
        <v-col v-for="n in 0" :key="n" cols="6" class="mb-3">
          <!-- Contenido de cada columna -->
        </v-col>

        <v-col cols="12">
          <v-row>
            <v-col cols="6">
              <VTextField
                label="Nombre Padre"
                variant="outlined"
              />
            </v-col>
            <v-col cols="6">
              <VTextField
                label="Nombre Madre"
                variant="outlined"
              />
            </v-col>
          </v-row>
        </v-col>
        <br>
        <h3><span style="color: #696cff; vertical-align:1px;">━━━━━━━━━ </span><strong>Padrinos</strong></h3>
        <v-col v-for="n in 0" :key="n" cols="6" class="mb-3">
          <!-- Contenido de cada columna -->
        </v-col>

        <v-col cols="12">
          <v-row>
            <v-col cols="6">
              <VTextField
                label="Nombre Padrino"
                variant="outlined"
              />
            </v-col>
            <v-col cols="6">
              <VTextField
                label="Nombre Madrina"
                variant="outlined"
              />
            </v-col>
          </v-row>
        </v-col>
        <br>
        <v-col cols="12" class="d-flex justify-end">
          <VBtn
            type="submit"
            @click="refForm?.validate()"
          >
            Agregar
          </VBtn>
        </v-col>
      </v-form>
    </v-card-text>
  </v-card>
</v-col>
</v-row>
</template>
<script>
export default {
data() {
  return {
    //valores a los campos por medio del v-model
  };
},
};
</script>
