
<template>
      <div style="display: grid; grid-gap: 1.25rem; grid-template-columns: 1fr 1fr;">
    <h6 class="text-h6"><RouterLink :to="{ name: 'librosparroquiales-resumen' }">Libros Parroquiales</RouterLink> / <RouterLink :to="{ name: 'librosparroquiales-bautismos' }">Bautismos</RouterLink> / Agregar Bautismo</h6>
    <div style="text-align: end;">
      <a href="javascript:void(0);">
        <vBtn class="custom-btn" size="small" :to="{ name: 'librosparroquiales-bautismos' }">
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
          <h3><span style="color: #696cff; vertical-align: 1px;">━━━━━━━━━ </span><strong>Datos del Bautismo</strong></h3>
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
                <VTextField
                  v-model="fecha"
                  label="Fecha de Bautismo"
                  type="date"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="6">
                <VTextField
                  label="Hora de Bautismo"
                  type="time"
                  variant="outlined"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="6">
                <VSelect
                  label="Celebrante"
                  placeholder="Selecciona un Celebrante"
                />
              </v-col>
              <v-col cols="6">
                <VTextField
                  v-model="ParroquiaBautismo"
                  label="Parroquia"
                  variant="outlined"
                  disabled
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
              <v-col cols="6">
                <v-row>
                  <v-col cols="10">
                    <VSelect
                      label="Diócesis"
                      placeholder="Selecciona una Diócesis"
                    />
                  </v-col>
                  <v-col cols="2" class="d-flex justify-end">
                    <v-btn color="secondary" @click="agregarDiocesis">
                      <VIcon icon=" bx bx-plus" />
                    </v-btn>
                  </v-col>
                </v-row>
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
          <h3><span style="color: #696cff; vertical-align: 1px;">━━━━━━━━━ </span><strong>Datos del Registro Civil</strong></h3>
          <v-col v-for="n in 0" :key="n" cols="6" class="mb-3">
            <!-- Contenido de cada columna -->
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col cols="6">
                <v-row>
                  <v-col cols="6">
                    <VTextField
                    label="Fecha de Nacimiento"
                    type="date"
                    variant="outlined"
                  />
                  </v-col>
                  <v-col cols="6">
                    <VRadioGroup
                      v-model="sexoRegistoBa"
                      inline
                    >
                      <VRadio
                        label="Hombre"
                        value="hombre"
                      />
                      <VRadio
                        label="Mujer"
                        value="mujer"
                      />
                    </VRadioGroup>
                  </v-col>
              </v-row>
              </v-col>
              <v-col cols="6">
                <v-row>
                  <v-col cols="4">
                    <VTextField
                    label="Oficialia"
                    variant="outlined"
                  />
                  </v-col>
                  <v-col cols="4">
                    <VTextField
                    label="Libro"
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
                  label="Lugar de Nacimiento"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="6">
                <VSelect
                  label="Estado"
                  placeholder="Elige un estado"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="6">
                <VTextField
                  label="Municipio"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="6">
                <VTextField
                  label="Localidad"
                  variant="outlined"
                />
              </v-col>
            </v-row>
          </v-col>
          <br>
          <h3><span style="color: #696cff; vertical-align: 1px;">━━━━━━━━━ </span><strong>Padres</strong></h3>
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
          <h3><span style="color: #696cff; vertical-align: 1px;">━━━━━━━━━ </span><strong>Abuelos</strong></h3>
          <v-col v-for="n in 0" :key="n" cols="6" class="mb-3">
            <!-- Contenido de cada columna -->
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col cols="6">
                <VTextField
                  label="Nombre Abuelo"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="6">
                <VTextField
                  label="Nombre Nombre Abuela"
                  variant="outlined"
                />
              </v-col>
            </v-row>
          </v-col>
          <br>
          <h3><span style="color: #696cff; vertical-align: 1px;">━━━━━━━━━ </span><strong>Padrinos</strong></h3>
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
          <h3><span style="color: #696cff; vertical-align: 1px;">━━━━━━━━━ </span><strong>Testigos</strong></h3>
          <v-col v-for="n in 0" :key="n" cols="6" class="mb-3">
            <!-- Contenido de cada columna -->
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col cols="6">
                <VTextField
                  label="Nombre Testigo 1"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="6">
                <VTextField
                  label="Nombre Testigo 2"
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
      // valor fecha
      fecha: '',
      ParroquiaBautismo: 'Inmaculada Concepción de Tepic'
    };
  },
};
</script>
