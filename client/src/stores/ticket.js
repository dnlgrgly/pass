import { store } from 'react-stax';

const inspector = store({
  types: [
    {
      id: '30PERSON',
      name: {
        en: 'Monthy Budapest-pass',
        hu: 'Havi Budapest-bérlet természetes személyeknek',
      },
      price: 9500,
      validity: { minutes: 0, days: 30 },
      limitDist: 0,
    },
    {
      id: '30PUPIL',
      name: {
        en: 'Monthy Budapest-pass for pupils',
        hu: 'Havi Budapest-bérlet közoktatásban tanulóknak',
      },
      price: 3450,
      validity: { minutes: 0, days: 30 },
      limitDist: 0,
    },
    {
      id: '30BUSINESS',
      name: {
        en: 'Monthy Budapest-pass (business)',
        hu: 'Havi Budapest-bérlet nem természetes személyeknek',
      },
      price: 10500,
      validity: { minutes: 0, days: 30 },
      limitDist: 0,
    },
    {
      id: '15PERSON',
      name: {
        en: '15-day Budapest-pass',
        hu: 'Félhavi Budapest-bérlet természetes személyeknek',
      },
      price: 6300,
      validity: { minutes: 0, days: 15 },
      limitDist: 0,
    },
    {
      id: '15PUPIL',
      name: {
        en: '15-day Budapest-pass for pupils',
        hu: 'Félhavi Budapest-bérlet közoktatásban tanulóknak',
      },
      price: 2300,
      validity: { minutes: 0, days: 15 },
      limitDist: 0,
    },
    {
      id: '15BUSINESS',
      name: {
        en: '15-day Budapest-pass (business)',
        hu: 'Félhavi Budapest-bérlet nem természetes személyeknek',
      },
      price: 7000,
      validity: { minutes: 0, days: 15 },
      limitDist: 0,
    },
  ],
  fetchTypes() {},
  getType(passType) {
    switch (passType.id) {
      case '30PUPIL':
      case '15PUPIL': {
        return 'student';
      }
      case '30PERSON':
      case '15PERSON': {
        return 'private';
      }
      case '30BUSINESS':
      case '15BUSINESS': {
        return 'business';
      }
      default:
        return 'error';
    }
  },
});

export default inspector;
