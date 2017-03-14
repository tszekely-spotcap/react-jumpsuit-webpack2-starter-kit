import { State } from 'jumpsuit';

const AppState = State({
  initial: {
    currentDate: new Date(),
    image: 'https://unsplash.it/1280/720?image=999'
  },

  setDate(state, newDate) {
    return {
      ...state,
      currentDate: newDate
    };
  },

  setImage(state) {
    return {
      ...state,
      image: `https://unsplash.it/1280/720?image=${Math.floor(Math.random() * (1200))}`
    }
  }
});

export default AppState;
