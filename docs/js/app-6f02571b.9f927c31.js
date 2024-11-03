"use strict";
(self["webpackChunkpjcan"] = self["webpackChunkpjcan"] || []).push([[834],{

/***/ 81459:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81387);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96188);
/* harmony import */ var _views_onboard_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4009);
/* harmony import */ var _views_buttons_index_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8862);
/* harmony import */ var _views_options_index_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97603);





const routes = [{
  path: "/",
  name: "Onboard",
  component: _views_onboard_index_vue__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
  meta: {
    title: "onboard.title"
  }
}, {
  path: "/buttons",
  name: "Buttons",
  component: _views_buttons_index_vue__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
  meta: {
    title: "buttons.title"
  }
}, {
  path: "/options",
  name: "Options",
  component: _views_options_index_vue__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
  meta: {
    title: "options.title"
  }
}];
const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__/* .createRouter */ .aE)({
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_4__/* .createWebHistory */ .LA)("/pjcan41-app/"),
  routes
});
router.beforeEach(async (to, from, next) => {
  const title = to.meta?.title;
  document.title = "PJCAN: " + (title?.length > 0 ? (0,_lang__WEBPACK_IMPORTED_MODULE_0__.t)(title) : "");
  next();
});
/* harmony default export */ __webpack_exports__.A = (router);

/***/ }),

/***/ 35679:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ src_store; }
});

// NAMESPACE OBJECT: ./src/store/modules/app/getters.ts
var getters_namespaceObject = {};
__webpack_require__.r(getters_namespaceObject);
__webpack_require__.d(getters_namespaceObject, {
  language: function() { return language; },
  message: function() { return message; },
  messageVisible: function() { return messageVisible; },
  notify: function() { return notify; },
  onboardCards: function() { return onboardCards; },
  sw1: function() { return sw1; }
});

// NAMESPACE OBJECT: ./src/store/modules/app/mutations.ts
var mutations_namespaceObject = {};
__webpack_require__.r(mutations_namespaceObject);
__webpack_require__.d(mutations_namespaceObject, {
  messageFree: function() { return messageFree; },
  messagesClear: function() { return messagesClear; },
  setLanguage: function() { return setLanguage; },
  setMessage: function() { return setMessage; },
  setMessageVisible: function() { return setMessageVisible; },
  setNotify: function() { return setNotify; },
  setOnboardCards: function() { return setOnboardCards; },
  setSW1: function() { return setSW1; }
});

// NAMESPACE OBJECT: ./src/store/modules/app/actions.ts
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  readLanguage: function() { return readLanguage; },
  readOnboardCards: function() { return readOnboardCards; },
  readSW1: function() { return readSW1; },
  resetOnboardCards: function() { return resetOnboardCards; },
  resetSW1: function() { return resetSW1; },
  writeLanguage: function() { return writeLanguage; },
  writeOnboardCards: function() { return writeOnboardCards; },
  writeSW1: function() { return writeSW1; }
});

// NAMESPACE OBJECT: ./src/store/modules/config/getters.ts
var config_getters_namespaceObject = {};
__webpack_require__.r(config_getters_namespaceObject);
__webpack_require__.d(config_getters_namespaceObject, {
  bose: function() { return getters_bose; },
  carModel: function() { return carModel; },
  datetime: function() { return getters_datetime; },
  device: function() { return getters_device; },
  doors: function() { return getters_doors; },
  engine: function() { return getters_engine; },
  fuel: function() { return getters_fuel; },
  head: function() { return head; },
  info: function() { return info; },
  onboard: function() { return getters_onboard; },
  sw1: function() { return getters_sw1; },
  version: function() { return getters_version; },
  volume: function() { return getters_volume; }
});

// NAMESPACE OBJECT: ./src/store/modules/config/mutations.ts
var config_mutations_namespaceObject = {};
__webpack_require__.r(config_mutations_namespaceObject);
__webpack_require__.d(config_mutations_namespaceObject, {
  setBose: function() { return setBose; },
  setBoseAudioPlt: function() { return setBoseAudioPlt; },
  setBoseBalance: function() { return setBoseBalance; },
  setBoseBass: function() { return setBoseBass; },
  setBoseCenterPoint: function() { return setBoseCenterPoint; },
  setBoseEnabled: function() { return setBoseEnabled; },
  setBoseFade: function() { return setBoseFade; },
  setBoseMute: function() { return setBoseMute; },
  setBoseRadioFM: function() { return setBoseRadioFM; },
  setBoseTreble: function() { return setBoseTreble; },
  setBoseVolume: function() { return setBoseVolume; },
  setBoseVolumeStart: function() { return setBoseVolumeStart; },
  setBoseWow: function() { return setBoseWow; },
  setDatetime: function() { return setDatetime; },
  setDatetimeShowDate: function() { return setDatetimeShowDate; },
  setDatetimeShowDateAndDayWeek: function() { return setDatetimeShowDateAndDayWeek; },
  setDatetimeShowDayWeek: function() { return setDatetimeShowDayWeek; },
  setDatetimeShowFullDatetime: function() { return setDatetimeShowFullDatetime; },
  setDatetimeShowTime: function() { return setDatetimeShowTime; },
  setDatetimeShowTimeAndDayWeek: function() { return setDatetimeShowTimeAndDayWeek; },
  setDevice: function() { return setDevice; },
  setDeviceConfig: function() { return setDeviceConfig; },
  setDoors: function() { return setDoors; },
  setDoorsConfig: function() { return setDoorsConfig; },
  setEngine: function() { return setEngine; },
  setEngineConfig: function() { return setEngineConfig; },
  setFuel: function() { return setFuel; },
  setFuelRatio: function() { return setFuelRatio; },
  setHead: function() { return setHead; },
  setHeadProtocol: function() { return setHeadProtocol; },
  setHeadReverseUart: function() { return setHeadReverseUart; },
  setHeadSendButton: function() { return setHeadSendButton; },
  setHeadSendClimate: function() { return setHeadSendClimate; },
  setHeadSendDoors: function() { return setHeadSendDoors; },
  setHeadSendOnboard: function() { return setHeadSendOnboard; },
  setHeadShowTextOfLogo: function() { return setHeadShowTextOfLogo; },
  setHoldToFlip: function() { return setHoldToFlip; },
  setInfo: function() { return setInfo; },
  setOnboard: function() { return setOnboard; },
  setOnboardCarModel: function() { return setOnboardCarModel; },
  setOnboardHello: function() { return setOnboardHello; },
  setOnboardLcd: function() { return setOnboardLcd; },
  setOnboardLogo: function() { return setOnboardLogo; },
  setSW1: function() { return mutations_setSW1; },
  setSW1Button: function() { return setSW1Button; },
  setSW1Exec: function() { return setSW1Exec; },
  setSW1ExecMode: function() { return setSW1ExecMode; },
  setSW1Extended: function() { return setSW1Extended; },
  setSW1ListOfResistance: function() { return setSW1ListOfResistance; },
  setVersion: function() { return setVersion; },
  synchDatetime: function() { return synchDatetime; }
});

