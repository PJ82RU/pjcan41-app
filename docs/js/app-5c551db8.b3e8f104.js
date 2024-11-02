"use strict";
(self["webpackChunkpjcan"] = self["webpackChunkpjcan"] || []).push([[774],{

/***/ 1572:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(45130);
// EXTERNAL MODULE: ./src/App.vue + 3 modules
var App = __webpack_require__(68741);
// EXTERNAL MODULE: ./src/router/index.ts + 99 modules
var router = __webpack_require__(9183);
// EXTERNAL MODULE: ./src/store/index.ts + 20 modules
var store = __webpack_require__(35679);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/styles/main.css
var main = __webpack_require__(35524);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/framework.mjs
var framework = __webpack_require__(37768);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/index.mjs + 15 modules
var components = __webpack_require__(70506);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/index.mjs + 4 modules
var directives = __webpack_require__(10406);
;// CONCATENATED MODULE: ./src/plugins/vuetify.ts
// Styles



// Vuetify



const customDarkTheme = {
  ...components,
  ...directives,
  dark: true,
  colors: {
    background: "#121517",
    surface: "#21262a",
    primary: "#0b677b",
    secondary: "#25323e",
    accent: "#9c27b0",
    error: "#ef5350",
    info: "#78909c",
    success: "#66bb6a",
    warning: "#ffee58",
    menu: "#3f6e90",
    disable: "#676b6d"
  }
};
/* harmony default export */ var vuetify = ((0,framework/* createVuetify */.$N)({
  theme: {
    defaultTheme: "customDarkTheme",
    themes: {
      customDarkTheme
    }
  }
}));
// EXTERNAL MODULE: ./src/lang/index.ts + 2 modules
var lang = __webpack_require__(96188);
// EXTERNAL MODULE: ./node_modules/register-service-worker/index.js
var register_service_worker = __webpack_require__(94458);
;// CONCATENATED MODULE: ./src/registerServiceWorker.ts
/* eslint-disable no-console */

if (true) {
  (0,register_service_worker/* register */.k)(`${"/pjcan41-app/"}service-worker.js`, {
    ready() {
      console.log("App is being served from cache by a service worker.\n" + "For more details, visit https://goo.gl/AFskqB");
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
      window.location.reload();
    },
    offline() {
      console.log("No internet connection found. App is running in offline mode.");
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    }
  });
}
// EXTERNAL MODULE: ./node_modules/vue3-toastify/dist/index.mjs
var dist = __webpack_require__(14084);
// EXTERNAL MODULE: ./node_modules/@egjs/vue3-flicking/dist/flicking.css
var flicking = __webpack_require__(86635);
;// CONCATENATED MODULE: ./src/main.ts







// шрифты


// уведомления Vue3Toasity


const Vue3ToasityOptions = {
  autoClose: 3000,
  theme: dist/* toast */.oR.THEME.COLORED,
  hideProgressBar: true,
  position: dist/* toast */.oR.POSITION.BOTTOM_RIGHT,
  pauseOnHover: true,
  newestOnTop: true
};
// vue3-flicking

(0,runtime_dom_esm_bundler/* createApp */.Ef)(App/* default */.A).use(router/* default */.A).use(store/* default */.A).use(vuetify).use(lang/* default */.Ay).use(dist/* default */.Ay, Vue3ToasityOptions).mount("#app");

/***/ }),

/***/ 22575:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: function() { return /* binding */ API_CANBUS_EVENT; },
/* harmony export */   t: function() { return /* binding */ BaseModel; }
/* harmony export */ });
/* harmony import */ var D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91114);
/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16573);
/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78100);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77936);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_2__);




const API_CANBUS_EVENT = "Canbus";
/** Базовая модель */
class BaseModel {
  constructor(exec, highPriority = false, protocol = 41) {
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "exec", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "highPriority", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "protocol", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "skipActivationCheck", false);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "id", 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "isData", false);
    this.exec = exec;
    this.highPriority = highPriority;
    this.protocol = protocol;
  }
  /**
   * Запись данных
   * @param {any} th Объект модели
   * @param {number} exec Команда API
   * @param {number} size Размер данных
   * @param {IBluetoothStruct} struct Структура данных
   * @param {DataView} buf Буфер данных
   * @protected
   */
  _set(th, exec, size, struct, buf) {
    const offset = this.protocol === 40 ? 1 : 3;
    const id = buf.getUint8(0);
    const result = this.protocol === 40 ? id === exec : id === exec && (buf.byteLength >= 3 ? buf.getUint16(1, true) : 0) === size;
    if (result) {
      try {
        struct.decode(buf, th, offset);
        this.isData = true;
      } catch (e) {
        console.log(e);
      }
    }
    return result;
  }
  /**
   * Чтение данных
   * @param {any} th Объект модели
   * @param {number} exec Команда API
   * @param {number} size Длина данных
   * @param {IBluetoothStruct} struct Структура данных
   */
  _get(th, exec, size = 0, struct) {
    const offset = this.protocol === 40 ? 1 : 3;
    const buf = new DataView(new ArrayBuffer(size + offset));
    buf.setUint8(0, exec);
    if (offset === 3) buf.setUint16(1, size, true);
    if (size > 0) {
      try {
        struct?.encode(buf, th, offset);
      } catch (e) {
        console.log(e);
        if (offset === 3) buf.setUint16(1, 0, true);
      }
    }
    return buf;
  }
}

/***/ }),

/***/ 30449:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: function() { return /* reexport safe */ _BaseModel__WEBPACK_IMPORTED_MODULE_0__.t; }
/* harmony export */ });
/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22575);



/***/ }),

/***/ 89100:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zV: function() { return /* reexport */ API_BOSE_CONFIG_EVENT; },
  YG: function() { return /* reexport */ API_BOSE_CONFIG_EXEC; },
  qJ: function() { return /* reexport */ API_BOSE_VIEW_EVENT; },
  xT: function() { return /* reexport */ API_BOSE_VIEW_EXEC; },
  gh: function() { return /* reexport */ BoseConfig; },
  k1: function() { return /* reexport */ TCenterPoint; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/bose/TCenterPoint.ts
/* eslint-disable */
var TCenterPoint;
(function (TCenterPoint) {
  TCenterPoint[TCenterPoint["CENTERPOINT_OFF"] = 0] = "CENTERPOINT_OFF";
  TCenterPoint[TCenterPoint["CENTERPOINT_MIN"] = 1] = "CENTERPOINT_MIN";
  TCenterPoint[TCenterPoint["CENTERPOINT_LOW"] = 2] = "CENTERPOINT_LOW";
  TCenterPoint[TCenterPoint["CENTERPOINT_MID"] = 3] = "CENTERPOINT_MID";
  TCenterPoint[TCenterPoint["CENTERPOINT_HI"] = 4] = "CENTERPOINT_HI";
  TCenterPoint[TCenterPoint["CENTERPOINT_MAX"] = 5] = "CENTERPOINT_MAX";
})(TCenterPoint || (TCenterPoint = {}));
;// CONCATENATED MODULE: ./src/models/pjcan/bose/BoseConfig.ts




const API_BOSE_CONFIG_EXEC = 0x60;
const API_BOSE_CONFIG_EVENT = "BoseConfig";
const API_BOSE_VIEW_EXEC = 0x63;
const API_BOSE_VIEW_EVENT = "BoseView";
/** Модель параметров Bose */
class BoseConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_BOSE_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "on", false);
    (0,defineProperty/* default */.A)(this, "audioPlt", false);
    (0,defineProperty/* default */.A)(this, "radioFM", false);
    (0,defineProperty/* default */.A)(this, "wow", false);
    (0,defineProperty/* default */.A)(this, "press", false);
    (0,defineProperty/* default */.A)(this, "mute", false);
    (0,defineProperty/* default */.A)(this, "start", false);
    (0,defineProperty/* default */.A)(this, "volume", 0);
    (0,defineProperty/* default */.A)(this, "start_volume", 0);
    (0,defineProperty/* default */.A)(this, "balance", 0);
    (0,defineProperty/* default */.A)(this, "bass", 0);
    (0,defineProperty/* default */.A)(this, "fade", 0);
    (0,defineProperty/* default */.A)(this, "treble", 0);
    (0,defineProperty/* default */.A)(this, "centerPoint", TCenterPoint.CENTERPOINT_OFF);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, BoseConfig.size, new bluetooth/* BluetoothStruct */.iy(BoseConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, BoseConfig.size, new bluetooth/* BluetoothStruct */.iy(BoseConfig.struct));
  }
}
(0,defineProperty/* default */.A)(BoseConfig, "struct", {
  on: bluetooth/* BluetoothStruct */.iy.bit(),
  audioPlt: bluetooth/* BluetoothStruct */.iy.bit(),
  radioFM: bluetooth/* BluetoothStruct */.iy.bit(),
  wow: bluetooth/* BluetoothStruct */.iy.bit(),
  press: bluetooth/* BluetoothStruct */.iy.bit(),
  mute: bluetooth/* BluetoothStruct */.iy.bit(),
  start: bluetooth/* BluetoothStruct */.iy.bit(),
  volume: bluetooth/* BluetoothStruct */.iy.uint8(),
  start_volume: bluetooth/* BluetoothStruct */.iy.uint8(),
  balance: bluetooth/* BluetoothStruct */.iy.int8(),
  bass: bluetooth/* BluetoothStruct */.iy.int8(),
  fade: bluetooth/* BluetoothStruct */.iy.int8(),
  treble: bluetooth/* BluetoothStruct */.iy.int8(),
  centerPoint: bluetooth/* BluetoothStruct */.iy.uint8()
});
(0,defineProperty/* default */.A)(BoseConfig, "size", 8);
;// CONCATENATED MODULE: ./src/models/pjcan/bose/index.ts




/***/ }),

/***/ 84596:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $o: function() { return /* reexport */ API_SW1_CONFIG_EVENT; },
  E7: function() { return /* reexport */ API_SW1_CONFIG_EXEC; },
  _u: function() { return /* reexport */ API_SW1_VALUE_EVENT; },
  py: function() { return /* reexport */ API_SW1_VALUE_EXEC; },
  F: function() { return /* reexport */ API_SW3_CONFIG_EVENT; },
  kU: function() { return /* reexport */ API_SW3_CONFIG_EXEC; },
  iL: function() { return /* reexport */ API_SW3_VALUE_EVENT; },
  Tk: function() { return /* reexport */ API_SW3_VALUE_EXEC; },
  uK: function() { return /* reexport */ SW1Config; },
  mH: function() { return /* reexport */ SW1_CONFIG_RESISTANCE_MAX; },
  ET: function() { return /* reexport */ SW1_CONFIG_RESISTANCE_MIN; },
  sV: function() { return /* reexport */ SWValue; },
  su: function() { return /* reexport */ TButtonExec; },
  WX: function() { return /* reexport */ TButtonPress; }
});

// UNUSED EXPORTS: API_SW1_ACTION_EVENT, API_SW1_ACTION_EXEC, API_SW3_ACTION_EVENT, API_SW3_ACTION_EXEC, SW1Action, SW3Action, SW3Config

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/SW1Config.ts




