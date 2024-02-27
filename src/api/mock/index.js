import rcmdComments from './data/IntroPage/rcmdComments';
import introComments from './data/IntroPage/introComments';

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, time);
  });
};
export default {
  fetchRcmdComments() {
    return fetch(rcmdComments, 3000); // wait 1s before returning posts
  },
  fetchIntroComments() {
    return fetch(introComments, 3000);
  },
};
