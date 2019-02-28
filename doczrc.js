import themeConfig from './theme';

export default {
  src: './src/',
  htmlContext: {
    head: {
      links: [
        { rel: 'stylesheet', href: '/public/styles/print.css' },
        { rel: 'stylesheet', href: '/public/styles/base.css' },
      ],
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
        'Hypotheses Generation',
        'Jobs To Be Done',
        'User Journey Mapping',
        'Crazy Eights',
        'Solution Sketch',
        'The Five Whys',
      ],
    },
    {
      name: 'Workshop Preparation',
      menu: [
        'Overview of todos',
        'Identify the challenge',
        'Name a decider',
        'Recruit a team',
        'Invite extra experts',
        'Pick a facilitator',
        'Block time',
        'Book a room',
        'Write a brief',
        'Set the rules',
        'Workshop Supplies',
      ],
    },
  ],
  themeConfig,
};