const API_SW1_CONFIG_EXEC = 0x30;
const API_SW1_CONFIG_EVENT = "SW1Config";
const SW1_CONFIG_RESISTANCE_MIN = 0;
const SW1_CONFIG_RESISTANCE_MAX = 3799;
/** Модель конфигурации кнопок */
class SW1Config extends base/* BaseModel */.t {
  constructor(exec = API_SW1_CONFIG_EXEC, data) {
    super(exec);
    (0,defineProperty/* default */.A)(this, "hold", 0);
    (0,defineProperty/* default */.A)(this, "buttons", []);
    for (let i = 0; i < 6; i++) {
      const item = {
        extended: false,
        swtch: false,
        id: 0,
        resistanceTo: 0,
        exec: new Array(4),
        execMode: new Array(4)
      };
      this.buttons.push(item);
    }
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, SW1Config.size, new bluetooth/* BluetoothStruct */.iy(SW1Config.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, SW1Config.size, new bluetooth/* BluetoothStruct */.iy(SW1Config.struct));
  }
  /**
   * Запись параметров кнопки
   * @param {IButtonConfigItem} value Новое значение
   */
  setButton(value) {
    const index = this.buttons.findIndex(x => x.id === value.id);
    if (index < 0) return false;
    const button = this.buttons[index];
    button.extended = value.extended;
    button.swtch = value.swtch;
    button.id = value.id;
    button.resistanceTo = value.resistanceTo;
    button.exec = [...value.exec];
    button.execMode = [...value.execMode];
    return true;
  }
}
(0,defineProperty/* default */.A)(SW1Config, "struct", {
  hold: bluetooth/* BluetoothStruct */.iy.uint8(),
  buttons: bluetooth/* BluetoothStruct */.iy.struct({
    extended: bluetooth/* BluetoothStruct */.iy.bit(),
    swtch: bluetooth/* BluetoothStruct */.iy.bit(),
    id: bluetooth/* BluetoothStruct */.iy.uint8(),
    resistanceTo: bluetooth/* BluetoothStruct */.iy.uint16(),
    exec: bluetooth/* BluetoothStruct */.iy.uint8(4),
    execMode: bluetooth/* BluetoothStruct */.iy.uint8(4)
  }, 6)
});
(0,defineProperty/* default */.A)(SW1Config, "size", 73);
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/TButtonExec.ts
/* eslint-disable */
/** Список ID функций кнопки */
var TButtonExec;
(function (TButtonExec) {
  TButtonExec[TButtonExec["BUTTON_EXEC_NONE"] = 0] = "BUTTON_EXEC_NONE";
  TButtonExec[TButtonExec["BUTTON_EXEC_CHANGE_CONTROL_MODE"] = 1] = "BUTTON_EXEC_CHANGE_CONTROL_MODE";
  TButtonExec[TButtonExec["BUTTON_EXEC_VIEW_ENGINE"] = 2] = "BUTTON_EXEC_VIEW_ENGINE";
  TButtonExec[TButtonExec["BUTTON_EXEC_VIEW_FUEL"] = 3] = "BUTTON_EXEC_VIEW_FUEL";
  TButtonExec[TButtonExec["BUTTON_EXEC_VIEW_MOVEMENT"] = 4] = "BUTTON_EXEC_VIEW_MOVEMENT";
  TButtonExec[TButtonExec["BUTTON_EXEC_VIEW_TEMPERATURE"] = 5] = "BUTTON_EXEC_VIEW_TEMPERATURE";
  TButtonExec[TButtonExec["BUTTON_EXEC_VIEW_DATE_TIME"] = 6] = "BUTTON_EXEC_VIEW_DATE_TIME";
  TButtonExec[TButtonExec["BUTTON_EXEC_HEAD_UNIT_BUTTON_MUTE"] = 7] = "BUTTON_EXEC_HEAD_UNIT_BUTTON_MUTE";
  TButtonExec[TButtonExec["BUTTON_EXEC_HEAD_UNIT_BUTTON_MODE"] = 8] = "BUTTON_EXEC_HEAD_UNIT_BUTTON_MODE";
  TButtonExec[TButtonExec["BUTTON_EXEC_HEAD_UNIT_BUTTON_SET_DOWN"] = 9] = "BUTTON_EXEC_HEAD_UNIT_BUTTON_SET_DOWN";
  TButtonExec[TButtonExec["BUTTON_EXEC_HEAD_UNIT_BUTTON_SET_UP"] = 10] = "BUTTON_EXEC_HEAD_UNIT_BUTTON_SET_UP";
  TButtonExec[TButtonExec["BUTTON_EXEC_HEAD_UNIT_BUTTON_VOL_UP"] = 11] = "BUTTON_EXEC_HEAD_UNIT_BUTTON_VOL_UP";
  TButtonExec[TButtonExec["BUTTON_EXEC_HEAD_UNIT_BUTTON_VOL_DOWN"] = 12] = "BUTTON_EXEC_HEAD_UNIT_BUTTON_VOL_DOWN";
  TButtonExec[TButtonExec["BUTTON_EXEC_HEAD_UNIT_VOICE"] = 13] = "BUTTON_EXEC_HEAD_UNIT_VOICE";
  TButtonExec[TButtonExec["BUTTON_EXEC_HEAD_UNIT_EQUALIZER"] = 14] = "BUTTON_EXEC_HEAD_UNIT_EQUALIZER";
  TButtonExec[TButtonExec["BUTTON_EXEC_HEAD_UNIT_RADIO"] = 15] = "BUTTON_EXEC_HEAD_UNIT_RADIO";
  TButtonExec[TButtonExec["BUTTON_EXEC_HEAD_UNIT_RADIO_SEARCH"] = 16] = "BUTTON_EXEC_HEAD_UNIT_RADIO_SEARCH";
  TButtonExec[TButtonExec["BUTTON_EXEC_HEAD_UNIT_CAMERA"] = 17] = "BUTTON_EXEC_HEAD_UNIT_CAMERA";
  TButtonExec[TButtonExec["BUTTON_EXEC_HEAD_UNIT_PHONE"] = 18] = "BUTTON_EXEC_HEAD_UNIT_PHONE";
  TButtonExec[TButtonExec["BUTTON_EXEC_ON_BOARD_BUTTON_INFO"] = 19] = "BUTTON_EXEC_ON_BOARD_BUTTON_INFO";
  TButtonExec[TButtonExec["BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK"] = 20] = "BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK";
  TButtonExec[TButtonExec["BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK_H"] = 21] = "BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK_H";
  TButtonExec[TButtonExec["BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK_M"] = 22] = "BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK_M";
  TButtonExec[TButtonExec["BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK_24"] = 23] = "BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK_24";
  TButtonExec[TButtonExec["BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK_RM"] = 24] = "BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK_RM";
  TButtonExec[TButtonExec["BUTTON_EXEC_ON_BOARD_CHANGE_INFO_CLOCK"] = 25] = "BUTTON_EXEC_ON_BOARD_CHANGE_INFO_CLOCK";
  TButtonExec[TButtonExec["BUTTON_EXEC_ON_BOARD_LONG_PRESS_INFO"] = 26] = "BUTTON_EXEC_ON_BOARD_LONG_PRESS_INFO";
  TButtonExec[TButtonExec["BUTTON_EXEC_ON_BOARD_LONG_PRESS_CLOCK"] = 27] = "BUTTON_EXEC_ON_BOARD_LONG_PRESS_CLOCK";
  TButtonExec[TButtonExec["BUTTON_EXEC_BOSE_ON"] = 28] = "BUTTON_EXEC_BOSE_ON";
  TButtonExec[TButtonExec["BUTTON_EXEC_BOSE_AUDIO_PLT"] = 29] = "BUTTON_EXEC_BOSE_AUDIO_PLT";
  TButtonExec[TButtonExec["BUTTON_EXEC_BOSE_MUTE"] = 30] = "BUTTON_EXEC_BOSE_MUTE";
  TButtonExec[TButtonExec["BUTTON_EXEC_BOSE_VOL_UP"] = 31] = "BUTTON_EXEC_BOSE_VOL_UP";
  TButtonExec[TButtonExec["BUTTON_EXEC_BOSE_VOL_DOWN"] = 32] = "BUTTON_EXEC_BOSE_VOL_DOWN";
  TButtonExec[TButtonExec["BUTTON_EXEC_BOSE_BALANCE_UP"] = 33] = "BUTTON_EXEC_BOSE_BALANCE_UP";
  TButtonExec[TButtonExec["BUTTON_EXEC_BOSE_BALANCE_DOWN"] = 34] = "BUTTON_EXEC_BOSE_BALANCE_DOWN";
  TButtonExec[TButtonExec["BUTTON_EXEC_BOSE_BASS_UP"] = 35] = "BUTTON_EXEC_BOSE_BASS_UP";
  TButtonExec[TButtonExec["BUTTON_EXEC_BOSE_BASS_DOWN"] = 36] = "BUTTON_EXEC_BOSE_BASS_DOWN";
  TButtonExec[TButtonExec["BUTTON_EXEC_BOSE_FADE_UP"] = 37] = "BUTTON_EXEC_BOSE_FADE_UP";
  TButtonExec[TButtonExec["BUTTON_EXEC_BOSE_FADE_DOWN"] = 38] = "BUTTON_EXEC_BOSE_FADE_DOWN";
  TButtonExec[TButtonExec["BUTTON_EXEC_BOSE_TREBLE_UP"] = 39] = "BUTTON_EXEC_BOSE_TREBLE_UP";
  TButtonExec[TButtonExec["BUTTON_EXEC_BOSE_TREBLE_DOWN"] = 40] = "BUTTON_EXEC_BOSE_TREBLE_DOWN";
  TButtonExec[TButtonExec["BUTTON_EXEC_BOSE_CENTER_POINT"] = 41] = "BUTTON_EXEC_BOSE_CENTER_POINT"; // BOSE: переключение режимов Center Point (циклично)
})(TButtonExec || (TButtonExec = {}));
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/SW3Config.ts





const API_SW3_CONFIG_EXEC = 0x3a;
const API_SW3_CONFIG_EVENT = "SW3Config";
/** Модель конфигурации кнопок */
class SW3Config extends base/* BaseModel */.t {
  constructor(exec = API_SW3_CONFIG_EXEC, data) {
    super(exec);
    (0,defineProperty/* default */.A)(this, "buttons", []);
    for (let i = 0; i < 6; i++) {
      const item = {
        id: 0,
        resistanceTo: 0,
        exec: TButtonExec.BUTTON_EXEC_NONE
      };
      this.buttons.push(item);
    }
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, SW3Config.size, new bluetooth/* BluetoothStruct */.iy(SW3Config.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, SW3Config.size, new bluetooth/* BluetoothStruct */.iy(SW3Config.struct));
  }
  /**
   * Запись параметров кнопки
   * @param {IButtonConfigItem} value Новое значение
   */
  setButton(value) {
    const index = this.buttons.findIndex(x => x.id === value.id);
    if (index < 0) return false;
    const button = this.buttons[index];
    button.id = value.id;
    button.resistanceTo = value.resistanceTo;
    button.exec = value.exec;
    return true;
  }
}
(0,defineProperty/* default */.A)(SW3Config, "struct", {
  buttons: bluetooth/* BluetoothStruct */.iy.struct({
    id: bluetooth/* BluetoothStruct */.iy.uint8(),
    resistanceTo: bluetooth/* BluetoothStruct */.iy.uint16(),
    exec: bluetooth/* BluetoothStruct */.iy.uint8()
  }, 7)
});
(0,defineProperty/* default */.A)(SW3Config, "size", 28);
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/TButtonPress.ts
/* eslint-disable */
var TButtonPress;
(function (TButtonPress) {
  TButtonPress[TButtonPress["PRESS_PRESSED"] = 0] = "PRESS_PRESSED";
  TButtonPress[TButtonPress["PRESS_DUAL"] = 1] = "PRESS_DUAL";
  TButtonPress[TButtonPress["PRESS_TRIPLE"] = 2] = "PRESS_TRIPLE";
  TButtonPress[TButtonPress["PRESS_HOLD"] = 3] = "PRESS_HOLD";
})(TButtonPress || (TButtonPress = {}));
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/SWValue.ts





const API_SW1_VALUE_EXEC = 0x31;
const API_SW1_VALUE_EVENT = "SW1Value";
const API_SW3_VALUE_EXEC = 0x3b;
const API_SW3_VALUE_EVENT = "SW3Value";
/** Модель значений кнопок */
class SWValue extends base/* BaseModel */.t {
  constructor(exec = API_SW1_VALUE_EXEC, data) {
    super(exec);
    (0,defineProperty/* default */.A)(this, "pressed", false);
    (0,defineProperty/* default */.A)(this, "swtch", false);
    (0,defineProperty/* default */.A)(this, "emulation", false);
    (0,defineProperty/* default */.A)(this, "id", 0);
    (0,defineProperty/* default */.A)(this, "btnType", TButtonPress.PRESS_PRESSED);
    (0,defineProperty/* default */.A)(this, "btnExec", TButtonExec.BUTTON_EXEC_NONE);
    (0,defineProperty/* default */.A)(this, "resistance", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, SWValue.size, new bluetooth/* BluetoothStruct */.iy(SWValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(SWValue, "struct", {
  pressed: bluetooth/* BluetoothStruct */.iy.bit(),
  swtch: bluetooth/* BluetoothStruct */.iy.bit(),
  emulation: bluetooth/* BluetoothStruct */.iy.bit(),
  id: bluetooth/* BluetoothStruct */.iy.uint8(),
  btnType: bluetooth/* BluetoothStruct */.iy.uint8(),
  btnExec: bluetooth/* BluetoothStruct */.iy.uint8(),
  resistance: bluetooth/* BluetoothStruct */.iy.uint16()
});
(0,defineProperty/* default */.A)(SWValue, "size", 6);
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/SW1Action.ts



const API_SW1_ACTION_EXEC = 0x32;
const API_SW1_ACTION_EVENT = "SW1Action";
/** Модель конфигурации кнопок */
class SW1Action extends base/* BaseModel */.t {
  constructor(exec = API_SW1_ACTION_EXEC) {
    super(exec);
    (0,defineProperty/* default */.A)(this, "defaultMazda", false);
    (0,defineProperty/* default */.A)(this, "execMode", false);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return false;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec, SW1Action.size, new bluetooth/* BluetoothStruct */.iy(SW1Action.struct));
  }
}
(0,defineProperty/* default */.A)(SW1Action, "struct", {
  defaultMazda: bluetooth/* BluetoothStruct */.iy.bit(),
  execMode: bluetooth/* BluetoothStruct */.iy.bit()
});
(0,defineProperty/* default */.A)(SW1Action, "size", 1);
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/SW3Action.ts



const API_SW3_ACTION_EXEC = 0x3c;
const API_SW3_ACTION_EVENT = "SW3Action";
/** Модель конфигурации кнопок */
class SW3Action extends base/* BaseModel */.t {
  constructor(exec = API_SW3_ACTION_EXEC) {
    super(exec);
    (0,defineProperty/* default */.A)(this, "reset", false);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return false;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec, SW3Action.size, new bluetooth/* BluetoothStruct */.iy(SW3Action.struct));
  }
}
(0,defineProperty/* default */.A)(SW3Action, "struct", {
  reset: bluetooth/* BluetoothStruct */.iy.bit()
});
(0,defineProperty/* default */.A)(SW3Action, "size", 1);
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/index.ts









/***/ }),

