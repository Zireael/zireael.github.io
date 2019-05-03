import Vue from "vue";
import Vuex from "vuex";
import pathify from "@/store/modules/pathify"; // https://davestewart.github.io/vuex-pathify/#/setup/install
import { make } from "vuex-pathify";
import vuexPersist from "vuex-persist"; // https://github.com/championswimmer/vuex-persist  // https://alligator.io/vuejs/vuex-persist-state/
import LZString from "lz-string";
//vuex-router-sync // Sync vue-router's current $route as part of vuex store's state.
import user_settings from "@/store/modules/user_settings";

Vue.use(Vuex);

const state = {
  storeStats: { // add logic to prevent circular reference
    uncompressed: 0,
    compressed: 0,
    timeCompression: 0,
    timeDecompression: 0,
    compressionRatio: 0
  }
};

const getters = {
  ...make.getters(state) // vuex-pathify
};

const mutations = {
  // Mutations are only synchronous. Use Actions for async.
  ...make.mutations(state) // vuex-pathify
};

const actions = {
  // Mutations are only synchronous. Use Actions for async.
  ...make.actions(state) // vuex-pathify
};

const modules = {
  user_settings: user_settings
};

// for  vuex-persist
const requestIdleCallback =
  window.requestIdleCallback ||
  (cb => {
    let start = Date.now();
    return setTimeout(() => {
      let data = {
        didTimeout: false,
        timeRemaining() {
          return Math.max(0, 50 - (Date.now() - start));
        }
      };
      cb(data);
    }, 1);
  });

const vuexLocal = new vuexPersist({
  // persistent storage object
  storage: window.localStorage, // or window.sessionStorage or localForage
  key: "vuexPersistStorage_mdvresource",
  supportCircular: true,
  saveState: (key, state, storage) => {
    let compressTimeStart = Date.now();
    requestIdleCallback(() => {
      let data = JSON.stringify(state);
      store.state.storeStats.uncompressed = data.length;
      if (storage && data) {
        data = LZString.compressToUTF16(data);
        // console.log(data.length)
        store.state.storeStats.compressed = data.length
        store.state.storeStats.compressionRatio = store.state.storeStats.compressed / store.state.storeStats.uncompressed * 100
        store.state.storeStats.timeCompression = Date.now() - compressTimeStart
        // console.log(store.state.storeStats)
      }
      storage.setItem(key, data);
    });
  },
  restoreState: function(key, storage) {
    let decompressTimeStart = Date.now();
    let data = storage.getItem(key);
    if (data) {
      try {
        data = JSON.parse(LZString.decompressFromUTF16(data));
      } catch (e) {
        console.log(e)
      }
        console.log('Time to restore state: '+ (Date.now() - decompressTimeStart) + 'ms')
        return data // Could be undefined!
    }
  }
  // modules: ['user'], //only save user module
  // reducer: state => ({
  // keepThisModule: state.keepThisModule,
  // keepThisModuleToo: state.keepThisModuleToo
  // // getRidOfThisModule: state.getRidOfThisModule (No one likes it.)
  // }),
  // filter: mutation => (badMutations.indexOf(mutation.type) === -1) // Boolean
});

const plugins = [pathify.plugin, vuexLocal.plugin];
// const plugins = [pathify.plugin];

export const store = new Vuex.Store({
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins
});

// window.vmstore = store;
