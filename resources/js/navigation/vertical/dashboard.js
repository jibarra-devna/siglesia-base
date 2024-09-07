export default [
  {
    title: 'Inicio',
    icon: { icon: 'bx-home' },
    to: 'modulos'
  },
  {
    title: 'Libros Parroquiales',
    icon: { icon: 'bx-book' },
    children: [
      {
        title: 'Resumen',
        to: 'librosparroquiales-resumen',
      },
      {
        title: 'Bautismos',
        to: 'librosparroquiales-bautismos',
      },
      {
        title: 'Comuniones',
        to: 'dashboards-ecommerce',
      },
      {
        title: 'Confirmaciones',
        to: 'dashboards-academy',
      },
      {
        title: 'Matrimonios',
        to: 'dashboards-logistics',
      },
    ],
  },
  {
    title: 'Dashboards',
    icon: { icon: 'bx-home-smile' },
    children: [
      {
        title: 'Analytics',
        to: 'dashboards-analytics',
      },
      {
        title: 'CRM',
        to: 'dashboards-crm',
      },
      {
        title: 'Ecommerce',
        to: 'dashboards-ecommerce',
      },
      {
        title: 'Academy',
        to: 'dashboards-academy',
      },
      {
        title: 'Logistics',
        to: 'dashboards-logistics',
      },
    ],
    badgeContent: '5',
    badgeClass: 'bg-error',
  },
  {
    title: 'Front Pages',
    icon: { icon: 'bx-file' },
    children: [
      {
        title: 'Landing',
        to: 'front-pages-landing-page',
        target: '_blank',
      },
      {
        title: 'Pricing',
        to: 'front-pages-pricing',
        target: '_blank',
      },
      {
        title: 'Payment',
        to: 'front-pages-payment',
        target: '_blank',
      },
      {
        title: 'Checkout',
        to: 'front-pages-checkout',
        target: '_blank',
      },
      {
        title: 'Help Center',
        to: 'front-pages-help-center',
        target: '_blank',
      },
    ],
  },
]
