import comments from './data/IntroPage/rcmdComments';

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, time);
  });
};
export default {
  fetchRcmdComments() {
    return fetch(comments, 3000); // wait 1s before returning posts
  },
};
