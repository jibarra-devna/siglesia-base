import { canNavigate } from '@layouts/plugins/casl'

export const setupGuards = router => {
  // 👉 router.beforeEach
  // Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
  router.beforeEach(to => {
    /*
          * Si se trata de una ruta pública, continuar con la navegación. Este tipo de páginas pueden ser visitadas por usuarios registrados y no registrados. Básicamente, sin ninguna restricción.
          * Algunos ejemplos de rutas públicas son 404, bajo mantenimiento, etc.
          */
    if (to.meta.public)
      return

    /**
         * Verifique si el usuario ha iniciado sesión verificando si el token y los datos del usuario existen en el almacenamiento local
         * No dude en actualizar esta lógica para adaptarla a sus necesidades
         */
    const isLoggedIn = !!(useCookie('userData').value && useCookie('accessToken').value)

    /*
          Si el usuario ha iniciado sesión y está intentando acceder a la página de inicio de sesión, redirigirlo a la página de inicio
          de lo contrario, permitir la visita a la página
          (ADVERTENCIA: No permitir la ejecución posterior mediante la declaración de retorno porque el siguiente código verificará los permisos)
          */
    if (to.meta.unauthenticatedOnly) {
      if (isLoggedIn)
        return '/'
      else
        return undefined
    }
    if (!canNavigate(to) && to.matched.length) {
      /* eslint-disable indent */
            return isLoggedIn
                ? { name: 'not-authorized' }
                : {
                    name: 'login',
                    query: {
                        ...to.query,
                        to: to.fullPath !== '/' ? to.path : undefined,
                    },
                }
            /* eslint-enable indent */
    }
  })
}
