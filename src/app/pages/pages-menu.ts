import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Courses',
    icon: 'book-open-outline',
    link: '/pages/courses',
    home: true,
  },
  {
    title: 'Login',
    icon: 'log-in-outline',
    link: '/pages/login',
  },

  {
    title: 'Register',
    icon: 'file-text-outline',
    link: '/pages/register',
  },
  {
    title: 'Admin',
    icon: 'person-outline',
    link: '/pages/admin',
  },
  {
    title: 'Contact us',
    icon: 'phone-outline',
    link: '/pages/contact-us',
  },
  {
    title: 'Help',
    icon: 'question-mark-circle-outline',
    url: 'mailto:bianca.antoci96@gmail.com',
  },
];
