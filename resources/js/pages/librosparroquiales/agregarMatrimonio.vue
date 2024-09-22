<template>
    <div style="display: grid; grid-gap: 1.25rem; grid-template-columns: 1fr 1fr;">
  <h6 class="text-h6"><span class="subtitle text-h6">Libros Parroquiales / </span> <span class="subtitle text-h6">Matrimonios / </span> Agregar Matrimonio</h6>
  <div style="text-align: end;">
    <a href="javascript:void(0);">
      <vBtn class="custom-btn" size="small" to="/librosparroquiales/Matrimonios">
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
        <h3><span style="color: #696cff; vertical-align:1px;">━━━━━━━━━ </span><strong>Datos del Matrimonio</strong></h3>
        <v-col v-for="n in 0" :key="n" cols="6" class="mb-3">
          <!-- Contenido de cada columna -->
        </v-col>
        <v-col cols="12">
            <v-row>
                <v-col cols="6">
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
              <VTextField
                v-model="ParroquiaBautismo"
                label="Parroquia"
                variant="outlined"
                disabled
              />
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
        <h3><span style="color: #696cff; vertical-align:1px;">━━━━━━━━━ </span><strong>Datos del Registro Civil</strong></h3>
        <v-col v-for="n in 0" :key="n" cols="6" class="mb-3">
          <!-- Contenido de cada columna -->
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
                <v-row>
                    <v-col cols="4">
                        <VTextField
                            label="Oficialia"
                            variant="outlined"
                        />
                    </v-col>
                    <v-col cols="8">
                        <VTextField
                            label="Fecha de Registro"
                            type="date"
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
                label="Lugar de Registro"
                variant="outlined"
              />
            </v-col>
          </v-row>
        </v-col>
        <br>
        <v-col cols="12">
            <v-row>
                <v-col cols="6">
                    <h3><span style="color: #696cff; vertical-align:1px;">━━━━━━━━━ </span><strong>Datos del Novio</strong></h3>
                    <v-col v-for="n in 0" :key="n" cols="6" class="mb-3">
                    <!-- Contenido de cada columna -->
                    </v-col>
                    <v-col cols="12">
                        <v-row>
                        <v-col cols="12">
                        <VTextField
                            label="Nombre Novio"
                            variant="outlined"
                        />
                        </v-col>
                        <v-col cols="12">
                        <VTextField
                            label="Apellidos Novio"
                            variant="outlined"
                        />
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
                </v-col>
                <v-col cols="6">
                    <h3><span style="color: #696cff; vertical-align:1px;">━━━━━━━━━ </span><strong>Datos de la Novia</strong></h3>
                    <v-col v-for="n in 0" :key="n" cols="6" class="mb-3">
                    <!-- Contenido de cada columna -->
                    </v-col>
                    <v-col cols="12">
                        <v-row>
                        <v-col cols="12">
                        <VTextField
                            label="Nombre Novia"
                            variant="outlined"
                        />
                        </v-col>
                        <v-col cols="12">
                        <VTextField
                            label="Apellidos Novia"
                            variant="outlined"
                        />
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
                </v-col>
            </v-row>
        </v-col>
        <br>
        <v-col cols="12">
            <v-row>
                <v-col cols="6">
                    <h3><span style="color: #696cff; vertical-align:1px;">━━━━━━━━━ </span><strong>Padres del Novio</strong></h3>
                    <v-col v-for="n in 0" :key="n" cols="6" class="mb-3">
                    <!-- Contenido de cada columna -->
                    </v-col>
                    <v-col cols="12">
                        <v-row>
                        <v-col cols="12">
                        <VTextField
                            label="Padre"
                            variant="outlined"
                        />
                        </v-col>
                        <v-col cols="12">
                        <VTextField
                            label="Madre"
                            variant="outlined"
                        />
                        </v-col>
                    </v-row>
                    </v-col>
                </v-col>
                <v-col cols="6">
                    <h3><span style="color: #696cff; vertical-align:1px;">━━━━━━━━━ </span><strong>Padres de la Novia</strong></h3>
                    <v-col v-for="n in 0" :key="n" cols="6" class="mb-3">
                    <!-- Contenido de cada columna -->
                    </v-col>
                    <v-col cols="12">
                        <v-row>
                        <v-col cols="12">
                        <VTextField
                            label="Padre"
                            variant="outlined"
                        />
                        </v-col>
                        <v-col cols="12">
                        <VTextField
                            label="Madre"
                            variant="outlined"
                        />
                        </v-col>
                    </v-row>
                    </v-col>
                </v-col>
            </v-row>
        </v-col>
        <br>
        <v-col cols="12">
            <v-row>
                <v-col cols="6">
                    <h3><span style="color: #696cff; vertical-align:1px;">━━━━━━━━━ </span><strong>Bautismo del Novio</strong></h3>
                    <v-col v-for="n in 0" :key="n" cols="6" class="mb-3">
                    <!-- Contenido de cada columna -->
                    </v-col>
                    <v-col cols="12">
                        <v-row>
                        <v-col cols="8">
                        <VTextField
                            label="Bautizado en la Parroquia"
                            variant="outlined"
                        />
                        </v-col>
                        <v-col cols="4">
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
                                label="Estado"
                                placeholder="Selecciona un Celebrante"
                            />
                        </v-col>
                        <v-col cols="12">
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
                </v-col>
                <v-col cols="6">
                    <h3><span style="color: #696cff; vertical-align:1px;">━━━━━━━━━ </span><strong>Bautismo de la Novia</strong></h3>
                    <v-col v-for="n in 0" :key="n" cols="6" class="mb-3">
                    <!-- Contenido de cada columna -->
                    </v-col>
                    <v-col cols="12">
                        <v-row>
                        <v-col cols="8">
                        <VTextField
                            label="Bautizada en la Parroquia"
                            variant="outlined"
                        />
                        </v-col>
                        <v-col cols="4">
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
                                label="Estado"
                                placeholder="Selecciona un Celebrante"
                            />
                        </v-col>
                        <v-col cols="12">
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
        <h3><span style="color: #696cff; vertical-align:1px;">━━━━━━━━━ </span><strong>Testigos</strong></h3>
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
        <v-col cols="12">
                        <v-row>
                        <v-col cols="6">
                        <VTextField
                            label="Nombre Testigo 3"
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
