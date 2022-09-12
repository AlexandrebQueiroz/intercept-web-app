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
];