/***/ 19103:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: function() { return /* reexport */ API_CHOICE_EXEC; },
  L: function() { return /* reexport */ ChoiceValue; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.detached.js
var es_array_buffer_detached = __webpack_require__(16573);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer.js
var es_array_buffer_transfer = __webpack_require__(78100);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js
var es_array_buffer_transfer_to_fixed_length = __webpack_require__(77936);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/choice/ChoiceValue.ts





const API_CHOICE_EXEC = 0x10;
/** Модель выборочного запроса данных */
class ChoiceValue extends base/* BaseModel */.t {
  constructor(data, fn) {
    super(API_CHOICE_EXEC);
    (0,defineProperty/* default */.A)(this, "repeat", 0);
    (0,defineProperty/* default */.A)(this, "listID", []);
    if (data && fn) this.parse(data, fn);
  }
  /**
   * Разбор выборочных данных
   * @param {DataView} data Данные
   * @param {function} fn Метод входящих данных
   */
  parse(data, fn) {
    const data_size = data.getUint16(1, true);
    if (data_size === 0 || data_size + 3 > data.byteLength) return;
    let offset = 3;
    while (offset < data_size) {
      const id = data.getUint8(offset);
      const size = data.getUint16(offset + 1, true);
      const frame_size = size + 3;
      if (offset + frame_size > data.byteLength) break;
      if (id !== this.exec) fn(new DataView(data.buffer.slice(offset, offset + frame_size)));
      offset += frame_size;
    }
  }
  set(buf) {
    return false;
  }
  /** Чтение данных */
  get() {
    this.id = this.listID.reduce((sum, a) => sum + a, 0);
    const buf = new DataView(new ArrayBuffer(this.listID.length + 4));
    buf.setUint8(0, this.exec);
    buf.setUint16(1, this.listID.length + 1, true);
    buf.setUint8(3, this.repeat);
    this.listID.forEach((id, index) => buf.setUint8(4 + index, id));
    return buf;
  }
}
;// CONCATENATED MODULE: ./src/models/pjcan/choice/index.ts



/***/ }),

/***/ 72418:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Yu: function() { return /* reexport */ API_CLIMATE_VALUE_EVENT; },
  Z$: function() { return /* reexport */ API_CLIMATE_VALUE_EXEC; },
  yt: function() { return /* reexport */ API_CLIMATE_VIEW_EVENT; },
  zE: function() { return /* reexport */ API_CLIMATE_VIEW_EXEC; },
  lA: function() { return /* reexport */ ClimateValue; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/climate/ClimateValue.ts



const API_CLIMATE_VALUE_EXEC = 0x71;
const API_CLIMATE_VALUE_EVENT = "ClimateValue";
const API_CLIMATE_VIEW_EXEC = 0x73;
const API_CLIMATE_VIEW_EVENT = "ClimateView";
/** Модель значений климата */
class ClimateValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_CLIMATE_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "on", false);
    (0,defineProperty/* default */.A)(this, "automode", false);
    (0,defineProperty/* default */.A)(this, "ac", false);
    (0,defineProperty/* default */.A)(this, "eco", false);
    (0,defineProperty/* default */.A)(this, "airDLegs", false);
    (0,defineProperty/* default */.A)(this, "airDBody", false);
    (0,defineProperty/* default */.A)(this, "airDWindshield", false);
    (0,defineProperty/* default */.A)(this, "dBackWin", false);
    (0,defineProperty/* default */.A)(this, "airInside", false);
    (0,defineProperty/* default */.A)(this, "airOutside", false);
    (0,defineProperty/* default */.A)(this, "temperatureSettable", false);
    (0,defineProperty/* default */.A)(this, "temperatureAmb", false);
    (0,defineProperty/* default */.A)(this, "temperatureCelsius", false);
    (0,defineProperty/* default */.A)(this, "temperatureFahrenheit", false);
    (0,defineProperty/* default */.A)(this, "airRate", 0);
    (0,defineProperty/* default */.A)(this, "temperature", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, ClimateValue.size, new bluetooth/* BluetoothStruct */.iy(ClimateValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(ClimateValue, "struct", {
  on: bluetooth/* BluetoothStruct */.iy.bit(),
  automode: bluetooth/* BluetoothStruct */.iy.bit(),
  ac: bluetooth/* BluetoothStruct */.iy.bit(),
  eco: bluetooth/* BluetoothStruct */.iy.bit(),
  airDLegs: bluetooth/* BluetoothStruct */.iy.bit(),
  airDBody: bluetooth/* BluetoothStruct */.iy.bit(),
  airDWindshield: bluetooth/* BluetoothStruct */.iy.bit(),
  dBackWin: bluetooth/* BluetoothStruct */.iy.bit(),
  airInside: bluetooth/* BluetoothStruct */.iy.bit(),
  airOutside: bluetooth/* BluetoothStruct */.iy.bit(),
  temperatureSettable: bluetooth/* BluetoothStruct */.iy.bit(),
  temperatureAmb: bluetooth/* BluetoothStruct */.iy.bit(),
  temperatureCelsius: bluetooth/* BluetoothStruct */.iy.bit(),
  temperatureFahrenheit: bluetooth/* BluetoothStruct */.iy.bit(),
  airRate: bluetooth/* BluetoothStruct */.iy.uint8(),
  temperature: bluetooth/* BluetoothStruct */.iy.uint16()
});
(0,defineProperty/* default */.A)(ClimateValue, "size", 5);
;// CONCATENATED MODULE: ./src/models/pjcan/climate/index.ts



/***/ }),

/***/ 9917:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  JR: function() { return /* reexport */ API_DATETIME_CONFIG_EVENT; },
  GI: function() { return /* reexport */ API_DATETIME_CONFIG_EXEC; },
  kP: function() { return /* reexport */ API_DATETIME_VIEW_EVENT; },
  Bm: function() { return /* reexport */ API_DATETIME_VIEW_EXEC; },
  Cv: function() { return /* reexport */ DatetimeConfig; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/datetime/DatetimeConfig.ts



const API_DATETIME_CONFIG_EXEC = 0x4a;
const API_DATETIME_CONFIG_EVENT = "DatetimeConfig";
const API_DATETIME_VIEW_EXEC = 0x4d;
const API_DATETIME_VIEW_EVENT = "DatetimeView";
/** Модель значения часов */
class DatetimeConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DATETIME_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "showDate", false);
    (0,defineProperty/* default */.A)(this, "showTime", false);
    (0,defineProperty/* default */.A)(this, "showDayWeek", false);
    (0,defineProperty/* default */.A)(this, "showDateAndDayWeek", false);
    (0,defineProperty/* default */.A)(this, "showTimeAndDayWeek", false);
    (0,defineProperty/* default */.A)(this, "showFullDatetime", false);
    (0,defineProperty/* default */.A)(this, "timezone", 0);
    (0,defineProperty/* default */.A)(this, "unixtime", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, DatetimeConfig.size, new bluetooth/* BluetoothStruct */.iy(DatetimeConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, DatetimeConfig.size, new bluetooth/* BluetoothStruct */.iy(DatetimeConfig.struct));
  }
  /** Обновить текущее время */
  updateUnixtime() {
    const now = new Date();
    this.unixtime = Math.round(now.getTime() / 1000);
    this.timezone = now.getTimezoneOffset() / 60;
  }
}
(0,defineProperty/* default */.A)(DatetimeConfig, "struct", {
  showDate: bluetooth/* BluetoothStruct */.iy.bit(),
  showTime: bluetooth/* BluetoothStruct */.iy.bit(),
  showDayWeek: bluetooth/* BluetoothStruct */.iy.bit(),
  showDateAndDayWeek: bluetooth/* BluetoothStruct */.iy.bit(),
  showTimeAndDayWeek: bluetooth/* BluetoothStruct */.iy.bit(),
  showFullDatetime: bluetooth/* BluetoothStruct */.iy.bit(),
  timezone: bluetooth/* BluetoothStruct */.iy.int8(),
  unixtime: bluetooth/* BluetoothStruct */.iy.uint32()
});
(0,defineProperty/* default */.A)(DatetimeConfig, "size", 6);
;// CONCATENATED MODULE: ./src/models/pjcan/datetime/index.ts



/***/ }),

/***/ 80314:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: function() { return /* binding */ EDeviceUpdateError; }
/* harmony export */ });
/* eslint-disable */
var EDeviceUpdateError;
(function (EDeviceUpdateError) {
  EDeviceUpdateError[EDeviceUpdateError["UPD_OK"] = 0] = "UPD_OK";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_NODATA"] = 1] = "UPD_ERROR_NODATA";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_NODATA_BEGIN"] = 2] = "UPD_ERROR_NODATA_BEGIN";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_BEGIN"] = 3] = "UPD_ERROR_BEGIN";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_WRITE"] = 4] = "UPD_ERROR_WRITE";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_END"] = 5] = "UPD_ERROR_END";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_NOT_FOUND_IV"] = 6] = "UPD_ERROR_NOT_FOUND_IV";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_SETKEY"] = 7] = "UPD_ERROR_SETKEY";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_DECRYPT"] = 8] = "UPD_ERROR_DECRYPT";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_TIMEOUT"] = 9] = "UPD_ERROR_TIMEOUT"; // Остановка обновления по таймауту
})(EDeviceUpdateError || (EDeviceUpdateError = {}));

/***/ }),

/***/ 94027:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Gj: function() { return /* reexport */ API40_DEVICE_UPDATE_EXEC; },
  iX: function() { return /* reexport */ API_DEVICE_CONFIG_EVENT; },
  z8: function() { return /* reexport */ API_DEVICE_CONFIG_EXEC; },
  Os: function() { return /* reexport */ API_DEVICE_INFO_EVENT; },
  x: function() { return /* reexport */ API_DEVICE_INFO_EXEC; },
  GE: function() { return /* reexport */ API_DEVICE_ROLLBACK_EVENT; },
  eb: function() { return /* reexport */ API_DEVICE_SCANNER_VALUE_EVENT; },
  nG: function() { return /* reexport */ API_DEVICE_SCANNER_VALUE_EXEC; },
  BO: function() { return /* reexport */ API_DEVICE_UPDATE_EVENT; },
  S: function() { return /* reexport */ API_DEVICE_UPDATE_EVENT_ERROR; },
  K5: function() { return /* reexport */ API_DEVICE_UPDATE_EXEC; },
  dX: function() { return /* reexport */ API_DEVICE_VALUE_EVENT; },
  ID: function() { return /* reexport */ API_DEVICE_VALUE_EXEC; },
  CN: function() { return /* reexport */ API_DEVICE_VIEW_VOLTMETER_EVENT; },
  ru: function() { return /* reexport */ API_DEVICE_VIEW_VOLTMETER_EXEC; },
  K: function() { return /* reexport */ API_DEVICE_VIEW_WORKTIME_EVENT; },
  J2: function() { return /* reexport */ API_DEVICE_VIEW_WORKTIME_EXEC; },
  nX: function() { return /* reexport */ DeviceAction; },
  pM: function() { return /* reexport */ DeviceConfig; },
  Vj: function() { return /* reexport */ DeviceInfo; },
  Z: function() { return /* reexport */ DeviceScannerAction; },
  G4: function() { return /* reexport */ DeviceScannerValue; },
  iD: function() { return /* reexport */ DeviceUpdate; },
  In: function() { return /* reexport */ DeviceValue; }
});

// UNUSED EXPORTS: API_DEVICE_ACTION_EVENT, API_DEVICE_ACTION_EXEC, API_DEVICE_SCANNER_CONFIG_EVENT, API_DEVICE_SCANNER_CONFIG_EXEC

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/device/DeviceConfig.ts