// NAMESPACE OBJECT: ./src/store/modules/config/actions.ts
var config_actions_namespaceObject = {};
__webpack_require__.r(config_actions_namespaceObject);
__webpack_require__.d(config_actions_namespaceObject, {
  infoUpdateLoop: function() { return infoUpdateLoop; }
});

// NAMESPACE OBJECT: ./src/store/modules/value/getters.ts
var value_getters_namespaceObject = {};
__webpack_require__.r(value_getters_namespaceObject);
__webpack_require__.d(value_getters_namespaceObject, {
  climate: function() { return getters_climate; },
  device: function() { return value_getters_device; },
  doors: function() { return value_getters_doors; },
  engine: function() { return value_getters_engine; },
  fuel: function() { return value_getters_fuel; },
  movement: function() { return getters_movement; },
  scanner: function() { return scanner; },
  scannerBuffer: function() { return scannerBuffer; },
  scannerBufferRead: function() { return scannerBufferRead; },
  sensors: function() { return getters_sensors; },
  sw1: function() { return value_getters_sw1; },
  temperature: function() { return getters_temperature; },
  test: function() { return getters_test; }
});

// NAMESPACE OBJECT: ./src/store/modules/value/mutations.ts
var value_mutations_namespaceObject = {};
__webpack_require__.r(value_mutations_namespaceObject);
__webpack_require__.d(value_mutations_namespaceObject, {
  nextScannerBuffer: function() { return nextScannerBuffer; },
  setClimate: function() { return setClimate; },
  setDevice: function() { return mutations_setDevice; },
  setDoors: function() { return mutations_setDoors; },
  setEngine: function() { return mutations_setEngine; },
  setFuel: function() { return mutations_setFuel; },
  setMovement: function() { return setMovement; },
  setSW1: function() { return value_mutations_setSW1; },
  setScanner: function() { return setScanner; },
  setScannerBuffer: function() { return setScannerBuffer; },
  setScannerBufferTitle: function() { return setScannerBufferTitle; },
  setSensors: function() { return setSensors; },
  setTemperature: function() { return setTemperature; },
  setTestText: function() { return setTestText; }
});

// NAMESPACE OBJECT: ./src/store/modules/view/getters.ts
var view_getters_namespaceObject = {};
__webpack_require__.r(view_getters_namespaceObject);
__webpack_require__.d(view_getters_namespaceObject, {
  bose: function() { return view_getters_bose; },
  climate: function() { return view_getters_climate; },
  datetime: function() { return view_getters_datetime; },
  doors: function() { return view_getters_doors; },
  engine: function() { return view_getters_engine; },
  fuel: function() { return view_getters_fuel; },
  headText: function() { return headText; },
  movement: function() { return view_getters_movement; },
  onboard: function() { return view_getters_onboard; },
  sensors: function() { return view_getters_sensors; },
  temperature: function() { return view_getters_temperature; },
  voltmeter: function() { return voltmeter; },
  worktime: function() { return worktime; }
});

// NAMESPACE OBJECT: ./src/store/modules/view/mutations.ts
var view_mutations_namespaceObject = {};
__webpack_require__.r(view_mutations_namespaceObject);
__webpack_require__.d(view_mutations_namespaceObject, {
  setBose: function() { return mutations_setBose; },
  setClimate: function() { return mutations_setClimate; },
  setDatetime: function() { return mutations_setDatetime; },
  setDoors: function() { return view_mutations_setDoors; },
  setEngine: function() { return view_mutations_setEngine; },
  setFuel: function() { return view_mutations_setFuel; },
  setHeadText: function() { return setHeadText; },
  setMovement: function() { return mutations_setMovement; },
  setOnboard: function() { return mutations_setOnboard; },
  setSensors: function() { return mutations_setSensors; },
  setTemperature: function() { return mutations_setTemperature; },
  setView: function() { return setView; },
  setVoltmeter: function() { return setVoltmeter; },
  setWorktime: function() { return setWorktime; }
});

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js
var vuex_esm_bundler = __webpack_require__(4249);
// EXTERNAL MODULE: ./src/models/pjcan/onboard/index.ts + 3 modules
var onboard = __webpack_require__(32280);
;// CONCATENATED MODULE: ./src/store/modules/app/onboard-cards-default.ts

/* harmony default export */ var onboard_cards_default = ([{
  name: "info",
  enabled: true,
  car: [onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_6_GG, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_6_GH, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7_REST, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9_REST, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_5]
}, {
  name: "bose",
  enabled: true,
  car: [onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7_REST, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9]
}, {
  name: "engine",
  enabled: true,
  car: [onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_6_GH, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7_REST, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_5]
}, {
  name: "fuel",
  enabled: true,
  car: [onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_6_GH, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7_REST, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9_REST, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_5]
}, {
  name: "movement",
  enabled: true,
  car: [onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_6_GH, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7_REST, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9_REST, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_5]
}, {
  name: "doors",
  enabled: true,
  car: [onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL]
}, {
  name: "climate",
  enabled: true,
  car: [onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_6_GH, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_6_GG, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7_REST, onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_5]
}]);
// EXTERNAL MODULE: ./src/lang/index.ts + 2 modules
var lang = __webpack_require__(96188);
;// CONCATENATED MODULE: ./src/store/modules/app/sw1-default.ts

/* harmony default export */ var sw1_default = ([{
  id: 2,
  title: (0,lang.t)("buttons.mode"),
  icon: "mdi-menu"
}, {
  id: 5,
  title: (0,lang.t)("buttons.volUp"),
  icon: "mdi-volume-plus"
}, {
  id: 6,
  title: (0,lang.t)("buttons.volDown"),
  icon: "mdi-volume-minus"
}, {
  id: 1,
  title: (0,lang.t)("buttons.volMute"),
  icon: "mdi-volume-mute"
}, {
  id: 4,
  title: (0,lang.t)("buttons.setUp"),
  icon: "mdi-play"
}, {
  id: 3,
  title: (0,lang.t)("buttons.setDown"),
  icon: "mdi-play"
}]);
;// CONCATENATED MODULE: ./src/store/modules/app/state.ts


const state = {
  language: "ru",
  messages: [],
  messageVisible: false,
  notify: false,
  onboard: null,
  onboardCards: onboard_cards_default,
  sw1: sw1_default
};
/* harmony default export */ var app_state = (state);
;// CONCATENATED MODULE: ./src/store/modules/app/getters.ts
/**
 * Язык интерфейса
 * @param state
 */
