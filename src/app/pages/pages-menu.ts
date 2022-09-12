import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'DASHBOARD',
    group: true,
  },
  {
    title: 'Passagem/Blacklist',
    icon: 'car-outline',
    link: '/pages/passageway',
    home: true,
  },
  {
    title: 'Alertas',
    icon: 'bell-outline',
    link: '/pages/alerts',
    home: true,
  },
  {
    title: 'Mapa',
    icon: 'map-outline',
    link: '/pages/map',
    home: true,
  },
  {
    title: 'CADASTRO',
    group: true,
  },
  {
    title: 'Antenas',
    icon: 'radio-outline',
    link: '/pages/antennas',
    home: true,
  },
  {
    title: 'Regras',
    icon: 'clipboard-outline',
    link: '/pages/rules',
    home: true,
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