const API_DEVICE_CONFIG_EXEC = 0x02;
const API_DEVICE_CONFIG_EVENT = "DeviceConfig";
const API_DEVICE_VIEW_WORKTIME_EXEC = 0x0a;
const API_DEVICE_VIEW_WORKTIME_EVENT = "DeviceWorktime";
const API_DEVICE_VIEW_VOLTMETER_EXEC = 0x0b;
const API_DEVICE_VIEW_VOLTMETER_EVENT = "DeviceVoltmeter";
/** Модель параметров устройства */
class DeviceConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DEVICE_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "serial", "");
    this.skipActivationCheck = true;
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, DeviceConfig.size, new bluetooth/* BluetoothStruct */.iy(DeviceConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, DeviceConfig.size, new bluetooth/* BluetoothStruct */.iy(DeviceConfig.struct));
  }
}
(0,defineProperty/* default */.A)(DeviceConfig, "struct", {
  serial: bluetooth/* BluetoothStruct */.iy.char(64)
});
(0,defineProperty/* default */.A)(DeviceConfig, "size", 64);
;// CONCATENATED MODULE: ./src/models/pjcan/device/DeviceInfo.ts



const API_DEVICE_INFO_EXEC = 0x01;
const API_DEVICE_INFO_EVENT = "DeviceInfo";
/** Модель характеристик устройства */
class DeviceInfo extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DEVICE_INFO_EXEC);
    (0,defineProperty/* default */.A)(this, "chipCores", 0);
    (0,defineProperty/* default */.A)(this, "chipModel", "");
    (0,defineProperty/* default */.A)(this, "chipRevision", 0);
    (0,defineProperty/* default */.A)(this, "cpuFreqMHz", 0);
    (0,defineProperty/* default */.A)(this, "cycleCount", 0);
    (0,defineProperty/* default */.A)(this, "efuseMac", BigInt(0));
    (0,defineProperty/* default */.A)(this, "flashChipMode", 0);
    (0,defineProperty/* default */.A)(this, "flashChipSize", 0);
    (0,defineProperty/* default */.A)(this, "flashChipSpeed", 0);
    (0,defineProperty/* default */.A)(this, "freeHeap", 0);
    (0,defineProperty/* default */.A)(this, "freePsram", 0);
    (0,defineProperty/* default */.A)(this, "freeSketchSpace", 0);
    (0,defineProperty/* default */.A)(this, "heapSize", 0);
    (0,defineProperty/* default */.A)(this, "maxAllocHeap", 0);
    (0,defineProperty/* default */.A)(this, "maxAllocPsram", 0);
    (0,defineProperty/* default */.A)(this, "minFreeHeap", 0);
    (0,defineProperty/* default */.A)(this, "minFreePsram", 0);
    (0,defineProperty/* default */.A)(this, "psramSize", 0);
    (0,defineProperty/* default */.A)(this, "sdkVersion", "");
    (0,defineProperty/* default */.A)(this, "sketchMD5", "");
    (0,defineProperty/* default */.A)(this, "sketchSize", 0);
    (0,defineProperty/* default */.A)(this, "temperatureChip", 0);
    (0,defineProperty/* default */.A)(this, "sha", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    (0,defineProperty/* default */.A)(this, "hardware", "");
    this.skipActivationCheck = true;
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, DeviceInfo.size, new bluetooth/* BluetoothStruct */.iy(DeviceInfo.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(DeviceInfo, "struct", {
  chipCores: bluetooth/* BluetoothStruct */.iy.uint8(),
  chipModel: bluetooth/* BluetoothStruct */.iy.char(16),
  chipRevision: bluetooth/* BluetoothStruct */.iy.uint8(),
  cpuFreqMHz: bluetooth/* BluetoothStruct */.iy.uint32(),
  cycleCount: bluetooth/* BluetoothStruct */.iy.uint32(),
  efuseMac: bluetooth/* BluetoothStruct */.iy.uint64(),
  flashChipMode: bluetooth/* BluetoothStruct */.iy.uint8(),
  flashChipSize: bluetooth/* BluetoothStruct */.iy.uint32(),
  flashChipSpeed: bluetooth/* BluetoothStruct */.iy.uint32(),
  freeHeap: bluetooth/* BluetoothStruct */.iy.uint32(),
  freePsram: bluetooth/* BluetoothStruct */.iy.uint32(),
  freeSketchSpace: bluetooth/* BluetoothStruct */.iy.uint32(),
  heapSize: bluetooth/* BluetoothStruct */.iy.uint32(),
  maxAllocHeap: bluetooth/* BluetoothStruct */.iy.uint32(),
  maxAllocPsram: bluetooth/* BluetoothStruct */.iy.uint32(),
  minFreeHeap: bluetooth/* BluetoothStruct */.iy.uint32(),
  minFreePsram: bluetooth/* BluetoothStruct */.iy.uint32(),
  psramSize: bluetooth/* BluetoothStruct */.iy.uint32(),
  sdkVersion: bluetooth/* BluetoothStruct */.iy.char(8),
  sketchMD5: bluetooth/* BluetoothStruct */.iy.char(16),
  sketchSize: bluetooth/* BluetoothStruct */.iy.uint32(),
  temperatureChip: bluetooth/* BluetoothStruct */.iy.uint32(),
  sha: bluetooth/* BluetoothStruct */.iy.uint8(32),
  hardware: bluetooth/* BluetoothStruct */.iy.char(32)
});
(0,defineProperty/* default */.A)(DeviceInfo, "size", 175);
;// CONCATENATED MODULE: ./src/models/pjcan/device/DeviceValue.ts

var _DeviceValue;


const API_DEVICE_VALUE_EXEC = 0x03;
const API_DEVICE_VALUE_EVENT = "DeviceValue";
/** Модель значений устройства */
class DeviceValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DEVICE_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "activation", false);
    (0,defineProperty/* default */.A)(this, "stateLedWork", false);
    (0,defineProperty/* default */.A)(this, "stateReverse", false);
    (0,defineProperty/* default */.A)(this, "stateRPosition", false);
    (0,defineProperty/* default */.A)(this, "stateAmpIllum", false);
    (0,defineProperty/* default */.A)(this, "configSave", false);
    (0,defineProperty/* default */.A)(this, "hardware", {
      major: 0,
      minor: 0,
      build: 0,
      revision: 0
    });
    (0,defineProperty/* default */.A)(this, "led", 0);
    (0,defineProperty/* default */.A)(this, "voltmeter", 0);
    (0,defineProperty/* default */.A)(this, "worktime", 0);
    this.skipActivationCheck = true;
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, DeviceValue.size, new bluetooth/* BluetoothStruct */.iy(DeviceValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
_DeviceValue = DeviceValue;
(0,defineProperty/* default */.A)(DeviceValue, "structHardware", {
  major: bluetooth/* BluetoothStruct */.iy.uint8(),
  minor: bluetooth/* BluetoothStruct */.iy.uint8(),
  build: bluetooth/* BluetoothStruct */.iy.uint8(),
  revision: bluetooth/* BluetoothStruct */.iy.uint8()
});
(0,defineProperty/* default */.A)(DeviceValue, "struct", {
  activation: bluetooth/* BluetoothStruct */.iy.bit(),
  stateLedWork: bluetooth/* BluetoothStruct */.iy.bit(),
  stateReverse: bluetooth/* BluetoothStruct */.iy.bit(),
  stateRPosition: bluetooth/* BluetoothStruct */.iy.bit(),
  stateAmpIllum: bluetooth/* BluetoothStruct */.iy.bit(),
  configSave: bluetooth/* BluetoothStruct */.iy.bit(),
  hardware: bluetooth/* BluetoothStruct */.iy.struct(_DeviceValue.structHardware),
  led: bluetooth/* BluetoothStruct */.iy.uint8(),
  voltmeter: bluetooth/* BluetoothStruct */.iy.uint16(),
  worktime: bluetooth/* BluetoothStruct */.iy.uint32()
});
(0,defineProperty/* default */.A)(DeviceValue, "size", 12);
;// CONCATENATED MODULE: ./src/models/pjcan/device/DeviceAction.ts



const API_DEVICE_ACTION_EXEC = 0x04;
const API_DEVICE_ACTION_EVENT = "DeviceAction";
/** Модель действий устройства */
class DeviceAction extends base/* BaseModel */.t {
  constructor() {
    super(API_DEVICE_ACTION_EXEC);
    (0,defineProperty/* default */.A)(this, "reboot", false);
    (0,defineProperty/* default */.A)(this, "resetConfig", false);
    (0,defineProperty/* default */.A)(this, "resetView", false);
    (0,defineProperty/* default */.A)(this, "resetButtons", false);
    (0,defineProperty/* default */.A)(this, "save", false);
    (0,defineProperty/* default */.A)(this, "format", false);
    (0,defineProperty/* default */.A)(this, "highPriority", true);
    this.skipActivationCheck = true;
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return false;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec, DeviceAction.size, new bluetooth/* BluetoothStruct */.iy(DeviceAction.struct));
  }
}
(0,defineProperty/* default */.A)(DeviceAction, "struct", {
  reboot: bluetooth/* BluetoothStruct */.iy.bit(),
  resetConfig: bluetooth/* BluetoothStruct */.iy.bit(),
  resetView: bluetooth/* BluetoothStruct */.iy.bit(),
  resetButtons: bluetooth/* BluetoothStruct */.iy.bit(),
  save: bluetooth/* BluetoothStruct */.iy.bit(),
  format: bluetooth/* BluetoothStruct */.iy.bit()
});
(0,defineProperty/* default */.A)(DeviceAction, "size", 1);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.detached.js
var es_array_buffer_detached = __webpack_require__(16573);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer.js
var es_array_buffer_transfer = __webpack_require__(78100);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js
var es_array_buffer_transfer_to_fixed_length = __webpack_require__(77936);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-reversed.js
var es_typed_array_to_reversed = __webpack_require__(37467);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-sorted.js
var es_typed_array_to_sorted = __webpack_require__(44732);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.with.js
var es_typed_array_with = __webpack_require__(79577);
// EXTERNAL MODULE: ./node_modules/eventemitter3/index.mjs
var eventemitter3 = __webpack_require__(8611);
// EXTERNAL MODULE: ./src/models/pjcan/device/EDeviceUpdateError.ts
var EDeviceUpdateError = __webpack_require__(80314);
;// CONCATENATED MODULE: ./src/models/pjcan/device/DeviceUpdate.ts










const API_DEVICE_UPDATE_EXEC = 0x05;
const API40_DEVICE_UPDATE_EXEC = 0x5a;
const API_DEVICE_UPDATE_EVENT = "DeviceUpdate";
const API_DEVICE_UPDATE_EVENT_ERROR = "DeviceUpdateError";
const API_DEVICE_ROLLBACK_EVENT = "DeviceRollback";
/** Модель обновления прошивки */
class DeviceUpdate extends eventemitter3/* default */.A {
  get uploading() {
    return this.offset > 0 ? this.offset / this.total : 0;
  }
  constructor(data) {
    super();
    (0,defineProperty/* default */.A)(this, "protocol", 41);
    (0,defineProperty/* default */.A)(this, "firmware", {
      url: "",
      iv: ""
    });
    (0,defineProperty/* default */.A)(this, "rollback", {
      current: "",
      url: "",
      iv: ""
    });
    (0,defineProperty/* default */.A)(this, "firmwareData", new Uint8Array(0));
    (0,defineProperty/* default */.A)(this, "offset", 0);
    (0,defineProperty/* default */.A)(this, "error", EDeviceUpdateError/* EDeviceUpdateError */.D.UPD_OK);
    (0,defineProperty/* default */.A)(this, "encrypt", false);
    (0,defineProperty/* default */.A)(this, "iv", false);
    (0,defineProperty/* default */.A)(this, "ivData", new Uint8Array(0));
    (0,defineProperty/* default */.A)(this, "begin", false);
    (0,defineProperty/* default */.A)(this, "end", false);
    (0,defineProperty/* default */.A)(this, "abort", false);
    (0,defineProperty/* default */.A)(this, "total", 0);
    (0,defineProperty/* default */.A)(this, "size", 0);
    (0,defineProperty/* default */.A)(this, "is_rollback", false);
    (0,defineProperty/* default */.A)(this, "highPriority", true);
    if (data) this.set(data);
  }
  /** Очистить данные */
  clear() {
    this.firmwareData = new Uint8Array(0);
    this.offset = 0;
    this.error = 0;
    this.begin = false;
    this.end = false;
    this.abort = false;
    this.encrypt = false;
    this.total = 0;
    this.size = 0;
  }
  /**
   * Записать значение IV
   * @param res
   */
  setIV(res) {
    this.iv = !!res && res?.length % 2 === 0 && /^[a-f\d]+$/i.test(res);
    if (this.iv) {
      this.ivData = new Uint8Array(res.length / 2);
      let pos = 0;
      for (let i = 0; i < res.length; i += 2) {
        this.ivData[pos] = parseInt(res.substring(i, i + 2), 16);
        pos++;
      }
    }
    return this.iv;
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    const offset = this.protocol === 40 ? 1 : 3;
    const id = buf.getUint8(0);
    const result = this.protocol === 40 ? id === API40_DEVICE_UPDATE_EXEC : id === API_DEVICE_UPDATE_EXEC && (buf.byteLength >= 3 ? buf.getUint16(1, true) : 0) === 1;
    if (result) {
      this.error = buf.getUint8(offset);
      this.emit(API_DEVICE_UPDATE_EVENT, this.error);
    }
  }
  /** Чтение данных */
  get() {
    const offset = this.protocol === 40 ? 1 : 3;
    const buf = new DataView(new ArrayBuffer(DeviceUpdate.size + offset));
    buf.setUint8(0, this.protocol === 40 ? API40_DEVICE_UPDATE_EXEC : API_DEVICE_UPDATE_EXEC);
    if (offset === 3) buf.setUint16(1, DeviceUpdate.size, true);
    try {
      this.begin = !this.begin && this.offset === 0;
      if (this.begin && this.encrypt && this.iv) {
        this.size = this.ivData.length;
        for (let i = 0; i < this.size; i++) {
          buf.setUint8(7 + offset + i, this.ivData[i]);
        }
      } else {
        this.size = this.total - this.offset;
        if (this.size > 496) this.size = 496;else if (this.size < 0) this.size = 0;
        for (let i = 0; i < this.size; i++) {
          buf.setUint8(7 + offset + i, this.firmwareData[this.offset]);
          this.offset++;
        }
      }
      this.end = this.offset >= this.total;
      new bluetooth/* BluetoothStruct */.iy(DeviceUpdate.struct)?.encode(buf, this, offset);
    } catch (e) {
      console.log(e);
      if (offset === 3) buf.setUint16(1, 0, true);
    }
    return buf;
  }
}
(0,defineProperty/* default */.A)(DeviceUpdate, "struct", {
  begin: bluetooth/* BluetoothStruct */.iy.bit(),
  end: bluetooth/* BluetoothStruct */.iy.bit(),
  abort: bluetooth/* BluetoothStruct */.iy.bit(),
  encrypt: bluetooth/* BluetoothStruct */.iy.bit(),
  iv: bluetooth/* BluetoothStruct */.iy.bit(),
  total: bluetooth/* BluetoothStruct */.iy.uint32(),
  size: bluetooth/* BluetoothStruct */.iy.uint16()
});
(0,defineProperty/* default */.A)(DeviceUpdate, "size", 503);
;// CONCATENATED MODULE: ./src/models/pjcan/device/DeviceScannerAction.ts



const API_DEVICE_SCANNER_CONFIG_EXEC = 0x07;
const API_DEVICE_SCANNER_CONFIG_EVENT = "DeviceScannerAction";
class DeviceScannerAction extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DEVICE_SCANNER_CONFIG_EXEC, true);
    (0,defineProperty/* default */.A)(this, "enabled", false);
    (0,defineProperty/* default */.A)(this, "shutdown", 5);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return false;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec, DeviceScannerAction.size, new bluetooth/* BluetoothStruct */.iy(DeviceScannerAction.struct));
  }
}
(0,defineProperty/* default */.A)(DeviceScannerAction, "struct", {
  enabled: bluetooth/* BluetoothStruct */.iy.bit(),
  shutdown: bluetooth/* BluetoothStruct */.iy.uint8()
});
(0,defineProperty/* default */.A)(DeviceScannerAction, "size", 2);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
;// CONCATENATED MODULE: ./src/models/pjcan/device/DeviceScannerValue.ts