const language = state => state.language;
/**
 * Сообщение из очереди сообщений
 * @param {any} state
 */
const message = state => state.messages?.[0];
/**
 * Отображение диалога сообщения
 * @param {any} state
 */
const messageVisible = state => state.messageVisible;
/**
 * Уведомления
 * @param {any} state
 */
const notify = state => state.notify;
/**
 * Список карточек бортового компьютера
 * @param {any} state
 */
const onboardCards = state => state.onboardCards;
/**
 * Список кнопок SW1
 * @param {any} state
 */
const sw1 = state => state.sw1;
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./src/utils/debounce.ts
var debounce = __webpack_require__(1560);
;// CONCATENATED MODULE: ./src/store/modules/app/mutations.ts



const mutations_debounce = (0,debounce/* createDebounce */.S)();
/**
 * Записать значение языка интерфейса
 * @param {any} state
 * @param {boolean} value Значение
 */
const setLanguage = (state, value) => {
  state.language = value;
};
/**
 * Записать новое сообщение
 * @param state
 * @param {IMessage} msg Сообщение
 */
const setMessage = (state, msg) => {
  state.messages.push(msg);
  state.messageVisible = true;
};
/**
 * Записать статус отображения сообщения
 * @param state
 * @param {boolean} value Статус
 */
const setMessageVisible = (state, value) => {
  state.messageVisible = value;
  if (!value) {
    mutations_debounce(() => src_store.commit("app/messageFree"), 400);
  }
};
/**
 * Удалить первое сообщение из очереди сообщений
 * @param state
 */
const messageFree = state => {
  if (state.messages?.[0]) {
    state.messages.splice(0, 1);
  }
};
/**
 * Очистить очередь сообщений
 * @param state
 */
const messagesClear = state => {
  mutations_debounce(() => {}, 0);
  state.messages = [];
};
/**
 * Записать уведомление
 * @param {any} state
 * @param {boolean} value Значение
 */
const setNotify = (state, value) => {
  state.notify = value;
};
/**
 * Записать список карточек бортового компьютера
 * @param {any} state
 * @param {IOnboardCard[]} value Новый список
 */
const setOnboardCards = (state, value) => {
  state.onboardCards = [...value].map(x => ({
    ...x
  }));
};
/**
 * Записать список кнопок SW1
 * @param {any} state
 * @param {ISW1Card[]} value Новый список
 */
const setSW1 = (state, value) => {
  state.sw1 = [...value].map(x => ({
    id: x.id,
    title: x.title,
    icon: x.icon
  }));
};
;// CONCATENATED MODULE: ./src/store/modules/app/actions.ts


/**
 * Чтение языка из local storage
 * @param {any} commit
 */
const readLanguage = ({
  commit
}) => {
  const res = window.localStorage.getItem("Language");
  if (res?.length) {
    try {
      const language = JSON.parse(res);
      commit("setLanguage", language);
    } catch (e) {
      console.log(e);
    }
  }
};
/**
 * Запись языка в local storage
 * @param {any} commit
 */
const writeLanguage = ({
  getters
}) => {
  const res = JSON.stringify(getters.language);
  window.localStorage.setItem("Language", res);
};
/**
 * Чтение списка onboardCards из local storage
 * @param {any} commit
 */
const readOnboardCards = ({
  commit
}) => {
  const res = window.localStorage.getItem("OnboardCards");
  if (res?.length) {
    try {
      const onboardCards = JSON.parse(res);
      if (Array.isArray(onboardCards)) {
        commit("setOnboardCards", onboardCards);
      }
    } catch (e) {
      console.log(e);
    }
  }
};
/**
 * Запись списка onboardCards в local storage
 * @param {any} commit
 */
const writeOnboardCards = ({
  getters
}) => {
  const res = JSON.stringify(getters.onboardCards);
  window.localStorage.setItem("OnboardCardList", res);
};
/**
 * Сбросить значения списка onboardCards по умолчанию
 * @param {any} commit
 * @param {any} dispatch
 */
const resetOnboardCards = ({
  commit,
  dispatch
}) => {
  commit("setOnboardCards", onboard_cards_default);
  dispatch("writeOnboardCards");
};
/**
 * Чтение списка кнопок SW1 из local storage
 * @param {any} commit
 */
const readSW1 = ({
  commit
}) => {
  const res = window.localStorage.getItem("SW1List");
  if (res?.length) {
    try {
      const list = JSON.parse(res);
      if (Array.isArray(list)) {
        commit("setSW1", list);
      }
    } catch (e) {
      console.log(e);
    }
  }
};
/**
 * Запись списка кнопок SW1 в local storage
 * @param {any} commit
 */
const writeSW1 = ({
  getters
}) => {
  const res = JSON.stringify(getters.sw1);
  window.localStorage.setItem("SW1List", res);
};
/**
 * Сбросить значения списка кнопок SW1 по умолчанию
 * @param {any} commit
 * @param {any} dispatch
 */
const resetSW1 = ({
  commit,
  dispatch
}) => {
  commit("setSW1", sw1_default);
  dispatch("writeSW1");
};
;// CONCATENATED MODULE: ./src/store/modules/app/index.ts




/* harmony default export */ var app = ({
  namespaced: true,
  state: app_state,
  getters: getters_namespaceObject,
  mutations: mutations_namespaceObject,
  actions: actions_namespaceObject
});
// EXTERNAL MODULE: ./src/models/pjcan/device/index.ts + 8 modules
var device = __webpack_require__(29801);
// EXTERNAL MODULE: ./src/models/pjcan/head-unit/index.ts + 3 modules
var head_unit = __webpack_require__(19661);
// EXTERNAL MODULE: ./src/models/pjcan/buttons/index.ts + 7 modules
var buttons = __webpack_require__(84596);
// EXTERNAL MODULE: ./src/models/pjcan/bose/index.ts + 2 modules
var bose = __webpack_require__(89100);
// EXTERNAL MODULE: ./src/models/pjcan/doors/index.ts + 2 modules
var doors = __webpack_require__(84582);
// EXTERNAL MODULE: ./src/models/pjcan/engine/index.ts + 3 modules
var engine = __webpack_require__(76300);
// EXTERNAL MODULE: ./src/models/pjcan/fuel/index.ts + 3 modules
var fuel = __webpack_require__(59461);
// EXTERNAL MODULE: ./src/models/pjcan/volume/index.ts + 1 modules
var volume = __webpack_require__(82882);
// EXTERNAL MODULE: ./src/models/pjcan/version/index.ts + 1 modules
var version = __webpack_require__(55800);
// EXTERNAL MODULE: ./src/models/pjcan/datetime/index.ts + 1 modules
var datetime = __webpack_require__(9917);
;// CONCATENATED MODULE: ./src/store/modules/config/state.ts











