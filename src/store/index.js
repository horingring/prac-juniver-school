import { createStore } from 'vuex';
import { commonStore } from './modules/commonStore';

const store = createStore({
  modules: {
    common: commonStore,
  },
});

export default store;
