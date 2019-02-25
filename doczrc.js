import themeConfig from './theme';

export default {
  htmlContext: {
    head: {
      links: [{ rel: 'stylesheet', href: '/public/styles/print.css' }],
    },
  },
  menu: [
    'The Silicon Pauli Playbook',
    {
      name: 'Processes',
      menu: [
        'Overview of processes',
        'Design Sprint',
        'Double Diamond',
      ],
    },
    {
      name: 'Plays',
      menu: [
        'Overview of plays',
        'Discover – The Five Whys',
      ],
    },
  ],
  themeConfig,
};
