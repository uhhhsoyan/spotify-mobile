export const SETTINGS_MENU = [
  'Data Saver',
  'Account',
  'Playback',
  'Explicit Content',
  'Devices',
  'Car',
  'Voice Interactions',
  'Social',
  'Connect to Apps',
  'Music Quality',
  'Storage',
  'Notifications',
  'Local Files',
  'About',
];

export const CardType = {
  'top-genres': 'top-genres',
  'podcast': 'podcast',
  'browse-all': 'browse-all',
} as const;

export type SearchCard = {
  cardTitle: string;
  cardColor: string;
  cardType: keyof typeof CardType;
}

export const SEARCH_CARDS: SearchCard[] = [
  {
    cardTitle: 'Dance/Electronic',
    cardColor: '#a3dfd3',
    cardType: 'top-genres',
  },
  {
    cardTitle: 'Pop',
    cardColor: '#b8d8b7',
    cardType: 'top-genres',
  },
  {
    cardTitle: 'Educational',
    cardColor: '#d03924',
    cardType: 'podcast',
  },
  {
    cardTitle: 'True Crime',
    cardColor: '#223160',
    cardType: 'podcast',
  },
  {
    cardTitle: 'Podcasts',
    cardColor: '#e19a40',
    cardType: 'browse-all',
  },
  {
    cardTitle: 'Made for you',
    cardColor: '#9db7c4',
    cardType: 'browse-all',
  },
  {
    cardTitle: 'COVID-19 Guide',
    cardColor: '#3245b2',
    cardType: 'browse-all',
  },
  {
    cardTitle: 'Charts',
    cardColor: '#5c8f7e',
    cardType: 'browse-all',
  },
  {
    cardTitle: 'Dance/Electronic',
    cardColor: '#a3dfd3',
    cardType: 'browse-all',
  },
  {
    cardTitle: 'Pop',
    cardColor: '#b8d8b7',
    cardType: 'browse-all',
  },
  {
    cardTitle: 'Educational',
    cardColor: '#d03924',
    cardType: 'browse-all',
  },
  {
    cardTitle: 'True Crime',
    cardColor: '#223160',
    cardType: 'browse-all',
  },
];