const API_DEVICE_SCANNER_VALUE_EXEC = 0x06;
const API_DEVICE_SCANNER_VALUE_EVENT = "DeviceScannerValue";
class DeviceScannerValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DEVICE_SCANNER_VALUE_EXEC, true);
    (0,defineProperty/* default */.A)(this, "count", 0);
    (0,defineProperty/* default */.A)(this, "frames", []);
    for (let i = 0; i < 16; i++) {
      this.frames.push({
        receive: true,
        send: false,
        id: 0,
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        length: 0,
        timestamp: BigInt(0)
      });
    }
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, DeviceScannerValue.size, new bluetooth/* BluetoothStruct */.iy(DeviceScannerValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    const buf = new DataView(new ArrayBuffer(3));
    buf.setUint8(0, this.exec);
    buf.setUint16(1, 0, true);
    return buf;
  }
}
(0,defineProperty/* default */.A)(DeviceScannerValue, "struct", {
  count: bluetooth/* BluetoothStruct */.iy.uint8(),
  frames: bluetooth/* BluetoothStruct */.iy.struct({
    id: bluetooth/* BluetoothStruct */.iy.uint32(),
    data: bluetooth/* BluetoothStruct */.iy.uint8(8),
    length: bluetooth/* BluetoothStruct */.iy.uint8(),
    timestamp: bluetooth/* BluetoothStruct */.iy.uint64()
  }, 16)
});
(0,defineProperty/* default */.A)(DeviceScannerValue, "size", 337);
;// CONCATENATED MODULE: ./src/models/pjcan/device/index.ts









/***/ }),

/***/ 84582:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lP: function() { return /* reexport */ API_DOORS_CONFIG_EVENT; },
  CY: function() { return /* reexport */ API_DOORS_CONFIG_EXEC; },
  kN: function() { return /* reexport */ API_DOORS_VALUE_EVENT; },
  Hz: function() { return /* reexport */ API_DOORS_VALUE_EXEC; },
  Ww: function() { return /* reexport */ API_DOORS_VIEW_EVENT; },
  zD: function() { return /* reexport */ API_DOORS_VIEW_EXEC; },
  O4: function() { return /* reexport */ DoorsConfig; },
  VT: function() { return /* reexport */ DoorsValue; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/doors/DoorsConfig.ts



const API_DOORS_CONFIG_EXEC = 0x80;
const API_DOORS_CONFIG_EVENT = "DoorsConfig";
const API_DOORS_VIEW_EXEC = 0x83;
const API_DOORS_VIEW_EVENT = "DoorsView";
class DoorsConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DOORS_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "frontReverse", false);
    (0,defineProperty/* default */.A)(this, "backReverse", false);
    (0,defineProperty/* default */.A)(this, "frontBackReverse", false);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, DoorsConfig.size, new bluetooth/* BluetoothStruct */.iy(DoorsConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, DoorsConfig.size, new bluetooth/* BluetoothStruct */.iy(DoorsConfig.struct));
  }
}
(0,defineProperty/* default */.A)(DoorsConfig, "struct", {
  frontReverse: bluetooth/* BluetoothStruct */.iy.bit(),
  backReverse: bluetooth/* BluetoothStruct */.iy.bit(),
  frontBackReverse: bluetooth/* BluetoothStruct */.iy.bit()
});
(0,defineProperty/* default */.A)(DoorsConfig, "size", 1);
;// CONCATENATED MODULE: ./src/models/pjcan/doors/DoorsValue.ts



const API_DOORS_VALUE_EXEC = 0x81;
const API_DOORS_VALUE_EVENT = "DoorsValue";
const DoorsValue_API_DOORS_VIEW_EXEC = 0x83;
const DoorsValue_API_DOORS_VIEW_EVENT = "DoorsView";
/** Модель значений дверей */
class DoorsValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DOORS_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "frontLeft", false);
    (0,defineProperty/* default */.A)(this, "frontRight", false);
    (0,defineProperty/* default */.A)(this, "backLeft", false);
    (0,defineProperty/* default */.A)(this, "backRight", false);
    (0,defineProperty/* default */.A)(this, "trunk", false);
    (0,defineProperty/* default */.A)(this, "bonnet", false);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, DoorsValue.size, new bluetooth/* BluetoothStruct */.iy(DoorsValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(DoorsValue, "struct", {
  frontLeft: bluetooth/* BluetoothStruct */.iy.bit(),
  frontRight: bluetooth/* BluetoothStruct */.iy.bit(),
  backLeft: bluetooth/* BluetoothStruct */.iy.bit(),
  backRight: bluetooth/* BluetoothStruct */.iy.bit(),
  trunk: bluetooth/* BluetoothStruct */.iy.bit(),
  bonnet: bluetooth/* BluetoothStruct */.iy.bit()
});
(0,defineProperty/* default */.A)(DoorsValue, "size", 1);
;// CONCATENATED MODULE: ./src/models/pjcan/doors/index.ts




/***/ }),

/***/ 76300:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s_: function() { return /* reexport */ API_ENGINE_CONFIG_EVENT; },
  D6: function() { return /* reexport */ API_ENGINE_CONFIG_EXEC; },
  P8: function() { return /* reexport */ API_ENGINE_VALUE_EVENT; },
  Oq: function() { return /* reexport */ API_ENGINE_VALUE_EXEC; },
  EX: function() { return /* reexport */ API_ENGINE_VIEW_COOLANT_EVENT; },
  Pv: function() { return /* reexport */ API_ENGINE_VIEW_COOLANT_EXEC; },
  tn: function() { return /* reexport */ API_ENGINE_VIEW_ENABLED_EVENT; },
  Cc: function() { return /* reexport */ API_ENGINE_VIEW_ENABLED_EXEC; },
  Zw: function() { return /* reexport */ API_ENGINE_VIEW_EVENT; },
  Em: function() { return /* reexport */ API_ENGINE_VIEW_EXEC; },
  Ud: function() { return /* reexport */ API_ENGINE_VIEW_LOAD_EVENT; },
  L9: function() { return /* reexport */ API_ENGINE_VIEW_LOAD_EXEC; },
  f0: function() { return /* reexport */ API_ENGINE_VIEW_RPM_EVENT; },
  k3: function() { return /* reexport */ API_ENGINE_VIEW_RPM_EXEC; },
  wN: function() { return /* reexport */ API_ENGINE_VIEW_THROTTLE_EVENT; },
  jh: function() { return /* reexport */ API_ENGINE_VIEW_THROTTLE_EXEC; },
  w0: function() { return /* reexport */ API_ENGINE_VIEW_TOTAL_COUNT_RPM_EVENT; },
  xx: function() { return /* reexport */ API_ENGINE_VIEW_TOTAL_COUNT_RPM_EXEC; },
  DM: function() { return /* reexport */ API_ENGINE_VIEW_TOTAL_WORKTIME_EVENT; },
  Yj: function() { return /* reexport */ API_ENGINE_VIEW_TOTAL_WORKTIME_EXEC; },
  zZ: function() { return /* reexport */ EngineConfig; },
  mI: function() { return /* reexport */ EngineValue; },
  Du: function() { return /* reexport */ EngineViews; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/engine/EngineConfig.ts



const API_ENGINE_CONFIG_EXEC = 0x90;
const API_ENGINE_CONFIG_EVENT = "EngineConfig";
/** Модель конфигурации ДВС */
class EngineConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_ENGINE_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "showDays", false);
    (0,defineProperty/* default */.A)(this, "totalWorktime", BigInt(0));
    (0,defineProperty/* default */.A)(this, "totalCountRPM", BigInt(0));
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, EngineConfig.size, new bluetooth/* BluetoothStruct */.iy(EngineConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, EngineConfig.size, new bluetooth/* BluetoothStruct */.iy(EngineConfig.struct));
  }
}
(0,defineProperty/* default */.A)(EngineConfig, "struct", {
  showDays: bluetooth/* BluetoothStruct */.iy.bit(),
  totalWorktime: bluetooth/* BluetoothStruct */.iy.uint64(),
  totalCountRPM: bluetooth/* BluetoothStruct */.iy.uint64()
});
(0,defineProperty/* default */.A)(EngineConfig, "size", 17);
;// CONCATENATED MODULE: ./src/models/pjcan/engine/EngineValue.ts