const state_state = {
  version: new version/* Version */.Rx(),
  info: new device/* DeviceInfo */.Vj(),
  device: new device/* DeviceConfig */.pM(),
  onboard: new onboard/* OnboardConfig */.ST(),
  head: new head_unit/* HeadUnitConfig */.Hq(),
  sw1: new buttons/* SW1Config */.uK(),
  bose: new bose/* BoseConfig */.gh(),
  doors: new doors/* DoorsConfig */.O4(),
  engine: new engine/* EngineConfig */.zZ(),
  fuel: new fuel/* FuelConfig */.ll(),
  volume: new volume/* VolumeValue */.Y$(),
  datetime: new datetime/* DatetimeConfig */.Cv()
};
/* harmony default export */ var config_state = (state_state);
;// CONCATENATED MODULE: ./src/store/modules/config/getters.ts

/**
 * Версия прошивки
 * @param {any} state
 */
const getters_version = state => state.version;
/**
 * Информация об устройстве
 * @param {any} state
 */
const info = state => state.info;
/**
 * Конфигурация устройства
 * @param {any} state
 */
const getters_device = state => state.device;
/**
 * Конфигурация автомобиля
 * @param {any} state
 */
const getters_onboard = state => state.onboard;
/**
 * Модель автомобиля
 * @param {any} state
 */
const carModel = state => state.onboard.isData ? state.onboard.carModel : onboard/* TCarModel */.oB.CAR_MODEL_UNKNOWN;
/**
 * Конфигурация Head Unit
 * @param {any} state
 */
const head = state => state.head;
/**
 * Конфигурация кнопок sw1
 * @param {any} state
 */
const getters_sw1 = state => state.sw1;
/**
 * Конфигурация Bose
 * @param {any} state
 */
const getters_bose = state => state.bose;
/**
 * Конфигурация дверей
 * @param {any} state
 */
const getters_doors = state => state.doors;
/**
 * Конфигурация ДВС
 * @param {any} state
 */
const getters_engine = state => state.engine;
/**
 * Конфигурация расхода
 * @param {any} state
 */
const getters_fuel = state => state.fuel;
/**
 * Конфигурация уровня звука
 * @param {any} state
 */
const getters_volume = state => state.volume;
/**
 * Конфигурация даты и времени
 * @param {any} state
 */
const getters_datetime = state => state.datetime;
// EXTERNAL MODULE: ./src/api/canbus.ts + 2 modules
var canbus = __webpack_require__(62774);
;// CONCATENATED MODULE: ./src/store/modules/config/mutations.ts

/**
 * Записать версию прошивки
 * @param {any} state
 * @param {DataView} data Данные
 */
const setVersion = (state, data) => {
  state.version.set(data);
};
/**
 * Изменить информацию об устройстве
 * @param {any} state
 * @param {DataView} data Данные
 */
const setInfo = (state, data) => {
  state.info.set(data);
};
/**
 * Изменить информацию устройства
 * @param {any} state
 * @param {DataView} data Данные
 */
const setDevice = (state, data) => {
  state.device.set(data);
};
/**
 * Device: Конфигурация
 * @param state
 * @param disableLedWork
 * @param disableReverse
 * @param disableRPosition
 * @param disableAmpIllum
 * @param disableVoltmeter
 * @param calibrationOfVoltmeter
 */
const setDeviceConfig = (state, {
  disableLedWork,
  disableReverse,
  disableRPosition,
  disableAmpIllum,
  disableVoltmeter,
  calibrationOfVoltmeter
}) => {
  if (state.device.isData) {
    state.device.disableLedWork = disableLedWork;
    state.device.disableReverse = disableReverse;
    state.device.disableRPosition = disableRPosition;
    state.device.disableAmpIllum = disableAmpIllum;
    state.device.disableVoltmeter = disableVoltmeter;
    state.device.calibrationOfVoltmeter = calibrationOfVoltmeter;
    canbus/* default */.A.query(state.device);
  }
};
/**
 * Изменить конфигурацию автомобиля
 * @param {any} state
 * @param {DataView} data Данные
 */
const setOnboard = (state, data) => {
  state.onboard.set(data);
};
/**
 * Onboard: CarModel
 * @param {any} state
 * @param {TCarModel} value Новое значение
 */
const setOnboardCarModel = (state, value) => {
  if (state.onboard.isData) {
    state.onboard.carModel = value;
    canbus/* default */.A.query(state.onboard);
    canbus/* default */.A.query(state.sw1, true);
  }
};
/**
 * Onboard: LCD
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setOnboardLcd = (state, value) => {
  if (state.onboard.isData) {
    state.onboard.lcd = value;
    canbus/* default */.A.query(state.onboard);
  }
};
/**
 * Onboard: Logo
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setOnboardLogo = (state, value) => {
  if (state.onboard.isData) {
    state.onboard.logo = value;
    canbus/* default */.A.query(state.onboard);
  }
};
/**
 * Onboard: Hello
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setOnboardHello = (state, value) => {
  if (state.onboard.isData) {
    state.onboard.hello = value;
    canbus/* default */.A.query(state.onboard);
  }
};
/**
 * Изменить конфигурацию Head Unit
 * @param {any} state
 * @param {DataView} data Данные
 */
const setHead = (state, data) => {
  state.head.set(data);
};
/**
 * Head Unit: Protocol
 * @param {any} state
 * @param {TProtocol} value Новое значение
 */
const setHeadProtocol = (state, value) => {
  if (state.head.isData) {
    state.head.protocol = value;
    canbus/* default */.A.query(state.head);
  }
};
/**
 * Head Unit: ReverseUart
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setHeadReverseUart = (state, value) => {
  if (state.head.isData) {
    state.head.reverseUart = value;
    canbus/* default */.A.query(state.head);
  }
};
/**
 * Head Unit: SendButton
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setHeadSendButton = (state, value) => {
  if (state.head.isData) {
    state.head.sendButton = value;
    canbus/* default */.A.query(state.head);
  }
};
/**
 * Head Unit: SendClimate
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setHeadSendClimate = (state, value) => {
  if (state.head.isData) {
    state.head.sendClimate = value;
    canbus/* default */.A.query(state.head);
  }
};
/**
 * Head Unit: SendDoors
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setHeadSendDoors = (state, value) => {
  if (state.head.isData) {
    state.head.sendDoors = value;
    canbus/* default */.A.query(state.head);
  }
};
/**
 * Head Unit: SendOnboard
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setHeadSendOnboard = (state, value) => {
  if (state.head.isData) {
    state.head.sendOnboard = value;
    canbus/* default */.A.query(state.head);
  }
};
/**
 * Head Unit: HoldToFlip
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setHoldToFlip = (state, value) => {
  if (state.head.isData) {
    state.head.holdToFlip = value;
    canbus/* default */.A.query(state.head);
  }
};
/**
 * Head Unit: ShowTextOfLogo
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setHeadShowTextOfLogo = (state, value) => {
  if (state.head.isData) {
    state.head.showTextOfLogo = value;
    canbus/* default */.A.query(state.head);
  }
};
/**
 * Изменить конфигурацию кнопок sw1
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setSW1 = (state, data) => {
  state.sw1.set(data);
};
/**
 * SW1: SetButton
 * @param {any} state
 * @param {ISW1ConfigButton} value Новое значение
 */
