"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _Busness = _interopRequireDefault(require("../components/works_compoments/ui/Busness.vue"));

var _MovieStore = _interopRequireDefault(require("../components/works_compoments/ui/MovieStore.vue"));

var _Scratch_Card = _interopRequireDefault(require("../components/works_compoments/ui/Scratch_Card.vue"));

var _Game = _interopRequireDefault(require("../components/works_compoments/ui/Game.vue"));

var _Center = _interopRequireDefault(require("../components/works_compoments/gripgic/Center.vue"));

var _Coffee_Plus = _interopRequireDefault(require("../components/works_compoments/gripgic/Coffee_Plus.vue"));

var _Lu = _interopRequireDefault(require("../components/works_compoments/gripgic/Lu.vue"));

var _Miss_Q = _interopRequireDefault(require("../components/works_compoments/gripgic/Miss_Q.vue"));

var _Monk = _interopRequireDefault(require("../components/works_compoments/gripgic/Monk.vue"));

var _Pu_e = _interopRequireDefault(require("../components/works_compoments/gripgic/Pu_e.vue"));

var _W_M = _interopRequireDefault(require("../components/works_compoments/gripgic/W_M.vue"));

var _Zeta = _interopRequireDefault(require("../components/works_compoments/gripgic/Zeta.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 在這裡把所有作品 import, 組成一個array, 改變currentWork
_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    count: 100,
    currentWork: null,
    allWorks: {
      ui: [{
        compomentName: 'busness',
        compoment: _Busness["default"]
      }, {
        compomentName: 'movie_store',
        compoment: _MovieStore["default"]
      }, {
        compomentName: 'scratch_card',
        compoment: _Scratch_Card["default"]
      }, {
        compomentName: 'game',
        compoment: _Game["default"]
      }],
      griphic: [{
        compomentName: 'pu_e',
        compoment: _Pu_e["default"]
      }, {
        compomentName: 'miss_q',
        compoment: _Miss_Q["default"]
      }, {
        compomentName: 'coffee_plus',
        compoment: _Coffee_Plus["default"]
      }, {
        compomentName: 'monk',
        compoment: _Monk["default"]
      }, {
        compomentName: 'center',
        compoment: _Center["default"]
      }, {
        compomentName: 'w_m',
        compoment: _W_M["default"]
      }, {
        compomentName: 'zeta',
        compoment: _Zeta["default"]
      }, {
        compomentName: 'lu',
        compoment: _Lu["default"]
      }]
    }
  },
  modules: {},
  mutations: {
    setCountStaus: function setCountStaus(state, payload) {
      state.count = payload;
    },
    setCurrentWorkStatus: function setCurrentWorkStatus(state, payload) {
      var url = payload.url;
      var urlArray = url.split('/');

      if (state.allWorks[urlArray[0]]) {
        var currentCompomentData = state.allWorks[urlArray[0]].find(function (item) {
          return item.compomentName === urlArray[1];
        });

        if (currentCompomentData) {
          state.currentWork = currentCompomentData.compoment;
        }
      }
    }
  },
  actions: {
    setCurrentWork: function setCurrentWork(_ref, payload) {
      var commit = _ref.commit;
      commit('setCurrentWorkStatus', payload);
    }
  },
  getters: {
    getCurrentWork: function getCurrentWork(state) {
      return state.currentWork;
    }
  }
});

exports["default"] = _default;