const API_ENGINE_VALUE_EXEC = 0x91;
const API_ENGINE_VALUE_EVENT = "EngineValue";
/** Модель значений ДВС */
class EngineValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_ENGINE_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "on", false);
    (0,defineProperty/* default */.A)(this, "coolant", 0);
    (0,defineProperty/* default */.A)(this, "rpm", 0);
    (0,defineProperty/* default */.A)(this, "worktime", 0);
    (0,defineProperty/* default */.A)(this, "countRPM", 0);
    (0,defineProperty/* default */.A)(this, "load", 0);
    (0,defineProperty/* default */.A)(this, "throttle", 0);
    (0,defineProperty/* default */.A)(this, "viewDays", 0);
    (0,defineProperty/* default */.A)(this, "viewHours", 0);
    (0,defineProperty/* default */.A)(this, "viewMinutes", 0);
    (0,defineProperty/* default */.A)(this, "viewSeconds", 0);
    (0,defineProperty/* default */.A)(this, "viewCountRPM", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, EngineValue.size, new bluetooth/* BluetoothStruct */.iy(EngineValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(EngineValue, "struct", {
  on: bluetooth/* BluetoothStruct */.iy.bit(),
  coolant: bluetooth/* BluetoothStruct */.iy.int8(),
  rpm: bluetooth/* BluetoothStruct */.iy.uint16(),
  worktime: bluetooth/* BluetoothStruct */.iy.uint32(),
  countRPM: bluetooth/* BluetoothStruct */.iy.uint32(),
  load: bluetooth/* BluetoothStruct */.iy.uint16(),
  throttle: bluetooth/* BluetoothStruct */.iy.uint16(),
  viewDays: bluetooth/* BluetoothStruct */.iy.uint16(),
  viewHours: bluetooth/* BluetoothStruct */.iy.uint8(),
  viewMinutes: bluetooth/* BluetoothStruct */.iy.uint8(),
  viewSeconds: bluetooth/* BluetoothStruct */.iy.uint8(),
  viewCountRPM: bluetooth/* BluetoothStruct */.iy.uint32()
});
(0,defineProperty/* default */.A)(EngineValue, "size", 25);
// EXTERNAL MODULE: ./src/models/pjcan/view/index.ts + 2 modules
var view = __webpack_require__(77813);
;// CONCATENATED MODULE: ./src/models/pjcan/engine/EngineViews.ts




const API_ENGINE_VIEW_EXEC = 0x93;
const API_ENGINE_VIEW_EVENT = "EngineView";
const API_ENGINE_VIEW_ENABLED_EXEC = 0x94;
const API_ENGINE_VIEW_ENABLED_EVENT = "EngineViewEnabled";
const API_ENGINE_VIEW_TOTAL_WORKTIME_EXEC = 0x95;
const API_ENGINE_VIEW_TOTAL_WORKTIME_EVENT = "EngineViewTotalWorktime";
const API_ENGINE_VIEW_TOTAL_COUNT_RPM_EXEC = 0x96;
const API_ENGINE_VIEW_TOTAL_COUNT_RPM_EVENT = "EngineViewTotalCountRPM";
const API_ENGINE_VIEW_COOLANT_EXEC = 0x97;
const API_ENGINE_VIEW_COOLANT_EVENT = "EngineViewCoolant";
const API_ENGINE_VIEW_RPM_EXEC = 0x98;
const API_ENGINE_VIEW_RPM_EVENT = "EngineViewRPM";
const API_ENGINE_VIEW_LOAD_EXEC = 0x99;
const API_ENGINE_VIEW_LOAD_EVENT = "EngineViewLoad";
const API_ENGINE_VIEW_THROTTLE_EXEC = 0x9a;
const API_ENGINE_VIEW_THROTTLE_EVENT = "EngineViewThrottle";
/** Модель параметров отображения данных ДВС */
class EngineViews extends base/* BaseModel */.t {
  constructor(data) {
    super(API_ENGINE_VIEW_EXEC);
    (0,defineProperty/* default */.A)(this, "enabled", new view/* ViewConfig */.i(API_ENGINE_VIEW_ENABLED_EXEC));
    (0,defineProperty/* default */.A)(this, "totalWorktime", new view/* ViewConfig */.i(API_ENGINE_VIEW_TOTAL_WORKTIME_EXEC));
    (0,defineProperty/* default */.A)(this, "totalCountRPM", new view/* ViewConfig */.i(API_ENGINE_VIEW_TOTAL_COUNT_RPM_EXEC));
    (0,defineProperty/* default */.A)(this, "coolant", new view/* ViewConfig */.i(API_ENGINE_VIEW_COOLANT_EXEC));
    (0,defineProperty/* default */.A)(this, "rpm", new view/* ViewConfig */.i(API_ENGINE_VIEW_RPM_EXEC));
    (0,defineProperty/* default */.A)(this, "load", new view/* ViewConfig */.i(API_ENGINE_VIEW_LOAD_EXEC));
    (0,defineProperty/* default */.A)(this, "throttle", new view/* ViewConfig */.i(API_ENGINE_VIEW_THROTTLE_EXEC));
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    const result = this._set(this, this.exec, EngineViews.size, new bluetooth/* BluetoothStruct */.iy(EngineViews.struct), buf);
    if (result) {
      this.enabled.isData = true;
      this.totalWorktime.isData = true;
      this.totalCountRPM.isData = true;
      this.coolant.isData = true;
      this.rpm.isData = true;
      this.load.isData = true;
      this.throttle.isData = true;
    }
    return result;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(EngineViews, "struct", {
  enabled: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  totalWorktime: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  totalCountRPM: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  coolant: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  rpm: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  load: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  throttle: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct)
});
(0,defineProperty/* default */.A)(EngineViews, "size", 28);
;// CONCATENATED MODULE: ./src/models/pjcan/engine/index.ts





/***/ }),

/***/ 59461:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  KC: function() { return /* reexport */ API_FUEL_CONFIG_EVENT; },
  n7: function() { return /* reexport */ API_FUEL_CONFIG_EXEC; },
  tS: function() { return /* reexport */ API_FUEL_VALUE_EVENT; },
  qV: function() { return /* reexport */ API_FUEL_VALUE_EXEC; },
  Cc: function() { return /* reexport */ API_FUEL_VIEW_AVG_EVENT; },
  Ng: function() { return /* reexport */ API_FUEL_VIEW_AVG_EXEC; },
  jh: function() { return /* reexport */ API_FUEL_VIEW_CURRENT_EVENT; },
  yx: function() { return /* reexport */ API_FUEL_VIEW_CURRENT_EXEC; },
  jC: function() { return /* reexport */ API_FUEL_VIEW_EVENT; },
  OG: function() { return /* reexport */ API_FUEL_VIEW_EXEC; },
  ll: function() { return /* reexport */ FuelConfig; },
  Sh: function() { return /* reexport */ FuelValue; },
  hM: function() { return /* reexport */ FuelViews; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/fuel/FuelConfig.ts



const API_FUEL_CONFIG_EXEC = 0xa0;
const API_FUEL_CONFIG_EVENT = "FuelConfig";
/** Модель конфигурации расхода топлива */
class FuelConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_FUEL_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "ratio", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, FuelConfig.size, new bluetooth/* BluetoothStruct */.iy(FuelConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, FuelConfig.size, new bluetooth/* BluetoothStruct */.iy(FuelConfig.struct));
  }
}
(0,defineProperty/* default */.A)(FuelConfig, "struct", {
  ratio: bluetooth/* BluetoothStruct */.iy.uint16()
});
(0,defineProperty/* default */.A)(FuelConfig, "size", 2);
;// CONCATENATED MODULE: ./src/models/pjcan/fuel/FuelValue.ts



const API_FUEL_VALUE_EXEC = 0xa1;
const API_FUEL_VALUE_EVENT = "FuelValue";
/** Модель значений расхода топлива */
class FuelValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_FUEL_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "current", 0);
    (0,defineProperty/* default */.A)(this, "avg", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, FuelValue.size, new bluetooth/* BluetoothStruct */.iy(FuelValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(FuelValue, "struct", {
  current: bluetooth/* BluetoothStruct */.iy.uint16(),
  avg: bluetooth/* BluetoothStruct */.iy.uint16()
});
(0,defineProperty/* default */.A)(FuelValue, "size", 4);
// EXTERNAL MODULE: ./src/models/pjcan/view/index.ts + 2 modules
var view = __webpack_require__(77813);
;// CONCATENATED MODULE: ./src/models/pjcan/fuel/FuelViews.ts




const API_FUEL_VIEW_EXEC = 0xa3;
const API_FUEL_VIEW_EVENT = "FuelView";
const API_FUEL_VIEW_CURRENT_EXEC = 0xa4;
const API_FUEL_VIEW_CURRENT_EVENT = "FuelViewCurrent";
const API_FUEL_VIEW_AVG_EXEC = 0xa5;
const API_FUEL_VIEW_AVG_EVENT = "FuelViewAVG";
/** Модель параметров отображения данных расхода топлива */
class FuelViews extends base/* BaseModel */.t {
  constructor(data) {
    super(API_FUEL_VIEW_EXEC);
    (0,defineProperty/* default */.A)(this, "current", new view/* ViewConfig */.i(API_FUEL_VIEW_CURRENT_EXEC));
    (0,defineProperty/* default */.A)(this, "avg", new view/* ViewConfig */.i(API_FUEL_VIEW_AVG_EXEC));
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    const result = this._set(this, this.exec, FuelViews.size, new bluetooth/* BluetoothStruct */.iy(FuelViews.struct), buf);
    if (result) {
      this.current.isData = true;
      this.avg.isData = true;
    }
    return result;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(FuelViews, "struct", {
  current: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  avg: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct)
});
(0,defineProperty/* default */.A)(FuelViews, "size", 8);
;// CONCATENATED MODULE: ./src/models/pjcan/fuel/index.ts





/***/ }),

/***/ 19661:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  xD: function() { return /* reexport */ API_HEAD_UNIT_CONFIG_EVENT; },
  kZ: function() { return /* reexport */ API_HEAD_UNIT_CONFIG_EXEC; },
  wF: function() { return /* reexport */ API_HEAD_UNIT_VALUE_EVENT; },
  Xd: function() { return /* reexport */ API_HEAD_UNIT_VALUE_EXEC; },
  Ut: function() { return /* reexport */ API_HEAD_UNIT_VIEW_EVENT; },
  NA: function() { return /* reexport */ API_HEAD_UNIT_VIEW_EXEC; },
  Hq: function() { return /* reexport */ HeadUnitConfig; },
  Tm: function() { return /* reexport */ TProtocol; }
});

// UNUSED EXPORTS: HeadUnitValue

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/head-unit/TProtocol.ts
/* eslint-disable */
var TProtocol;
(function (TProtocol) {
  TProtocol[TProtocol["PROTOCOL_PJCAN"] = 0] = "PROTOCOL_PJCAN";
  TProtocol[TProtocol["PROTOCOL_RAISE_HM_ND00"] = 1] = "PROTOCOL_RAISE_HM_ND00";
  TProtocol[TProtocol["PROTOCOL_RAISE_HM_ND01"] = 2] = "PROTOCOL_RAISE_HM_ND01";
  TProtocol[TProtocol["PROTOCOL_RAISE_HM_ND03"] = 3] = "PROTOCOL_RAISE_HM_ND03";
  TProtocol[TProtocol["PROTOCOL_SIMPLE_SOFT_RP5_MZ_002"] = 4] = "PROTOCOL_SIMPLE_SOFT_RP5_MZ_002";
})(TProtocol || (TProtocol = {}));
;// CONCATENATED MODULE: ./src/models/pjcan/head-unit/HeadUnitConfig.ts




const API_HEAD_UNIT_CONFIG_EXEC = 0x50;
const API_HEAD_UNIT_CONFIG_EVENT = "HeadUnitConfig";
/** Модель параметров Head Unit */
class HeadUnitConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_HEAD_UNIT_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "showTextOfLogo", false);
    (0,defineProperty/* default */.A)(this, "sendButton", false);
    (0,defineProperty/* default */.A)(this, "sendClimate", false);
    (0,defineProperty/* default */.A)(this, "sendDoors", false);
    (0,defineProperty/* default */.A)(this, "sendOnboard", false);
    (0,defineProperty/* default */.A)(this, "reverseUart", false);
    (0,defineProperty/* default */.A)(this, "holdToFlip", false);
    (0,defineProperty/* default */.A)(this, "protocol", TProtocol.PROTOCOL_RAISE_HM_ND03);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, HeadUnitConfig.size, new bluetooth/* BluetoothStruct */.iy(HeadUnitConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, HeadUnitConfig.size, new bluetooth/* BluetoothStruct */.iy(HeadUnitConfig.struct));
  }
}
(0,defineProperty/* default */.A)(HeadUnitConfig, "struct", {
  showTextOfLogo: bluetooth/* BluetoothStruct */.iy.bit(),
  sendButton: bluetooth/* BluetoothStruct */.iy.bit(),
  sendClimate: bluetooth/* BluetoothStruct */.iy.bit(),
  sendDoors: bluetooth/* BluetoothStruct */.iy.bit(),
  sendOnboard: bluetooth/* BluetoothStruct */.iy.bit(),
  reverseUart: bluetooth/* BluetoothStruct */.iy.bit(),
  holdToFlip: bluetooth/* BluetoothStruct */.iy.bit(),
  protocol: bluetooth/* BluetoothStruct */.iy.uint8()
});
(0,defineProperty/* default */.A)(HeadUnitConfig, "size", 2);
;// CONCATENATED MODULE: ./src/models/pjcan/head-unit/HeadUnitValue.ts