const setSW1Button = (state, value) => {
  if (state.sw1.isData && state.sw1.setButton(value)) canbus/* default */.A.query(state.sw1);
};
/**
 * SW1: Изменить список сопротивлений кнопок
 * @param {any} state
 * @param {number[]} list Новое значение
 */
const setSW1ListOfResistance = (state, list) => {
  if (state.sw1.isData && state.sw1.buttons.length === list.length) {
    for (let i = 0; i < list.length; i++) state.sw1.buttons[i].resistanceTo = list[i];
    canbus/* default */.A.query(state.sw1);
  }
};
/**
 * SW1: Изменить расширенный режим кнопки
 * @param {any} state
 * @param {any} value Новое значение
 */
const setSW1Extended = (state, {
  id,
  value
}) => {
  if (state.sw1.isData) {
    const button = state.sw1.buttons.find(x => x.id === id);
    if (button) {
      button.extended = value;
      canbus/* default */.A.query(state.sw1);
    }
  }
};
/**
 * SW1: Изменить функцию кнопки
 * @param {any} state
 * @param {any} value Новое значение
 */
const setSW1Exec = (state, {
  id,
  value
}) => {
  if (state.sw1.isData) {
    const button = state.sw1.buttons.find(x => x.id === id);
    if (button) {
      button.exec = value;
      canbus/* default */.A.query(state.sw1);
    }
  }
};
/**
 * SW1: Изменить функцию кнопки расширенного режима
 * @param {any} state
 * @param {any} value Новое значение
 */
const setSW1ExecMode = (state, {
  id,
  value
}) => {
  if (state.sw1.isData) {
    const button = state.sw1.buttons.find(x => x.id === id);
    if (button) {
      button.execMode = value;
      canbus/* default */.A.query(state.sw1);
    }
  }
};
/**
 * Изменить конфигурацию Bose
 * @param {any} state
 * @param {DataView} data Данные
 */
const setBose = (state, data) => {
  state.bose.set(data);
};
/**
 * Включить/выключить Bose
 * @param {any} state
 * @param {boolean} value Значение
 */