const API_HEAD_UNIT_VALUE_EXEC = 0x51;
const API_HEAD_UNIT_VALUE_EVENT = "HeadUnitValue";
const API_HEAD_UNIT_VIEW_EXEC = 0x53;
const API_HEAD_UNIT_VIEW_EVENT = "HeadUnitView";
/** Модель значения текста Head Unit */
class HeadUnitValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_HEAD_UNIT_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "clock", {
      hour: 0,
      minutes: 0,
      seconds: 0
    });
    (0,defineProperty/* default */.A)(this, "button", 0);
    (0,defineProperty/* default */.A)(this, "text", "");
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, HeadUnitValue.size, new bluetooth/* BluetoothStruct */.iy(HeadUnitValue.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, HeadUnitValue.size, new bluetooth/* BluetoothStruct */.iy(HeadUnitValue.struct));
  }
}
(0,defineProperty/* default */.A)(HeadUnitValue, "struct", {
  clock: bluetooth/* BluetoothStruct */.iy.struct({
    hour: bluetooth/* BluetoothStruct */.iy.uint8(),
    minutes: bluetooth/* BluetoothStruct */.iy.uint8(),
    seconds: bluetooth/* BluetoothStruct */.iy.uint8()
  }),
  button: bluetooth/* BluetoothStruct */.iy.uint8(),
  text: bluetooth/* BluetoothStruct */.iy.char(13)
});
(0,defineProperty/* default */.A)(HeadUnitValue, "size", 17);
;// CONCATENATED MODULE: ./src/models/pjcan/head-unit/index.ts





/***/ }),

/***/ 14753:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y1: function() { return /* reexport */ API_MOVEMENT_VALUE_EVENT; },
  vT: function() { return /* reexport */ API_MOVEMENT_VALUE_EXEC; },
  CE: function() { return /* reexport */ API_MOVEMENT_VIEW_EVENT; },
  N6: function() { return /* reexport */ API_MOVEMENT_VIEW_EXEC; },
  rL: function() { return /* reexport */ API_MOVEMENT_VIEW_REST_WAY_EVENT; },
  iH: function() { return /* reexport */ API_MOVEMENT_VIEW_REST_WAY_EXEC; },
  hV: function() { return /* reexport */ API_MOVEMENT_VIEW_SPEED_AVG_EVENT; },
  GS: function() { return /* reexport */ API_MOVEMENT_VIEW_SPEED_AVG_EXEC; },
  cJ: function() { return /* reexport */ API_MOVEMENT_VIEW_SPEED_EVENT; },
  T3: function() { return /* reexport */ API_MOVEMENT_VIEW_SPEED_EXEC; },
  v5: function() { return /* reexport */ MovementValue; },
  UA: function() { return /* reexport */ MovementViews; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/movement/MovementValue.ts



const API_MOVEMENT_VALUE_EXEC = 0xb1;
const API_MOVEMENT_VALUE_EVENT = "MovementValue";
/** Модель значений движения */
class MovementValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_MOVEMENT_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "speed", 0);
    (0,defineProperty/* default */.A)(this, "speedAVG", 0);
    (0,defineProperty/* default */.A)(this, "restWay", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, MovementValue.size, new bluetooth/* BluetoothStruct */.iy(MovementValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(MovementValue, "struct", {
  speed: bluetooth/* BluetoothStruct */.iy.uint32(),
  speedAVG: bluetooth/* BluetoothStruct */.iy.uint8(),
  restWay: bluetooth/* BluetoothStruct */.iy.uint32()
});
(0,defineProperty/* default */.A)(MovementValue, "size", 9);
// EXTERNAL MODULE: ./src/models/pjcan/view/index.ts + 2 modules
var view = __webpack_require__(77813);
;// CONCATENATED MODULE: ./src/models/pjcan/movement/MovementViews.ts




const API_MOVEMENT_VIEW_EXEC = 0xb3;
const API_MOVEMENT_VIEW_EVENT = "MovementView";
const API_MOVEMENT_VIEW_SPEED_EXEC = 0xb4;
const API_MOVEMENT_VIEW_SPEED_EVENT = "MovementViewSpeed";
const API_MOVEMENT_VIEW_SPEED_AVG_EXEC = 0xb5;
const API_MOVEMENT_VIEW_SPEED_AVG_EVENT = "MovementViewSpeedAVG";
const API_MOVEMENT_VIEW_REST_WAY_EXEC = 0xb6;
const API_MOVEMENT_VIEW_REST_WAY_EVENT = "MovementViewRestWay";
/** Модель параметров отображения данных движения */
class MovementViews extends base/* BaseModel */.t {
  constructor(data) {
    super(API_MOVEMENT_VIEW_EXEC);
    (0,defineProperty/* default */.A)(this, "speed", new view/* ViewConfig */.i(API_MOVEMENT_VIEW_SPEED_EXEC));
    (0,defineProperty/* default */.A)(this, "speedAVG", new view/* ViewConfig */.i(API_MOVEMENT_VIEW_SPEED_AVG_EXEC));
    (0,defineProperty/* default */.A)(this, "restWay", new view/* ViewConfig */.i(API_MOVEMENT_VIEW_REST_WAY_EXEC));
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    const result = this._set(this, this.exec, MovementViews.size, new bluetooth/* BluetoothStruct */.iy(MovementViews.struct), buf);
    if (result) {
      this.speed.isData = true;
      this.speedAVG.isData = true;
      this.restWay.isData = true;
    }
    return result;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(MovementViews, "struct", {
  speed: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  speedAVG: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  restWay: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct)
});
(0,defineProperty/* default */.A)(MovementViews, "size", 12);
;// CONCATENATED MODULE: ./src/models/pjcan/movement/index.ts




/***/ }),

/***/ 32280:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Vw: function() { return /* reexport */ API_ONBOARD_CONFIG_EVENT; },
  SX: function() { return /* reexport */ API_ONBOARD_CONFIG_EXEC; },
  Ew: function() { return /* reexport */ API_ONBOARD_VIEW_EVENT; },
  F5: function() { return /* reexport */ API_ONBOARD_VIEW_EXEC; },
  iz: function() { return /* reexport */ OnboardAction; },
  ST: function() { return /* reexport */ OnboardConfig; },
  oB: function() { return /* reexport */ TCarModel; }
});

// UNUSED EXPORTS: API_ONBOARD_ACTION_EVENT, API_ONBOARD_ACTION_EXEC

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/onboard/TCarModel.ts
/* eslint-disable no-unused-vars */
var TCarModel;
(function (TCarModel) {
  TCarModel[TCarModel["CAR_MODEL_UNKNOWN"] = 0] = "CAR_MODEL_UNKNOWN";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_3_BK"] = 1] = "CAR_MODEL_MAZDA_3_BK";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_3_BL"] = 2] = "CAR_MODEL_MAZDA_3_BL";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_6_GG"] = 3] = "CAR_MODEL_MAZDA_6_GG";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_6_GH"] = 4] = "CAR_MODEL_MAZDA_6_GH";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_CX7"] = 5] = "CAR_MODEL_MAZDA_CX7";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_CX7_REST"] = 6] = "CAR_MODEL_MAZDA_CX7_REST";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_CX9"] = 7] = "CAR_MODEL_MAZDA_CX9";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_CX9_REST"] = 8] = "CAR_MODEL_MAZDA_CX9_REST";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_5"] = 9] = "CAR_MODEL_MAZDA_5";
})(TCarModel || (TCarModel = {}));
;// CONCATENATED MODULE: ./src/models/pjcan/onboard/OnboardConfig.ts




const API_ONBOARD_CONFIG_EXEC = 0x40;
const API_ONBOARD_CONFIG_EVENT = "OnboardConfig";
const API_ONBOARD_VIEW_EXEC = 0x43;
const API_ONBOARD_VIEW_EVENT = "OnboardView";
/** Модель параметров автомобиля */
class OnboardConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_ONBOARD_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "lcd", false);
    (0,defineProperty/* default */.A)(this, "lcdClock24", false);
    (0,defineProperty/* default */.A)(this, "carModel", TCarModel.CAR_MODEL_UNKNOWN);
    (0,defineProperty/* default */.A)(this, "logo", "");
    (0,defineProperty/* default */.A)(this, "hello", "");
    this.skipActivationCheck = true;
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, OnboardConfig.size, new bluetooth/* BluetoothStruct */.iy(OnboardConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, OnboardConfig.size, new bluetooth/* BluetoothStruct */.iy(OnboardConfig.struct));
  }
}
(0,defineProperty/* default */.A)(OnboardConfig, "struct", {
  lcd: bluetooth/* BluetoothStruct */.iy.bit(),
  lcdClock24: bluetooth/* BluetoothStruct */.iy.bit(),
  carModel: bluetooth/* BluetoothStruct */.iy.uint8(),
  logo: bluetooth/* BluetoothStruct */.iy.char(12),
  hello: bluetooth/* BluetoothStruct */.iy.char(32)
});
(0,defineProperty/* default */.A)(OnboardConfig, "size", 46);
// EXTERNAL MODULE: ./src/models/pjcan/buttons/index.ts + 7 modules
var buttons = __webpack_require__(84596);
;// CONCATENATED MODULE: ./src/models/pjcan/onboard/OnboardAction.ts




const API_ONBOARD_ACTION_EXEC = 0x42;
const API_ONBOARD_ACTION_EVENT = "OnboardAction";
/** Модель действий устройства */
class OnboardAction extends base/* BaseModel */.t {
  constructor() {
    super(API_ONBOARD_ACTION_EXEC);
    (0,defineProperty/* default */.A)(this, "btnEmulation", false);
    (0,defineProperty/* default */.A)(this, "btnExec", buttons/* TButtonExec */.su.BUTTON_EXEC_NONE);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return false;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec, OnboardAction.size, new bluetooth/* BluetoothStruct */.iy(OnboardAction.struct));
  }
}
(0,defineProperty/* default */.A)(OnboardAction, "struct", {
  btnEmulation: bluetooth/* BluetoothStruct */.iy.bit(),
  btnExec: bluetooth/* BluetoothStruct */.iy.uint8()
});
(0,defineProperty/* default */.A)(OnboardAction, "size", 2);
;// CONCATENATED MODULE: ./src/models/pjcan/onboard/index.ts





/***/ }),

/***/ 57411:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Eg: function() { return /* reexport */ API_SENSORS_VALUE_EVENT; },
  H2: function() { return /* reexport */ API_SENSORS_VALUE_EXEC; },
  en: function() { return /* reexport */ API_SENSORS_VIEW_EVENT; },
  fW: function() { return /* reexport */ API_SENSORS_VIEW_EXEC; },
  fN: function() { return /* reexport */ API_SENSORS_VIEW_HANDBRAKE_EVENT; },
  _V: function() { return /* reexport */ API_SENSORS_VIEW_HANDBRAKE_EXEC; },
  Bj: function() { return /* reexport */ API_SENSORS_VIEW_REVERSE_EVENT; },
  Y5: function() { return /* reexport */ API_SENSORS_VIEW_REVERSE_EXEC; },
  rd: function() { return /* reexport */ API_SENSORS_VIEW_SEATBELT_EVENT; },
  MA: function() { return /* reexport */ API_SENSORS_VIEW_SEATBELT_EXEC; },
  he: function() { return /* reexport */ API_SENSORS_VIEW_TURN_SIGNAL_EVENT; },
  WL: function() { return /* reexport */ API_SENSORS_VIEW_TURN_SIGNAL_EXEC; },
  fX: function() { return /* reexport */ SensorsValue; },
  IS: function() { return /* reexport */ SensorsViews; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/sensors/SensorsValue.ts



const API_SENSORS_VALUE_EXEC = 0xc1;
const API_SENSORS_VALUE_EVENT = "SensorsValue";
/** Модель значений датчиков */
class SensorsValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_SENSORS_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "acc", false);
    (0,defineProperty/* default */.A)(this, "handbrake", false);
    (0,defineProperty/* default */.A)(this, "reverse", false);
    (0,defineProperty/* default */.A)(this, "seatbeltDriver", false);
    (0,defineProperty/* default */.A)(this, "seatbeltPassenger", false);
    (0,defineProperty/* default */.A)(this, "turnSignalLeft", false);
    (0,defineProperty/* default */.A)(this, "turnSignalRight", false);
    (0,defineProperty/* default */.A)(this, "highBeam", false);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, SensorsValue.size, new bluetooth/* BluetoothStruct */.iy(SensorsValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(SensorsValue, "struct", {
  acc: bluetooth/* BluetoothStruct */.iy.bit(),
  handbrake: bluetooth/* BluetoothStruct */.iy.bit(),
  reverse: bluetooth/* BluetoothStruct */.iy.bit(),
  seatbeltDriver: bluetooth/* BluetoothStruct */.iy.bit(),
  seatbeltPassenger: bluetooth/* BluetoothStruct */.iy.bit(),
  turnSignalLeft: bluetooth/* BluetoothStruct */.iy.bit(),
  turnSignalRight: bluetooth/* BluetoothStruct */.iy.bit(),
  highBeam: bluetooth/* BluetoothStruct */.iy.bit()
});
(0,defineProperty/* default */.A)(SensorsValue, "size", 1);
// EXTERNAL MODULE: ./src/models/pjcan/view/index.ts + 2 modules
var view = __webpack_require__(77813);
;// CONCATENATED MODULE: ./src/models/pjcan/sensors/SensorsViews.ts




const API_SENSORS_VIEW_EXEC = 0xc3;
const API_SENSORS_VIEW_EVENT = "SensorsView";
const API_SENSORS_VIEW_HANDBRAKE_EXEC = 0xc4;
const API_SENSORS_VIEW_HANDBRAKE_EVENT = "SensorsViewHandbrake";
const API_SENSORS_VIEW_REVERSE_EXEC = 0xc5;
const API_SENSORS_VIEW_REVERSE_EVENT = "SensorsViewReverse";
const API_SENSORS_VIEW_SEATBELT_EXEC = 0xc6;
const API_SENSORS_VIEW_SEATBELT_EVENT = "SensorsViewSeatbelt";
const API_SENSORS_VIEW_TURN_SIGNAL_EXEC = 0xc7;
const API_SENSORS_VIEW_TURN_SIGNAL_EVENT = "SensorsViewTurnSignal";
/** Модель параметров отображения данных датчиков */
class SensorsViews extends base/* BaseModel */.t {
  constructor(data) {
    super(API_SENSORS_VIEW_EXEC);
    (0,defineProperty/* default */.A)(this, "handbrake", new view/* ViewConfig */.i(API_SENSORS_VIEW_HANDBRAKE_EXEC));
    (0,defineProperty/* default */.A)(this, "reverse", new view/* ViewConfig */.i(API_SENSORS_VIEW_REVERSE_EXEC));
    (0,defineProperty/* default */.A)(this, "seatbelt", new view/* ViewConfig */.i(API_SENSORS_VIEW_SEATBELT_EXEC));
    (0,defineProperty/* default */.A)(this, "turnSignal", new view/* ViewConfig */.i(API_SENSORS_VIEW_TURN_SIGNAL_EXEC));
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    const result = this._set(this, this.exec, SensorsViews.size, new bluetooth/* BluetoothStruct */.iy(SensorsViews.struct), buf);
    if (result) {
      this.handbrake.isData = true;
      this.reverse.isData = true;
      this.seatbelt.isData = true;
      this.turnSignal.isData = true;
    }
    return result;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(SensorsViews, "struct", {
  handbrake: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  reverse: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  seatbelt: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  turnSignal: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct)
});
(0,defineProperty/* default */.A)(SensorsViews, "size", view/* ViewConfig */.i.size * 4);
;// CONCATENATED MODULE: ./src/models/pjcan/sensors/index.ts




/***/ }),