const setBoseEnabled = (state, value) => {
  if (state.bose.isData) {
    state.bose.on = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Выкл/вкл звук Bose
 * @param {any} state
 * @param {boolean} value Значение
 */
const setBoseMute = (state, value) => {
  if (state.bose.isData) {
    state.bose.mute = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Уровень звука Bose
 * @param {any} state
 * @param {boolean} value Значение
 */
const setBoseVolume = (state, value) => {
  if (state.bose.isData) {
    state.bose.volume = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: AudioPilot
 * @param {any} state
 * @param {boolean} value Значение
 */
const setBoseAudioPlt = (state, value) => {
  if (state.bose.isData) {
    state.bose.audioPlt = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: RadioFM
 * @param {any} state
 * @param {boolean} value Значение
 */
const setBoseRadioFM = (state, value) => {
  if (state.bose.isData) {
    state.bose.radioFM = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: Звук wow
 * @param {any} state
 * @param {boolean} value Значение
 */
const setBoseWow = (state, value) => {
  if (state.bose.isData) {
    state.bose.wow = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: Balance
 * @param {any} state
 * @param {number} value Значение
 */
const setBoseBalance = (state, value) => {
  if (state.bose.isData) {
    state.bose.balance = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: Bass
 * @param {any} state
 * @param {number} value Значение
 */
const setBoseBass = (state, value) => {
  if (state.bose.isData) {
    state.bose.bass = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: Fade
 * @param {any} state
 * @param {number} value Значение
 */
const setBoseFade = (state, value) => {
  if (state.bose.isData) {
    state.bose.fade = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: Treble
 * @param {any} state
 * @param {number} value Значение
 */
const setBoseTreble = (state, value) => {
  if (state.bose.isData) {
    state.bose.treble = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: CenterPoint
 * @param {any} state
 * @param {TCenterPoint} value Значение
 */
const setBoseCenterPoint = (state, value) => {
  if (state.bose.isData) {
    state.bose.centerPoint = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: Volume Start
 * @param {any} state
 * @param {boolean} value Значение
 */
const setBoseVolumeStart = (state, {
  enabled,
  level
}) => {
  if (state.bose.isData) {
    state.bose.start = enabled;
    state.bose.start_volume = level;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Изменить конфигурацию дверей
 * @param {any} state
 * @param {DataView} data Данные
 */
const setDoors = (state, data) => {
  state.doors.set(data);
};
/**
 * Doors: FrontReverse, BackReverse, FrontBackReverse
 * @param {any} state
 * @param {any} value Значение
 */
const setDoorsConfig = (state, {
  frontReverse,
  backReverse,
  frontBackReverse
}) => {
  if (state.doors.isData) {
    state.doors.frontReverse = frontReverse;
    state.doors.backReverse = backReverse;
    state.doors.frontBackReverse = frontBackReverse;
    canbus/* default */.A.query(state.doors);
  }
};
/**
 * Изменить конфигурацию ДВС
 * @param {any} state
 * @param {DataView} data Данные
 */
const setEngine = (state, data) => {
  state.engine.set(data);
};
/**
 * Изменить значения конфигурации ДВС
 * @param {any} state
 * @param {IEngineConfig} value Новые значения
 */
const setEngineConfig = (state, {
  showDays,
  totalWorktime,
  totalCountRPM
}) => {
  if (state.engine.isData) {
    state.engine.showDays = showDays;
    state.engine.totalWorktime = totalWorktime;
    state.engine.totalCountRPM = totalCountRPM;
    canbus/* default */.A.query(state.engine);
  }
};
/**
 * Изменить конфигурацию расхода
 * @param {any} state
 * @param {DataView} data Данные
 */
const setFuel = (state, data) => {
  state.fuel.set(data);
};
/**
 * Fuel: Ratio
 * @param {any} state
 * @param {number} value Новое значение
 */
const setFuelRatio = (state, value) => {
  if (state.fuel.isData) {
    state.fuel.ratio = value;
    canbus/* default */.A.query(state.fuel);
  }
};
/**
 * Изменить конфигурацию даты и времени
 * @param {any} state
 * @param {DataView} data Данные
 */
const setDatetime = (state, data) => {
  state.datetime.set(data);
};
/**
 * Синхронизация даты и времени
 * @param {any} state
 */
const synchDatetime = state => {
  state.datetime.updateUnixtime();
  canbus/* default */.A.query(state.datetime);
};
/**
 * Datetime: ShowDate
 * @param {any} state
 * @param {boolean} value Значение
 */
const setDatetimeShowDate = (state, value) => {
  if (state.datetime.isData) {
    state.datetime.showDate = value;
    synchDatetime(state);
  }
};
/**
 * Datetime: ShowTime
 * @param {any} state
 * @param {boolean} value Значение
 */
const setDatetimeShowTime = (state, value) => {
  if (state.datetime.isData) {
    state.datetime.showTime = value;
    synchDatetime(state);
  }
};
/**
 * Datetime: ShowDayWeek
 * @param {any} state
 * @param {boolean} value Значение
 */
const setDatetimeShowDayWeek = (state, value) => {
  if (state.datetime.isData) {
    state.datetime.showDayWeek = value;
    synchDatetime(state);
  }
};
/**
 * Datetime: ShowDateAndDayWeek
 * @param {any} state
 * @param {boolean} value Значение
 */
const setDatetimeShowDateAndDayWeek = (state, value) => {
  if (state.datetime.isData) {
    state.datetime.showDateAndDayWeek = value;
    synchDatetime(state);
  }
};
/**
 * Datetime: ShowTimeAndDayWeek
 * @param {any} state
 * @param {boolean} value Значение
 */
const setDatetimeShowTimeAndDayWeek = (state, value) => {
  if (state.datetime.isData) {
    state.datetime.showTimeAndDayWeek = value;
    synchDatetime(state);
  }
};
/**
 * Datetime: ShowFullDatetime
 * @param {any} state
 * @param {boolean} value Значение
 */
const setDatetimeShowFullDatetime = (state, value) => {
  if (state.datetime.isData) {
    state.datetime.showFullDatetime = value;
    synchDatetime(state);
  }
};
;// CONCATENATED MODULE: ./src/store/modules/config/actions.ts

let loop;
/**
 * Циклическое обновление информацию об устройстве, каждые 10 сек.
 * @param getters
 * @param {boolean} enabled Запустить цикл обновления
 */
const infoUpdateLoop = ({
  getters
}, enabled) => {
  if (enabled) {
    if (!loop) loop = setInterval(() => canbus/* default */.A.query(getters.info, true), 10000);
    canbus/* default */.A.query(getters.info, true);
  } else {
    clearInterval(loop);
    loop = undefined;
  }
};
;// CONCATENATED MODULE: ./src/store/modules/config/index.ts




/* harmony default export */ var config = ({
  namespaced: true,
  state: config_state,
  getters: config_getters_namespaceObject,
  mutations: config_mutations_namespaceObject,
  actions: config_actions_namespaceObject
});
// EXTERNAL MODULE: ./src/models/pjcan/climate/index.ts + 1 modules
var climate = __webpack_require__(72418);
// EXTERNAL MODULE: ./src/models/pjcan/movement/index.ts + 2 modules
var movement = __webpack_require__(14753);
// EXTERNAL MODULE: ./src/models/pjcan/sensors/index.ts + 2 modules
var sensors = __webpack_require__(57411);
// EXTERNAL MODULE: ./src/models/pjcan/temperature/index.ts + 1 modules
var temperature = __webpack_require__(42570);
// EXTERNAL MODULE: ./src/models/pjcan/test/index.ts + 1 modules
var test = __webpack_require__(62805);
;// CONCATENATED MODULE: ./src/store/modules/value/state.ts










const value_state_state = {
  sw1: new buttons/* SWValue */.sV(),
  climate: new climate/* ClimateValue */.lA(),
  device: new device/* DeviceValue */.In(),
  doors: new doors/* DoorsValue */.VT(),
  engine: new engine/* EngineValue */.mI(),
  fuel: new fuel/* FuelValue */.Sh(),
  movement: new movement/* MovementValue */.v5(),
  sensors: new sensors/* SensorsValue */.fX(),
  temperature: new temperature/* TemperatureValue */.sY(),
  scanner: new device/* DeviceScannerValue */.G4(),
  scannerBuffer: [],
  scannerBufferReadNumber: 30,
  test: new test/* TestValue */.SZ()
};
/* harmony default export */ var value_state = (value_state_state);
;// CONCATENATED MODULE: ./src/store/modules/value/getters.ts
/**
 * Значения кнопки sw1
 * @param {any} state
 */
const value_getters_sw1 = state => state.sw1;
/**
 * Значения климата
 * @param {any} state
 */
const getters_climate = state => state.climate;
/**
 * Значения устройства
 * @param {any} state
 */
const value_getters_device = state => state.device;
/**
 * Значения дверей
 * @param {any} state
 */
const value_getters_doors = state => state.doors;
/**
 * Значения ДВС
 * @param {any} state
 */
const value_getters_engine = state => state.engine;
/**
 * Значения расхода
 * @param {any} state
 */
const value_getters_fuel = state => state.fuel;
/**
 * Значения движения
 * @param {any} state
 */
const getters_movement = state => state.movement;
/**
 * Значения датчиков
 * @param {any} state
 */
const getters_sensors = state => state.sensors;
/**
 * Значения температуры
 * @param {any} state
 */
const getters_temperature = state => state.temperature;
/**
 * Значения сканера
 * @param {any} state
 */
const scanner = state => state.scanner;
/**
 * Значения буфера сканера
 * @param {any} state
 */
const scannerBuffer = state => state.scannerBuffer;
/**
 * Чтение 30-ти элементов буфера сканера
 * @param {any} state
 */
const scannerBufferRead = state => state.scannerBuffer.slice(0, state.scannerBufferReadNumber);
/**
 * Значение теста
 * @param {any} state
 */
const getters_test = state => state.test;
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(49148);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/utils/conversion.ts
var conversion = __webpack_require__(77503);
;// CONCATENATED MODULE: ./src/store/modules/value/mutations.ts




/**
 * Записать значения кнопки sw1
 * @param {any} state
 * @param {DataView} data Данные
 */
const value_mutations_setSW1 = (state, data) => {
  state.sw1.set(data);
};
/**
 * Записать значения климата
 * @param {any} state
 * @param {DataView} data Данные
 */
const setClimate = (state, data) => {
  state.climate.set(data);
};
/**
 * Записать значения устройства
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setDevice = (state, data) => {
  state.device.set(data);
};
/**
 * Записать значения дверей
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setDoors = (state, data) => {
  state.doors.set(data);
};
/**
 * Записать значения ДВС
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setEngine = (state, data) => {
  state.engine.set(data);
};
/**
 * Записать значения расхода
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setFuel = (state, data) => {
  state.fuel.set(data);
};
/**
 * Записать значения движения
 * @param {any} state
 * @param {DataView} data Данные
 */
const setMovement = (state, data) => {
  state.movement.set(data);
};
/**
 * Записать значения датчиков
 * @param {any} state
 * @param {DataView} data Данные
 */
const setSensors = (state, data) => {
  state.sensors.set(data);
};
/**
 * Записать значения температуры
 * @param {any} state
 * @param {DataView} data Данные
 */
const setTemperature = (state, data) => {
  state.temperature.set(data);
};
/**
 * Записать значения сканера
 * @param {any} state
 * @param {DataView} data Данные
 */
const setScanner = (state, data) => {
  state.scanner.set(data);
  setScannerBuffer(state, false);
};
/**
 * Записать значения сканирования в буфер
 * @param {any} state
 * @param {boolean} free Очистить данные перед записью
 */
const setScannerBuffer = (state, free) => {
  if (free) state.scannerBuffer = [];
  if (state.scanner.isData && state.scanner.count > 0) {
    state.scannerBuffer.push(...state.scanner.frames.slice(0, state.scanner.count).map(x => {
      const mm = moment_default().duration(Number(x.timestamp), "milliseconds");
      const mm_time = {
        hours: mm.hours(),
        minutes: mm.minutes(),
        seconds: mm.seconds(),
        milliseconds: mm.milliseconds()
      };
      return {
        datetime: moment_default()().format("YYYY.MM.DD HH:mm:ss"),
        time: mm_time.hours + ":" + (mm_time.minutes < 10 ? "0" : "") + mm.minutes() + ":" + (mm_time.seconds < 10 ? "0" : "") + mm.seconds() + "." + (mm_time.milliseconds < 10 ? "00" : mm_time.milliseconds < 100 ? "0" : "") + mm.milliseconds(),
        hexId: "0x" + (0,conversion/* toHex */.nj)(x.id),
        hexData: "0x" + x.data.map(x => (0,conversion/* toHex */.nj)(x)).join(":")
      };
    }));
  }
};
/**
 * Записать заголовок в буфер
 * @param {any} state
 * @param {string} value Текст
 */
const setScannerBufferTitle = (state, value) => {
  state.scannerBuffer.push({
    datetime: value,
    time: "",
    hexId: "",
    hexData: ""
  });
};
const nextScannerBuffer = (state, readNumber) => {
  state.scannerBuffer.splice(0, readNumber > 0 ? readNumber : state.scannerBufferReadNumber);
};
/**
 * Записать значения теста
 * @param {any} state
 * @param {string} value Тест
 */
const setTestText = (state, value) => {
  state.test.text = value;
  canbus/* default */.A.query(state.test);
};
;// CONCATENATED MODULE: ./src/store/modules/value/index.ts



// import * as actions from "./actions";
/* harmony default export */ var value = ({
  namespaced: true,
  state: value_state,
  getters: value_getters_namespaceObject,
  mutations: value_mutations_namespaceObject
  // actions
});
// EXTERNAL MODULE: ./src/models/pjcan/view/index.ts + 2 modules
var view = __webpack_require__(77813);
;// CONCATENATED MODULE: ./src/store/modules/view/state.ts













const view_state_state = {
  worktime: new view/* ViewConfig */.i(device/* API_DEVICE_VIEW_WORKTIME_EXEC */.J2),
  voltmeter: new view/* ViewConfig */.i(device/* API_DEVICE_VIEW_VOLTMETER_EXEC */.ru),
  onboard: new view/* ViewConfig */.i(onboard/* API_ONBOARD_VIEW_EXEC */.F5),
  headText: new view/* ViewConfig */.i(head_unit/* API_HEAD_UNIT_VIEW_EXEC */.NA),
  bose: new view/* ViewConfig */.i(bose/* API_BOSE_VIEW_EXEC */.xT),
  climate: new view/* ViewConfig */.i(climate/* API_CLIMATE_VIEW_EXEC */.zE),
  doors: new view/* ViewConfig */.i(doors/* API_DOORS_VIEW_EXEC */.zD),
  engine: new engine/* EngineViews */.Du(),
  fuel: new fuel/* FuelViews */.hM(),
  movement: new movement/* MovementViews */.UA(),
  sensors: new sensors/* SensorsViews */.IS(),
  temperature: new view/* ViewConfig */.i(temperature/* API_TEMPERATURE_VIEW_EXEC */.EO),
  datetime: new view/* ViewConfig */.i(datetime/* API_DATETIME_VIEW_EXEC */.Bm)
};
/* harmony default export */ var view_state = (view_state_state);
;// CONCATENATED MODULE: ./src/store/modules/view/getters.ts
/**
 * Значения отображения времени работы устройства
 * @param {any} state
 */
const worktime = state => state.worktime;
/**
 * Значения отображения напряжения бортовой сети
 * @param {any} state
 */
const voltmeter = state => state.voltmeter;
/**
 * Значения отображения автомобиля
 * @param {any} state
 */
const view_getters_onboard = state => state.onboard;
/**
 * Значения отображения текста ГУ
 * @param {any} state
 */
const headText = state => state.headText;
/**
 * Значения отображения Bose
 * @param {any} state
 */
const view_getters_bose = state => state.bose;
/**
 * Значения отображения климата
 * @param {any} state
 */
const view_getters_climate = state => state.climate;
/**
 * Значения отображения дверей
 * @param {any} state
 */
const view_getters_doors = state => state.doors;
/**
 * Значения отображения ДВС
 * @param {any} state
 */
const view_getters_engine = state => state.engine;
/**
 * Значения отображения расхода
 * @param {any} state
 */
const view_getters_fuel = state => state.fuel;
/**
 * Значения отображения движения
 * @param {any} state
 */
const view_getters_movement = state => state.movement;
/**
 * Значения отображения датчиков
 * @param {any} state
 */
const view_getters_sensors = state => state.sensors;
/**
 * Значения отображения температуры
 * @param {any} state
 */
const view_getters_temperature = state => state.temperature;
/**
 * Значения отображения даты и времени
 * @param {any} state
 */
const view_getters_datetime = state => state.datetime;
;// CONCATENATED MODULE: ./src/store/modules/view/mutations.ts


/**
 * Записать значения отображения
 * @param {any} state
 * @param {IViewConfig} value
 */
const setView = (state, {
  exec,
  enabled,
  type,
  time,
  delay
}) => {
  const res = new view/* ViewConfig */.i(exec);
  res.enabled = enabled;
  res.type = type;
  res.time = time;
  res.delay = delay;
  canbus/* default */.A.query(res);
};
/**
 * Записать значения отображения времени работы устройства
 * @param {any} state
 * @param {DataView} data Данные
 */
const setWorktime = (state, data) => {
  state.worktime.set(data);
};
/**
 * Записать значения отображения напряжения бортовой сети
 * @param {any} state
 * @param {DataView} data Данные
 */
const setVoltmeter = (state, data) => {
  state.voltmeter.set(data);
};
/**
 * Записать значения отображения автомобиля
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setOnboard = (state, data) => {
  state.onboard.set(data);
};
/**
 * Записать значения отображения текста ГУ
 * @param {any} state
 * @param {DataView} data Данные
 */
const setHeadText = (state, data) => {
  state.headText.set(data);
};
/**
 * Записать значения отображения Bose
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setBose = (state, data) => {
  state.bose.set(data);
};
/**
 * Записать значения отображения климата
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setClimate = (state, data) => {
  state.climate.set(data);
};
/**
 * Записать значения отображения дверей
 * @param {any} state
 * @param {DataView} data Данные
 */
const view_mutations_setDoors = (state, data) => {
  state.doors.set(data);
};
/**
 * Записать значения отображения ДВС
 * @param {any} state
 * @param {DataView} data Данные
 */
const view_mutations_setEngine = (state, data) => {
  state.engine.set(data);
};
/**
 * Записать значения отображения расхода
 * @param {any} state
 * @param {DataView} data Данные
 */
const view_mutations_setFuel = (state, data) => {
  state.fuel.set(data);
};
/**
 * Записать значения отображения движения
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setMovement = (state, data) => {
  state.movement.set(data);
};
/**
 * Записать значения отображения датчиков
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setSensors = (state, data) => {
  state.sensors.set(data);
};
/**
 * Записать значения отображения температуры
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setTemperature = (state, data) => {
  state.temperature.set(data);
};
/**
 * Записать значения отображения даты и времени
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setDatetime = (state, data) => {
  state.datetime.set(data);
};
;// CONCATENATED MODULE: ./src/store/modules/view/index.ts



// import * as actions from "./actions";
/* harmony default export */ var modules_view = ({
  namespaced: true,
  state: view_state,
  getters: view_getters_namespaceObject,
  mutations: view_mutations_namespaceObject
  // actions
});
;// CONCATENATED MODULE: ./src/store/index.ts





const store = (0,vuex_esm_bundler/* createStore */.y$)({
  modules: {
    app: app,
    config: config,
    value: value,
    view: modules_view
  },
  strict: "production" === "development"
});
/* harmony default export */ var src_store = (store);

/***/ }),

/***/ 77503:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cp: function() { return /* binding */ arrayToHex; },
/* harmony export */   hL: function() { return /* binding */ toMac; },
/* harmony export */   nj: function() { return /* binding */ toHex; }
/* harmony export */ });
/**
 * Конвертирование числа в HEX
 * @param {number|BigInt} value Значение
 */
const toHex = value => {
  const res = value.toString(16);
  return res.length % 2 > 0 ? "0" + res : res;
};
/**
 * Конвертирование массива чисел в HEX
 * @param {(number|BigInt)[]} value Массив значений
 */
const arrayToHex = value => {
  let sha = "";
  value?.forEach(x => {
    sha += toHex(x);
  });
  return sha;
};
/**
 * Чтение mac-адреса
 * @param {BigInt} value Значение mac-адреса в числовом формате
 */
const toMac = value => {
  let result = "";
  let mac = toHex(value);
  if (mac.length < 12) mac = "0".repeat(12 - mac.length) + mac;
  for (let i = mac.length - 2; i >= 0; i -= 2) result += mac[i] + mac[i + 1] + (i > 0 ? ":" : "");
  return result;
};


/***/ }),

/***/ 1560:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ createDebounce; }
/* harmony export */ });
/** Создать debounce */
const createDebounce = () => {
  let timeout;
  return (fn, delay) => {
    clearTimeout(timeout);
    if (delay > 0) timeout = setTimeout(() => fn(), delay);
  };
};


/***/ }),

/***/ 4322:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94373);

// create an axios instance
const service = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.create({
  baseURL: "/pjcan41-app/",
  timeout: 30000
});
// request interceptor
service.interceptors.request.use(config => {
  config.params = config.params ?? {};
  return config;
}, error => {
  console.log(error);
  return Promise.reject(error);
});
// response interceptor
service.interceptors.response.use(response => {
  const data = response.data;
  if (!data) return Promise.reject(new Error("No data"));
  return data;
}, error => {
  console.log(error);
  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__.A = (service);

/***/ }),

/***/ 22918:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: function() { return /* binding */ RemainingTime; },
/* harmony export */   n: function() { return /* binding */ getFormatTime; }
/* harmony export */ });
/* harmony import */ var D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91114);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44114);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Чтение форматированного времени типа hh:mm:ss
 * @param {number|bigint} value Значение
 * @param {boolean} msec Миллисекунды или секунды
 */
const getFormatTime = (value, msec = true) => {
  let _msec = typeof value === "number" ? msec ? value / 1000 : value : msec ? Number(value / BigInt(1000)) : Number(value);
  const second = Math.floor(_msec % 60);
  _msec /= 60;
  const minute = Math.floor(_msec % 60);
  _msec /= 60;
  const _second = second < 10 ? "0" + second.toString() : second.toString();
  const _minute = minute < 10 ? "0" + minute.toString() : minute.toString();
  const _hour = _msec < 10 ? "0" + Math.floor(_msec).toString() : Math.floor(_msec).toString();
  return `${_hour}:${_minute}:${_second}`;
};
class RemainingTime {
  /** Текущая дата */
  get now() {
    return this._now;
  }
  /** Итого */
  get total() {
    return this._total;
  }
  /** Текущая позиция */
  get offset() {
    return this._offset;
  }
  /** Изменить текущую позицию */
  set offset(val) {
    const now = Date.now();
    const value = Math.floor((this._total - val) / (val - this._offset) * (now - this._now));
    if (value !== Infinity) {
      this._index++;
      if (this._index > this._countValues) this._index = 0;
      if (this._values.length <= this._index) this._values.push(value);else this._values[this._index] = value;
      this._offset = val;
      this._now = now;
    }
  }
  /** Последнее значение */
  get value() {
    return this._values[this._index];
  }
  /** Среднее значение */
  get avg() {
    if (this._values.length === 0) return 0;
    let result = 0;
    this._values.forEach(x => {
      result += x;
    });
    return Math.floor(result / this._values.length);
  }
  constructor(total, countValues = 10) {
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, "_now", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, "_total", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, "_offset", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, "_values", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, "_index", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, "_countValues", void 0);
    this._now = Date.now();
    this._offset = 0;
    this._total = total;
    this._values = [];
    this._index = -1;
    this._countValues = countValues;
  }
  get() {
    return getFormatTime(this.avg);
  }
}


/***/ })

}]);