/***/ 42570:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H0: function() { return /* reexport */ API_TEMPERATURE_VALUE_EVENT; },
  i0: function() { return /* reexport */ API_TEMPERATURE_VALUE_EXEC; },
  P5: function() { return /* reexport */ API_TEMPERATURE_VIEW_EVENT; },
  EO: function() { return /* reexport */ API_TEMPERATURE_VIEW_EXEC; },
  sY: function() { return /* reexport */ TemperatureValue; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/temperature/TemperatureValue.ts



const API_TEMPERATURE_VALUE_EXEC = 0xd1;
const API_TEMPERATURE_VALUE_EVENT = "TemperatureValue";
const API_TEMPERATURE_VIEW_EXEC = 0xd3;
const API_TEMPERATURE_VIEW_EVENT = "TemperatureView";
/** Модель значений температуры */
class TemperatureValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_TEMPERATURE_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "in", 0);
    (0,defineProperty/* default */.A)(this, "out", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, TemperatureValue.size, new bluetooth/* BluetoothStruct */.iy(TemperatureValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(TemperatureValue, "struct", {
  in: bluetooth/* BluetoothStruct */.iy.int16(),
  out: bluetooth/* BluetoothStruct */.iy.int16()
});
(0,defineProperty/* default */.A)(TemperatureValue, "size", 4);
;// CONCATENATED MODULE: ./src/models/pjcan/temperature/index.ts



/***/ }),

/***/ 62805:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K_: function() { return /* reexport */ API_TEST_VIEW_EXEC; },
  SZ: function() { return /* reexport */ TestValue; }
});

// UNUSED EXPORTS: API_TEST_VALUE_EVENT, API_TEST_VALUE_EXEC, API_TEST_VIEW_EVENT

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/test/TestValue.ts



const API_TEST_VALUE_EXEC = 0xf0;
const API_TEST_VALUE_EVENT = "TestValue";
const API_TEST_VIEW_EXEC = 0xf3;
const API_TEST_VIEW_EVENT = "TestView";
/** Модель значений тестирования */
class TestValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_TEST_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "text", " -- TEST -- ");
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, TestValue.size, new bluetooth/* BluetoothStruct */.iy(TestValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec, TestValue.size, new bluetooth/* BluetoothStruct */.iy(TestValue.struct));
  }
}
(0,defineProperty/* default */.A)(TestValue, "struct", {
  text: bluetooth/* BluetoothStruct */.iy.char(32)
});
(0,defineProperty/* default */.A)(TestValue, "size", 32);
;// CONCATENATED MODULE: ./src/models/pjcan/test/index.ts



/***/ }),

/***/ 55800:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FX: function() { return /* reexport */ API40_VERSION_EVENT; },
  QM: function() { return /* reexport */ API_NEW_VERSION_EVENT; },
  dD: function() { return /* reexport */ API_VERSION_EVENT; },
  uM: function() { return /* reexport */ API_VERSION_EXEC; },
  Rx: function() { return /* reexport */ Version; }
});

// UNUSED EXPORTS: API40_VERSION_EXEC

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/version/Version.ts



const API_VERSION_EXEC = 0x00;
const API_VERSION_EVENT = "Version";
const API_NEW_VERSION_EVENT = "NewVersion";
const API40_VERSION_EXEC = 0x06;
const API40_VERSION_EVENT = "Version40";
/** Модель версии */
class Version extends base/* BaseModel */.t {
  /** Наличие версии */
  get is() {
    return this.major > 0;
  }
  /** Поддерживаемая версия прошивки */
  get supported() {
    return this.major === 4 && this.minor === 1;
  }
  /** Строковое представление */
  get toString() {
    return `${this.major}.${this.minor}.${this.build}.${this.revision}`;
  }
  constructor(data, protocol) {
    if (protocol === 40) {
      super(API40_VERSION_EXEC, true, 40);
      (0,defineProperty/* default */.A)(this, "major", 0);
      (0,defineProperty/* default */.A)(this, "minor", 0);
      (0,defineProperty/* default */.A)(this, "build", 0);
      (0,defineProperty/* default */.A)(this, "revision", 0);
    } else {
      super(API_VERSION_EXEC, true);
      (0,defineProperty/* default */.A)(this, "major", 0);
      (0,defineProperty/* default */.A)(this, "minor", 0);
      (0,defineProperty/* default */.A)(this, "build", 0);
      (0,defineProperty/* default */.A)(this, "revision", 0);
    }
    this.skipActivationCheck = true;
    if (data) this.set(data);
  }
  /**
   * Сравнение версий
   * @param {IVersion} ver Объект версии
   * @param {number} len Длина сравниваемой версии (от 1 до 4)
   */
  compare(ver, len) {
    const verA = [this.major, this.minor, this.build, this.revision];
    const verB = [ver.major, ver.minor, ver.build, ver.revision];
    if (len < 1) len = 1;else if (len > 4) len = 4;
    for (let i = 0; i < len; i++) {
      if (verB[i] > verA[i]) return 1;else if (verB[i] < verA[i]) return -1;
    }
    return 0;
  }
  compareString(ver) {
    if (ver?.length > 0) {
      const verA = [this.major, this.minor, this.build, this.revision];
      const verB = ver.split(".")?.map(x => parseInt(x));
      if (verB?.length > 0) {
        let len = verB.length;
        if (len > 4) len = 4;
        for (let i = 0; i < len; i++) {
          if (verB[i] > verA[i]) return 1;else if (verB[i] < verA[i]) return -1;
        }
      }
    }
    return 0;
  }
  /** Очистить значения версии */
  clear() {
    this.major = 0;
    this.minor = 0;
    this.build = 0;
    this.revision = 0;
  }
  /**
   * Запись версии
   * @param {IVersion} ver Версия
   */
  setVersion(ver) {
    if (this.is || !ver.is) return false;
    this.major = ver.major;
    this.minor = ver.minor;
    this.build = ver.build;
    this.revision = ver.revision;
    return true;
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, Version.size, new bluetooth/* BluetoothStruct */.iy(Version.struct), buf);
  }
  /** Чтение данных */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, Version.size, new bluetooth/* BluetoothStruct */.iy(Version.struct));
  }
}
(0,defineProperty/* default */.A)(Version, "struct", {
  major: bluetooth/* BluetoothStruct */.iy.uint8(),
  minor: bluetooth/* BluetoothStruct */.iy.uint8(),
  build: bluetooth/* BluetoothStruct */.iy.uint8(),
  revision: bluetooth/* BluetoothStruct */.iy.uint8()
});
(0,defineProperty/* default */.A)(Version, "size", 4);
;// CONCATENATED MODULE: ./src/models/pjcan/version/index.ts



/***/ }),

/***/ 77813:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: function() { return /* reexport */ TViewType; },
  i: function() { return /* reexport */ ViewConfig; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/view/TViewType.ts
/* eslint-disable */
/** Тип отображения текста */
var TViewType;
(function (TViewType) {
  TViewType[TViewType["VIEW_TEXT_SIMPLE"] = 0] = "VIEW_TEXT_SIMPLE";
  TViewType[TViewType["VIEW_TEXT_FLICKERING"] = 1] = "VIEW_TEXT_FLICKERING";
  TViewType[TViewType["VIEW_TEXT_TICKER"] = 2] = "VIEW_TEXT_TICKER"; // бегущая строка
})(TViewType || (TViewType = {}));
;// CONCATENATED MODULE: ./src/models/pjcan/view/ViewConfig.ts




/** Модель параметров отображения */
class ViewConfig extends base/* BaseModel */.t {
  constructor(exec = 0, data) {
    super(exec);
    (0,defineProperty/* default */.A)(this, "enabled", false);
    (0,defineProperty/* default */.A)(this, "type", TViewType.VIEW_TEXT_SIMPLE);
    (0,defineProperty/* default */.A)(this, "time", 0);
    (0,defineProperty/* default */.A)(this, "delay", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, ViewConfig.size, new bluetooth/* BluetoothStruct */.iy(ViewConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, ViewConfig.size, new bluetooth/* BluetoothStruct */.iy(ViewConfig.struct));
  }
}
(0,defineProperty/* default */.A)(ViewConfig, "struct", {
  enabled: bluetooth/* BluetoothStruct */.iy.bit(),
  type: bluetooth/* BluetoothStruct */.iy.uint8(),
  time: bluetooth/* BluetoothStruct */.iy.uint8(),
  delay: bluetooth/* BluetoothStruct */.iy.uint8()
});
(0,defineProperty/* default */.A)(ViewConfig, "size", 4);
;// CONCATENATED MODULE: ./src/models/pjcan/view/index.ts




/***/ }),

/***/ 82882:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PS: function() { return /* reexport */ API_VOLUME_VALUE_EVENT; },
  UN: function() { return /* reexport */ API_VOLUME_VALUE_EXEC; },
  fB: function() { return /* reexport */ API_VOLUME_VIEW_EVENT; },
  Kd: function() { return /* reexport */ API_VOLUME_VIEW_EXEC; },
  Y$: function() { return /* reexport */ VolumeValue; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/volume/VolumeValue.ts



const API_VOLUME_VALUE_EXEC = 0xe1;
const API_VOLUME_VALUE_EVENT = "VolumeConfig";
const API_VOLUME_VIEW_EXEC = 0xe3;
const API_VOLUME_VIEW_EVENT = "VolumeView";
/** Модель конфигурации уровня звука */
class VolumeValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_VOLUME_VALUE_EXEC, true);
    (0,defineProperty/* default */.A)(this, "mute", false);
    (0,defineProperty/* default */.A)(this, "volume", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, VolumeValue.size, new bluetooth/* BluetoothStruct */.iy(VolumeValue.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, VolumeValue.size, new bluetooth/* BluetoothStruct */.iy(VolumeValue.struct));
  }
}
(0,defineProperty/* default */.A)(VolumeValue, "struct", {
  mute: bluetooth/* BluetoothStruct */.iy.bit(),
  volume: bluetooth/* BluetoothStruct */.iy.uint8()
});
(0,defineProperty/* default */.A)(VolumeValue, "size", 2);
;// CONCATENATED MODULE: ./src/models/pjcan/volume/index.ts



/***/ })

}]);