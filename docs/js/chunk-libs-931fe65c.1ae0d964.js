"use strict";
(self["webpackChunkpjcan"] = self["webpackChunkpjcan"] || []).push([[84],{

/***/ 86635:
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ 16054:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  YT: function() { return /* binding */ PanInput; },
  Ay: function() { return /* binding */ axes_esm; }
});

// UNUSED EXPORTS: AXES_EVENTS, AXES_METHODS, MoveKeyInput, PinchInput, REACTIVE_AXES, RotatePanInput, WheelInput

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
;// CONCATENATED MODULE: ./node_modules/@egjs/agent/dist/agent.esm.js
/*
Copyright (c) 2015 NAVER Corp.
name: @egjs/agent
license: MIT
author: NAVER Corp.
repository: git+https://github.com/naver/egjs-agent.git
version: 2.4.4
*/
function some(arr, callback) {
  var length = arr.length;
  for (var i = 0; i < length; ++i) {
    if (callback(arr[i], i)) {
      return true;
    }
  }
  return false;
}
function find(arr, callback) {
  var length = arr.length;
  for (var i = 0; i < length; ++i) {
    if (callback(arr[i], i)) {
      return arr[i];
    }
  }
  return null;
}
function getUserAgentString(agent) {
  var userAgent = agent;
  if (typeof userAgent === "undefined") {
    if (typeof navigator === "undefined" || !navigator) {
      return "";
    }
    userAgent = navigator.userAgent || "";
  }
  return userAgent.toLowerCase();
}
function execRegExp(pattern, text) {
  try {
    return new RegExp(pattern, "g").exec(text);
  } catch (e) {
    return null;
  }
}
function hasUserAgentData() {
  if (typeof navigator === "undefined" || !navigator || !navigator.userAgentData) {
    return false;
  }
  var userAgentData = navigator.userAgentData;
  var brands = userAgentData.brands || userAgentData.uaList;
  return !!(brands && brands.length);
}
function findVersion(versionTest, userAgent) {
  var result = execRegExp("(" + versionTest + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", userAgent);
  return result ? result[3] : "";
}
function convertVersion(text) {
  return text.replace(/_/g, ".");
}
function findPreset(presets, userAgent) {
  var userPreset = null;
  var version = "-1";
  some(presets, function (preset) {
    var result = execRegExp("(" + preset.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", userAgent);
    if (!result || preset.brand) {
      return false;
    }
    userPreset = preset;
    version = result[3] || "-1";
    if (preset.versionAlias) {
      version = preset.versionAlias;
    } else if (preset.versionTest) {
      version = findVersion(preset.versionTest.toLowerCase(), userAgent) || version;
    }
    version = convertVersion(version);
    return true;
  });
  return {
    preset: userPreset,
    version: version
  };
}
function findPresetBrand(presets, brands) {
  var brandInfo = {
    brand: "",
    version: "-1"
  };
  some(presets, function (preset) {
    var result = findBrand(brands, preset);
    if (!result) {
      return false;
    }
    brandInfo.brand = preset.id;
    brandInfo.version = preset.versionAlias || result.version;
    return brandInfo.version !== "-1";
  });
  return brandInfo;
}
function findBrand(brands, preset) {
  return find(brands, function (_a) {
    var brand = _a.brand;
    return execRegExp("" + preset.test, brand.toLowerCase());
  });
}
var BROWSER_PRESETS = [{
  test: "phantomjs",
  id: "phantomjs"
}, {
  test: "whale",
  id: "whale"
}, {
  test: "edgios|edge|edg",
  id: "edge"
}, {
  test: "msie|trident|windows phone",
  id: "ie",
  versionTest: "iemobile|msie|rv"
}, {
  test: "miuibrowser",
  id: "miui browser"
}, {
  test: "samsungbrowser",
  id: "samsung internet"
}, {
  test: "samsung",
  id: "samsung internet",
  versionTest: "version"
}, {
  test: "chrome|crios",
  id: "chrome"
}, {
  test: "firefox|fxios",
  id: "firefox"
}, {
  test: "android",
  id: "android browser",
  versionTest: "version"
}, {
  test: "safari|iphone|ipad|ipod",
  id: "safari",
  versionTest: "version"
}]; // chromium's engine(blink) is based on applewebkit 537.36.

var CHROMIUM_PRESETS = [{
  test: "(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",
  id: "chrome",
  versionTest: "chrome"
}, {
  test: "chromium",
  id: "chrome"
}, {
  test: "whale",
  id: "chrome",
  versionAlias: "-1",
  brand: true
}];
var WEBKIT_PRESETS = [{
  test: "applewebkit",
  id: "webkit",
  versionTest: "applewebkit|safari"
}];
var WEBVIEW_PRESETS = [{
  test: "(?=(iphone|ipad))(?!(.*version))",
  id: "webview"
}, {
  test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
  id: "webview"
}, {
  // test webview
  test: "webview",
  id: "webview"
}];
var OS_PRESETS = [{
  test: "windows phone",
  id: "windows phone"
}, {
  test: "windows 2000",
  id: "window",
  versionAlias: "5.0"
}, {
  test: "windows nt",
  id: "window"
}, {
  test: "win32|windows",
  id: "window"
}, {
  test: "iphone|ipad|ipod",
  id: "ios",
  versionTest: "iphone os|cpu os"
}, {
  test: "macos|macintel|mac os x",
  id: "mac"
}, {
  test: "android|linux armv81",
  id: "android"
}, {
  test: "tizen",
  id: "tizen"
}, {
  test: "webos|web0s",
  id: "webos"
}];
function isWebView(userAgent) {
  return !!findPreset(WEBVIEW_PRESETS, userAgent).preset;
}
function getLegacyAgent(userAgent) {
  var nextAgent = getUserAgentString(userAgent);
  var isMobile = !!/mobi/g.exec(nextAgent);
  var browser = {
    name: "unknown",
    version: "-1",
    majorVersion: -1,
    webview: isWebView(nextAgent),
    chromium: false,
    chromiumVersion: "-1",
    webkit: false,
    webkitVersion: "-1"
  };
  var os = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  };
  var _a = findPreset(BROWSER_PRESETS, nextAgent),
    browserPreset = _a.preset,
    browserVersion = _a.version;
  var _b = findPreset(OS_PRESETS, nextAgent),
    osPreset = _b.preset,
    osVersion = _b.version;
  var chromiumPreset = findPreset(CHROMIUM_PRESETS, nextAgent);
  browser.chromium = !!chromiumPreset.preset;
  browser.chromiumVersion = chromiumPreset.version;
  if (!browser.chromium) {
    var webkitPreset = findPreset(WEBKIT_PRESETS, nextAgent);
    browser.webkit = !!webkitPreset.preset;
    browser.webkitVersion = webkitPreset.version;
  }
  if (osPreset) {
    os.name = osPreset.id;
    os.version = osVersion;
    os.majorVersion = parseInt(osVersion, 10);
  }
  if (browserPreset) {
    browser.name = browserPreset.id;
    browser.version = browserVersion; // Early whale bugs

    if (browser.webview && os.name === "ios" && browser.name !== "safari") {
      browser.webview = false;
    }
  }
  browser.majorVersion = parseInt(browser.version, 10);
  return {
    browser: browser,
    os: os,
    isMobile: isMobile,
    isHints: false
  };
}
function getClientHintsAgent(osData) {
  var userAgentData = navigator.userAgentData;
  var brands = (userAgentData.uaList || userAgentData.brands).slice();
  var fullVersionList = osData && osData.fullVersionList;
  var isMobile = userAgentData.mobile || false;
  var firstBrand = brands[0];
  var platform = (osData && osData.platform || userAgentData.platform || navigator.platform).toLowerCase();
  var browser = {
    name: firstBrand.brand,
    version: firstBrand.version,
    majorVersion: -1,
    webkit: false,
    webkitVersion: "-1",
    chromium: false,
    chromiumVersion: "-1",
    webview: !!findPresetBrand(WEBVIEW_PRESETS, brands).brand || isWebView(getUserAgentString())
  };
  var os = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  };
  browser.webkit = !browser.chromium && some(WEBKIT_PRESETS, function (preset) {
    return findBrand(brands, preset);
  });
  var chromiumBrand = findPresetBrand(CHROMIUM_PRESETS, brands);
  browser.chromium = !!chromiumBrand.brand;
  browser.chromiumVersion = chromiumBrand.version || "-1";
  if (!browser.chromium) {
    var webkitBrand = findPresetBrand(WEBKIT_PRESETS, brands);
    browser.webkit = !!webkitBrand.brand;
    browser.webkitVersion = webkitBrand.version || "-1";
  }
  var platfomResult = find(OS_PRESETS, function (preset) {
    return new RegExp("" + preset.test, "g").exec(platform);
  });
  os.name = platfomResult ? platfomResult.id : "";
  if (osData) {
    os.version = osData.platformVersion || "-1";
  }
  if (fullVersionList && fullVersionList.length) {
    var browserBrandByFullVersionList = findPresetBrand(BROWSER_PRESETS, fullVersionList);
    browser.name = browserBrandByFullVersionList.brand || browser.name;
    browser.version = browserBrandByFullVersionList.version || browser.version;
  } else {
    var browserBrand = findPresetBrand(BROWSER_PRESETS, brands);
    browser.name = browserBrand.brand || browser.name;
    browser.version = browserBrand.brand && osData ? osData.uaFullVersion : browserBrand.version;
  }
  if (browser.webkit) {
    os.name = isMobile ? "ios" : "mac";
  }
  if (os.name === "ios" && browser.webview) {
    browser.version = "-1";
  }
  os.version = convertVersion(os.version);
  browser.version = convertVersion(browser.version);
  os.majorVersion = parseInt(os.version, 10);
  browser.majorVersion = parseInt(browser.version, 10);
  return {
    browser: browser,
    os: os,
    isMobile: isMobile,
    isHints: true
  };
}

/**
 * @namespace eg.agent
 */

/**
* Extracts accuate browser and operating system information from the user agent string or client hints.
* @ko 유저 에이전트 문자열 또는 client hints에서 정확한 브라우저와 운영체제 정보를 추출한다.
* @function eg.agent#getAccurateAgent
* @param - Callback function to get the accuate agent <ko>정확한 에이전트를 가져오기 위한 callback 함수</ko>
* @return - get the accuate agent promise. If Promise are not supported, null is returned. <ko> 정확한 에이전트 promise를 가져온다. Promise를 지원 하지 않는 경우, null을 반환한다. </ko>
* @example
import { getAccurateAgent } from "@egjs/agent";
// eg.agent.getAccurateAgent()
getAccurateAgent().then(agent => {
   const { os, browser, isMobile } = agent;
});
getAccurateAgent(agent => {
    const { os, browser, isMobile } = agent;
});
*/

function getAccurateAgent(callback) {
  if (hasUserAgentData()) {
    return navigator.userAgentData.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "uaFullVersion", "fullVersionList"]).then(function (info) {
      var agentInfo = getClientHintsAgent(info);
      callback && callback(agentInfo);
      return agentInfo;
    });
  }
  callback && callback(agent());
  if (typeof Promise === "undefined" || !Promise) {
    return null;
  }
  return Promise.resolve(agent());
}
/**
 * Extracts browser and operating system information from the user agent string.
 * @ko 유저 에이전트 문자열에서 브라우저와 운영체제 정보를 추출한다.
 * @function eg.agent#agent
 * @param - user agent string to parse <ko>파싱할 유저에이전트 문자열</ko>
 * @return - agent Info <ko> 에이전트 정보 </ko>
 * @example
import agent from "@egjs/agent";
// eg.agent();
const { os, browser, isMobile } = agent();
 */

function agent(userAgent) {
  if (typeof userAgent === "undefined" && hasUserAgentData()) {
    return getClientHintsAgent();
  } else {
    return getLegacyAgent(userAgent);
  }
}
/* harmony default export */ var agent_esm = (agent);

// EXTERNAL MODULE: ./node_modules/@egjs/component/dist/component.esm.js
var component_esm = __webpack_require__(1276);
;// CONCATENATED MODULE: ./node_modules/@egjs/axes/node_modules/@cfcs/core/dist/cfcs.esm.js

/*
Copyright (c) 2022-present NAVER Corp.
name: @cfcs/core
license: MIT
author: NAVER Crop.
repository: https://github.com/naver/cfcs/tree/main/packages/core
version: 0.1.0
*/


/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */

/**
 * @hidden
 */
function keys(obj) {
  return Object.keys(obj);
}
/**
 * @hidden
 */

function camelize(str) {
  return str.replace(/[\s-_]([a-z])/g, function (all, letter) {
    return letter.toUpperCase();
  });
}
/**
 * @hidden
 */

function isString(val) {
  return typeof val === "string";
}
/**
 * @hidden
 */

function isObject(val) {
  return typeof val === "object";
}
/**
 * @hidden
 */

function isFunction(val) {
  return typeof val === "function";
}

/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
/**
 * @hidden
 */

function findTarget(target) {
  var el;
  if (!target) {
    return null;
  }
  if (isString(target)) {
    el = document.querySelector(target);
  } else if (target instanceof Element) {
    el = target;
  } else if ("value" in target || "current" in target) {
    el = target.value || target.current;
  }
  return el;
}
/**
 * @description Sets the name of the class method to be exposed to the outside.
 * @category DOM
 * @return Property Decorator
 * @example
 * ```ts
 * import { withClassMethods } from "@cfcs/core";
 *
 * class YourFrameworkComponent {
 *   @withClassMethod(METHOD_NAMES)
 *   inst = new YourComponent();
 * }
 * ```
 */

function withClassMethods(methods) {
  return function (prototype, memberName) {
    methods.forEach(function (name) {
      if (name in prototype) {
        return;
      }
      prototype[name] = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var result = (_a = this[memberName])[name].apply(_a, args); // fix `this` type to return your own `class` instance to the instance using the decorator.

        if (result === this[memberName]) {
          return this;
        } else {
          return result;
        }
      };
    });
  };
}

/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
var OBSERVERS_PATH = "__observers__";
var COMPUTED_PATH = "__computed__";
var CFCS_DETECTED_DEPENDENCIES_VERSION = 1;
var CFCS_DETECTED_DEPENDENCIES = "__CFCS_DETECTED_DEPENDENCIES__";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
function getDetectedStack() {
  // Version issues do not occur when you access the native object in the global.
  Object[CFCS_DETECTED_DEPENDENCIES] = Object[CFCS_DETECTED_DEPENDENCIES] || {};
  var versionList = Object[CFCS_DETECTED_DEPENDENCIES];
  versionList[CFCS_DETECTED_DEPENDENCIES_VERSION] = versionList[CFCS_DETECTED_DEPENDENCIES_VERSION] || [];
  return versionList[CFCS_DETECTED_DEPENDENCIES_VERSION];
}
function getCurrentDetected() {
  var stack = getDetectedStack();
  return stack[stack.length - 1];
}
function detectDependencies(host) {
  var stack = getDetectedStack();
  var observers = [];
  var detected = {
    host: host,
    observers: observers,
    push: function (observer) {
      if (host !== observer && observers.indexOf(observer) === -1) {
        observers.push(observer);
      }
    }
  };
  stack.push(detected);
  return detected;
}
function endDetectDependencies() {
  var stack = getDetectedStack();
  return stack.pop();
}

/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
/**
 * Creates a mutable ref object. You can access the `.current` value and detect the value change through `.subscribe`.
 * @category Reactive
 * @see observe
 */

var Observer = /*#__PURE__*/
function () {
  /**
   *
   */
  function Observer(value) {
    this._emitter = new component_esm/* default */.A();
    this._current = value;
  }
  var __proto = Observer.prototype;
  Object.defineProperty(__proto, "current", {
    /**
     * return the current value.
     */
    get: function () {
      var currentDetected = getCurrentDetected();
      currentDetected === null || currentDetected === void 0 ? void 0 : currentDetected.push(this);
      return this._current;
    },
    set: function (value) {
      this._setCurrent(value);
    },
    enumerable: false,
    configurable: true
  });
  /**
   * When the current value changes, the callback function is called.
   */

  __proto.subscribe = function (callback) {
    this.current;
    this._emitter.on("update", callback);
    return this;
  };
  /**
   * Cancel the registered subscription through callback.
   */

  __proto.unsubscribe = function (callback) {
    this._emitter.off("update", callback);
    return this;
  };
  __proto._setCurrent = function (value) {
    var prevValue = this._current;
    var isUpdate = value !== prevValue;
    this._current = value;
    if (isUpdate) {
      this._emitter.trigger("update", value, prevValue);
    }
  };
  /**
   * @hidden
   */

  __proto.toString = function () {
    return "".concat(this.current);
  };
  /**
   * @hidden
   */

  __proto.valueOf = function () {
    return this.current;
  };
  return Observer;
}();

/**
 * @category Reactive
 * @hidden
 */

var ComputedObserver = /*#__PURE__*/
function (_super) {
  __extends(ComputedObserver, _super);
  /**
   * @description Creates a new computed observer from the values of other observers.
   * It is read-only and if you change the value of the observer used inside the callback, its value will be automatically updated.
   * @param _computedCallback A function for observers to be computed.
   */

  function ComputedObserver(_computedCallback) {
    var _this = _super.call(this) || this;
    _this._computedCallback = _computedCallback;
    _this._registered = [];
    _this._onCheckUpdate = function () {
      _this._setCurrent(_this.current);
    };
    _this._current = _this.current;
    return _this;
  }
  var __proto = ComputedObserver.prototype;
  Object.defineProperty(__proto, "current", {
    get: function () {
      var _this = this;
      detectDependencies(this);
      var value = this._computedCallback();
      var results = endDetectDependencies();
      this._registered.forEach(function (observer) {
        observer.unsubscribe(_this._onCheckUpdate);
      });
      results.observers.forEach(function (observer) {
        observer.subscribe(_this._onCheckUpdate);
      });
      this._registered = results.observers;
      return value;
    },
    enumerable: false,
    configurable: true
  });
  return ComputedObserver;
}(Observer);

/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */

function injectObserve(prototype, memberName, publicName) {
  if (publicName === void 0) {
    publicName = memberName;
  }
  var nextAttributes = {
    configurable: true,
    get: function () {
      return getObserver(this, publicName).current;
    },
    set: function (value) {
      getObserver(this, publicName, value).current = value;
    }
  };
  Object.defineProperty(prototype, memberName, nextAttributes);
  if (publicName !== memberName) {
    Object.defineProperty(prototype, publicName, {
      configurable: true,
      get: function () {
        return getObserver(this, publicName).current;
      }
    });
  }
}
/**
 * @description `Observe` is a property decorator and converts the property into a `reactive state`. You can detect its status through `.subscribe`.
 * @category Reactive-Decorator
 * @see ReactiveSubscribe
 * @example
* ```ts
import { ReactiveSubscribe, Observe } from "@cfcs/core";

@ReactiveSubscribe
class Component {
  // The public name and state name are the same.
  @Observe value1 = 1;
  // If you want to set public name and private properties separately
  @Observe("value2") _value2 = 1;

  constructor() {
    requestAnimationFrame(() => {
      this.value1 = 2;
    });
  }
}
interface C
```
 */

function Observe() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  if (args.length > 1) {
    return injectObserve(args[0], args[1]);
  }
  return function (prototype, memberName) {
    return injectObserve(prototype, memberName, args[0]);
  };
}
/**
 * @hidden
 */

function Reactive() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return Observe.apply(void 0, args);
}

/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
/**
 * @hidden
 */

function injectReactiveSubscribe(object) {
  object["subscribe"] = function (name, callback) {
    this[name];
    getObserver(this, name).subscribe(callback);
  };
  object["unsubscribe"] = function (name, callback) {
    var _this = this;
    if (!name) {
      keys(getObservers(this)).forEach(function (observerName) {
        _this.unsubscribe(observerName);
      });
      return;
    }
    if (!(name in this)) {
      return;
    }
    getObserver(this, name).unsubscribe(callback);
  };
}
/**
 * @description `ReactiveSubscribe` is a class decorator and adds `.subscribe` and `.unsubscribe` methods.
 * @category Reactive-Decorator
 * @see Observe
 * @example
 * ```ts
import { ReactiveSubscribe, Observe } from "@cfcs/core";

@ReactiveSubscribe
class Component {
  @Observe value1 = 1;

  constructor() {
    requestAnimationFrame(() => {
      this.value1 = 2;
    });
  }
}

interface Component extends ReactiveSubscribe<{
  value1: number;
  value2: number;
}> {}

const component = new Component();

// 1
console.log(component.value1);

component.subscribe("value1", nextValue => {
  // When the change event occurs => (2, 2)
  console.log(nextValue, component.value2);
});
```
 */

function ReactiveSubscribe(Constructor) {
  var prototype = Constructor.prototype;
  injectReactiveSubscribe(prototype);
}

/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */

function makeReactiveObject(setup, all) {
  var result = isFunction(setup) ? setup() : setup;
  var reactiveObject = {};
  defineObservers(reactiveObject);
  keys(result).forEach(function (name) {
    var value = result[name];
    if (isObserver(value)) {
      setObserver(reactiveObject, name, value);
    } else {
      setObserver(reactiveObject, name, observe(value));
    }
    Observe(name)(reactiveObject, name);
  });
  injectReactiveSubscribe(reactiveObject);
  return reactiveObject;
}
/**
 * @description Make the return value of the corresponding object or function a reactive object.
 * @category Reactive
 * @param setup - The target object or function to which reactive is applied
 * @returns Makes all values into reactive objects.
 * @example
 * ```ts
 * import { reactive } from "@cfcs/core";
 *
 * const obj = reactive({
 *  value1: 1,
 *  value2: 2,
 * });
 *
 * obj.subscribe("value1", value1 => {
 *   console.log(value1);
 * });
 * obj.value1 = 2;
 * ```
 */

function reactive(setup) {
  return makeReactiveObject(setup);
}
/**
 * @description Make the return value of the corresponding object or function a reactive object.
 * @category Reactive
 * @param setup - The target object or function to which reactive is applied
 * @returns Only the values to which observer is applied are objects to which reactive is applied.
 * @example
 * ```ts
 * import { partialReactive, observe } from "@cfcs/core";
 *
 * const value1 = observe(1);
 * const value2 = observe(2);
 * const obj = partialReactive({
 *  value1,
 *  value2,
 * });
 *
 * obj.subscribe("value1", value1 => {
 *   console.log(value1);
 * });
 * value1.current = 2;
 * ```
 */

function partialReactive(setup) {
  return makeReactiveObject(setup);
}
/**
 * @description Creates a mutable ref object. You can access the `.current` value and detect the value change through `.subscribe`.
 * @category Reactive
 * @example
 * ```ts
 * import { observe } from "@cfcs/core";
 *
 * const ob1 = observe(1);
 *
 * ob1.subscribe(nextValue => {
 *   console.log(nextValue);
 * });
 *
 * ob1.current = 2;
 * ```
 */

function observe(defaultValue) {
  return new Observer(defaultValue);
}
/**
 * @hidden
 */

function computed(computedCallback) {
  return new ComputedObserver(computedCallback);
}

/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
/**
 * @hidden
 */

function withReactiveMethods(ref, methods) {
  var obj = {};
  if (!methods) {
    return obj;
  }
  methods.forEach(function (name) {
    obj[name] = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var current = ref.current || ref.value;
      return current[name].apply(current, args);
    };
  });
  return obj;
}
/**
 * @hidden
 */

function defineObservers(instance) {
  var observers = {};
  Object.defineProperty(instance, OBSERVERS_PATH, {
    get: function () {
      return observers;
    }
  });
  return observers;
}
/**
 * @hidden
 */

function getObservers(instance, isComputed) {
  var _a, _b;
  if (!instance[OBSERVERS_PATH]) {
    defineObservers(instance);
  }
  var observers = instance[OBSERVERS_PATH];
  if (!isComputed) {
    var computedList = (_b = (_a = instance === null || instance === void 0 ? void 0 : instance.constructor) === null || _a === void 0 ? void 0 : _a.prototype) === null || _b === void 0 ? void 0 : _b[COMPUTED_PATH];
    if (computedList) {
      computedList.forEach(function (name) {
        if (!(name in observers) && name in instance) {
          instance[name];
        }
      });
    }
  }
  return observers;
}
/**
 * @hidden
 */

function getObserver(instance, name, defaultValue) {
  var observers = getObservers(instance);
  if (!observers[name]) {
    observers[name] = observe(defaultValue);
  }
  return observers[name];
}
/**
 * @hidden
 */

function setObserver(instance, name, observer) {
  var observers = getObservers(instance);
  observers[name] = observer;
}
/**
 * @description Whether that object is an observer instance
 * @category Reactive
 */

function isObserver(val) {
  return val && isObject(val) && "current" in val && "subscribe" in val && "unsubscribe" in val;
}
/**
 * @description Whether the object is reactive
 * @category Reactive
 */

function isReactive(val) {
  return val && !isObserver(val) && "subscribe" in val && "unsubscribe" in val;
}

/**
 * @category Reactive
 * @hidden
 */

function adaptReactive(adapter, props) {
  var objectAdapter = isFunction(adapter) ? {
    setup: adapter
  } : adapter;
  function getProps() {
    var _a, _b, _c, _d, _e;
    return (_e = (_c = (_a = props === null || props === void 0 ? void 0 : props()) !== null && _a !== void 0 ? _a : (_b = objectAdapter.props) === null || _b === void 0 ? void 0 : _b.call(objectAdapter)) !== null && _c !== void 0 ? _c : (_d = objectAdapter.data) === null || _d === void 0 ? void 0 : _d.call(objectAdapter)) !== null && _e !== void 0 ? _e : {};
  }
  var eventEmitter = new Component();
  var mountedHooks = [];
  var initHooks = [];
  var destroyHooks = [];
  var onHooks = [];
  var instanceRef = {
    current: null
  };
  var offHooksList = [];
  var initialState = null;
  var eventNames = [];
  var methodNames = [];
  var onMounted = function (callback) {
    mountedHooks.push(callback);
  };
  var onInit = function (callback) {
    initHooks.push(callback);
  };
  var onDestroy = function (callback) {
    destroyHooks.push(callback);
  };
  var on = function (callback) {
    onHooks.push(callback);
  };
  var emit = function (eventName) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      params[_i - 1] = arguments[_i];
    }
    eventEmitter.trigger.apply(eventEmitter, __spreadArray([eventName], params, false));
  };
  var setInitialState = function (state) {
    initialState = state;
  };
  var setEvents = function (events) {
    eventNames = events;
  };
  var setMethods = function (methods) {
    methodNames = methods;
  };
  if (objectAdapter.setup) {
    instanceRef.current = objectAdapter.setup({
      getProps: getProps,
      setInitialState: setInitialState,
      setEvents: setEvents,
      setMethods: setMethods,
      onMounted: onMounted,
      onDestroy: onDestroy,
      onInit: onInit,
      emit: emit,
      on: on
    }) || null;
  }
  if (objectAdapter.created) {
    instanceRef.current = objectAdapter.created(getProps()) || null;
  }
  if (objectAdapter.events) {
    setEvents(objectAdapter.events);
  }
  if (objectAdapter.state) {
    setInitialState(objectAdapter.state);
  }
  if (objectAdapter.methods) {
    setMethods(objectAdapter.methods);
  }
  if (objectAdapter.mounted) {
    onMounted(objectAdapter.mounted);
  }
  if (objectAdapter.destroy) {
    destroyHooks.push(objectAdapter.destroy);
  }
  if (objectAdapter.init) {
    initHooks.push(objectAdapter.init);
  }
  if (objectAdapter.on) {
    onHooks.push(function (instance, eventName, listener) {
      var off = objectAdapter.on(instance, eventName, listener);
      return function () {
        var _a;
        off && off();
        (_a = objectAdapter.off) === null || _a === void 0 ? void 0 : _a.call(objectAdapter, instance, eventName, listener);
      };
    });
  }
  return {
    events: function () {
      return eventNames;
    },
    state: function () {
      var inst = instanceRef.current;
      if (initialState) {
        return initialState;
      }
      if (inst) {
        var observers_1 = getObservers(inst);
        setInitialState(keys(observers_1).reduce(function (prev, cur) {
          prev[cur] = observers_1[cur].current;
          return prev;
        }, {}));
      }
      return initialState || {};
    },
    instance: function () {
      return instanceRef.current;
    },
    mounted: function () {
      var props = getProps();
      mountedHooks.forEach(function (hook) {
        instanceRef.current = hook(props, instanceRef.current) || instanceRef.current;
      });
    },
    init: function () {
      // on events
      var instance = instanceRef.current;
      var props = getProps();
      offHooksList = eventNames.map(function (eventName) {
        var listener = function () {
          var _a;
          var params = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
          }
          (_a = eventEmitter).trigger.apply(_a, __spreadArray([eventName], params, false));
        };
        var instance = instanceRef.current;
        return onHooks.map(function (hook) {
          return hook(instance, eventName, listener);
        }).filter(Boolean);
      }); // init

      initHooks.forEach(function (hook) {
        hook(instance, props);
      });
    },
    destroy: function () {
      // off events
      offHooksList.forEach(function (offHooks) {
        offHooks.forEach(function (hook) {
          hook();
        });
      }); // destroy

      eventEmitter.off();
      var instance = instanceRef.current;
      var props = getProps();
      destroyHooks.forEach(function (hook) {
        hook(instance, props);
      });
    },
    methods: function () {
      return withReactiveMethods(instanceRef, methodNames);
    },
    on: function (eventName, listener) {
      eventEmitter.on(eventName, listener);
    },
    off: function (eventName, listener) {
      eventEmitter.off(eventName, listener);
    }
  };
}

/**
 * cfcs
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
/**
 * @description `Computed` is a property decorator.
 * Changes in computed state values are also recognized according to changes in observers used within the getter function.
 * You can detect its status through `.subscribe`.
 * @hidden
 * @category Reactive-Decorator
 * @see ReactiveSubscribe
 * @example
 * ```ts
const ob1 = observe(0);
const ob2 = observe(1);

// When
@ReactiveSubscribe
class TestComputed {
  @Computed
  get ob3() {
    return ob1.current + ob2.current;
  }
}
const inst = new TestComputed();

inst.subscribe("ob3", ob3 => {
  console.log(ob3);
});

ob1.current = 1;
```
 */

function Computed(prototype, memberName, attributes) {
  var get = attributes.get;
  function getComputed() {
    var observers = getObservers(this, true);
    if (!(memberName in observers)) {
      observers[memberName] = computed(get.bind(this));
    }
    return getObserver(this, memberName).current;
  }
  var nextAttributes = {
    configurable: true,
    get: getComputed
  };
  prototype[COMPUTED_PATH] || (prototype[COMPUTED_PATH] = []);
  var computedList = prototype[COMPUTED_PATH];
  if (computedList.indexOf(memberName) === -1) {
    computedList.push(memberName);
  }
  Object.defineProperty(prototype, memberName, nextAttributes);
  return nextAttributes;
}

;// CONCATENATED MODULE: ./node_modules/@egjs/axes/dist/axes.esm.js

/*
Copyright (c) NAVER Corp.
name: @egjs/axes
license: MIT
author: NAVER Corp.
repository: https://github.com/naver/egjs-axes
version: 3.9.1
*/




/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var axes_esm_extendStatics = function (d, b) {
  axes_esm_extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };
  return axes_esm_extendStatics(d, b);
};
function axes_esm_extends(d, b) {
  axes_esm_extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/*
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/* eslint-disable no-new-func, no-nested-ternary */
var win;
if (typeof window === "undefined") {
  // window is undefined in node.js
  win = {
    navigator: {
      userAgent: ""
    }
  };
} else {
  win = window;
}

/*
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_HORIZONTAL = 2 | 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;
var DIRECTION_VERTICAL = 8 | 16;
var DIRECTION_ALL = 2 | 4 | 8 | 16;
var MOUSE_LEFT = "left";
var MOUSE_RIGHT = "right";
var MOUSE_MIDDLE = "middle";
var MOUSE_BUTTON_CODE_MAP = {
  1: MOUSE_LEFT,
  2: MOUSE_MIDDLE,
  3: MOUSE_RIGHT
};
var ANY = "any";
var NONE = "none";
var SHIFT = "shift";
var CTRL = "ctrl";
var ALT = "alt";
var META = "meta";
var VELOCITY_INTERVAL = 16;
var AXES_METHODS = ["connect", "disconnect", "get", "setTo", "setBy", "setOptions", "setAxis", "stopAnimation", "updateAnimation", "isBounceArea"];
var AXES_EVENTS = ["hold", "release", "change", "animationStart", "animationEnd", "finish"];
var IOS_EDGE_THRESHOLD = 30;
var IS_IOS_SAFARI = "ontouchstart" in win && agent_esm().browser.name === "safari";
var TRANSFORM = function () {
  if (typeof document === "undefined") {
    return "";
  }
  var bodyStyle = (document.head || document.getElementsByTagName("head")[0]).style;
  var target = ["transform", "webkitTransform", "msTransform", "mozTransform"];
  for (var i = 0, len = target.length; i < len; i++) {
    if (target[i] in bodyStyle) {
      return target[i];
    }
  }
  return "";
}();
var PREVENT_DRAG_CSSPROPS = {
  "-webkit-user-select": "none",
  "-ms-user-select": "none",
  "-moz-user-select": "none",
  "user-select": "none",
  "-webkit-user-drag": "none"
};
var toArray = function (nodes) {
  // const el = Array.prototype.slice.call(nodes);
  // for IE8
  var el = [];
  for (var i = 0, len = nodes.length; i < len; i++) {
    el.push(nodes[i]);
  }
  return el;
};
var $ = function (param, multi) {
  if (multi === void 0) {
    multi = false;
  }
  var el;
  if (typeof param === "string") {
    // String (HTML, Selector)
    // check if string is HTML tag format
    var match = param.match(/^<([a-z]+)\s*([^>]*)>/);
    // creating element
    if (match) {
      // HTML
      var dummy = document.createElement("div");
      dummy.innerHTML = param;
      el = toArray(dummy.childNodes);
    } else {
      // Selector
      el = toArray(document.querySelectorAll(param));
    }
    if (!multi) {
      el = el.length >= 1 ? el[0] : undefined;
    }
  } else if (param === win) {
    // window
    el = param;
  } else if ("value" in param || "current" in param) {
    el = param.value || param.current;
  } else if (param.nodeName && (param.nodeType === 1 || param.nodeType === 9)) {
    // HTMLElement, Document
    el = param;
  } else if ("jQuery" in win && param instanceof jQuery || param.constructor.prototype.jquery) {
    // jQuery
    el = multi ? param.toArray() : param.get(0);
  } else if (Array.isArray(param)) {
    el = param.map(function (v) {
      return $(v);
    });
    if (!multi) {
      el = el.length >= 1 ? el[0] : undefined;
    }
  }
  return el;
};
var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame;
var caf = win.cancelAnimationFrame || win.webkitCancelAnimationFrame;
if (raf && !caf) {
  var keyInfo_1 = {};
  var oldraf_1 = raf;
  raf = function (callback) {
    var wrapCallback = function (timestamp) {
      if (keyInfo_1[key]) {
        callback(timestamp);
      }
    };
    var key = oldraf_1(wrapCallback);
    keyInfo_1[key] = true;
    return key;
  };
  caf = function (key) {
    delete keyInfo_1[key];
  };
} else if (!(raf && caf)) {
  raf = function (callback) {
    return win.setTimeout(function () {
      callback(win.performance && win.performance.now && win.performance.now() || new Date().getTime());
    }, 16);
  };
  caf = win.clearTimeout;
}
/**
 * A polyfill for the window.requestAnimationFrame() method.
 * @see  https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
 * @private
 */
var requestAnimationFrame = function (fp) {
  return raf(fp);
};
/**
 * A polyfill for the window.cancelAnimationFrame() method. It cancels an animation executed through a call to the requestAnimationFrame() method.
 * @param {Number} key −  The ID value returned through a call to the requestAnimationFrame() method. <ko>requestAnimationFrame() 메서드가 반환한 아이디 값</ko>
 * @see  https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame
 * @private
 */
var cancelAnimationFrame = function (key) {
  caf(key);
};
var map = function (obj, callback) {
  var tranformed = {};
  for (var k in obj) {
    if (k) {
      tranformed[k] = callback(obj[k], k);
    }
  }
  return tranformed;
};
var filter = function (obj, callback) {
  var filtered = {};
  for (var k in obj) {
    if (k && callback(obj[k], k)) {
      filtered[k] = obj[k];
    }
  }
  return filtered;
};
var every = function (obj, callback) {
  for (var k in obj) {
    if (k && !callback(obj[k], k)) {
      return false;
    }
  }
  return true;
};
var equal = function (target, base) {
  return every(target, function (v, k) {
    return v === base[k];
  });
};
var roundNumFunc = {};
var roundNumber = function (num, roundUnit) {
  // Cache for performance
  if (!roundNumFunc[roundUnit]) {
    roundNumFunc[roundUnit] = getRoundFunc(roundUnit);
  }
  return roundNumFunc[roundUnit](num);
};
var roundNumbers = function (num, roundUnit) {
  if (!num || !roundUnit) {
    return num;
  }
  return map(num, function (value, key) {
    return roundNumber(value, typeof roundUnit === "number" ? roundUnit : roundUnit[key]);
  });
};
var getDecimalPlace = function (val) {
  if (!isFinite(val)) {
    return 0;
  }
  var v = "".concat(val);
  if (v.indexOf("e") >= 0) {
    // Exponential Format
    // 1e-10, 1e-12
    var p = 0;
    var e = 1;
    while (Math.round(val * e) / e !== val) {
      e *= 10;
      p++;
    }
    return p;
  }
  // In general, following has performance benefit.
  // https://jsperf.com/precision-calculation
  return v.indexOf(".") >= 0 ? v.length - v.indexOf(".") - 1 : 0;
};
var inversePow = function (n) {
  // replace Math.pow(10, -n) to solve floating point issue.
  // eg. Math.pow(10, -4) => 0.00009999999999999999
  return 1 / Math.pow(10, n);
};
var getRoundFunc = function (v) {
  var p = v < 1 ? Math.pow(10, getDecimalPlace(v)) : 1;
  return function (n) {
    if (v === 0) {
      return 0;
    }
    return Math.round(Math.round(n / v) * v * p) / p;
  };
};
var getAngle = function (posX, posY) {
  return Math.atan2(posY, posX) * 180 / Math.PI;
};
var isCssPropsFromAxes = function (originalCssProps) {
  var same = true;
  Object.keys(PREVENT_DRAG_CSSPROPS).forEach(function (prop) {
    if (!originalCssProps || originalCssProps[prop] !== PREVENT_DRAG_CSSPROPS[prop]) {
      same = false;
    }
  });
  return same;
};
var getDirection = function (useHorizontal, useVertical) {
  if (useHorizontal && useVertical) {
    return DIRECTION_ALL;
  } else if (useHorizontal) {
    return DIRECTION_HORIZONTAL;
  } else if (useVertical) {
    return DIRECTION_VERTICAL;
  } else {
    return DIRECTION_NONE;
  }
};
var useDirection = function (checkType, direction, userDirection) {
  if (userDirection) {
    return !!(direction === DIRECTION_ALL || direction & checkType && userDirection & checkType);
  } else {
    return !!(direction & checkType);
  }
};
var setCssProps = function (element, option, direction) {
  var _a;
  var touchActionMap = (_a = {}, _a[DIRECTION_NONE] = "auto", _a[DIRECTION_ALL] = "none", _a[DIRECTION_VERTICAL] = "pan-x", _a[DIRECTION_HORIZONTAL] = "pan-y", _a);
  var oldCssProps = {};
  if (element && element.style) {
    var touchAction = option.touchAction ? option.touchAction : touchActionMap[direction];
    var newCssProps_1 = __assign(__assign({}, PREVENT_DRAG_CSSPROPS), {
      "touch-action": element.style["touch-action"] === "none" ? "none" : touchAction
    });
    Object.keys(newCssProps_1).forEach(function (prop) {
      oldCssProps[prop] = element.style[prop];
    });
    // Old style props like user-select can be corrupted if you change the style directly in the logic above.
    Object.keys(newCssProps_1).forEach(function (prop) {
      element.style[prop] = newCssProps_1[prop];
    });
  }
  return oldCssProps;
};
var revertCssProps = function (element, originalCssProps) {
  if (element && element.style && originalCssProps) {
    Object.keys(originalCssProps).forEach(function (prop) {
      element.style[prop] = originalCssProps[prop];
    });
  }
  return;
};
var EventManager = /*#__PURE__*/function () {
  function EventManager(_axes) {
    this._axes = _axes;
    this.holdingCount = 0;
  }
  /**
   * This event is fired when a user holds an element on the screen of the device.
   * @ko 사용자가 기기의 화면에 손을 대고 있을 때 발생하는 이벤트
   * @event Axes#hold
   * @type {object}
   * @property {Object.<string, number>} pos coordinate <ko>좌표 정보</ko>
   * @property {Object} input The instance of inputType where the event occurred<ko>이벤트가 발생한 inputType 인스턴스</ko>
   * @property {Object} inputEvent The event object received from inputType <ko>inputType으로 부터 받은 이벤트 객체</ko>
   * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
   *
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   *   "zoom": {
   *      range: [50, 30]
   *   }
   * }).on("hold", function(event) {
   *   // event.pos
   *   // event.input
   *   // event.inputEvent
   *   // isTrusted
   * });
   * ```
   */
  var __proto = EventManager.prototype;
  __proto.hold = function (pos, option) {
    var roundPos = this._getRoundPos(pos).roundPos;
    this._axes.trigger(new component_esm/* ComponentEvent */.O("hold", {
      pos: roundPos,
      input: option.input || null,
      inputEvent: option.event || null,
      isTrusted: true
    }));
  };
  /**
   * Specifies the coordinates to move after the 'change' event. It works when the holding value of the change event is true.
   * @ko 'change' 이벤트 이후 이동할 좌표를 지정한다. change이벤트의 holding 값이 true일 경우에 동작한다
   * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   *   "zoom": {
   *      range: [50, 30]
   *   }
   * }).on("change", function(event) {
   *   event.holding && event.set({x: 10});
   * });
   * ```
   */
  /** Specifies the animation coordinates to move after the 'release' or 'animationStart' events.
   * @ko 'release' 또는 'animationStart' 이벤트 이후 이동할 좌표를 지정한다.
   * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
   * @param {Number} [duration=0] Duration of the animation (unit: ms) <ko>애니메이션 진행 시간(단위: ms)</ko>
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   *   "zoom": {
   *      range: [50, 30]
   *   }
   * }).on("animationStart", function(event) {
   *   event.setTo({x: 10}, 2000);
   * });
   * ```
   */
  /**
   * This event is fired when a user release an element on the screen of the device.
   * @ko 사용자가 기기의 화면에서 손을 뗐을 때 발생하는 이벤트
   * @event Axes#release
   * @type {object}
   * @property {Object.<string, number>} depaPos The coordinates when releasing an element<ko>손을 뗐을 때의 좌표 </ko>
   * @property {Object.<string, number>} destPos The coordinates to move to after releasing an element<ko>손을 뗀 뒤에 이동할 좌표</ko>
   * @property {Object.<string, number>} delta  The movement variation of coordinate <ko>좌표의 변화량</ko>
   * @property {Object.<string, number>} bounceRatio If the coordinates at the time of release are in the bounce area, the current bounce value divided by the maximum bounce value <ko>손을 뗐을 때의 좌표가 bounce 영역에 있는 경우 현재 bounce된 값을 최대 bounce 값으로 나눈 수치.</ko>
   * @property {Object} inputEvent The event object received from inputType <ko>inputType으로 부터 받은 이벤트 객체</ko>
   * @property {Object} input The instance of inputType where the event occurred<ko>이벤트가 발생한 inputType 인스턴스</ko>
   * @property {setTo} setTo Specifies the animation coordinates to move after the event <ko>이벤트 이후 이동할 애니메이션 좌표를 지정한다</ko>
   * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
   *
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   *   "zoom": {
   *      range: [50, 30]
   *   }
   * }).on("release", function(event) {
   *   // event.depaPos
   *   // event.destPos
   *   // event.delta
   *   // event.input
   *   // event.inputEvent
   *   // event.setTo
   *   // event.isTrusted
   *
   *   // if you want to change the animation coordinates to move after the 'release' event.
   *   event.setTo({x: 10}, 2000);
   * });
   * ```
   */
  __proto.triggerRelease = function (param) {
    var _a = this._getRoundPos(param.destPos, param.depaPos),
      roundPos = _a.roundPos,
      roundDepa = _a.roundDepa;
    param.destPos = roundPos;
    param.depaPos = roundDepa;
    param.setTo = this._createUserControll(param.destPos, param.duration);
    this._axes.trigger(new component_esm/* ComponentEvent */.O("release", __assign(__assign({}, param), {
      bounceRatio: this._getBounceRatio(roundPos)
    })));
  };
  /**
   * This event is fired when coordinate changes.
   * @ko 좌표가 변경됐을 때 발생하는 이벤트
   * @event Axes#change
   * @type {object}
   * @property {Object.<string, number>} pos  The coordinate <ko>좌표</ko>
   * @property {Object.<string, number>} delta  The movement variation of coordinate <ko>좌표의 변화량</ko>
   * @property {Object.<string, number>} bounceRatio If the current coordinates are in the bounce area, the current bounce value divided by the maximum bounce value <ko>현재 좌표가 bounce 영역에 있는 경우 현재 bounce된 값을 최대 bounce 값으로 나눈 수치.</ko>
   * @property {Boolean} holding Indicates whether a user holds an element on the screen of the device.<ko>사용자가 기기의 화면을 누르고 있는지 여부</ko>
   * @property {Object} input The instance of inputType where the event occurred. If the value is changed by animation, it returns 'null'.<ko>이벤트가 발생한 inputType 인스턴스. 애니메이션에 의해 값이 변경될 경우에는 'null'을 반환한다.</ko>
   * @property {Object} inputEvent The event object received from inputType. If the value is changed by animation, it returns 'null'.<ko>inputType으로 부터 받은 이벤트 객체. 애니메이션에 의해 값이 변경될 경우에는 'null'을 반환한다.</ko>
   * @property {set} set Specifies the coordinates to move after the event. It works when the holding value is true <ko>이벤트 이후 이동할 좌표를 지정한다. holding 값이 true일 경우에 동작한다.</ko>
   * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
   *
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   *   "zoom": {
   *      range: [50, 30]
   *   }
   * }).on("change", function(event) {
   *   // event.pos
   *   // event.delta
   *   // event.input
   *   // event.inputEvent
   *   // event.holding
   *   // event.set
   *   // event.isTrusted
   *
   *   // if you want to change the coordinates to move after the 'change' event.
   *   // it works when the holding value of the change event is true.
   *   event.holding && event.set({x: 10});
   * });
   * ```
   */
  __proto.triggerChange = function (pos, depaPos, option, holding) {
    var _this = this;
    if (holding === void 0) {
      holding = false;
    }
    var animationManager = this.animationManager;
    var axisManager = animationManager.axisManager;
    var eventInfo = animationManager.getEventInfo();
    var _a = this._getRoundPos(pos, depaPos),
      roundPos = _a.roundPos,
      roundDepa = _a.roundDepa;
    var moveTo = axisManager.moveTo(roundPos, roundDepa);
    var inputEvent = (option === null || option === void 0 ? void 0 : option.event) || (eventInfo === null || eventInfo === void 0 ? void 0 : eventInfo.event) || null;
    var param = {
      pos: moveTo.pos,
      delta: moveTo.delta,
      bounceRatio: this._getBounceRatio(moveTo.pos),
      holding: holding,
      inputEvent: inputEvent,
      isTrusted: !!inputEvent,
      input: (option === null || option === void 0 ? void 0 : option.input) || (eventInfo === null || eventInfo === void 0 ? void 0 : eventInfo.input) || null,
      set: inputEvent ? this._createUserControll(moveTo.pos) : function () {} // eslint-disable-line @typescript-eslint/no-empty-function
    };
    var event = new component_esm/* ComponentEvent */.O("change", param);
    this._axes.trigger(event);
    Object.keys(moveTo.pos).forEach(function (axis) {
      var p = moveTo.pos[axis];
      getObserver(_this._axes, axis, p).current = p;
    });
    if (inputEvent) {
      axisManager.set(param.set().destPos);
    }
    return !event.isCanceled();
  };
  /**
   * This event is fired when animation starts.
   * @ko 에니메이션이 시작할 때 발생한다.
   * @event Axes#animationStart
   * @type {object}
   * @property {Object.<string, number>} depaPos The coordinates when animation starts<ko>애니메이션이 시작 되었을 때의 좌표 </ko>
   * @property {Object.<string, number>} destPos The coordinates to move to. If you change this value, you can run the animation<ko>이동할 좌표. 이값을 변경하여 애니메이션을 동작시킬수 있다</ko>
   * @property {Object.<string, number>} delta  The movement variation of coordinate <ko>좌표의 변화량</ko>
   * @property {Number} duration Duration of the animation (unit: ms). If you change this value, you can control the animation duration time.<ko>애니메이션 진행 시간(단위: ms). 이값을 변경하여 애니메이션의 이동시간을 조절할 수 있다.</ko>
   * @property {Object} input The instance of inputType where the event occurred. If the value is changed by animation, it returns 'null'.<ko>이벤트가 발생한 inputType 인스턴스. 애니메이션에 의해 값이 변경될 경우에는 'null'을 반환한다.</ko>
   * @property {Object} inputEvent The event object received from inputType <ko>inputType으로 부터 받은 이벤트 객체</ko>
   * @property {setTo} setTo Specifies the animation coordinates to move after the event <ko>이벤트 이후 이동할 애니메이션 좌표를 지정한다</ko>
   * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
   *
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   *   "zoom": {
   *      range: [50, 30]
   *   }
   * }).on("release", function(event) {
   *   // event.depaPos
   *   // event.destPos
   *   // event.delta
   *   // event.input
   *   // event.inputEvent
   *   // event.setTo
   *   // event.isTrusted
   *
   *   // if you want to change the animation coordinates to move after the 'animationStart' event.
   *   event.setTo({x: 10}, 2000);
   * });
   * ```
   */
  __proto.triggerAnimationStart = function (param) {
    var _a = this._getRoundPos(param.destPos, param.depaPos),
      roundPos = _a.roundPos,
      roundDepa = _a.roundDepa;
    param.destPos = roundPos;
    param.depaPos = roundDepa;
    param.setTo = this._createUserControll(param.destPos, param.duration);
    var event = new component_esm/* ComponentEvent */.O("animationStart", param);
    this._axes.trigger(event);
    return !event.isCanceled();
  };
  /**
   * This event is fired when animation ends.
   * @ko 에니메이션이 끝났을 때 발생한다.
   * @event Axes#animationEnd
   * @type {object}
   * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
   *
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   *   "zoom": {
   *      range: [50, 30]
   *   }
   * }).on("animationEnd", function(event) {
   *   // event.isTrusted
   * });
   * ```
   */
  __proto.triggerAnimationEnd = function (isTrusted) {
    if (isTrusted === void 0) {
      isTrusted = false;
    }
    this._axes.trigger(new component_esm/* ComponentEvent */.O("animationEnd", {
      isTrusted: isTrusted
    }));
  };
  /**
   * This event is fired when all actions have been completed.
   * @ko 에니메이션이 끝났을 때 발생한다.
   * @event Axes#finish
   * @type {object}
   * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
   *
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   *   "zoom": {
   *      range: [50, 30]
   *   }
   * }).on("finish", function(event) {
   *   // event.isTrusted
   * });
   * ```
   */
  __proto.triggerFinish = function (isTrusted) {
    if (isTrusted === void 0) {
      isTrusted = false;
    }
    this._axes.trigger(new component_esm/* ComponentEvent */.O("finish", {
      isTrusted: isTrusted
    }));
  };
  __proto.setAnimationManager = function (animationManager) {
    this.animationManager = animationManager;
  };
  __proto.destroy = function () {
    this._axes.off();
  };
  __proto._createUserControll = function (pos, duration) {
    if (duration === void 0) {
      duration = 0;
    }
    // to controll
    var userControl = {
      destPos: __assign({}, pos),
      duration: duration
    };
    return function (toPos, userDuration) {
      if (toPos) {
        userControl.destPos = __assign({}, toPos);
      }
      if (userDuration !== undefined) {
        userControl.duration = userDuration;
      }
      return userControl;
    };
  };
  __proto._getRoundPos = function (pos, depaPos) {
    // round value if round exist
    var roundUnit = this._axes.options.round;
    // if (round == null) {
    //   return {pos, depaPos}; // undefined, undefined
    // }
    return {
      roundPos: roundNumbers(pos, roundUnit),
      roundDepa: roundNumbers(depaPos, roundUnit)
    };
  };
  __proto._getBounceRatio = function (pos) {
    return this._axes.axisManager.map(pos, function (v, opt) {
      if (v < opt.range[0] && opt.bounce[0] !== 0) {
        return (opt.range[0] - v) / opt.bounce[0];
      } else if (v > opt.range[1] && opt.bounce[1] !== 0) {
        return (v - opt.range[1]) / opt.bounce[1];
      } else {
        return 0;
      }
    });
  };
  __decorate([Observe], EventManager.prototype, "holdingCount", void 0);
  return EventManager;
}();
var InterruptManager = /*#__PURE__*/function () {
  function InterruptManager(_options) {
    this._options = _options;
    this._prevented = false; //  check whether the animation event was prevented
  }
  var __proto = InterruptManager.prototype;
  __proto.isInterrupting = function () {
    // when interruptable is 'true', return value is always 'true'.
    return this._options.interruptable || this._prevented;
  };
  __proto.isInterrupted = function () {
    return !this._options.interruptable && this._prevented;
  };
  __proto.setInterrupt = function (prevented) {
    if (!this._options.interruptable) {
      this._prevented = prevented;
    }
  };
  return InterruptManager;
}();

/*
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
var getInsidePosition = function (destPos, range, circular, bounce) {
  var toDestPos = destPos;
  var targetRange = [circular[0] ? range[0] : bounce ? range[0] - bounce[0] : range[0], circular[1] ? range[1] : bounce ? range[1] + bounce[1] : range[1]];
  toDestPos = Math.max(targetRange[0], toDestPos);
  toDestPos = Math.min(targetRange[1], toDestPos);
  return toDestPos;
};
// determine outside
var isOutside = function (pos, range) {
  return pos < range[0] || pos > range[1];
};
// determine whether position has reached the maximum moveable area
var isEndofBounce = function (pos, range, bounce, circular) {
  return !circular[0] && pos === range[0] - bounce[0] || !circular[1] && pos === range[1] + bounce[1];
};
var getDuration = function (distance, deceleration) {
  var duration = Math.sqrt(distance / deceleration * 2);
  // when duration is under 100, then value is zero
  return duration < 100 ? 0 : duration;
};
var isCircularable = function (destPos, range, circular) {
  return circular[1] && destPos > range[1] || circular[0] && destPos < range[0];
};
var getCirculatedPos = function (pos, range, circular) {
  var toPos = pos;
  var min = range[0];
  var max = range[1];
  var length = max - min;
  if (circular[1] && pos > max) {
    // right
    toPos = (toPos - max) % length + min;
  }
  if (circular[0] && pos < min) {
    // left
    toPos = (toPos - min) % length + max;
  }
  return toPos;
};
var AxisManager = /*#__PURE__*/function () {
  function AxisManager(_axis) {
    var _this = this;
    this._axis = _axis;
    this._complementOptions();
    this._pos = Object.keys(this._axis).reduce(function (pos, v) {
      pos[v] = _this._axis[v].startPos;
      return pos;
    }, {});
  }
  var __proto = AxisManager.prototype;
  __proto.getDelta = function (depaPos, destPos) {
    var fullDepaPos = this.get(depaPos);
    return map(this.get(destPos), function (v, k) {
      return v - fullDepaPos[k];
    });
  };
  __proto.get = function (axes) {
    var _this = this;
    if (axes && Array.isArray(axes)) {
      return axes.reduce(function (acc, v) {
        if (v && v in _this._pos) {
          acc[v] = _this._pos[v];
        }
        return acc;
      }, {});
    } else {
      return __assign(__assign({}, this._pos), axes || {});
    }
  };
  __proto.moveTo = function (pos, depaPos) {
    if (depaPos === void 0) {
      depaPos = this._pos;
    }
    var delta = map(this._pos, function (v, key) {
      return key in pos && key in depaPos ? pos[key] - depaPos[key] : 0;
    });
    this.set(this.map(pos, function (v, opt) {
      return opt ? getCirculatedPos(v, opt.range, opt.circular) : 0;
    }));
    return {
      pos: __assign({}, this._pos),
      delta: delta
    };
  };
  __proto.set = function (pos) {
    for (var k in pos) {
      if (k && k in this._pos) {
        this._pos[k] = pos[k];
      }
    }
  };
  __proto.every = function (pos, callback) {
    var axisOptions = this._axis;
    return every(pos, function (value, key) {
      return callback(value, axisOptions[key], key);
    });
  };
  __proto.filter = function (pos, callback) {
    var axisOptions = this._axis;
    return filter(pos, function (value, key) {
      return callback(value, axisOptions[key], key);
    });
  };
  __proto.map = function (pos, callback) {
    var axisOptions = this._axis;
    return map(pos, function (value, key) {
      return callback(value, axisOptions[key], key);
    });
  };
  __proto.isOutside = function (axes) {
    return !this.every(axes ? this.get(axes) : this._pos, function (v, opt) {
      return !isOutside(v, opt.range);
    });
  };
  __proto.getAxisOptions = function (key) {
    return this._axis[key];
  };
  __proto.setAxis = function (axis) {
    var _this = this;
    Object.keys(axis).forEach(function (key) {
      if (!_this._axis[key]) {
        throw new Error("Axis ".concat(key, " does not exist in Axes instance"));
      }
      _this._axis[key] = __assign(__assign({}, _this._axis[key]), axis[key]);
    });
    this._complementOptions();
  };
  /**
   * set up 'css' expression
   * @private
   */
  __proto._complementOptions = function () {
    var _this = this;
    Object.keys(this._axis).forEach(function (axis) {
      _this._axis[axis] = __assign({
        range: [0, 100],
        startPos: _this._axis[axis].range[0],
        bounce: [0, 0],
        circular: [false, false]
      }, _this._axis[axis]);
      ["bounce", "circular"].forEach(function (v) {
        var axisOption = _this._axis;
        var key = axisOption[axis][v];
        if (/string|number|boolean/.test(typeof key)) {
          axisOption[axis][v] = [key, key];
        }
      });
    });
  };
  return AxisManager;
}();
var SUPPORT_TOUCH = "ontouchstart" in win;
var SUPPORT_POINTER = "PointerEvent" in win;
var SUPPORT_MSPOINTER = "MSPointerEvent" in win;
var SUPPORT_POINTER_EVENTS = SUPPORT_POINTER || SUPPORT_MSPOINTER;
var isValidKey = function (event, inputKey) {
  if (!inputKey || inputKey.indexOf(ANY) > -1 || inputKey.indexOf(NONE) > -1 && !event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey || inputKey.indexOf(SHIFT) > -1 && event.shiftKey || inputKey.indexOf(CTRL) > -1 && event.ctrlKey || inputKey.indexOf(ALT) > -1 && event.altKey || inputKey.indexOf(META) > -1 && event.metaKey) {
    return true;
  }
  return false;
};
var EventInput = /*#__PURE__*/function () {
  function EventInput() {
    var _this = this;
    this._stopContextMenu = function (event) {
      event.preventDefault();
      win.removeEventListener("contextmenu", _this._stopContextMenu);
    };
  }
  var __proto = EventInput.prototype;
  __proto.extendEvent = function (event) {
    var _a;
    var prevEvent = this.prevEvent;
    var center = this._getCenter(event);
    var movement = prevEvent ? this._getMovement(event) : {
      x: 0,
      y: 0
    };
    var scale = prevEvent ? this._getScale(event) : 1;
    var angle = prevEvent ? getAngle(center.x - prevEvent.center.x, center.y - prevEvent.center.y) : 0;
    var deltaX = prevEvent ? prevEvent.deltaX + movement.x : movement.x;
    var deltaY = prevEvent ? prevEvent.deltaY + movement.y : movement.y;
    var offsetX = movement.x;
    var offsetY = movement.y;
    var latestInterval = this._latestInterval;
    var timeStamp = Date.now();
    var deltaTime = latestInterval ? timeStamp - latestInterval.timestamp : 0;
    var velocityX = prevEvent ? prevEvent.velocityX : 0;
    var velocityY = prevEvent ? prevEvent.velocityY : 0;
    if (!latestInterval || deltaTime >= VELOCITY_INTERVAL) {
      if (latestInterval) {
        _a = [(deltaX - latestInterval.deltaX) / deltaTime, (deltaY - latestInterval.deltaY) / deltaTime], velocityX = _a[0], velocityY = _a[1];
      }
      this._latestInterval = {
        timestamp: timeStamp,
        deltaX: deltaX,
        deltaY: deltaY
      };
    }
    return {
      srcEvent: event,
      scale: scale,
      angle: angle,
      center: center,
      deltaX: deltaX,
      deltaY: deltaY,
      offsetX: offsetX,
      offsetY: offsetY,
      velocityX: velocityX,
      velocityY: velocityY,
      preventSystemEvent: true
    };
  };
  __proto._getDistance = function (start, end) {
    var x = end.clientX - start.clientX;
    var y = end.clientY - start.clientY;
    return Math.sqrt(x * x + y * y);
  };
  __proto._getButton = function (event) {
    var buttonCodeMap = {
      1: MOUSE_LEFT,
      2: MOUSE_RIGHT,
      4: MOUSE_MIDDLE
    };
    var button = this._isTouchEvent(event) ? MOUSE_LEFT : buttonCodeMap[event.buttons];
    return button ? button : null;
  };
  __proto._isTouchEvent = function (event) {
    return event.type && event.type.indexOf("touch") > -1;
  };
  __proto._isValidButton = function (button, inputButton) {
    return inputButton.indexOf(button) > -1;
  };
  __proto._isValidEvent = function (event, inputKey, inputButton) {
    return (!inputKey || isValidKey(event, inputKey)) && (!inputButton || this._isValidButton(this._getButton(event), inputButton));
  };
  __proto._preventMouseButton = function (event, button) {
    if (button === MOUSE_RIGHT) {
      win.addEventListener("contextmenu", this._stopContextMenu);
    } else if (button === MOUSE_MIDDLE) {
      event.preventDefault();
    }
  };
  return EventInput;
}();
var MouseEventInput = /*#__PURE__*/function (_super) {
  axes_esm_extends(MouseEventInput, _super);
  function MouseEventInput() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.start = ["mousedown"];
    _this.move = ["mousemove"];
    _this.end = ["mouseup"];
    return _this;
  }
  var __proto = MouseEventInput.prototype;
  __proto.onEventStart = function (event, inputKey, inputButton) {
    var button = this._getButton(event);
    if (!this._isValidEvent(event, inputKey, inputButton)) {
      return null;
    }
    this._preventMouseButton(event, button);
    return this.extendEvent(event);
  };
  __proto.onEventMove = function (event, inputKey, inputButton) {
    if (!this._isValidEvent(event, inputKey, inputButton)) {
      return null;
    }
    return this.extendEvent(event);
  };
  __proto.onEventEnd = function () {
    return;
  };
  __proto.onRelease = function () {
    this.prevEvent = null;
    return;
  };
  __proto.getTouches = function (event, inputButton) {
    if (inputButton) {
      return this._isValidButton(MOUSE_BUTTON_CODE_MAP[event.which], inputButton) && this.end.indexOf(event.type) === -1 ? 1 : 0;
    }
    return 0;
  };
  __proto._getScale = function () {
    return 1;
  };
  __proto._getCenter = function (event) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  };
  __proto._getMovement = function (event) {
    var prev = this.prevEvent.srcEvent;
    return {
      x: event.clientX - prev.clientX,
      y: event.clientY - prev.clientY
    };
  };
  return MouseEventInput;
}(EventInput);
var TouchEventInput = /*#__PURE__*/function (_super) {
  axes_esm_extends(TouchEventInput, _super);
  function TouchEventInput() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.start = ["touchstart"];
    _this.move = ["touchmove"];
    _this.end = ["touchend", "touchcancel"];
    return _this;
  }
  var __proto = TouchEventInput.prototype;
  __proto.onEventStart = function (event, inputKey) {
    this._baseTouches = event.touches;
    if (!this._isValidEvent(event, inputKey)) {
      return null;
    }
    return this.extendEvent(event);
  };
  __proto.onEventMove = function (event, inputKey) {
    if (!this._isValidEvent(event, inputKey)) {
      return null;
    }
    return this.extendEvent(event);
  };
  __proto.onEventEnd = function (event) {
    this._baseTouches = event.touches;
    return;
  };
  __proto.onRelease = function () {
    this.prevEvent = null;
    this._baseTouches = null;
    return;
  };
  __proto.getTouches = function (event) {
    return event.touches.length;
  };
  __proto._getScale = function (event) {
    if (event.touches.length !== 2 || this._baseTouches.length < 2) {
      return null; // TODO: consider calculating non-pinch gesture scale
    }
    return this._getDistance(event.touches[0], event.touches[1]) / this._getDistance(this._baseTouches[0], this._baseTouches[1]);
  };
  __proto._getCenter = function (event) {
    return {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    };
  };
  __proto._getMovement = function (event) {
    var prev = this.prevEvent.srcEvent;
    if (event.touches[0].identifier !== prev.touches[0].identifier) {
      return {
        x: 0,
        y: 0
      };
    }
    return {
      x: event.touches[0].clientX - prev.touches[0].clientX,
      y: event.touches[0].clientY - prev.touches[0].clientY
    };
  };
  return TouchEventInput;
}(EventInput);
var PointerEventInput = /*#__PURE__*/function (_super) {
  axes_esm_extends(PointerEventInput, _super);
  function PointerEventInput() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.start = SUPPORT_POINTER ? ["pointerdown"] : ["MSPointerDown"];
    _this.move = SUPPORT_POINTER ? ["pointermove"] : ["MSPointerMove"];
    _this.end = SUPPORT_POINTER ? ["pointerup", "pointercancel"] : ["MSPointerUp", "MSPointerCancel"];
    // store first, recent inputs for each event id
    _this._firstInputs = [];
    _this._recentInputs = [];
    return _this;
  }
  var __proto = PointerEventInput.prototype;
  __proto.onEventStart = function (event, inputKey, inputButton) {
    var button = this._getButton(event);
    if (!this._isValidEvent(event, inputKey, inputButton)) {
      return null;
    }
    this._preventMouseButton(event, button);
    this._updatePointerEvent(event);
    return this.extendEvent(event);
  };
  __proto.onEventMove = function (event, inputKey, inputButton) {
    if (!this._isValidEvent(event, inputKey, inputButton)) {
      return null;
    }
    this._updatePointerEvent(event);
    return this.extendEvent(event);
  };
  __proto.onEventEnd = function (event) {
    this._removePointerEvent(event);
  };
  __proto.onRelease = function () {
    this.prevEvent = null;
    this._firstInputs = [];
    this._recentInputs = [];
    return;
  };
  __proto.getTouches = function () {
    return this._recentInputs.length;
  };
  __proto._getScale = function () {
    if (this._recentInputs.length !== 2) {
      return null; // TODO: consider calculating non-pinch gesture scale
    }
    return this._getDistance(this._recentInputs[0], this._recentInputs[1]) / this._getDistance(this._firstInputs[0], this._firstInputs[1]);
  };
  __proto._getCenter = function (event) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  };
  __proto._getMovement = function (event) {
    var prev = this.prevEvent.srcEvent;
    if (event.pointerId !== prev.pointerId) {
      return {
        x: 0,
        y: 0
      };
    }
    return {
      x: event.clientX - prev.clientX,
      y: event.clientY - prev.clientY
    };
  };
  __proto._updatePointerEvent = function (event) {
    var _this = this;
    var addFlag = false;
    this._recentInputs.forEach(function (e, i) {
      if (e.pointerId === event.pointerId) {
        addFlag = true;
        _this._recentInputs[i] = event;
      }
    });
    if (!addFlag) {
      this._firstInputs.push(event);
      this._recentInputs.push(event);
    }
  };
  __proto._removePointerEvent = function (event) {
    this._firstInputs = this._firstInputs.filter(function (x) {
      return x.pointerId !== event.pointerId;
    });
    this._recentInputs = this._recentInputs.filter(function (x) {
      return x.pointerId !== event.pointerId;
    });
  };
  return PointerEventInput;
}(EventInput);
var TouchMouseEventInput = /*#__PURE__*/function (_super) {
  axes_esm_extends(TouchMouseEventInput, _super);
  function TouchMouseEventInput() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.start = ["mousedown", "touchstart"];
    _this.move = ["mousemove", "touchmove"];
    _this.end = ["mouseup", "touchend", "touchcancel"];
    return _this;
  }
  var __proto = TouchMouseEventInput.prototype;
  __proto.onEventStart = function (event, inputKey, inputButton) {
    var button = this._getButton(event);
    if (this._isTouchEvent(event)) {
      this._baseTouches = event.touches;
    }
    if (!this._isValidEvent(event, inputKey, inputButton)) {
      return null;
    }
    this._preventMouseButton(event, button);
    return this.extendEvent(event);
  };
  __proto.onEventMove = function (event, inputKey, inputButton) {
    if (!this._isValidEvent(event, inputKey, inputButton)) {
      return null;
    }
    return this.extendEvent(event);
  };
  __proto.onEventEnd = function (event) {
    if (this._isTouchEvent(event)) {
      this._baseTouches = event.touches;
    }
    return;
  };
  __proto.onRelease = function () {
    this.prevEvent = null;
    this._baseTouches = null;
    return;
  };
  __proto.getTouches = function (event, inputButton) {
    if (this._isTouchEvent(event)) {
      return event.touches.length;
    } else {
      return this._isValidButton(MOUSE_BUTTON_CODE_MAP[event.which], inputButton) && this.end.indexOf(event.type) === -1 ? 1 : 0;
    }
  };
  __proto._getScale = function (event) {
    if (this._isTouchEvent(event)) {
      if (event.touches.length !== 2 || this._baseTouches.length < 2) {
        return 1; // TODO: consider calculating non-pinch gesture scale
      }
      return this._getDistance(event.touches[0], event.touches[1]) / this._getDistance(this._baseTouches[0], this._baseTouches[1]);
    }
    return this.prevEvent.scale;
  };
  __proto._getCenter = function (event) {
    if (this._isTouchEvent(event)) {
      return {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      };
    }
    return {
      x: event.clientX,
      y: event.clientY
    };
  };
  __proto._getMovement = function (event) {
    var _this = this;
    var prev = this.prevEvent.srcEvent;
    var _a = [event, prev].map(function (e) {
        if (_this._isTouchEvent(e)) {
          return {
            id: e.touches[0].identifier,
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
          };
        }
        return {
          id: null,
          x: e.clientX,
          y: e.clientY
        };
      }),
      nextSpot = _a[0],
      prevSpot = _a[1];
    return nextSpot.id === prevSpot.id ? {
      x: nextSpot.x - prevSpot.x,
      y: nextSpot.y - prevSpot.y
    } : {
      x: 0,
      y: 0
    };
  };
  return TouchMouseEventInput;
}(EventInput);
var toAxis = function (source, offset) {
  return offset.reduce(function (acc, v, i) {
    if (source[i]) {
      acc[source[i]] = v;
    }
    return acc;
  }, {});
};
var convertInputType = function (inputType) {
  if (inputType === void 0) {
    inputType = [];
  }
  var hasTouch = false;
  var hasMouse = false;
  var hasPointer = false;
  inputType.forEach(function (v) {
    switch (v) {
      case "mouse":
        hasMouse = true;
        break;
      case "touch":
        hasTouch = SUPPORT_TOUCH;
        break;
      case "pointer":
        hasPointer = SUPPORT_POINTER_EVENTS;
      // no default
    }
  });
  if (hasPointer) {
    return new PointerEventInput();
  } else if (hasTouch && hasMouse) {
    return new TouchMouseEventInput();
  } else if (hasTouch) {
    return new TouchEventInput();
  } else if (hasMouse) {
    return new MouseEventInput();
  }
  return null;
};
function getAddEventOptions(eventName) {
  // The passive default value of the touch event is true.
  // If not a touch event, return false to support ie11
  return eventName.indexOf("touch") > -1 ? {
    passive: false
  } : false;
}
var InputObserver = /*#__PURE__*/function () {
  function InputObserver(_a) {
    var options = _a.options,
      interruptManager = _a.interruptManager,
      eventManager = _a.eventManager,
      axisManager = _a.axisManager,
      animationManager = _a.animationManager;
    this._isOutside = false;
    this._moveDistance = null;
    this._isStopped = false;
    this.options = options;
    this._interruptManager = interruptManager;
    this._eventManager = eventManager;
    this._axisManager = axisManager;
    this._animationManager = animationManager;
  }
  var __proto = InputObserver.prototype;
  __proto.get = function (input) {
    return this._axisManager.get(input.axes);
  };
  __proto.hold = function (input, event) {
    if (this._interruptManager.isInterrupted() || !input.axes.length) {
      return;
    }
    var changeOption = {
      input: input,
      event: event
    };
    this._isStopped = false;
    this._interruptManager.setInterrupt(true);
    this._animationManager.stopAnimation(changeOption);
    ++this._eventManager.holdingCount;
    if (!this._moveDistance) {
      this._eventManager.hold(this._axisManager.get(), changeOption);
    }
    this._isOutside = this._axisManager.isOutside(input.axes);
    this._moveDistance = this._axisManager.get(input.axes);
  };
  __proto.change = function (input, event, offset, useAnimation) {
    if (this._isStopped || !this._interruptManager.isInterrupting() || this._axisManager.every(offset, function (v) {
      return v === 0;
    })) {
      return;
    }
    var nativeEvent = event.srcEvent ? event.srcEvent : event;
    if (nativeEvent.__childrenAxesAlreadyChanged) {
      return;
    }
    var depaPos = this._moveDistance || this._axisManager.get(input.axes);
    var destPos;
    // for outside logic
    destPos = map(depaPos, function (v, k) {
      return v + (offset[k] || 0);
    });
    if (this._moveDistance) {
      this._moveDistance = this._axisManager.map(destPos, function (v, _a) {
        var circular = _a.circular,
          range = _a.range;
        return circular && (circular[0] || circular[1]) ? getCirculatedPos(v, range, circular) : v;
      });
    }
    // from outside to inside
    if (this._isOutside && this._axisManager.every(depaPos, function (v, opt) {
      return !isOutside(v, opt.range);
    })) {
      this._isOutside = false;
    }
    depaPos = this._atOutside(depaPos);
    destPos = this._atOutside(destPos);
    if (!this.options.nested || !this._isEndofAxis(offset, depaPos, destPos)) {
      nativeEvent.__childrenAxesAlreadyChanged = true;
    }
    var changeOption = {
      input: input,
      event: event
    };
    if (useAnimation) {
      var duration = this._animationManager.getDuration(destPos, depaPos);
      this._animationManager.animateTo(destPos, duration, changeOption);
    } else {
      var isCanceled = !this._eventManager.triggerChange(destPos, depaPos, changeOption, true);
      if (isCanceled) {
        this._isStopped = true;
        this._moveDistance = null;
        this._animationManager.finish(false);
      }
    }
  };
  __proto.release = function (input, event, velocity, inputDuration) {
    if (this._isStopped || !this._interruptManager.isInterrupting() || !this._moveDistance) {
      return;
    }
    var nativeEvent = event.srcEvent ? event.srcEvent : event;
    if (nativeEvent.__childrenAxesAlreadyReleased) {
      velocity = velocity.map(function () {
        return 0;
      });
    }
    var pos = this._axisManager.get(input.axes);
    var depaPos = this._axisManager.get();
    var displacement = this._animationManager.getDisplacement(velocity);
    var offset = toAxis(input.axes, displacement);
    var destPos = this._axisManager.get(this._axisManager.map(offset, function (v, opt, k) {
      if (opt.circular && (opt.circular[0] || opt.circular[1])) {
        return pos[k] + v;
      } else {
        return getInsidePosition(pos[k] + v, opt.range, opt.circular, opt.bounce);
      }
    }));
    nativeEvent.__childrenAxesAlreadyReleased = true;
    var duration = this._animationManager.getDuration(destPos, pos, inputDuration);
    if (duration === 0) {
      destPos = __assign({}, depaPos);
    }
    // prepare params
    var param = {
      depaPos: depaPos,
      destPos: destPos,
      duration: duration,
      delta: this._axisManager.getDelta(depaPos, destPos),
      inputEvent: event,
      input: input,
      isTrusted: true
    };
    --this._eventManager.holdingCount;
    this._eventManager.triggerRelease(param);
    if (this._eventManager.holdingCount === 0) {
      this._moveDistance = null;
    }
    // to contol
    var userWish = this._animationManager.getUserControl(param);
    var isEqual = equal(userWish.destPos, depaPos);
    var changeOption = {
      input: input,
      event: event
    };
    if (isEqual || userWish.duration === 0) {
      if (!isEqual) {
        this._eventManager.triggerChange(userWish.destPos, depaPos, changeOption, true);
      }
      this._interruptManager.setInterrupt(false);
      if (this._axisManager.isOutside()) {
        this._animationManager.restore(changeOption);
      } else {
        this._eventManager.triggerFinish(true);
      }
    } else {
      this._animationManager.animateTo(userWish.destPos, userWish.duration, changeOption);
    }
  };
  // when move pointer is held in outside
  __proto._atOutside = function (pos) {
    var _this = this;
    if (this._isOutside) {
      return this._axisManager.map(pos, function (v, opt) {
        var tn = opt.range[0] - opt.bounce[0];
        var tx = opt.range[1] + opt.bounce[1];
        return v > tx ? tx : v < tn ? tn : v;
      });
    } else {
      return this._axisManager.map(pos, function (v, opt) {
        var min = opt.range[0];
        var max = opt.range[1];
        var out = opt.bounce;
        var circular = opt.circular;
        if (circular[0] && v < min || circular[1] && v > max) {
          return v;
        } else if (v < min) {
          // left
          return min - _this._animationManager.interpolate(min - v, out[0]);
        } else if (v > max) {
          // right
          return max + _this._animationManager.interpolate(v - max, out[1]);
        }
        return v;
      });
    }
  };
  __proto._isEndofAxis = function (offset, depaPos, destPos) {
    return this._axisManager.every(depaPos, function (value, option, key) {
      return offset[key] === 0 || depaPos[key] === destPos[key] && isEndofBounce(value, option.range, option.bounce, option.circular);
    });
  };
  return InputObserver;
}();
var clamp = function (value, min, max) {
  return Math.max(Math.min(value, max), min);
};
var AnimationManager = /*#__PURE__*/function () {
  function AnimationManager(_a) {
    var options = _a.options,
      interruptManager = _a.interruptManager,
      eventManager = _a.eventManager,
      axisManager = _a.axisManager;
    this._options = options;
    this.interruptManager = interruptManager;
    this.eventManager = eventManager;
    this.axisManager = axisManager;
    this.animationEnd = this.animationEnd.bind(this);
  }
  var __proto = AnimationManager.prototype;
  __proto.getDuration = function (depaPos, destPos, wishDuration) {
    var _this = this;
    var duration;
    if (typeof wishDuration !== "undefined") {
      duration = wishDuration;
    } else {
      var durations_1 = map(destPos, function (v, k) {
        return getDuration(Math.abs(v - depaPos[k]), _this._options.deceleration);
      });
      duration = Object.keys(durations_1).reduce(function (max, v) {
        return Math.max(max, durations_1[v]);
      }, -Infinity);
    }
    return clamp(duration, this._options.minimumDuration, this._options.maximumDuration);
  };
  __proto.getDisplacement = function (velocity) {
    var totalVelocity = Math.pow(velocity.reduce(function (total, v) {
      return total + v * v;
    }, 0), 1 / velocity.length);
    var duration = Math.abs(totalVelocity / -this._options.deceleration);
    return velocity.map(function (v) {
      return v / 2 * duration;
    });
  };
  __proto.stopAnimation = function (option) {
    if (this._animateParam) {
      var orgPos_1 = this.axisManager.get();
      var pos = this.axisManager.map(orgPos_1, function (v, opt) {
        return getCirculatedPos(v, opt.range, opt.circular);
      });
      if (!every(pos, function (v, k) {
        return orgPos_1[k] === v;
      })) {
        this.eventManager.triggerChange(pos, orgPos_1, option, !!option);
      }
      this._animateParam = null;
      if (this._raf) {
        cancelAnimationFrame(this._raf);
      }
      this._raf = null;
      this.eventManager.triggerAnimationEnd(!!(option === null || option === void 0 ? void 0 : option.event));
    }
  };
  __proto.getEventInfo = function () {
    if (this._animateParam && this._animateParam.input && this._animateParam.inputEvent) {
      return {
        input: this._animateParam.input,
        event: this._animateParam.inputEvent
      };
    } else {
      return null;
    }
  };
  __proto.restore = function (option) {
    var pos = this.axisManager.get();
    var destPos = this.axisManager.map(pos, function (v, opt) {
      return Math.min(opt.range[1], Math.max(opt.range[0], v));
    });
    this.stopAnimation();
    this.animateTo(destPos, this.getDuration(pos, destPos), option);
  };
  __proto.animationEnd = function () {
    var beforeParam = this.getEventInfo();
    this._animateParam = null;
    // for Circular
    var circularTargets = this.axisManager.filter(this.axisManager.get(), function (v, opt) {
      return isCircularable(v, opt.range, opt.circular);
    });
    if (Object.keys(circularTargets).length > 0) {
      this.setTo(this.axisManager.map(circularTargets, function (v, opt) {
        return getCirculatedPos(v, opt.range, opt.circular);
      }));
    }
    this.interruptManager.setInterrupt(false);
    this.eventManager.triggerAnimationEnd(!!beforeParam);
    if (this.axisManager.isOutside()) {
      this.restore(beforeParam);
    } else {
      this.finish(!!beforeParam);
    }
  };
  __proto.finish = function (isTrusted) {
    this._animateParam = null;
    this.interruptManager.setInterrupt(false);
    this.eventManager.triggerFinish(isTrusted);
  };
  __proto.getUserControl = function (param) {
    var userWish = param.setTo();
    userWish.destPos = this.axisManager.get(userWish.destPos);
    userWish.duration = clamp(userWish.duration, this._options.minimumDuration, this._options.maximumDuration);
    return userWish;
  };
  __proto.animateTo = function (destPos, duration, option) {
    var _this = this;
    this.stopAnimation();
    var param = this._createAnimationParam(destPos, duration, option);
    var depaPos = __assign({}, param.depaPos);
    var retTrigger = this.eventManager.triggerAnimationStart(param);
    // to control
    var userWish = this.getUserControl(param);
    // You can't stop the 'animationStart' event when 'circular' is true.
    if (!retTrigger && this.axisManager.every(userWish.destPos, function (v, opt) {
      return isCircularable(v, opt.range, opt.circular);
    })) {
      console.warn("You can't stop the 'animation' event when 'circular' is true.");
    }
    if (retTrigger && !equal(userWish.destPos, depaPos)) {
      var inputEvent = (option === null || option === void 0 ? void 0 : option.event) || null;
      this._animateLoop({
        depaPos: depaPos,
        destPos: userWish.destPos,
        duration: userWish.duration,
        delta: this.axisManager.getDelta(depaPos, userWish.destPos),
        isTrusted: !!inputEvent,
        inputEvent: inputEvent,
        input: (option === null || option === void 0 ? void 0 : option.input) || null
      }, function () {
        return _this.animationEnd();
      });
    }
  };
  __proto.setTo = function (pos, duration) {
    if (duration === void 0) {
      duration = 0;
    }
    var axes = Object.keys(pos);
    var orgPos = this.axisManager.get(axes);
    if (equal(pos, orgPos)) {
      return this;
    }
    this.interruptManager.setInterrupt(true);
    var movedPos = filter(pos, function (v, k) {
      return orgPos[k] !== v;
    });
    if (!Object.keys(movedPos).length) {
      return this;
    }
    movedPos = this.axisManager.map(movedPos, function (v, opt) {
      var range = opt.range,
        circular = opt.circular;
      if (circular && (circular[0] || circular[1])) {
        return v;
      } else {
        return getInsidePosition(v, range, circular);
      }
    });
    if (equal(movedPos, orgPos)) {
      return this;
    }
    if (duration > 0) {
      this.animateTo(movedPos, duration);
    } else {
      this.stopAnimation();
      this.eventManager.triggerChange(movedPos);
      this.finish(false);
    }
    return this;
  };
  __proto.setBy = function (pos, duration) {
    if (duration === void 0) {
      duration = 0;
    }
    return this.setTo(map(this.axisManager.get(Object.keys(pos)), function (v, k) {
      return v + pos[k];
    }), duration);
  };
  __proto.setOptions = function (options) {
    this._options = __assign(__assign({}, this._options), options);
  };
  __proto._createAnimationParam = function (pos, duration, option) {
    var depaPos = this.axisManager.get();
    var destPos = pos;
    var inputEvent = (option === null || option === void 0 ? void 0 : option.event) || null;
    return {
      depaPos: depaPos,
      destPos: destPos,
      duration: clamp(duration, this._options.minimumDuration, this._options.maximumDuration),
      delta: this.axisManager.getDelta(depaPos, destPos),
      inputEvent: inputEvent,
      input: (option === null || option === void 0 ? void 0 : option.input) || null,
      isTrusted: !!inputEvent,
      done: this.animationEnd
    };
  };
  __proto._animateLoop = function (param, complete) {
    var _this = this;
    if (param.duration) {
      this._animateParam = __assign(__assign({}, param), {
        startTime: new Date().getTime()
      });
      var originalIntendedPos_1 = map(param.destPos, function (v) {
        return v;
      });
      var state_1 = this._initState(this._animateParam);
      var loop_1 = function () {
        _this._raf = null;
        var animateParam = _this._animateParam;
        var nextState = _this._getNextState(state_1);
        var isCanceled = !_this.eventManager.triggerChange(nextState.pos, state_1.pos);
        state_1 = nextState;
        if (nextState.finished) {
          animateParam.destPos = _this._getFinalPos(animateParam.destPos, originalIntendedPos_1);
          if (!equal(animateParam.destPos, _this.axisManager.get(Object.keys(animateParam.destPos)))) {
            _this.eventManager.triggerChange(animateParam.destPos, nextState.pos);
          }
          complete();
          return;
        } else if (isCanceled) {
          _this.finish(false);
        } else {
          _this._raf = requestAnimationFrame(loop_1);
        }
      };
      loop_1();
    } else {
      this.eventManager.triggerChange(param.destPos);
      complete();
    }
  };
  /**
   * Get estimated final value.
   *
   * If destPos is within the 'error range' of the original intended position, the initial intended position is returned.
   *   - eg. original intended pos: 100, destPos: 100.0000000004 ==> return 100;
   * If dest Pos is outside the 'range of error' compared to the originally intended pos, it is returned rounded based on the originally intended pos.
   *   - eg. original intended pos: 100.123 destPos: 50.12345 => return 50.123
   * @param originalIntendedPos
   * @param destPos
   */
  __proto._getFinalPos = function (destPos, originalIntendedPos) {
    var _this = this;
    // compare destPos and originalIntendedPos
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var ERROR_LIMIT = 0.000001;
    var finalPos = map(destPos, function (value, key) {
      if (value >= originalIntendedPos[key] - ERROR_LIMIT && value <= originalIntendedPos[key] + ERROR_LIMIT) {
        // In error range, return original intended
        return originalIntendedPos[key];
      } else {
        // Out of error range, return rounded pos.
        var roundUnit = _this._getRoundUnit(value, key);
        var result = roundNumber(value, roundUnit);
        return result;
      }
    });
    return finalPos;
  };
  __proto._getRoundUnit = function (val, key) {
    var roundUnit = this._options.round; // manual mode
    var minRoundUnit = null; // auto mode
    // auto mode
    if (!roundUnit) {
      // Get minimum round unit
      var options = this.axisManager.getAxisOptions(key);
      minRoundUnit = inversePow(Math.max(getDecimalPlace(options.range[0]), getDecimalPlace(options.range[1]), getDecimalPlace(val)));
    }
    return minRoundUnit || roundUnit;
  };
  return AnimationManager;
}();
var EasingManager = /*#__PURE__*/function (_super) {
  axes_esm_extends(EasingManager, _super);
  function EasingManager() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this._useDuration = true;
    return _this;
  }
  var __proto = EasingManager.prototype;
  __proto.interpolate = function (displacement, threshold) {
    var initSlope = this._easing(0.00001) / 0.00001;
    return this._easing(displacement / (threshold * initSlope)) * threshold;
  };
  __proto.updateAnimation = function (options) {
    var _a;
    var animateParam = this._animateParam;
    if (!animateParam) {
      return;
    }
    var diffTime = new Date().getTime() - animateParam.startTime;
    var pos = (options === null || options === void 0 ? void 0 : options.destPos) || animateParam.destPos;
    var duration = (_a = options === null || options === void 0 ? void 0 : options.duration) !== null && _a !== void 0 ? _a : animateParam.duration;
    if ((options === null || options === void 0 ? void 0 : options.restart) || duration <= diffTime) {
      this.setTo(pos, duration - diffTime);
      return;
    }
    if (options === null || options === void 0 ? void 0 : options.destPos) {
      var currentPos = this.axisManager.get();
      // When destination is changed, new delta should be calculated as remaining percent.
      // For example, moving x:0, y:0 to x:200, y:200 and it has current easing percent of 92%. coordinate is x:184 and y:184
      // If destination changes to x:300, y:300. xdelta:200, ydelta:200 changes to xdelta:116, ydelta:116 and use remaining easingPer as 100%, not 8% as previous.
      // Therefore, original easingPer by time is kept. And divided by (1 - self._initialEasingPer) which means new total easing percent. Like calculating 8% as 100%.
      this._initialEasingPer = this._prevEasingPer;
      animateParam.delta = this.axisManager.getDelta(currentPos, pos);
      animateParam.destPos = pos;
    }
    if (options === null || options === void 0 ? void 0 : options.duration) {
      var ratio = (diffTime + this._durationOffset) / animateParam.duration;
      // Use durationOffset for keeping animation ratio after duration is changed.
      // newRatio = (diffTime + newDurationOffset) / newDuration = oldRatio
      // newDurationOffset = oldRatio * newDuration - diffTime
      this._durationOffset = ratio * duration - diffTime;
      animateParam.duration = duration;
    }
  };
  __proto._initState = function (info) {
    this._initialEasingPer = 0;
    this._prevEasingPer = 0;
    this._durationOffset = 0;
    return {
      pos: info.depaPos,
      easingPer: 0,
      finished: false
    };
  };
  __proto._getNextState = function (prevState) {
    var _this = this;
    var animateParam = this._animateParam;
    var prevPos = prevState.pos;
    var destPos = animateParam.destPos;
    var directions = map(prevPos, function (value, key) {
      return value <= destPos[key] ? 1 : -1;
    });
    var diffTime = new Date().getTime() - animateParam.startTime;
    var ratio = (diffTime + this._durationOffset) / animateParam.duration;
    var easingPer = this._easing(ratio);
    var toPos = this.axisManager.map(prevPos, function (pos, options, key) {
      var nextPos = ratio >= 1 ? destPos[key] : pos + animateParam.delta[key] * (easingPer - _this._prevEasingPer) / (1 - _this._initialEasingPer);
      // Subtract distance from distance already moved.
      // Recalculate the remaining distance.
      // Fix the bouncing phenomenon by changing the range.
      var circulatedPos = getCirculatedPos(nextPos, options.range, options.circular);
      if (nextPos !== circulatedPos) {
        // circular
        var rangeOffset = directions[key] * (options.range[1] - options.range[0]);
        destPos[key] -= rangeOffset;
        prevPos[key] -= rangeOffset;
      }
      return circulatedPos;
    });
    this._prevEasingPer = easingPer;
    return {
      pos: toPos,
      easingPer: easingPer,
      finished: easingPer >= 1
    };
  };
  __proto._easing = function (p) {
    return p > 1 ? 1 : this._options.easing(p);
  };
  return EasingManager;
}(AnimationManager);

/**
 * @typedef {Object} AxisOption The Axis information. The key of the axis specifies the name to use as the logical virtual coordinate system.
 * @ko 축 정보. 축의 키는 논리적인 가상 좌표계로 사용할 이름을 지정한다.
 * @param {Number[]} [range] The range of coordinate <ko>좌표 범위</ko>
 * @param {Number} [range[0]=0] The coordinate of the minimum <ko>최소 좌표</ko>
 * @param {Number} [range[1]=0] The coordinate of the maximum <ko>최대 좌표</ko>
 * @param {Number} [startPos=range[0]] The coordinates to be moved when creating an instance <ko>인스턴스 생성시 이동할 좌표</ko>
 * @param {Number[]} [bounce] The size of bouncing area. The coordinates can exceed the coordinate area as much as the bouncing area based on user action. If the coordinates does not exceed the bouncing area when an element is dragged, the coordinates where bouncing effects are applied are retuned back into the coordinate area<ko>바운스 영역의 크기. 사용자의 동작에 따라 좌표가 좌표 영역을 넘어 바운스 영역의 크기만큼 더 이동할 수 있다. 사용자가 끌어다 놓는 동작을 했을 때 좌표가 바운스 영역에 있으면, 바운스 효과가 적용된 좌표가 다시 좌표 영역 안으로 들어온다</ko>
 * @param {Number} [bounce[0]=0] The size of coordinate of the minimum area <ko>최소 좌표 바운스 영역의 크기</ko>
 * @param {Number} [bounce[1]=0] The size of coordinate of the maximum area <ko>최대 좌표 바운스 영역의 크기</ko>
 * @param {Boolean[]} [circular] Indicates whether a circular element is available. If it is set to "true" and an element is dragged outside the coordinate area, the element will appear on the other side.<ko>순환 여부. 'true'로 설정한 방향의 좌표 영역 밖으로 엘리먼트가 이동하면 반대 방향에서 엘리먼트가 나타난다</ko>
 * @param {Boolean} [circular[0]=false] Indicates whether to circulate to the coordinate of the minimum <ko>최소 좌표 방향의 순환 여부</ko>
 * @param {Boolean} [circular[1]=false] Indicates whether to circulate to the coordinate of the maximum <ko>최대 좌표 방향의 순환 여부</ko>
 **/
/**
 * @typedef {Object} AxesOption The option object of the eg.Axes module
 * @ko eg.Axes 모듈의 옵션 객체
 * @param {Function} [easing=easing.easeOutCubic] The easing function to apply to an animation <ko>애니메이션에 적용할 easing 함수</ko>
 * @param {Number} [maximumDuration=Infinity] Maximum duration of the animation <ko>가속도에 의해 애니메이션이 동작할 때의 최대 좌표 이동 시간</ko>
 * @param {Number} [minimumDuration=0] Minimum duration of the animation <ko>가속도에 의해 애니메이션이 동작할 때의 최소 좌표 이동 시간</ko>
 * @param {Number} [deceleration=0.0006] Deceleration of the animation where acceleration is manually enabled by user. A higher value indicates shorter running time. <ko>사용자의 동작으로 가속도가 적용된 애니메이션의 감속도. 값이 높을수록 애니메이션 실행 시간이 짧아진다</ko>
 * @param {Boolean} [interruptable=true] Indicates whether an animation is interruptible.
 * - true: It can be paused or stopped by user action or the API.
 * - false: It cannot be paused or stopped by user action or the API while it is running.
 * <ko>진행 중인 애니메이션 중지 가능 여부.
 * - true: 사용자의 동작이나 API로 애니메이션을 중지할 수 있다.
 * - false: 애니메이션이 진행 중일 때는 사용자의 동작이나 API가 적용되지 않는다</ko>
 * @param {Number} [round=null] Rounding unit. For example, 0.1 rounds to 0.1 decimal point(6.1234 => 6.1), 5 rounds to 5 (93 => 95)
 * [Details](https://github.com/naver/egjs-axes/wiki/round-option)<ko>반올림 단위. 예를 들어 0.1 은 소숫점 0.1 까지 반올림(6.1234 => 6.1), 5 는 5 단위로 반올림(93 => 95).
 * [상세내용](https://github.com/naver/egjs-axes/wiki/round-option)</ko>
 * @param {Boolean} [nested=false] Whether the event propagates to other instances when the coordinates reach the end of the movable area <ko>좌표가 이동 가능한 영역의 끝까지 도달했을 때 다른 인스턴스들로의 이벤트 전파 여부</ko>
 **/
/**
 * A module used to change the information of user action entered by various input devices such as touch screen or mouse into the logical virtual coordinates. You can easily create a UI that responds to user actions.
 * @ko 터치 입력 장치나 마우스와 같은 다양한 입력 장치를 통해 전달 받은 사용자의 동작을 논리적인 가상 좌표로 변경하는 모듈이다. 사용자 동작에 반응하는 UI를 손쉽게 만들수 있다.
 * @extends eg.Component
 *
 * @param {Object.<string, AxisOption>} axis Axis information managed by eg.Axes. The key of the axis specifies the name to use as the logical virtual coordinate system.  <ko>eg.Axes가 관리하는 축 정보. 축의 키는 논리적인 가상 좌표계로 사용할 이름을 지정한다.</ko>
 * @param {AxesOption} [options={}] The option object of the eg.Axes module<ko>eg.Axes 모듈의 옵션 객체</ko>
 * @param {Object.<string, number>} [startPos={}] The coordinates to be moved when creating an instance. It is applied with higher priority than startPos of axisOption.<ko>인스턴스 생성시 이동할 좌표, axisOption의 startPos보다 높은 우선순위로 적용된다.</ko>
 *
 * @support {"ie": "10+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.3+ (except 3.x)"}
 * @example
 * ```js
 * // 1. Initialize eg.Axes
 * const axes = new eg.Axes({
 *  something1: {
 *    range: [0, 150],
 *    bounce: 50
 *  },
 *  something2: {
 *    range: [0, 200],
 *    bounce: 100
 *  },
 *  somethingN: {
 *    range: [1, 10],
 *  }
 * }, {
 *  deceleration : 0.0024
 * });
 *
 * // 2. attach event handler
 * axes.on({
 *  "hold" : function(evt) {
 *  },
 *  "release" : function(evt) {
 *  },
 *  "animationStart" : function(evt) {
 *  },
 *  "animationEnd" : function(evt) {
 *  },
 *  "change" : function(evt) {
 *  }
 * });
 *
 * // 3. Initialize inputTypes
 * const panInputArea = new eg.Axes.PanInput("#area", {
 *  scale: [0.5, 1]
 * });
 * const panInputHmove = new eg.Axes.PanInput("#hmove");
 * const panInputVmove = new eg.Axes.PanInput("#vmove");
 * const pinchInputArea = new eg.Axes.PinchInput("#area", {
 *  scale: 1.5
 * });
 *
 * // 4. Connect eg.Axes and InputTypes
 * // [PanInput] When the mouse or touchscreen is down and moved.
 * // Connect the 'something2' axis to the mouse or touchscreen x position and
 * // connect the 'somethingN' axis to the mouse or touchscreen y position.
 * axes.connect(["something2", "somethingN"], panInputArea); // or axes.connect("something2 somethingN", panInputArea);
 *
 * // Connect only one 'something1' axis to the mouse or touchscreen x position.
 * axes.connect(["something1"], panInputHmove); // or axes.connect("something1", panInputHmove);
 *
 * // Connect only one 'something2' axis to the mouse or touchscreen y position.
 * axes.connect(["", "something2"], panInputVmove); // or axes.connect(" something2", panInputVmove);
 *
 * // [PinchInput] Connect 'something2' axis when two pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * axes.connect("something2", pinchInputArea);
 * ```
 */
var Axes = /*#__PURE__*/function (_super) {
  axes_esm_extends(Axes, _super);
  /**
   *
   */
  function Axes(axis, options, startPos) {
    if (axis === void 0) {
      axis = {};
    }
    if (options === void 0) {
      options = {};
    }
    if (startPos === void 0) {
      startPos = {};
    }
    var _this = _super.call(this) || this;
    _this.axis = axis;
    _this._inputs = [];
    _this.options = __assign({
      easing: function (x) {
        return 1 - Math.pow(1 - x, 3);
      },
      interruptable: true,
      maximumDuration: Infinity,
      minimumDuration: 0,
      deceleration: 0.0006,
      round: null,
      nested: false
    }, options);
    Object.keys(startPos).forEach(function (key) {
      _this.axis[key].startPos = startPos[key];
    });
    _this.interruptManager = new InterruptManager(_this.options);
    _this.axisManager = new AxisManager(_this.axis);
    _this.eventManager = new EventManager(_this);
    _this.animationManager = new EasingManager(_this);
    _this.inputObserver = new InputObserver(_this);
    _this.eventManager.setAnimationManager(_this.animationManager);
    _this.eventManager.triggerChange(_this.axisManager.get());
    return _this;
  }
  var __proto = Axes.prototype;
  Object.defineProperty(__proto, "holding", {
    /**
     * @name Axes#holding
     * @desc Returns true if at least one input is in progress.
     * @ko 입력이 하나 이상 진행 중인지 여부를 반환한다.
     *
     * @readonly
     * @type {boolean}
     * @example
     * ```js
     * const axes = new eg.Axes({
     *  x: {
     *    range: [0, 100],
     *  },
     * });
     *
     * axes.holding
     * ```
     */
    get: function () {
      return this.eventManager.holdingCount > 0;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Connect the axis of eg.Axes to the inputType.
   * @ko eg.Axes의 축과 inputType을 연결한다
   * @param {(String[]|String)} axes The name of the axis to associate with inputType <ko>inputType과 연결할 축의 이름</ko>
   * @param {Object} inputType The inputType instance to associate with the axis of eg.Axes <ko>eg.Axes의 축과 연결할 inputType 인스턴스</ko>
   * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   *   "xOther": {
   *      range: [-100, 100]
   *   }
   * });
   *
   * axes.connect("x", new eg.Axes.PanInput("#area1"))
   *    .connect("x xOther", new eg.Axes.PanInput("#area2"))
   *    .connect(" xOther", new eg.Axes.PanInput("#area3"))
   *    .connect(["x"], new eg.Axes.PanInput("#area4"))
   *    .connect(["xOther", "x"], new eg.Axes.PanInput("#area5"))
   *    .connect(["", "xOther"], new eg.Axes.PanInput("#area6"));
   * ```
   */
  __proto.connect = function (axes, inputType) {
    var mapped;
    if (typeof axes === "string") {
      mapped = axes.split(" ");
    } else {
      mapped = axes.concat();
    }
    // check same instance
    if (~this._inputs.indexOf(inputType)) {
      this.disconnect(inputType);
    }
    inputType.mapAxes(mapped);
    inputType.connect(this.inputObserver);
    this._inputs.push(inputType);
    return this;
  };
  /**
   * Disconnect the axis of eg.Axes from the inputType.
   * @ko eg.Axes의 축과 inputType의 연결을 끊는다.
   * @param {Object} [inputType] An inputType instance associated with the axis of eg.Axes <ko>eg.Axes의 축과 연결한 inputType 인스턴스</ko>
   * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   *   "xOther": {
   *      range: [-100, 100]
   *   }
   * });
   *
   * const input1 = new eg.Axes.PanInput("#area1");
   * const input2 = new eg.Axes.PanInput("#area2");
   * const input3 = new eg.Axes.PanInput("#area3");
   *
   * axes.connect("x", input1);
   *    .connect("x xOther", input2)
   *    .connect(["xOther", "x"], input3);
   *
   * axes.disconnect(input1); // disconnects input1
   * axes.disconnect(); // disconnects all of them
   * ```
   */
  __proto.disconnect = function (inputType) {
    if (inputType) {
      var index = this._inputs.indexOf(inputType);
      if (index >= 0) {
        this._inputs[index].disconnect();
        this._inputs.splice(index, 1);
      }
    } else {
      this._inputs.forEach(function (v) {
        return v.disconnect();
      });
      this._inputs = [];
    }
    return this;
  };
  /**
   * Returns the current position of the coordinates.
   * @ko 좌표의 현재 위치를 반환한다
   * @param {Object} [axes] The names of the axis <ko>축 이름들</ko>
   * @return {Object.<string, number>} Axis coordinate information <ko>축 좌표 정보</ko>
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   *   "xOther": {
   *      range: [-100, 100]
   *   },
   *    "zoom": {
   *      range: [50, 30]
   *   }
   * });
   *
   * axes.get(); // {"x": 0, "xOther": -100, "zoom": 50}
   * axes.get(["x", "zoom"]); // {"x": 0, "zoom": 50}
   * ```
   */
  __proto.get = function (axes) {
    return this.axisManager.get(axes);
  };
  /**
   * Moves an axis to specific coordinates.
   * @ko 좌표를 이동한다.
   * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
   * @param {Number} [duration=0] Duration of the animation (unit: ms) <ko>애니메이션 진행 시간(단위: ms)</ko>
   * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   *   "xOther": {
   *      range: [-100, 100]
   *   },
   *    "zoom": {
   *      range: [50, 30]
   *   }
   * });
   *
   * axes.setTo({"x": 30, "zoom": 60});
   * axes.get(); // {"x": 30, "xOther": -100, "zoom": 60}
   *
   * axes.setTo({"x": 100, "xOther": 60}, 1000); // animatation
   *
   * // after 1000 ms
   * axes.get(); // {"x": 100, "xOther": 60, "zoom": 60}
   * ```
   */
  __proto.setTo = function (pos, duration) {
    if (duration === void 0) {
      duration = 0;
    }
    this.animationManager.setTo(pos, duration);
    return this;
  };
  /**
   * Moves an axis from the current coordinates to specific coordinates.
   * @ko 현재 좌표를 기준으로 좌표를 이동한다.
   * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
   * @param {Number} [duration=0] Duration of the animation (unit: ms) <ko>애니메이션 진행 시간(단위: ms)</ko>
   * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   *   "xOther": {
   *      range: [-100, 100]
   *   },
   *    "zoom": {
   *      range: [50, 30]
   *   }
   * });
   *
   * axes.setBy({"x": 30, "zoom": 10});
   * axes.get(); // {"x": 30, "xOther": -100, "zoom": 60}
   *
   * axes.setBy({"x": 70, "xOther": 60}, 1000); // animatation
   *
   * // after 1000 ms
   * axes.get(); // {"x": 100, "xOther": -40, "zoom": 60}
   * ```
   */
  __proto.setBy = function (pos, duration) {
    if (duration === void 0) {
      duration = 0;
    }
    this.animationManager.setBy(pos, duration);
    return this;
  };
  /**
   * Change the options of Axes instance.
   * @ko 인스턴스의 옵션을 변경한다.
   * @param {AxesOption} options Axes options to change <ko>변경할 옵션 목록</ko>
   * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   * }, {
   *   round: 10,
   * });
   *
   * axes.setTo({"x": 48});
   * axes.get(); // {"x": 50}
   *
   * axes.setOptions({
   *   round: 1,
   * });
   *
   * axes.setTo({"x": 48});
   * axes.get(); // {"x": 48}
   * ```
   */
  __proto.setOptions = function (options) {
    this.options = __assign(__assign({}, this.options), options);
    this.animationManager.setOptions(options);
    return this;
  };
  /**
   * Change the information of an existing axis.
   * @ko 존재하는 축의 정보를 변경한다.
   * @param {Object.<string, AxisOption>} axis Axis options to change <ko>변경할 축의 정보</ko>
   * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   * });
   *
   * axes.setTo({"x": 150});
   * axes.get(); // {"x": 100}
   *
   * axes.setAxis({
   *   "x": {
   *      range: [0, 200]
   *   },
   * });
   *
   * axes.setTo({"x": 150});
   * axes.get(); // {"x": 150}
   * ```
   */
  __proto.setAxis = function (axis) {
    this.axisManager.setAxis(axis);
    return this;
  };
  /**
   * Stop an animation in progress.
   * @ko 재생 중인 애니메이션을 정지한다.
   * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   * });
   *
   * axes.setTo({"x": 10}, 1000); // start animatation
   *
   * // after 500 ms
   * axes.stopAnimation(); // stop animation during movement.
   * ```
   */
  __proto.stopAnimation = function () {
    this.animationManager.stopAnimation();
    this.animationManager.finish(false);
    return this;
  };
  /**
   * Change the destination of an animation in progress.
   * @ko 재생 중인 애니메이션의 목적지와 진행 시간을 변경한다.
   * @param {UpdateAnimationOption} pos The coordinate to move to <ko>이동할 좌표</ko>
   * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 200]
   *   },
   *   "y": {
   *      range: [0, 200]
   *   }
   * });
   *
   * axes.setTo({"x": 50, "y": 50}, 1000); // trigger animation by setTo
   *
   * // after 500 ms
   * axes.updateAnimation({destPos: {"x": 100, "y": 100}}); // animation will end after 500 ms, at {"x": 100, "y": 100}
   *
   * // after 500 ms
   * axes.setTo({"x": 50, "y": 50}, 1000); // trigger animation by setTo
   *
   * // after 700 ms
   * axes.updateAnimation({destPos: {"x": 100, "y": 100}, duration: 1500, restart: true}); // this works same as axes.setTo({"x": 100, "y": 100}, 800) since restart is true.
   * ```
   */
  __proto.updateAnimation = function (options) {
    this.animationManager.updateAnimation(options);
    return this;
  };
  /**
   * Returns whether there is a coordinate in the bounce area of ​​the target axis.
   * @ko 대상 축 중 bounce영역에 좌표가 존재하는지를 반환한다
   * @param {Object} [axes] The names of the axis <ko>축 이름들</ko>
   * @return {Boolen} Whether the bounce area exists. <ko>bounce 영역 존재 여부</ko>
   * @example
   * ```js
   * const axes = new eg.Axes({
   *   "x": {
   *      range: [0, 100]
   *   },
   *   "xOther": {
   *      range: [-100, 100]
   *   },
   *    "zoom": {
   *      range: [50, 30]
   *   }
   * });
   *
   * axes.isBounceArea(["x"]);
   * axes.isBounceArea(["x", "zoom"]);
   * axes.isBounceArea();
   * ```
   */
  __proto.isBounceArea = function (axes) {
    return this.axisManager.isOutside(axes);
  };
  /**
   * Destroys properties, and events used in a module and disconnect all connections to inputTypes.
   * @ko 모듈에 사용한 속성, 이벤트를 해제한다. 모든 inputType과의 연결을 끊는다.
   */
  __proto.destroy = function () {
    this.disconnect();
    this.eventManager.destroy();
  };
  /**
   * @name VERSION
   * @desc Version info string
   * @ko 버전정보 문자열
   *
   * @constant
   * @type {String}
   * @example
   * ```js
   * eg.Axes.VERSION;  // ex) 3.3.3
   * ```
   */
  Axes.VERSION = "3.9.1";
  /* eslint-enable */
  /**
   * @name TRANSFORM
   * @desc Returns the transform attribute with CSS vendor prefixes.
   * @ko CSS vendor prefixes를 붙인 transform 속성을 반환한다.
   *
   * @constant
   * @type {String}
   * @example
   * ```js
   * eg.Axes.TRANSFORM; // "transform" or "webkitTransform"
   * ```
   */
  Axes.TRANSFORM = TRANSFORM;
  /**
   * @name DIRECTION_NONE
   * @constant
   * @type {Number}
   */
  Axes.DIRECTION_NONE = DIRECTION_NONE;
  /**
   * @name DIRECTION_LEFT
   * @constant
   * @type {Number}
   */
  Axes.DIRECTION_LEFT = DIRECTION_LEFT;
  /**
   * @name DIRECTION_RIGHT
   * @constant
   * @type {Number}
   */
  Axes.DIRECTION_RIGHT = DIRECTION_RIGHT;
  /**
   * @name DIRECTION_UP
   * @constant
   * @type {Number}
   */
  Axes.DIRECTION_UP = DIRECTION_UP;
  /**
   * @name DIRECTION_DOWN
   * @constant
   * @type {Number}
   */
  Axes.DIRECTION_DOWN = DIRECTION_DOWN;
  /**
   * @name DIRECTION_HORIZONTAL
   * @constant
   * @type {Number}
   */
  Axes.DIRECTION_HORIZONTAL = DIRECTION_HORIZONTAL;
  /**
   * @name DIRECTION_VERTICAL
   * @constant
   * @type {Number}
   */
  Axes.DIRECTION_VERTICAL = DIRECTION_VERTICAL;
  /**
   * @name DIRECTION_ALL
   * @constant
   * @type {Number}
   */
  Axes.DIRECTION_ALL = DIRECTION_ALL;
  __decorate([Computed], Axes.prototype, "holding", null);
  Axes = __decorate([ReactiveSubscribe], Axes);
  return Axes;
}(component_esm/* default */.A);

/*
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
// get user's direction
var getDirectionByAngle = function (angle, thresholdAngle) {
  if (thresholdAngle < 0 || thresholdAngle > 90) {
    return DIRECTION_NONE;
  }
  var toAngle = Math.abs(angle);
  return toAngle > thresholdAngle && toAngle < 180 - thresholdAngle ? DIRECTION_VERTICAL : DIRECTION_HORIZONTAL;
};
/**
 * @typedef {Object} PanInputOption The option object of the eg.Axes.PanInput module.
 * @ko eg.Axes.PanInput 모듈의 옵션 객체
 * @param {String[]} [inputType=["touch", "mouse", "pointer"]] Types of input devices
 * - touch: Touch screen
 * - mouse: Mouse
 * - pointer: Mouse and touch <ko>입력 장치 종류
 * - touch: 터치 입력 장치
 * - mouse: 마우스
 * - pointer: 마우스 및 터치</ko>
 * @param {String[]} [inputKey=["any"]] List of key combinations to allow input
 * - any: any key
 * - shift: shift key
 * - ctrl: ctrl key and pinch gesture on the trackpad
 * - alt: alt key
 * - meta: meta key
 * - none: none of these keys are pressed <ko>입력을 허용할 키 조합 목록
 * - any: 아무 키
 * - shift: shift 키
 * - ctrl: ctrl 키 및 트랙패드의 pinch 제스쳐
 * - alt: alt 키
 * - meta: meta 키
 * - none: 아무 키도 눌리지 않은 상태 </ko>
 * @param {String[]} [inputButton=["left"]] List of buttons to allow input
 * - left: Left mouse button and normal touch
 * - middle: Mouse wheel press
 * - right: Right mouse button <ko>입력을 허용할 버튼 목록
 * - left: 마우스 왼쪽 버튼
 * - middle: 마우스 휠 눌림
 * - right: 마우스 오른쪽 버튼 </ko>
 * @param {Number[]} [scale] Coordinate scale that a user can move<ko>사용자의 동작으로 이동하는 좌표의 배율</ko>
 * @param {Number} [scale[0]=1] horizontal axis scale <ko>수평축 배율</ko>
 * @param {Number} [scale[1]=1] vertical axis scale <ko>수직축 배율</ko>
 * @param {Number} [thresholdAngle=45] The threshold value that determines whether user action is horizontal or vertical (0~90) <ko>사용자의 동작이 가로 방향인지 세로 방향인지 판단하는 기준 각도(0~90)</ko>
 * @param {Number} [threshold=0] Minimal pan distance required before recognizing <ko>사용자의 Pan 동작을 인식하기 위해산 최소한의 거리</ko>
 * @param {Boolean} [preventClickOnDrag=false] Whether to cancel the {@link https://developer.mozilla.org/en/docs/Web/API/Element/click_event click} event when the user finishes dragging more than 1 pixel <ko>사용자가 1픽셀 이상 드래그를 마쳤을 때 {@link https://developer.mozilla.org/ko/docs/Web/API/Element/click_event click} 이벤트 취소 여부</ko>
 * @param {Boolean} [preventDefaultOnDrag=false] Whether to use the {@link https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault preventDefault} when the user starts dragging <ko>사용자가 드래그를 시작할 때 {@link https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault preventDefault} 실행 여부</ko>
 * @param {Number} [iOSEdgeSwipeThreshold=30] Area (px) that can go to the next page when swiping the right edge in iOS safari <ko>iOS Safari에서 오른쪽 엣지를 스와이프 하는 경우 다음 페이지로 넘어갈 수 있는 영역(px)</ko>
 * @param {String} [touchAction=null] Value that overrides the element's "touch-action" css property. If set to null, it is automatically set to prevent scrolling in the direction of the connected axis. <ko>엘리먼트의 "touch-action" CSS 속성을 덮어쓰는 값. 만약 null로 설정된 경우, 연결된 축 방향으로의 스크롤을 방지하게끔 자동으로 설정된다.</ko>
 **/
/**
 * A module that passes the amount of change to eg.Axes when the mouse or touchscreen is down and moved. use less than two axes.
 * @ko 마우스나 터치 스크린을 누르고 움직일때의 변화량을 eg.Axes에 전달하는 모듈. 두개 이하의 축을 사용한다.
 *
 * @example
 * ```js
 * const pan = new eg.Axes.PanInput("#area", {
 *     inputType: ["touch"],
 *     scale: [1, 1.3],
 * });
 *
 * // Connect the 'something2' axis to the mouse or touchscreen x position when the mouse or touchscreen is down and moved.
 * // Connect the 'somethingN' axis to the mouse or touchscreen y position when the mouse or touchscreen is down and moved.
 * axes.connect(["something2", "somethingN"], pan); // or axes.connect("something2 somethingN", pan);
 *
 * // Connect only one 'something1' axis to the mouse or touchscreen x position when the mouse or touchscreen is down and moved.
 * axes.connect(["something1"], pan); // or axes.connect("something1", pan);
 *
 * // Connect only one 'something2' axis to the mouse or touchscreen y position when the mouse or touchscreen is down and moved.
 * axes.connect(["", "something2"], pan); // or axes.connect(" something2", pan);
 * ```
 * @param {String|HTMLElement|Ref<HTMLElement>|jQuery} element An element to use the eg.Axes.PanInput module <ko>eg.Axes.PanInput 모듈을 사용할 엘리먼트</ko>
 * @param {PanInputOption} [options={}] The option object of the eg.Axes.PanInput module<ko>eg.Axes.PanInput 모듈의 옵션 객체</ko>
 */
var PanInput = /*#__PURE__*/function () {
  /**
   *
   */
  function PanInput(el, options) {
    var _this = this;
    this.axes = [];
    this.element = null;
    this._enabled = false;
    this._activeEvent = null;
    this._atRightEdge = false;
    this._rightEdgeTimer = 0;
    this._dragged = false;
    this._isOverThreshold = false;
    this._preventClickWhenDragged = function (e) {
      if (_this._dragged) {
        e.preventDefault();
        e.stopPropagation();
      }
      _this._dragged = false;
    };
    this._voidFunction = function () {};
    this.element = $(el);
    this.options = __assign({
      inputType: ["touch", "mouse", "pointer"],
      inputKey: [ANY],
      inputButton: [MOUSE_LEFT],
      scale: [1, 1],
      thresholdAngle: 45,
      threshold: 0,
      preventClickOnDrag: false,
      preventDefaultOnDrag: false,
      iOSEdgeSwipeThreshold: IOS_EDGE_THRESHOLD,
      releaseOnScroll: false,
      touchAction: null
    }, options);
    this._onPanstart = this._onPanstart.bind(this);
    this._onPanmove = this._onPanmove.bind(this);
    this._onPanend = this._onPanend.bind(this);
  }
  var __proto = PanInput.prototype;
  __proto.mapAxes = function (axes) {
    this._direction = getDirection(!!axes[0], !!axes[1]);
    this.axes = axes;
  };
  __proto.connect = function (observer) {
    if (this._activeEvent) {
      this._detachElementEvent();
      this._detachWindowEvent(this._activeEvent);
    }
    this._attachElementEvent(observer);
    return this;
  };
  __proto.disconnect = function () {
    this._detachElementEvent();
    this._detachWindowEvent(this._activeEvent);
    this._direction = DIRECTION_NONE;
    return this;
  };
  /**
   * Destroys elements, properties, and events used in a module.
   * @ko 모듈에 사용한 엘리먼트와 속성, 이벤트를 해제한다.
   */
  __proto.destroy = function () {
    this.disconnect();
    this.element = null;
  };
  /**
   * Enables input devices
   * @ko 입력 장치를 사용할 수 있게 한다
   * @return {PanInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   */
  __proto.enable = function () {
    if (!this._enabled) {
      this._enabled = true;
      this._originalCssProps = setCssProps(this.element, this.options, this._direction);
    }
    return this;
  };
  /**
   * Disables input devices
   * @ko 입력 장치를 사용할 수 없게 한다.
   * @return {PanInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   */
  __proto.disable = function () {
    if (this._enabled) {
      this._enabled = false;
      if (!isCssPropsFromAxes(this._originalCssProps)) {
        revertCssProps(this.element, this._originalCssProps);
      }
    }
    return this;
  };
  /**
   * Returns whether to use an input device
   * @ko 입력 장치 사용 여부를 반환한다.
   * @return {Boolean} Whether to use an input device <ko>입력장치 사용여부</ko>
   */
  __proto.isEnabled = function () {
    return this._enabled;
  };
  /**
   * Releases current user input.
   * @ko 사용자의 입력을 강제로 중단시킨다.
   * @return {PanInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   */
  __proto.release = function () {
    var activeEvent = this._activeEvent;
    var prevEvent = activeEvent.prevEvent;
    activeEvent.onRelease();
    this._observer.release(this, prevEvent, [0, 0]);
    this._detachWindowEvent(activeEvent);
    return this;
  };
  __proto._onPanstart = function (event) {
    var _a = this.options,
      inputKey = _a.inputKey,
      inputButton = _a.inputButton,
      preventDefaultOnDrag = _a.preventDefaultOnDrag;
    var activeEvent = this._activeEvent;
    var panEvent = activeEvent.onEventStart(event, inputKey, inputButton);
    if (!panEvent || !this._enabled || activeEvent.getTouches(event, inputButton) > 1) {
      return;
    }
    if (panEvent.srcEvent.cancelable !== false) {
      var edgeThreshold = this.options.iOSEdgeSwipeThreshold;
      this._dragged = false;
      this._isOverThreshold = false;
      this._observer.hold(this, panEvent);
      this._atRightEdge = IS_IOS_SAFARI && panEvent.center.x > window.innerWidth - edgeThreshold;
      this._attachWindowEvent(activeEvent);
      preventDefaultOnDrag && panEvent.srcEvent.type !== "touchstart" && panEvent.srcEvent.preventDefault();
      activeEvent.prevEvent = panEvent;
    }
  };
  __proto._onPanmove = function (event) {
    var _this = this;
    var _a = this.options,
      iOSEdgeSwipeThreshold = _a.iOSEdgeSwipeThreshold,
      preventClickOnDrag = _a.preventClickOnDrag,
      releaseOnScroll = _a.releaseOnScroll,
      inputKey = _a.inputKey,
      inputButton = _a.inputButton,
      threshold = _a.threshold,
      thresholdAngle = _a.thresholdAngle;
    var activeEvent = this._activeEvent;
    var panEvent = activeEvent.onEventMove(event, inputKey, inputButton);
    var touches = activeEvent.getTouches(event, inputButton);
    if (touches === 0 || releaseOnScroll && panEvent && !panEvent.srcEvent.cancelable) {
      this._onPanend(event);
      return;
    }
    if (!panEvent || !this._enabled || touches > 1) {
      return;
    }
    var userDirection = getDirectionByAngle(panEvent.angle, thresholdAngle);
    var useHorizontal = useDirection(DIRECTION_HORIZONTAL, this._direction, userDirection);
    var useVertical = useDirection(DIRECTION_VERTICAL, this._direction, userDirection);
    if (activeEvent.prevEvent && IS_IOS_SAFARI) {
      var swipeLeftToRight = panEvent.center.x < 0;
      if (swipeLeftToRight) {
        // iOS swipe left => right
        this.release();
        return;
      } else if (this._atRightEdge) {
        clearTimeout(this._rightEdgeTimer);
        // - is right to left
        var swipeRightToLeft = panEvent.deltaX < -iOSEdgeSwipeThreshold;
        if (swipeRightToLeft) {
          this._atRightEdge = false;
        } else {
          // iOS swipe right => left
          this._rightEdgeTimer = window.setTimeout(function () {
            return _this.release();
          }, 100);
        }
      }
    }
    var distance = this._getDistance([panEvent.deltaX, panEvent.deltaY], [useHorizontal, useVertical]);
    var offset = this._getOffset([panEvent.offsetX, panEvent.offsetY], [useHorizontal, useVertical]);
    var prevent = offset.some(function (v) {
      return v !== 0;
    });
    if (prevent) {
      if (panEvent.srcEvent.cancelable !== false) {
        panEvent.srcEvent.preventDefault();
      }
      panEvent.srcEvent.stopPropagation();
    }
    panEvent.preventSystemEvent = prevent;
    if (prevent && (this._isOverThreshold || distance >= threshold)) {
      this._dragged = preventClickOnDrag;
      this._isOverThreshold = true;
      this._observer.change(this, panEvent, toAxis(this.axes, offset));
    }
    activeEvent.prevEvent = panEvent;
  };
  __proto._onPanend = function (event) {
    var inputButton = this.options.inputButton;
    var activeEvent = this._activeEvent;
    activeEvent.onEventEnd(event);
    if (!this._enabled || activeEvent.getTouches(event, inputButton) !== 0) {
      return;
    }
    this._detachWindowEvent(activeEvent);
    clearTimeout(this._rightEdgeTimer);
    var prevEvent = activeEvent.prevEvent;
    var velocity = this._isOverThreshold ? this._getOffset([Math.abs(prevEvent.velocityX) * (prevEvent.offsetX < 0 ? -1 : 1), Math.abs(prevEvent.velocityY) * (prevEvent.offsetY < 0 ? -1 : 1)], [useDirection(DIRECTION_HORIZONTAL, this._direction), useDirection(DIRECTION_VERTICAL, this._direction)]) : [0, 0];
    activeEvent.onRelease();
    this._observer.release(this, prevEvent, velocity);
  };
  __proto._attachWindowEvent = function (activeEvent) {
    var _this = this;
    activeEvent === null || activeEvent === void 0 ? void 0 : activeEvent.move.forEach(function (event) {
      window.addEventListener(event, _this._onPanmove, getAddEventOptions(event));
    });
    activeEvent === null || activeEvent === void 0 ? void 0 : activeEvent.end.forEach(function (event) {
      window.addEventListener(event, _this._onPanend, getAddEventOptions(event));
    });
  };
  __proto._detachWindowEvent = function (activeEvent) {
    var _this = this;
    activeEvent === null || activeEvent === void 0 ? void 0 : activeEvent.move.forEach(function (event) {
      window.removeEventListener(event, _this._onPanmove);
    });
    activeEvent === null || activeEvent === void 0 ? void 0 : activeEvent.end.forEach(function (event) {
      window.removeEventListener(event, _this._onPanend);
    });
  };
  __proto._getOffset = function (properties, direction) {
    var scale = this.options.scale;
    return [direction[0] ? properties[0] * scale[0] : 0, direction[1] ? properties[1] * scale[1] : 0];
  };
  __proto._getDistance = function (delta, direction) {
    return Math.sqrt(Number(direction[0]) * Math.pow(delta[0], 2) + Number(direction[1]) * Math.pow(delta[1], 2));
  };
  __proto._attachElementEvent = function (observer) {
    var _this = this;
    var activeEvent = convertInputType(this.options.inputType);
    var element = this.element;
    if (!activeEvent) {
      return;
    }
    if (!element) {
      throw new Error("Element to connect input does not exist.");
    }
    this._observer = observer;
    this.enable();
    this._activeEvent = activeEvent;
    element.addEventListener("click", this._preventClickWhenDragged, true);
    activeEvent.start.forEach(function (event) {
      element.addEventListener(event, _this._onPanstart);
    });
    // adding event listener to element prevents invalid behavior in iOS Safari
    activeEvent.move.forEach(function (event) {
      element.addEventListener(event, _this._voidFunction);
    });
  };
  __proto._detachElementEvent = function () {
    var _this = this;
    var activeEvent = this._activeEvent;
    var element = this.element;
    if (element) {
      element.removeEventListener("click", this._preventClickWhenDragged, true);
      activeEvent === null || activeEvent === void 0 ? void 0 : activeEvent.start.forEach(function (event) {
        element.removeEventListener(event, _this._onPanstart);
      });
      activeEvent === null || activeEvent === void 0 ? void 0 : activeEvent.move.forEach(function (event) {
        element.removeEventListener(event, _this._voidFunction);
      });
    }
    this.disable();
    this._observer = null;
  };
  return PanInput;
}();

/**
 * A module that passes the angle moved by touch to Axes and uses one axis of rotation.
 * [Details](https://github.com/naver/egjs-axes/wiki/RotatePanInput)
 * @ko 터치에 의해 움직인 각도를 Axes 에 전달하며 1개의 회전축만 사용한다.
 * [상세내용](https://github.com/naver/egjs-axes/wiki/RotatePanInput-%7C-%ED%95%9C%EA%B5%AD%EC%96%B4)
 *
 * @example
 * ```js
 * const input = new eg.Axes.RotatePanInput("#area");
 *
 * var axes = new eg.Axes({
 *	// property name('angle') could be anything you want (eg. x, y, z...)
 * 	angle: {
 * 		range: [-180, 180] // from -180deg to 180deg
 * 	}
 * });
 *
 * axes.connect("angle", input)
 * ```
 * @param {HTMLElement|String|jQuery} element An element to use the eg.Axes.RotatePanInput module <ko>eg.Axes.RotatePanInput 모듈을 사용할 엘리먼트</ko>
 * @param {PanInputOption} [options] The option object of the eg.Axes.PanInput module<ko>eg.Axes.PanInput 모듈의 옵션 객체</ko>
 * @extends PanInput
 */
var RotatePanInput = /*#__PURE__*/(/* unused pure expression or super */ null && (function (_super) {
  axes_esm_extends(RotatePanInput, _super);
  /**
   *
   */
  function RotatePanInput(el, options) {
    var _this = _super.call(this, el, options) || this;
    _this._prevQuadrant = null;
    _this._lastDiff = 0;
    return _this;
  }
  var __proto = RotatePanInput.prototype;
  __proto.mapAxes = function (axes) {
    this._direction = Axes.DIRECTION_ALL;
    this.axes = axes;
  };
  __proto._onPanstart = function (event) {
    var _a = this.options,
      inputKey = _a.inputKey,
      inputButton = _a.inputButton;
    var activeEvent = this._activeEvent;
    var panEvent = activeEvent.onEventStart(event, inputKey, inputButton);
    if (!panEvent || !this.isEnabled()) {
      return;
    }
    var rect = this.element.getBoundingClientRect();
    this._observer.hold(this, panEvent);
    this._attachWindowEvent(activeEvent);
    // TODO: how to do if element is ellipse not circle.
    this._coefficientForDistanceToAngle = 360 / (rect.width * Math.PI); // from 2*pi*r * x / 360
    // TODO: provide a way to set origin like https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
    this._rotateOrigin = [rect.left + (rect.width - 1) / 2, rect.top + (rect.height - 1) / 2];
    // init angle.
    this._prevAngle = null;
    this._triggerChange(panEvent);
    activeEvent.prevEvent = panEvent;
  };
  __proto._onPanmove = function (event) {
    var _a = this.options,
      inputKey = _a.inputKey,
      inputButton = _a.inputButton;
    var activeEvent = this._activeEvent;
    var panEvent = activeEvent.onEventMove(event, inputKey, inputButton);
    if (!panEvent || !this.isEnabled()) {
      return;
    }
    if (panEvent.srcEvent.cancelable !== false) {
      panEvent.srcEvent.preventDefault();
    }
    panEvent.srcEvent.stopPropagation();
    this._triggerChange(panEvent);
    activeEvent.prevEvent = panEvent;
  };
  __proto._onPanend = function (event) {
    var activeEvent = this._activeEvent;
    activeEvent.onEventEnd(event);
    if (!this.isEnabled()) {
      return;
    }
    var prevEvent = activeEvent.prevEvent;
    this._triggerChange(prevEvent);
    var vx = prevEvent.velocityX;
    var vy = prevEvent.velocityY;
    var velocity = Math.sqrt(vx * vx + vy * vy) * (this._lastDiff > 0 ? -1 : 1); // clockwise
    activeEvent.onRelease();
    this._observer.release(this, prevEvent, [velocity * this._coefficientForDistanceToAngle]);
    this._detachWindowEvent(activeEvent);
  };
  __proto._triggerChange = function (event) {
    var _a = this._getPosFromOrigin(event.center.x, event.center.y),
      x = _a.x,
      y = _a.y;
    var angle = getAngle(x, y);
    var positiveAngle = angle < 0 ? 360 + angle : angle;
    var quadrant = this._getQuadrant(event.center.x, event.center.y);
    var diff = this._getDifference(this._prevAngle, positiveAngle, this._prevQuadrant, quadrant);
    this._prevAngle = positiveAngle;
    this._prevQuadrant = quadrant;
    if (diff === 0) {
      return;
    }
    this._lastDiff = diff;
    this._observer.change(this, event, toAxis(this.axes, [-diff])); // minus for clockwise
  };
  __proto._getDifference = function (prevAngle, angle, prevQuadrant, quadrant) {
    var diff;
    if (prevAngle === null) {
      diff = 0;
    } else if (prevQuadrant === 1 && quadrant === 4) {
      diff = -prevAngle - (360 - angle);
    } else if (prevQuadrant === 4 && quadrant === 1) {
      diff = 360 - prevAngle + angle;
    } else {
      diff = angle - prevAngle;
    }
    return diff;
  };
  __proto._getPosFromOrigin = function (posX, posY) {
    return {
      x: posX - this._rotateOrigin[0],
      y: this._rotateOrigin[1] - posY
    };
  };
  __proto._getQuadrant = function (posX, posY) {
    /**
     * Quadrant
     *       y(+)
     *       |
     *   2   |    1
     * --------------->x(+)
     *   3   |    4
     *       |
     */
    var _a = this._getPosFromOrigin(posX, posY),
      x = _a.x,
      y = _a.y;
    var q = 0;
    if (x >= 0 && y >= 0) {
      q = 1;
    } else if (x < 0 && y >= 0) {
      q = 2;
    } else if (x < 0 && y < 0) {
      q = 3;
    } else if (x >= 0 && y < 0) {
      q = 4;
    }
    return q;
  };
  return RotatePanInput;
}(PanInput)));

/**
 * @typedef {Object} PinchInputOption The option object of the eg.Axes.PinchInput module
 * @ko eg.Axes.PinchInput 모듈의 옵션 객체
 * @param {Number} [scale=1] Coordinate scale that a user can move<ko>사용자의 동작으로 이동하는 좌표의 배율</ko>
 * @param {Number} [threshold=0] Minimal scale before recognizing <ko>사용자의 Pinch 동작을 인식하기 위해산 최소한의 배율</ko>
 * @param {String[]} [inputType=["touch", "pointer"]] Types of input devices
 * - touch: Touch screen
 * - pointer: Mouse and touch <ko>입력 장치 종류
 * - touch: 터치 입력 장치
 * - pointer: 마우스 및 터치</ko>
 * @param {String} [touchAction="none"] Value that overrides the element's "touch-action" css property. It is set to "none" to prevent scrolling during touch. <ko>엘리먼트의 "touch-action" CSS 속성을 덮어쓰는 값. 터치 도중 스크롤을 방지하기 위해 "none" 으로 설정되어 있다.</ko>
 **/
/**
 * A module that passes the amount of change to eg.Axes when two pointers are moving toward (zoom-in) or away from each other (zoom-out). use one axis.
 * @ko 2개의 pointer를 이용하여 zoom-in하거나 zoom-out 하는 동작의 변화량을 eg.Axes에 전달하는 모듈. 한 개 의 축을 사용한다.
 * @example
 * ```js
 * const pinch = new eg.Axes.PinchInput("#area", {
 *   scale: 1
 * });
 *
 * // Connect 'something' axis when two pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * axes.connect("something", pinch);
 * ```
 * @param {HTMLElement|String|jQuery} element An element to use the eg.Axes.PinchInput module <ko>eg.Axes.PinchInput 모듈을 사용할 엘리먼트</ko>
 * @param {PinchInputOption} [options] The option object of the eg.Axes.PinchInput module<ko>eg.Axes.PinchInput 모듈의 옵션 객체</ko>
 */
var PinchInput = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  /**
   *
   */
  function PinchInput(el, options) {
    this.axes = [];
    this.element = null;
    this._pinchFlag = false;
    this._enabled = false;
    this._activeEvent = null;
    this._isOverThreshold = false;
    this.element = $(el);
    this.options = __assign({
      scale: 1,
      threshold: 0,
      inputType: ["touch", "pointer"],
      touchAction: "none"
    }, options);
    this._onPinchStart = this._onPinchStart.bind(this);
    this._onPinchMove = this._onPinchMove.bind(this);
    this._onPinchEnd = this._onPinchEnd.bind(this);
  }
  var __proto = PinchInput.prototype;
  __proto.mapAxes = function (axes) {
    this.axes = axes;
  };
  __proto.connect = function (observer) {
    if (this._activeEvent) {
      this._detachEvent();
    }
    this._attachEvent(observer);
    this._originalCssProps = setCssProps(this.element, this.options, DIRECTION_ALL);
    return this;
  };
  __proto.disconnect = function () {
    this._detachEvent();
    if (!isCssPropsFromAxes(this._originalCssProps)) {
      revertCssProps(this.element, this._originalCssProps);
    }
    return this;
  };
  /**
   * Destroys elements, properties, and events used in a module.
   * @ko 모듈에 사용한 엘리먼트와 속성, 이벤트를 해제한다.
   */
  __proto.destroy = function () {
    this.disconnect();
    this.element = null;
  };
  /**
   * Enables input devices
   * @ko 입력 장치를 사용할 수 있게 한다
   * @return {PinchInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   */
  __proto.enable = function () {
    this._enabled = true;
    return this;
  };
  /**
   * Disables input devices
   * @ko 입력 장치를 사용할 수 없게 한다.
   * @return {PinchInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   */
  __proto.disable = function () {
    this._enabled = false;
    return this;
  };
  /**
   * Returns whether to use an input device
   * @ko 입력 장치를 사용 여부를 반환한다.
   * @return {Boolean} Whether to use an input device <ko>입력장치 사용여부</ko>
   */
  __proto.isEnabled = function () {
    return this._enabled;
  };
  __proto._onPinchStart = function (event) {
    var activeEvent = this._activeEvent;
    var pinchEvent = activeEvent.onEventStart(event);
    if (!pinchEvent || !this._enabled || activeEvent.getTouches(event) !== 2) {
      return;
    }
    this._baseValue = this._observer.get(this)[this.axes[0]];
    this._observer.hold(this, event);
    this._pinchFlag = true;
    this._isOverThreshold = false;
    activeEvent.prevEvent = pinchEvent;
  };
  __proto._onPinchMove = function (event) {
    var threshold = this.options.threshold;
    var activeEvent = this._activeEvent;
    var pinchEvent = activeEvent.onEventMove(event);
    if (!pinchEvent || !this._pinchFlag || !this._enabled || activeEvent.getTouches(event) !== 2) {
      return;
    }
    var distance = this._getDistance(pinchEvent.scale);
    var offset = this._getOffset(pinchEvent.scale, activeEvent.prevEvent.scale);
    if (this._isOverThreshold || distance >= threshold) {
      this._isOverThreshold = true;
      this._observer.change(this, event, toAxis(this.axes, [offset]));
    }
    activeEvent.prevEvent = pinchEvent;
  };
  __proto._onPinchEnd = function (event) {
    var activeEvent = this._activeEvent;
    activeEvent.onEventEnd(event);
    if (!this._pinchFlag || !this._enabled || activeEvent.getTouches(event) >= 2) {
      return;
    }
    activeEvent.onRelease();
    this._observer.release(this, event, [0], 0);
    this._baseValue = null;
    this._pinchFlag = false;
  };
  __proto._attachEvent = function (observer) {
    var _this = this;
    var activeEvent = convertInputType(this.options.inputType);
    var element = this.element;
    if (!activeEvent) {
      return;
    }
    if (!element) {
      throw new Error("Element to connect input does not exist.");
    }
    this._observer = observer;
    this._enabled = true;
    this._activeEvent = activeEvent;
    activeEvent.start.forEach(function (event) {
      element.addEventListener(event, _this._onPinchStart, false);
    });
    activeEvent.move.forEach(function (event) {
      element.addEventListener(event, _this._onPinchMove, false);
    });
    activeEvent.end.forEach(function (event) {
      element.addEventListener(event, _this._onPinchEnd, false);
    });
  };
  __proto._detachEvent = function () {
    var _this = this;
    var activeEvent = this._activeEvent;
    var element = this.element;
    if (element) {
      activeEvent === null || activeEvent === void 0 ? void 0 : activeEvent.start.forEach(function (event) {
        element.removeEventListener(event, _this._onPinchStart, false);
      });
      activeEvent === null || activeEvent === void 0 ? void 0 : activeEvent.move.forEach(function (event) {
        element.removeEventListener(event, _this._onPinchMove, false);
      });
      activeEvent === null || activeEvent === void 0 ? void 0 : activeEvent.end.forEach(function (event) {
        element.removeEventListener(event, _this._onPinchEnd, false);
      });
    }
    this._enabled = false;
    this._observer = null;
  };
  __proto._getOffset = function (pinchScale, prev) {
    if (prev === void 0) {
      prev = 1;
    }
    return this._baseValue * (pinchScale - prev) * this.options.scale;
  };
  __proto._getDistance = function (pinchScale) {
    return Math.abs(pinchScale - 1);
  };
  return PinchInput;
}()));

/**
 * @typedef {Object} WheelInputOption The option object of the eg.Axes.WheelInput module
 * @ko eg.Axes.WheelInput 모듈의 옵션 객체
 * @param {String[]} [inputKey=["any"]] List of key combinations to allow input
 * - any: any key
 * - shift: shift key
 * - ctrl: ctrl key and pinch gesture on the trackpad
 * - alt: alt key
 * - meta: meta key
 * - none: none of these keys are pressed <ko>입력을 허용할 키 조합 목록
 * - any: 아무 키
 * - shift: shift 키
 * - ctrl: ctrl 키 및 트랙패드의 pinch 제스쳐
 * - alt: alt 키
 * - meta: meta 키
 * - none: 아무 키도 눌리지 않은 상태 </ko>
 * @param {Number} [scale=1] Coordinate scale that a user can move<ko>사용자의 동작으로 이동하는 좌표의 배율</ko>
 * @param {Number} [releaseDelay=300] Millisecond that trigger release event after last input<ko>마지막 입력 이후 release 이벤트가 트리거되기까지의 밀리초</ko>
 * @param {Boolean} [useNormalized=true] Whether to calculate scroll speed the same in all browsers<ko>모든 브라우저에서 스크롤 속도를 동일하게 처리할지 여부</ko>
 * @param {Boolean} [useAnimation=false] Whether to process coordinate changes through the mouse wheel as a continuous animation<ko>마우스 휠을 통한 좌표 변화를 연속적인 애니메이션으로 처리할지 여부</ko>
 **/
/**
 * A module that passes the amount of change to eg.Axes when the mouse wheel is moved. use one axis.
 * @ko 마우스 휠이 움직일때의 변화량을 eg.Axes에 전달하는 모듈. 두개 이하의 축을 사용한다.
 *
 * @example
 * ```js
 * const wheel = new eg.Axes.WheelInput("#area", {
 *     scale: 1
 * });
 *
 * // Connect only one 'something1' axis to the vertical mouse wheel.
 * axes.connect(["something1"], wheel); // or axes.connect("something1", wheel);
 *
 * // Connect only one 'something2' axis to the horizontal mouse wheel.
 * axes.connect(["", "something2"], wheel); // or axes.connect(" something2", pan);
 *
 * // Connect the 'something1' axis to the vertical mouse wheel.
 * // Connect the 'something2' axis to the horizontal mouse wheel.
 * axes.connect(["something1", "something2"], wheel);
 * ```
 * @param {HTMLElement|String|jQuery} element An element to use the eg.Axes.WheelInput module <ko>eg.Axes.WheelInput 모듈을 사용할 엘리먼트</ko>
 * @param {WheelInputOption} [options] The option object of the eg.Axes.WheelInput module<ko>eg.Axes.WheelInput 모듈의 옵션 객체</ko>
 */
var WheelInput = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  /**
   *
   */
  function WheelInput(el, options) {
    this.axes = [];
    this.element = null;
    this._enabled = false;
    this._holding = false;
    this._timer = null;
    this.element = $(el);
    this.options = __assign({
      inputKey: [ANY],
      scale: 1,
      releaseDelay: 300,
      useNormalized: true,
      useAnimation: false
    }, options);
    this._onWheel = this._onWheel.bind(this);
  }
  var __proto = WheelInput.prototype;
  __proto.mapAxes = function (axes) {
    // vertical mouse wheel is mapped into axes[0]
    this._direction = getDirection(!!axes[1], !!axes[0]);
    this.axes = axes;
  };
  __proto.connect = function (observer) {
    this._detachEvent();
    this._attachEvent(observer);
    return this;
  };
  __proto.disconnect = function () {
    this._detachEvent();
    return this;
  };
  /**
   * Destroys elements, properties, and events used in a module.
   * @ko 모듈에 사용한 엘리먼트와 속성, 이벤트를 해제한다.
   */
  __proto.destroy = function () {
    this.disconnect();
    this.element = null;
  };
  /**
   * Enables input devices
   * @ko 입력 장치를 사용할 수 있게 한다
   * @return {WheelInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   */
  __proto.enable = function () {
    this._enabled = true;
    return this;
  };
  /**
   * Disables input devices
   * @ko 입력 장치를 사용할 수 없게 한다.
   * @return {WheelInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   */
  __proto.disable = function () {
    this._enabled = false;
    return this;
  };
  /**
   * Returns whether to use an input device
   * @ko 입력 장치를 사용 여부를 반환한다.
   * @return {Boolean} Whether to use an input device <ko>입력장치 사용여부</ko>
   */
  __proto.isEnabled = function () {
    return this._enabled;
  };
  __proto._onWheel = function (event) {
    var _this = this;
    if (!this._enabled || !isValidKey(event, this.options.inputKey)) {
      return;
    }
    var offset = this._getOffset([event.deltaY, event.deltaX], [useDirection(DIRECTION_VERTICAL, this._direction), useDirection(DIRECTION_HORIZONTAL, this._direction)]);
    if (offset[0] === 0 && offset[1] === 0) {
      return;
    }
    event.preventDefault();
    if (!this._holding) {
      this._observer.hold(this, event);
      this._holding = true;
    }
    this._observer.change(this, event, toAxis(this.axes, offset), this.options.useAnimation);
    clearTimeout(this._timer);
    this._timer = setTimeout(function () {
      if (_this._holding) {
        _this._holding = false;
        _this._observer.release(_this, event, [0]);
      }
    }, this.options.releaseDelay);
  };
  __proto._getOffset = function (properties, direction) {
    var scale = this.options.scale;
    var useNormalized = this.options.useNormalized;
    return [direction[0] && properties[0] ? (properties[0] > 0 ? -1 : 1) * (useNormalized ? 1 : Math.abs(properties[0])) * scale : 0, direction[1] && properties[1] ? (properties[1] > 0 ? -1 : 1) * (useNormalized ? 1 : Math.abs(properties[1])) * scale : 0];
  };
  __proto._attachEvent = function (observer) {
    var element = this.element;
    if (!element) {
      throw new Error("Element to connect input does not exist.");
    }
    this._observer = observer;
    element.addEventListener("wheel", this._onWheel);
    this._enabled = true;
  };
  __proto._detachEvent = function () {
    var element = this.element;
    if (element) {
      this.element.removeEventListener("wheel", this._onWheel);
    }
    this._enabled = false;
    this._observer = null;
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  };
  return WheelInput;
}()));
var KEY_LEFT_ARROW = 37;
var KEY_A = 65;
var KEY_UP_ARROW = 38;
var KEY_W = 87;
var KEY_RIGHT_ARROW = 39;
var KEY_D = 68;
var KEY_DOWN_ARROW = 40;
var KEY_S = 83;
/* eslint-disable */
var DIRECTION_REVERSE = (/* unused pure expression or super */ null && (-1));
var DIRECTION_FORWARD = 1;
var DIRECTION_HORIZONTAL$1 = (/* unused pure expression or super */ null && (-1));
var DIRECTION_VERTICAL$1 = 1;
var DELAY = 80;
/**
 * @typedef {Object} MoveKeyInputOption The option object of the eg.Axes.MoveKeyInput module
 * @ko eg.Axes.MoveKeyInput 모듈의 옵션 객체
 * @param {Array<Number>} [scale] Coordinate scale that a user can move<ko>사용자의 동작으로 이동하는 좌표의 배율</ko>
 * @param {Number} [scale[0]=1] Coordinate scale for the first axis<ko>첫번째 축의 배율</ko>
 * @param {Number} [scale[1]=1] Coordinate scale for the decond axis<ko>두번째 축의 배율</ko>
 **/
/**
 * A module that passes the amount of change to eg.Axes when the move key stroke is occured. use two axis.
 * @ko 이동키 입력이 발생했을 때의 변화량을 eg.Axes에 전달하는 모듈. 두 개 의 축을 사용한다.
 *
 * @example
 * ```js
 * const moveKey = new eg.Axes.MoveKeyInput("#area", {
 *     scale: [1, 1]
 * });
 *
 * // Connect 'x', 'y' axes when the moveKey is pressed.
 * axes.connect(["x", "y"], moveKey);
 * ```
 * @param {HTMLElement|String|jQuery} element An element to use the eg.Axes.MoveKeyInput module <ko>eg.Axes.MoveKeyInput 모듈을 사용할 엘리먼트</ko>
 * @param {MoveKeyInputOption} [options] The option object of the eg.Axes.MoveKeyInput module<ko>eg.Axes.MoveKeyInput 모듈의 옵션 객체</ko>
 */
var MoveKeyInput = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  /**
   *
   */
  function MoveKeyInput(el, options) {
    this.axes = [];
    this.element = null;
    this._enabled = false;
    this._holding = false;
    this._timer = null;
    this.element = $(el);
    this.options = __assign({
      scale: [1, 1]
    }, options);
    this._onKeydown = this._onKeydown.bind(this);
    this._onKeyup = this._onKeyup.bind(this);
  }
  var __proto = MoveKeyInput.prototype;
  __proto.mapAxes = function (axes) {
    this.axes = axes;
  };
  __proto.connect = function (observer) {
    this._detachEvent();
    // add tabindex="0" to the container for making it focusable
    if (this.element.getAttribute("tabindex") !== "0") {
      this.element.setAttribute("tabindex", "0");
    }
    this._attachEvent(observer);
    return this;
  };
  __proto.disconnect = function () {
    this._detachEvent();
    return this;
  };
  /**
   * Destroys elements, properties, and events used in a module.
   * @ko 모듈에 사용한 엘리먼트와 속성, 이벤트를 해제한다.
   */
  __proto.destroy = function () {
    this.disconnect();
    this.element = null;
  };
  /**
   * Enables input devices
   * @ko 입력 장치를 사용할 수 있게 한다
   * @return {MoveKeyInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   */
  __proto.enable = function () {
    this._enabled = true;
    return this;
  };
  /**
   * Disables input devices
   * @ko 입력 장치를 사용할 수 없게 한다.
   * @return {MoveKeyInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
   */
  __proto.disable = function () {
    this._enabled = false;
    return this;
  };
  /**
   * Returns whether to use an input device
   * @ko 입력 장치를 사용 여부를 반환한다.
   * @return {Boolean} Whether to use an input device <ko>입력장치 사용여부</ko>
   */
  __proto.isEnabled = function () {
    return this._enabled;
  };
  __proto._onKeydown = function (event) {
    if (!this._enabled) {
      return;
    }
    var isMoveKey = true;
    var direction = DIRECTION_FORWARD;
    var move = DIRECTION_HORIZONTAL$1;
    switch (event.keyCode) {
      case KEY_LEFT_ARROW:
      case KEY_A:
        direction = DIRECTION_REVERSE;
        break;
      case KEY_RIGHT_ARROW:
      case KEY_D:
        break;
      case KEY_DOWN_ARROW:
      case KEY_S:
        direction = DIRECTION_REVERSE;
        move = DIRECTION_VERTICAL$1;
        break;
      case KEY_UP_ARROW:
      case KEY_W:
        move = DIRECTION_VERTICAL$1;
        break;
      default:
        isMoveKey = false;
    }
    if (move === DIRECTION_HORIZONTAL$1 && !this.axes[0] || move === DIRECTION_VERTICAL$1 && !this.axes[1]) {
      isMoveKey = false;
    }
    if (!isMoveKey) {
      return;
    }
    event.preventDefault();
    var offsets = move === DIRECTION_HORIZONTAL$1 ? [+this.options.scale[0] * direction, 0] : [0, +this.options.scale[1] * direction];
    if (!this._holding) {
      this._observer.hold(this, event);
      this._holding = true;
    }
    clearTimeout(this._timer);
    this._observer.change(this, event, toAxis(this.axes, offsets));
  };
  __proto._onKeyup = function (event) {
    var _this = this;
    if (!this._holding) {
      return;
    }
    clearTimeout(this._timer);
    this._timer = setTimeout(function () {
      _this._observer.release(_this, event, [0, 0]);
      _this._holding = false;
    }, DELAY);
  };
  __proto._attachEvent = function (observer) {
    var element = this.element;
    if (!element) {
      throw new Error("Element to connect input does not exist.");
    }
    this._observer = observer;
    element.addEventListener("keydown", this._onKeydown, false);
    element.addEventListener("keypress", this._onKeydown, false);
    element.addEventListener("keyup", this._onKeyup, false);
    this._enabled = true;
  };
  __proto._detachEvent = function () {
    var element = this.element;
    if (element) {
      element.removeEventListener("keydown", this._onKeydown, false);
      element.removeEventListener("keypress", this._onKeydown, false);
      element.removeEventListener("keyup", this._onKeyup, false);
    }
    this._enabled = false;
    this._observer = null;
  };
  return MoveKeyInput;
}()));

/*
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
var REACTIVE_AXES = {
  methods: AXES_METHODS,
  events: AXES_EVENTS,
  created: function (data) {
    return new Axes(data.axis, data.options);
  },
  on: function (instance, name, callback) {
    instance.on(name, callback);
  },
  off: function (instance, name, callback) {
    instance.off(name, callback);
  },
  destroy: function (instance) {
    instance.destroy();
  }
};

/*
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */

/* harmony default export */ var axes_esm = (Axes);


/***/ }),

/***/ 1276:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: function() { return /* binding */ ComponentEvent$1; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44114);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);

/*
Copyright (c) NAVER Corp.
name: @egjs/component
license: MIT
author: NAVER Corp.
repository: https://github.com/naver/egjs-component
version: 3.0.5
*/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}

/*
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
var isUndefined = function (value) {
  return typeof value === "undefined";
};

// This class name is not matched to file name intentionally
/**
 * Event class to provide additional properties
 * @ko Component에서 추가적인 프로퍼티를 제공하는 이벤트 클래스
 */
var ComponentEvent = /*#__PURE__*/function () {
  /**
   * Create a new instance of ComponentEvent.
   * @ko ComponentEvent의 새로운 인스턴스를 생성한다.
   * @param eventType The name of the event.<ko>이벤트 이름.</ko>
   * @param props An object that contains additional event properties.<ko>추가적인 이벤트 프로퍼티 오브젝트.</ko>
   */
  function ComponentEvent(eventType, props) {
    var e_1, _a;
    this._canceled = false;
    if (props) {
      try {
        for (var _b = __values(Object.keys(props)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          this[key] = props[key];
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }
    this.eventType = eventType;
  }
  /**
   * Stop the event. {@link ComponentEvent#isCanceled} will return `true` after.
   * @ko 이벤트를 중단한다. 이후 {@link ComponentEvent#isCanceled}가 `true`를 반환한다.
   */
  var __proto = ComponentEvent.prototype;
  __proto.stop = function () {
    this._canceled = true;
  };
  /**
   * Returns a boolean value that indicates whether {@link ComponentEvent#stop} is called before.
   * @ko {@link ComponentEvent#stop}이 호출되었는지 여부를 반환한다.
   * @return {boolean} A boolean value that indicates whether {@link ComponentEvent#stop} is called before.<ko>이전에 {@link ComponentEvent#stop}이 불려졌는지 여부를 반환한다.</ko>
   */
  __proto.isCanceled = function () {
    return this._canceled;
  };
  return ComponentEvent;
}();

/**
 * A class used to manage events in a component
 * @ko 컴포넌트의 이벤트을 관리할 수 있게 하는 클래스
 */
var Component = /*#__PURE__*/function () {
  /**
   * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
   */
  function Component() {
    this._eventHandler = {};
  }
  /**
   * Trigger a custom event.
   * @ko 커스텀 이벤트를 발생시킨다
   * @param {string | ComponentEvent} event The name of the custom event to be triggered or an instance of the ComponentEvent<ko>발생할 커스텀 이벤트의 이름 또는 ComponentEvent의 인스턴스</ko>
   * @param {any[]} params Event data to be sent when triggering a custom event <ko>커스텀 이벤트가 발생할 때 전달할 데이터</ko>
   * @return An instance of the component itself<ko>컴포넌트 자신의 인스턴스</ko>
   * @example
   * ```ts
   * import Component, { ComponentEvent } from "@egjs/component";
   *
   * class Some extends Component<{
   *   beforeHi: ComponentEvent<{ foo: number; bar: string }>;
   *   hi: { foo: { a: number; b: boolean } };
   *   someEvent: (foo: number, bar: string) => void;
   *   someOtherEvent: void; // When there's no event argument
   * }> {
   *   some(){
   *     if(this.trigger("beforeHi")){ // When event call to stop return false.
   *       this.trigger("hi");// fire hi event.
   *     }
   *   }
   * }
   *
   * const some = new Some();
   * some.on("beforeHi", e => {
   *   if(condition){
   *     e.stop(); // When event call to stop, `hi` event not call.
   *   }
   *   // `currentTarget` is component instance.
   *   console.log(some === e.currentTarget); // true
   *
   *   typeof e.foo; // number
   *   typeof e.bar; // string
   * });
   * some.on("hi", e => {
   *   typeof e.foo.b; // boolean
   * });
   * // If you want to more know event design. You can see article.
   * // https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F
   * ```
   */
  var __proto = Component.prototype;
  __proto.trigger = function (event) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      params[_i - 1] = arguments[_i];
    }
    var eventName = event instanceof ComponentEvent ? event.eventType : event;
    var handlers = __spread(this._eventHandler[eventName] || []);
    if (handlers.length <= 0) {
      return this;
    }
    if (event instanceof ComponentEvent) {
      event.currentTarget = this;
      handlers.forEach(function (handler) {
        handler(event);
      });
    } else {
      handlers.forEach(function (handler) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        handler.apply(void 0, __spread(params));
      });
    }
    return this;
  };
  /**
   * Executed event just one time.
   * @ko 이벤트가 한번만 실행된다.
   * @param {string} eventName The name of the event to be attached or an event name - event handler mapped object.<ko>등록할 이벤트의 이름 또는 이벤트 이름-핸들러 오브젝트</ko>
   * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
   * @return An instance of the component itself<ko>컴포넌트 자신의 인스턴스</ko>
   * @example
   * ```ts
   * import Component, { ComponentEvent } from "@egjs/component";
   *
   * class Some extends Component<{
   *   hi: ComponentEvent;
   * }> {
   *   hi() {
   *     alert("hi");
   *   }
   *   thing() {
   *     this.once("hi", this.hi);
   *   }
   * }
   *
   * var some = new Some();
   * some.thing();
   * some.trigger(new ComponentEvent("hi"));
   * // fire alert("hi");
   * some.trigger(new ComponentEvent("hi"));
   * // Nothing happens
   * ```
   */
  __proto.once = function (eventName, handlerToAttach) {
    var _this = this;
    if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
      var eventHash = eventName;
      for (var key in eventHash) {
        this.once(key, eventHash[key]);
      }
      return this;
    } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
      var listener_1 = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        handlerToAttach.apply(void 0, __spread(args));
        _this.off(eventName, listener_1);
      };
      this.on(eventName, listener_1);
    }
    return this;
  };
  /**
   * Checks whether an event has been attached to a component.
   * @ko 컴포넌트에 이벤트가 등록됐는지 확인한다.
   * @param {string} eventName The name of the event to be attached <ko>등록 여부를 확인할 이벤트의 이름</ko>
   * @return {boolean} Indicates whether the event is attached. <ko>이벤트 등록 여부</ko>
   * @example
   * ```ts
   * import Component from "@egjs/component";
   *
   * class Some extends Component<{
   *   hi: void;
   * }> {
   *   some() {
   *     this.hasOn("hi");// check hi event.
   *   }
   * }
   * ```
   */
  __proto.hasOn = function (eventName) {
    return !!this._eventHandler[eventName];
  };
  /**
   * Attaches an event to a component.
   * @ko 컴포넌트에 이벤트를 등록한다.
   * @param {string} eventName The name of the event to be attached or an event name - event handler mapped object.<ko>등록할 이벤트의 이름 또는 이벤트 이름-핸들러 오브젝트</ko>
   * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
   * @return An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
   * @example
   * ```ts
   * import Component, { ComponentEvent } from "@egjs/component";
   *
   * class Some extends Component<{
   *   hi: void;
   * }> {
   *   hi() {
   *     console.log("hi");
   *   }
   *   some() {
   *     this.on("hi",this.hi); //attach event
   *   }
   * }
   * ```
   */
  __proto.on = function (eventName, handlerToAttach) {
    if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
      var eventHash = eventName;
      for (var name in eventHash) {
        this.on(name, eventHash[name]);
      }
      return this;
    } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
      var handlerList = this._eventHandler[eventName];
      if (isUndefined(handlerList)) {
        this._eventHandler[eventName] = [];
        handlerList = this._eventHandler[eventName];
      }
      handlerList.push(handlerToAttach);
    }
    return this;
  };
  /**
   * Detaches an event from the component.<br/>If the `eventName` is not given this will detach all event handlers attached.<br/>If the `handlerToDetach` is not given, this will detach all event handlers for `eventName`.
   * @ko 컴포넌트에 등록된 이벤트를 해제한다.<br/>`eventName`이 주어지지 않았을 경우 모든 이벤트 핸들러를 제거한다.<br/>`handlerToAttach`가 주어지지 않았을 경우 `eventName`에 해당하는 모든 이벤트 핸들러를 제거한다.
   * @param {string?} eventName The name of the event to be detached <ko>해제할 이벤트의 이름</ko>
   * @param {function?} handlerToDetach The handler function of the event to be detached <ko>해제할 이벤트의 핸들러 함수</ko>
   * @return An instance of a component itself <ko>컴포넌트 자신의 인스턴스</ko>
   * @example
   * ```ts
   * import Component, { ComponentEvent } from "@egjs/component";
   *
   * class Some extends Component<{
   *   hi: void;
   * }> {
   *   hi() {
   *     console.log("hi");
   *   }
   *   some() {
   *     this.off("hi",this.hi); //detach event
   *   }
   * }
   * ```
   */
  __proto.off = function (eventName, handlerToDetach) {
    // Detach all event handlers.
    if (isUndefined(eventName)) {
      this._eventHandler = {};
      return this;
    }
    // Detach all handlers for eventname or detach event handlers by object.
    if (isUndefined(handlerToDetach)) {
      if (typeof eventName === "string") {
        delete this._eventHandler[eventName];
        return this;
      } else {
        var eventHash = eventName;
        for (var name in eventHash) {
          this.off(name, eventHash[name]);
        }
        return this;
      }
    }
    // Detach single event handler
    var handlerList = this._eventHandler[eventName];
    if (handlerList) {
      var length = handlerList.length;
      for (var i = 0; i < length; ++i) {
        if (handlerList[i] === handlerToDetach) {
          handlerList.splice(i, 1);
          if (length <= 1) {
            delete this._eventHandler[eventName];
          }
          break;
        }
      }
    }
    return this;
  };
  /**
   * Version info string
   * @ko 버전정보 문자열
   * @name VERSION
   * @static
   * @example
   * Component.VERSION;  // ex) 3.0.0
   * @memberof Component
   */
  Component.VERSION = "3.0.5";
  return Component;
}();

/*
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unsafe-assignment
var ComponentEvent$1 = ComponentEvent;

/*
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */

/* harmony default export */ __webpack_exports__.A = (Component);


/***/ }),

/***/ 36700:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports EVENTS, ImageLoader, Loader, Manager, PROPS, REACTIVE_IMREADY, VideoLoader */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44114);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _egjs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1276);
/* harmony import */ var _cfcs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82886);

/*
Copyright (c) NAVER Corp.
name: @egjs/imready
license: MIT
author: NAVER Corp.
repository: https://github.com/naver/egjs-imready
version: 1.4.1
*/



/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}

/*
egjs-imready
Copyright (c) 2020-present NAVER Corp.
MIT license
*/
var isWindow = typeof window !== "undefined";
var ua = isWindow ? window.navigator.userAgent : "";
var SUPPORT_COMPUTEDSTYLE = isWindow ? !!("getComputedStyle" in window) : false;
var IS_IE = /MSIE|Trident|Windows Phone|Edge/.test(ua);
var SUPPORT_ADDEVENTLISTENER = isWindow ? !!("addEventListener" in document) : false;
var WIDTH = "width";
var HEIGHT = "height";
var PROPS = (/* unused pure expression or super */ null && (["prefix", "loaders"]));
var EVENTS = (/* unused pure expression or super */ null && (["preReadyElement", "readyElement", "error", "preReady", "ready"]));
function getAttribute(el, name) {
  return el.getAttribute(name) || "";
}
function toArray(arr) {
  return [].slice.call(arr);
}
function hasSizeAttribute(target, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  return !!target.getAttribute(prefix + "width");
}
function hasLoadingAttribute(target, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  return "loading" in target && target.getAttribute("loading") === "lazy" || !!target.getAttribute(prefix + "lazy");
}
function hasSkipAttribute(target, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  return !!target.getAttribute(prefix + "skip");
}
function addEvent(element, type, handler) {
  if (SUPPORT_ADDEVENTLISTENER) {
    element.addEventListener(type, handler, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, handler);
  } else {
    element["on" + type] = handler;
  }
}
function removeEvent(element, type, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + type, handler);
  } else {
    element["on" + type] = null;
  }
}
function innerWidth(el) {
  return getSize(el, "Width");
}
function innerHeight(el) {
  return getSize(el, "Height");
}
function getStyles(el) {
  return (SUPPORT_COMPUTEDSTYLE ? window.getComputedStyle(el) : el.currentStyle) || {};
}
function getSize(el, name) {
  var size = el["client" + name] || el["offset" + name];
  return parseFloat(size || getStyles(el)[name.toLowerCase()]) || 0;
}
function getContentElements(element, tags, prefix) {
  var skipElements = toArray(element.querySelectorAll(__spreadArrays(["[" + prefix + "skip] [" + prefix + "width]"], tags.map(function (tag) {
    return ["[" + prefix + "skip] " + tag, tag + "[" + prefix + "skip]", "[" + prefix + "width] " + tag].join(", ");
  })).join(", ")));
  return toArray(element.querySelectorAll("[" + prefix + "width], " + tags.join(", "))).filter(function (el) {
    return skipElements.indexOf(el) === -1;
  });
}

/*
egjs-imready
Copyright (c) 2020-present NAVER Corp.
MIT license
*/
var elements = [];
function addAutoSizer(element, prefix) {
  !elements.length && addEvent(window, "resize", resizeAllAutoSizers);
  element.__PREFIX__ = prefix;
  elements.push(element);
  resize(element);
}
function removeAutoSizer(element, prefix) {
  var index = elements.indexOf(element);
  if (index < 0) {
    return;
  }
  var fixed = getAttribute(element, prefix + "fixed");
  delete element.__PREFIX__;
  element.style[fixed === HEIGHT ? WIDTH : HEIGHT] = "";
  elements.splice(index, 1);
  !elements.length && removeEvent(window, "resize", resizeAllAutoSizers);
}
function resize(element, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  var elementPrefix = element.__PREFIX__ || prefix;
  var dataWidth = parseInt(getAttribute(element, "" + elementPrefix + WIDTH), 10) || 0;
  var dataHeight = parseInt(getAttribute(element, "" + elementPrefix + HEIGHT), 10) || 0;
  var fixed = getAttribute(element, elementPrefix + "fixed");
  if (fixed === HEIGHT) {
    var size = innerHeight(element) || dataHeight;
    element.style[WIDTH] = dataWidth / dataHeight * size + "px";
  } else {
    var size = innerWidth(element) || dataWidth;
    element.style[HEIGHT] = dataHeight / dataWidth * size + "px";
  }
}
function resizeAllAutoSizers() {
  elements.forEach(function (element) {
    resize(element);
  });
}
var Loader = /*#__PURE__*/function (_super) {
  __extends(Loader, _super);
  function Loader(element, options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this) || this;
    _this.isReady = false;
    _this.isPreReady = false;
    _this.hasDataSize = false;
    _this.hasLoading = false;
    _this.isSkip = false;
    _this.onCheck = function (e) {
      _this.clear();
      if (e && e.type === "error") {
        _this.onError(_this.element);
      }
      if (_this.hasLoading && _this.checkElement()) {
        // I'm not ready
        return;
      }
      // I'm pre-ready and ready!
      var withPreReady = !_this.hasDataSize && !_this.hasLoading;
      _this.onReady(withPreReady);
    };
    _this.options = __assign({
      prefix: "data-"
    }, options);
    _this.element = element;
    var prefix = _this.options.prefix;
    _this.hasDataSize = hasSizeAttribute(element, prefix);
    _this.isSkip = hasSkipAttribute(element, prefix);
    _this.hasLoading = hasLoadingAttribute(element, prefix);
    return _this;
  }
  var __proto = Loader.prototype;
  __proto.check = function () {
    if (this.isSkip || !this.checkElement()) {
      // I'm Ready
      this.onAlreadyReady(true);
      return false;
    }
    if (this.hasDataSize) {
      addAutoSizer(this.element, this.options.prefix);
    }
    if (this.hasDataSize || this.hasLoading) {
      // I'm Pre Ready
      this.onAlreadyPreReady();
    }
    // Wati Pre Ready, Ready
    return true;
  };
  __proto.addEvents = function () {
    var _this = this;
    var element = this.element;
    this.constructor.EVENTS.forEach(function (name) {
      addEvent(element, name, _this.onCheck);
    });
  };
  __proto.clear = function () {
    var _this = this;
    var element = this.element;
    this.constructor.EVENTS.forEach(function (name) {
      removeEvent(element, name, _this.onCheck);
    });
    this.removeAutoSizer();
  };
  __proto.destroy = function () {
    this.clear();
    this.off();
  };
  __proto.removeAutoSizer = function () {
    if (this.hasDataSize) {
      // I'm already ready.
      var prefix = this.options.prefix;
      removeAutoSizer(this.element, prefix);
    }
  };
  __proto.onError = function (target) {
    this.trigger("error", {
      element: this.element,
      target: target
    });
  };
  __proto.onPreReady = function () {
    if (this.isPreReady) {
      return;
    }
    this.isPreReady = true;
    this.trigger("preReady", {
      element: this.element,
      hasLoading: this.hasLoading,
      isSkip: this.isSkip
    });
  };
  __proto.onReady = function (withPreReady) {
    if (this.isReady) {
      return;
    }
    withPreReady = !this.isPreReady && withPreReady;
    if (withPreReady) {
      this.isPreReady = true;
    }
    this.removeAutoSizer();
    this.isReady = true;
    this.trigger("ready", {
      element: this.element,
      withPreReady: withPreReady,
      hasLoading: this.hasLoading,
      isSkip: this.isSkip
    });
  };
  __proto.onAlreadyError = function (target) {
    var _this = this;
    setTimeout(function () {
      _this.onError(target);
    });
  };
  __proto.onAlreadyPreReady = function () {
    var _this = this;
    setTimeout(function () {
      _this.onPreReady();
    });
  };
  __proto.onAlreadyReady = function (withPreReady) {
    var _this = this;
    setTimeout(function () {
      _this.onReady(withPreReady);
    });
  };
  Loader.EVENTS = [];
  return Loader;
}(_egjs_component__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);
var ElementLoader = /*#__PURE__*/function (_super) {
  __extends(ElementLoader, _super);
  function ElementLoader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  var __proto = ElementLoader.prototype;
  __proto.setHasLoading = function (hasLoading) {
    this.hasLoading = hasLoading;
  };
  __proto.check = function () {
    if (this.isSkip) {
      // I'm Ready
      this.onAlreadyReady(true);
      return false;
    }
    if (this.hasDataSize) {
      addAutoSizer(this.element, this.options.prefix);
      this.onAlreadyPreReady();
    } else {
      // has not data size
      this.trigger("requestChildren");
    }
    return true;
  };
  __proto.checkElement = function () {
    return true;
  };
  __proto.destroy = function () {
    this.clear();
    this.trigger("requestDestroy");
    this.off();
  };
  __proto.onAlreadyPreReady = function () {
    // has data size
    _super.prototype.onAlreadyPreReady.call(this);
    this.trigger("reqeustReadyChildren");
  };
  ElementLoader.EVENTS = [];
  return ElementLoader;
}(Loader);

/**
 * @alias eg.ImReady
 * @extends eg.Component
 */
var ImReadyManager = /*#__PURE__*/function (_super) {
  __extends(ImReadyManager, _super);
  /**
   * @param - ImReady's options
   */
  function ImReadyManager(options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this) || this;
    _this.readyCount = 0;
    _this.preReadyCount = 0;
    _this.totalCount = 0;
    _this.totalErrorCount = 0;
    _this.isPreReadyOver = true;
    _this.elementInfos = [];
    _this.options = __assign({
      loaders: {},
      prefix: "data-"
    }, options);
    return _this;
  }
  /**
   * Checks whether elements are in the ready state.
   * @ko 엘리먼트가 준비 상태인지 체크한다.
   * @elements - Elements to check ready status. <ko> 준비 상태를 체크할 엘리먼트들.</ko>
   * @example
     * ```html
     * <div>
     *    <img src="./1.jpg" data-width="1280" data-height="853" style="width:100%"/>
     *    <img src="./2.jpg" data-width="1280" data-height="853"/>
     *    <img src="ERR" data-width="1280" data-height="853"/>
     * </div>
     * ```
     * ## Javascript
     * ```js
     * import ImReady from "@egjs/imready";
     *
     * const im = new ImReady(); // umd: eg.ImReady
     * im.check(document.querySelectorAll("img")).on({
     *   preReadyElement: e => {
     *     // 1, 3
     *     // 2, 3
     *     // 3, 3
     *     console.log(e.preReadyCount, e.totalCount),
     *   },
     * });
     * ```
   */
  var __proto = ImReadyManager.prototype;
  __proto.check = function (elements) {
    var _this = this;
    var prefix = this.options.prefix;
    this.clear();
    this.elementInfos = toArray(elements).map(function (element, index) {
      var loader = _this.getLoader(element, {
        prefix: prefix
      });
      loader.check();
      loader.on("error", function (e) {
        _this.onError(index, e.target);
      }).on("preReady", function (e) {
        var info = _this.elementInfos[index];
        info.hasLoading = e.hasLoading;
        info.isSkip = e.isSkip;
        var isPreReady = _this.checkPreReady(index);
        _this.onPreReadyElement(index);
        isPreReady && _this.onPreReady();
      }).on("ready", function (_a) {
        var withPreReady = _a.withPreReady,
          hasLoading = _a.hasLoading,
          isSkip = _a.isSkip;
        var info = _this.elementInfos[index];
        info.hasLoading = hasLoading;
        info.isSkip = isSkip;
        var isPreReady = withPreReady && _this.checkPreReady(index);
        var isReady = _this.checkReady(index);
        // Pre-ready and ready occur simultaneously
        withPreReady && _this.onPreReadyElement(index);
        _this.onReadyElement(index);
        isPreReady && _this.onPreReady();
        isReady && _this.onReady();
      });
      return {
        loader: loader,
        element: element,
        hasLoading: false,
        hasError: false,
        isPreReady: false,
        isReady: false,
        isSkip: false
      };
    });
    var length = this.elementInfos.length;
    this.totalCount = length;
    if (!length) {
      setTimeout(function () {
        _this.onPreReady();
        _this.onReady();
      });
    }
    return this;
  };
  /**
   * Gets the total count of elements to be checked.
   * @ko 체크하는 element의 총 개수를 가져온다.
   */
  __proto.getTotalCount = function () {
    return this.totalCount;
  };
  /**
   * Whether the elements are all pre-ready. (all sizes are known)
   * @ko 엘리먼트들이 모두 사전 준비가 됐는지 (사이즈를 전부 알 수 있는지) 여부.
   */
  __proto.isPreReady = function () {
    return this.elementInfos.every(function (info) {
      return info.isPreReady;
    });
  };
  /**
   * Whether the elements are all ready.
   * @ko 엘리먼트들이 모두 준비가 됐는지 여부.
   */
  __proto.isReady = function () {
    return this.elementInfos.every(function (info) {
      return info.isReady;
    });
  };
  /**
   * Whether an error has occurred in the elements in the current state.
   * @ko 현재 상태에서 엘리먼트들이 에러가 발생했는지 여부.
   */
  __proto.hasError = function () {
    return this.totalErrorCount > 0;
  };
  /**
   * Clears events of elements being checked.
   * @ko 체크 중인 엘리먼트들의 이벤트를 해제 한다.
   */
  __proto.clear = function () {
    this.isPreReadyOver = false;
    this.totalCount = 0;
    this.preReadyCount = 0;
    this.readyCount = 0;
    this.totalErrorCount = 0;
    this.elementInfos.forEach(function (info) {
      if (info.loader) {
        info.loader.destroy();
      }
    });
    this.elementInfos = [];
  };
  /**
   * Destory all events.
   * @ko 모든 이벤트를 해제 한다.
   */
  __proto.destroy = function () {
    this.clear();
    this.off();
  };
  __proto.getLoader = function (element, options) {
    var _this = this;
    var tagName = element.tagName.toLowerCase();
    var loaders = this.options.loaders;
    var prefix = options.prefix;
    var tags = Object.keys(loaders);
    if (loaders[tagName]) {
      return new loaders[tagName](element, options);
    }
    var loader = new ElementLoader(element, options);
    var children = toArray(element.querySelectorAll(tags.join(", ")));
    loader.setHasLoading(children.some(function (el) {
      return hasLoadingAttribute(el, prefix);
    }));
    var withPreReady = false;
    var childrenImReady = this.clone().on("error", function (e) {
      loader.onError(e.target);
    }).on("ready", function () {
      loader.onReady(withPreReady);
    });
    loader.on("requestChildren", function () {
      // has not data size
      var contentElements = getContentElements(element, tags, _this.options.prefix);
      childrenImReady.check(contentElements).on("preReady", function (e) {
        withPreReady = e.isReady;
        if (!withPreReady) {
          loader.onPreReady();
        }
      });
    }).on("reqeustReadyChildren", function () {
      // has data size
      // loader call preReady
      // check only video, image elements
      childrenImReady.check(children);
    }).on("requestDestroy", function () {
      childrenImReady.destroy();
    });
    return loader;
  };
  __proto.clone = function () {
    return new ImReadyManager(__assign({}, this.options));
  };
  __proto.checkPreReady = function (index) {
    this.elementInfos[index].isPreReady = true;
    ++this.preReadyCount;
    if (this.preReadyCount < this.totalCount) {
      return false;
    }
    return true;
  };
  __proto.checkReady = function (index) {
    this.elementInfos[index].isReady = true;
    ++this.readyCount;
    if (this.readyCount < this.totalCount) {
      return false;
    }
    return true;
  };
  __proto.onError = function (index, target) {
    var info = this.elementInfos[index];
    info.hasError = true;
    /**
     * An event occurs if the image, video fails to load.
     * @ko 이미지, 비디오가 로딩에 실패하면 이벤트가 발생한다.
     * @event eg.ImReady#error
     * @param {eg.ImReady.OnError} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
     * @example
     * ```html
     * <div>
     *    <img src="./1.jpg" data-width="1280" data-height="853" style="width:100%"/>
     *    <img src="./2.jpg"/>
     *    <img src="ERR"/>
     * </div>
     * ```
     * ## Javascript
     * ```js
     * import ImReady from "@egjs/imready";
     *
     * const im = new ImReady(); // umd: eg.ImReady
     * im.check([document.querySelector("div")]).on({
     *   error: e => {
     *     // <div>...</div>, 0, <img src="ERR"/>
     *     console.log(e.element, e.index, e.target),
     *   },
     * });
     * ```
     */
    this.trigger(new _egjs_component__WEBPACK_IMPORTED_MODULE_1__/* .ComponentEvent */ .O("error", {
      element: info.element,
      index: index,
      target: target,
      errorCount: this.getErrorCount(),
      totalErrorCount: ++this.totalErrorCount
    }));
  };
  __proto.onPreReadyElement = function (index) {
    var info = this.elementInfos[index];
    /**
     * An event occurs when the element is pre-ready (when the loading attribute is applied or the size is known)
     * @ko 해당 엘리먼트가 사전 준비되었을 때(loading 속성이 적용되었거나 사이즈를 알 수 있을 때) 이벤트가 발생한다.
     * @event eg.ImReady#preReadyElement
     * @param {eg.ImReady.OnPreReadyElement} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
     * @example
     * ```html
     * <div>
     *    <img src="./1.jpg" data-width="1280" data-height="853" style="width:100%"/>
     *    <img src="./2.jpg" data-width="1280" data-height="853"/>
     *    <img src="ERR" data-width="1280" data-height="853"/>
     * </div>
     * ```
     * ## Javascript
     * ```js
     * import ImReady from "@egjs/imready";
     *
     * const im = new ImReady(); // umd: eg.ImReady
     * im.check(document.querySelectorAll("img")).on({
     *   preReadyElement: e => {
     *     // 1, 3
     *     // 2, 3
     *     // 3, 3
     *     console.log(e.preReadyCount, e.totalCount),
     *   },
     * });
     * ```
     */
    this.trigger(new _egjs_component__WEBPACK_IMPORTED_MODULE_1__/* .ComponentEvent */ .O("preReadyElement", {
      element: info.element,
      index: index,
      preReadyCount: this.preReadyCount,
      readyCount: this.readyCount,
      totalCount: this.totalCount,
      isPreReady: this.isPreReady(),
      isReady: this.isReady(),
      hasLoading: info.hasLoading,
      isSkip: info.isSkip
    }));
  };
  __proto.onPreReady = function () {
    this.isPreReadyOver = true;
    /**
     * An event occurs when all element are pre-ready (When all elements have the loading attribute applied or the size is known)
     * @ko 모든 엘리먼트들이 사전 준비된 경우 (모든 엘리먼트들이 loading 속성이 적용되었거나 사이즈를 알 수 있는 경우) 이벤트가 발생한다.
     * @event eg.ImReady#preReady
     * @param {eg.ImReady.OnPreReady} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
     * @example
     * ```html
     * <div>
     *    <img src="./1.jpg" data-width="1280" data-height="853" style="width:100%"/>
     *    <img src="./2.jpg" data-width="1280" data-height="853"/>
     *    <img src="ERR" data-width="1280" data-height="853"/>
     * </div>
     * ```
     * ## Javascript
     * ```js
     * import ImReady from "@egjs/imready";
     *
     * const im = new ImReady(); // umd: eg.ImReady
     * im.check(document.querySelectorAll("img")).on({
     *   preReady: e => {
     *     // 0, 3
     *     console.log(e.readyCount, e.totalCount),
     *   },
     * });
     * ```
     */
    this.trigger(new _egjs_component__WEBPACK_IMPORTED_MODULE_1__/* .ComponentEvent */ .O("preReady", {
      readyCount: this.readyCount,
      totalCount: this.totalCount,
      isReady: this.isReady(),
      hasLoading: this.hasLoading()
    }));
  };
  __proto.onReadyElement = function (index) {
    var info = this.elementInfos[index];
    /**
     * An event occurs when the element is ready
     * @ko 해당 엘리먼트가 준비가 되었을 때 이벤트가 발생한다.
     * @event eg.ImReady#readyElement
     * @param {eg.ImReady.OnReadyElement} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
     * @example
     * ```html
     * <div>
     *    <img src="./1.jpg" data-width="1280" data-height="853" style="width:100%"/>
     *    <img src="./2.jpg" data-width="1280" data-height="853"/>
     *    <img src="ERR" data-width="1280" data-height="853"/>
     * </div>
     * ```
     * ## Javascript
     * ```js
     * import ImReady from "@egjs/imready";
     *
     * const im = new ImReady(); // umd: eg.ImReady
     * im.check(document.querySelectorAll("img")).on({
     *   readyElement: e => {
     *     // 1, 0, false, 3
     *     // 2, 1, false, 3
     *     // 3, 2, true, 3
     *     console.log(e.readyCount, e.index, e.hasError, e.totalCount),
     *   },
     * });
     * ```
     */
    this.trigger(new _egjs_component__WEBPACK_IMPORTED_MODULE_1__/* .ComponentEvent */ .O("readyElement", {
      index: index,
      element: info.element,
      hasError: info.hasError,
      errorCount: this.getErrorCount(),
      totalErrorCount: this.totalErrorCount,
      preReadyCount: this.preReadyCount,
      readyCount: this.readyCount,
      totalCount: this.totalCount,
      isPreReady: this.isPreReady(),
      isReady: this.isReady(),
      hasLoading: info.hasLoading,
      isPreReadyOver: this.isPreReadyOver,
      isSkip: info.isSkip
    }));
  };
  __proto.onReady = function () {
    /**
     * An event occurs when all element are ready
     * @ko 모든 엘리먼트들이 준비된 경우 이벤트가 발생한다.
     * @event eg.ImReady#ready
     * @param {eg.ImReady.OnReady} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
     * @example
     * ```html
     * <div>
     *    <img src="./1.jpg" data-width="1280" data-height="853" style="width:100%"/>
     *    <img src="./2.jpg" data-width="1280" data-height="853"/>
     *    <img src="ERR" data-width="1280" data-height="853"/>
     * </div>
     * ```
     * ## Javascript
     * ```js
     * import ImReady from "@egjs/imready";
     *
     * const im = new ImReady(); // umd: eg.ImReady
     * im.check(document.querySelectorAll("img")).on({
     *   preReady: e => {
     *     // 0, 3
     *     console.log(e.readyCount, e.totalCount),
     *   },
     *   ready: e => {
     *     // 1, 3
     *     console.log(e.errorCount, e.totalCount),
     *   },
     * });
     * ```
     */
    this.trigger(new _egjs_component__WEBPACK_IMPORTED_MODULE_1__/* .ComponentEvent */ .O("ready", {
      errorCount: this.getErrorCount(),
      totalErrorCount: this.totalErrorCount,
      totalCount: this.totalCount
    }));
  };
  __proto.getErrorCount = function () {
    return this.elementInfos.filter(function (info) {
      return info.hasError;
    }).length;
  };
  __proto.hasLoading = function () {
    return this.elementInfos.some(function (info) {
      return info.hasLoading;
    });
  };
  return ImReadyManager;
}(_egjs_component__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);
var ImageLoader = /*#__PURE__*/function (_super) {
  __extends(ImageLoader, _super);
  function ImageLoader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  var __proto = ImageLoader.prototype;
  __proto.checkElement = function () {
    var element = this.element;
    var src = element.getAttribute("src");
    if (element.complete) {
      if (src) {
        // complete
        if (!element.naturalWidth) {
          this.onAlreadyError(element);
        }
        return false;
      } else {
        // Using an external lazy loading module
        this.onAlreadyPreReady();
      }
    }
    this.addEvents();
    IS_IE && element.setAttribute("src", src);
    return true;
  };
  ImageLoader.EVENTS = ["load", "error"];
  return ImageLoader;
}(Loader);
var VideoLoader = /*#__PURE__*/function (_super) {
  __extends(VideoLoader, _super);
  function VideoLoader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  var __proto = VideoLoader.prototype;
  __proto.checkElement = function () {
    var element = this.element;
    // HAVE_NOTHING: 0, no information whether or not the audio/video is ready
    // HAVE_METADATA: 1, HAVE_METADATA - metadata for the audio/video is ready
    // HAVE_CURRENT_DATA: 2, data for the current playback position is available, but not enough data to play next frame/millisecond
    // HAVE_FUTURE_DATA: 3, data for the current and at least the next frame is available
    // HAVE_ENOUGH_DATA: 4, enough data available to start playing
    if (element.readyState >= 1) {
      return false;
    }
    if (element.error) {
      this.onAlreadyError(element);
      return false;
    }
    this.addEvents();
    return true;
  };
  VideoLoader.EVENTS = ["loadedmetadata", "error"];
  return VideoLoader;
}(Loader);
var ImReady = /*#__PURE__*/function (_super) {
  __extends(ImReady, _super);
  function ImReady(options) {
    if (options === void 0) {
      options = {};
    }
    return _super.call(this, __assign({
      loaders: {
        img: ImageLoader,
        video: VideoLoader
      }
    }, options)) || this;
  }
  return ImReady;
}(ImReadyManager);
var REACTIVE_IMREADY = function (_a) {
  var setEvents = _a.setEvents,
    setMethods = _a.setMethods,
    on = _a.on,
    onInit = _a.onInit,
    onDestroy = _a.onDestroy,
    getProps = _a.getProps;
  setEvents(EVENTS);
  setMethods(["add"]);
  var children = [];
  var reactiveImReady = reactive({
    preReadyCount: 0,
    readyCount: 0,
    errorCount: 0,
    totalErrorCount: 0,
    totalCount: 0,
    isPreReady: false,
    isReady: false,
    hasError: false,
    isPreReadyOver: false,
    add: function (element) {
      children.push(element);
    }
  });
  var props = getProps() || {};
  var imReady = new ImReady(props);
  imReady.on("error", function (e) {
    reactiveImReady.hasError = true;
    reactiveImReady.errorCount = e.errorCount;
    reactiveImReady.totalErrorCount = e.totalErrorCount;
  }).on("preReadyElement", function (e) {
    reactiveImReady.preReadyCount = e.preReadyCount;
  }).on("readyElement", function (e) {
    reactiveImReady.readyCount = e.readyCount;
    reactiveImReady.isPreReadyOver = e.isPreReadyOver;
  }).on("preReady", function () {
    reactiveImReady.isPreReady = true;
  }).on("ready", function () {
    reactiveImReady.isReady = true;
  });
  on(function (_, name, callback) {
    imReady.on(name, callback);
    return function () {
      imReady.off(name, callback);
    };
  });
  onInit(function () {
    var selector = props === null || props === void 0 ? void 0 : props.selector;
    var checkedElements = [];
    children.forEach(function (child) {
      if (!child) {
        return;
      }
      if (isString(child)) {
        checkedElements = __spreadArrays(checkedElements, toArray(document.querySelectorAll(child)));
      } else if (child instanceof Element) {
        checkedElements.push(child);
      } else if ("value" in child || "current" in child) {
        var element = child.value || child.current;
        if (element) {
          checkedElements.push(element);
        }
      }
    });
    if (selector) {
      checkedElements = checkedElements.reduce(function (prev, cur) {
        return __spreadArrays(prev, [].slice.call(cur.querySelectorAll(selector)));
      }, []);
    }
    reactiveImReady.totalCount = checkedElements.length;
    imReady.check(checkedElements);
  });
  onDestroy(function () {
    imReady.destroy();
  });
  return reactiveImReady;
};

/*
egjs-imready
Copyright (c) 2020-present NAVER Corp.
MIT license
*/

/* harmony default export */ __webpack_exports__.Ay = (ImReady);


/***/ }),

/***/ 22180:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: function() { return /* binding */ Flicking; }
});

// UNUSED EXPORTS: ALIGN, AnchorPoint, AnimatingState, AxesController, BoundCameraMode, CIRCULAR_FALLBACK, CLASS, Camera, CircularCameraMode, Control, DIRECTION, DisabledState, DraggingState, ERROR_CODE, EVENTS, ExternalRenderer, FlickingError, FreeControl, HoldingState, IdleState, LinearCameraMode, MOVE_TYPE, NormalRenderingStrategy, ORDER, Panel, Renderer, SnapControl, State, StateMachine, StrictControl, VanillaElementProvider, VanillaRenderer, Viewport, VirtualElementProvider, VirtualManager, VirtualPanel, VirtualRenderingStrategy, checkExistence, circulateIndex, circulatePosition, clamp, find, findIndex, findRight, getDefaultCameraTransform, getDirection, getElement, getElementSize, getFlickingAttached, getMinusCompensatedIndex, getProgress, getRenderingPanels, getStyle, includes, isBetween, isString, merge, parseAlign, parseArithmeticExpression, parseArithmeticSize, parseBounce, parseCSSSizeValue, parseElement, parsePanelAlign, range, setPrototypeOf, setSize, sync, toArray, withFlickingMethods

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
;// CONCATENATED MODULE: ./node_modules/@egjs/list-differ/dist/list-differ.esm.js

/*
Copyright (c) 2019-present NAVER Corp.
name: @egjs/list-differ
license: MIT
author: NAVER Corp.
repository: https://github.com/naver/egjs-list-differ
version: 1.0.1
*/
/*
egjs-list-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/
var PolyMap = /*#__PURE__*/
function () {
  function PolyMap() {
    this.keys = [];
    this.values = [];
  }
  var __proto = PolyMap.prototype;
  __proto.get = function (key) {
    return this.values[this.keys.indexOf(key)];
  };
  __proto.set = function (key, value) {
    var keys = this.keys;
    var values = this.values;
    var prevIndex = keys.indexOf(key);
    var index = prevIndex === -1 ? keys.length : prevIndex;
    keys[index] = key;
    values[index] = value;
  };
  return PolyMap;
}();

/*
egjs-list-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/
var HashMap = /*#__PURE__*/
function () {
  function HashMap() {
    this.object = {};
  }
  var __proto = HashMap.prototype;
  __proto.get = function (key) {
    return this.object[key];
  };
  __proto.set = function (key, value) {
    this.object[key] = value;
  };
  return HashMap;
}();

/*
egjs-list-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/
var SUPPORT_MAP = typeof Map === "function";

/*
egjs-list-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/
var Link = /*#__PURE__*/
function () {
  function Link() {}
  var __proto = Link.prototype;
  __proto.connect = function (prevLink, nextLink) {
    this.prev = prevLink;
    this.next = nextLink;
    prevLink && (prevLink.next = this);
    nextLink && (nextLink.prev = this);
  };
  __proto.disconnect = function () {
    // In double linked list, diconnect the interconnected relationship.
    var prevLink = this.prev;
    var nextLink = this.next;
    prevLink && (prevLink.next = nextLink);
    nextLink && (nextLink.prev = prevLink);
  };
  __proto.getIndex = function () {
    var link = this;
    var index = -1;
    while (link) {
      link = link.prev;
      ++index;
    }
    return index;
  };
  return Link;
}();

/*
egjs-list-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/

function orderChanged(changed, fixed) {
  // It is roughly in the order of these examples.
  // 4, 6, 0, 2, 1, 3, 5, 7
  var fromLinks = []; // 0, 1, 2, 3, 4, 5, 6, 7

  var toLinks = [];
  changed.forEach(function (_a) {
    var from = _a[0],
      to = _a[1];
    var link = new Link();
    fromLinks[from] = link;
    toLinks[to] = link;
  }); // `fromLinks` are connected to each other by double linked list.

  fromLinks.forEach(function (link, i) {
    link.connect(fromLinks[i - 1]);
  });
  return changed.filter(function (_, i) {
    return !fixed[i];
  }).map(function (_a, i) {
    var from = _a[0],
      to = _a[1];
    if (from === to) {
      return [0, 0];
    }
    var fromLink = fromLinks[from];
    var toLink = toLinks[to - 1];
    var fromIndex = fromLink.getIndex(); // Disconnect the link connected to `fromLink`.

    fromLink.disconnect(); // Connect `fromLink` to the right of `toLink`.

    if (!toLink) {
      fromLink.connect(undefined, fromLinks[0]);
    } else {
      fromLink.connect(toLink, toLink.next);
    }
    var toIndex = fromLink.getIndex();
    return [fromIndex, toIndex];
  });
}
var Result = /*#__PURE__*/
function () {
  function Result(prevList, list, added, removed, changed, maintained, changedBeforeAdded, fixed) {
    this.prevList = prevList;
    this.list = list;
    this.added = added;
    this.removed = removed;
    this.changed = changed;
    this.maintained = maintained;
    this.changedBeforeAdded = changedBeforeAdded;
    this.fixed = fixed;
  }
  var __proto = Result.prototype;
  Object.defineProperty(__proto, "ordered", {
    get: function () {
      if (!this.cacheOrdered) {
        this.caculateOrdered();
      }
      return this.cacheOrdered;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(__proto, "pureChanged", {
    get: function () {
      if (!this.cachePureChanged) {
        this.caculateOrdered();
      }
      return this.cachePureChanged;
    },
    enumerable: true,
    configurable: true
  });
  __proto.caculateOrdered = function () {
    var ordered = orderChanged(this.changedBeforeAdded, this.fixed);
    var changed = this.changed;
    var pureChanged = [];
    this.cacheOrdered = ordered.filter(function (_a, i) {
      var from = _a[0],
        to = _a[1];
      var _b = changed[i],
        fromBefore = _b[0],
        toBefore = _b[1];
      if (from !== to) {
        pureChanged.push([fromBefore, toBefore]);
        return true;
      }
    });
    this.cachePureChanged = pureChanged;
  };
  return Result;
}();

/**
 *
 * @memberof eg.ListDiffer
 * @static
 * @function
 * @param - Previous List <ko> 이전 목록 </ko>
 * @param - List to Update <ko> 업데이트 할 목록 </ko>
 * @param - This callback function returns the key of the item. <ko> 아이템의 키를 반환하는 콜백 함수입니다.</ko>
 * @return - Returns the diff between `prevList` and `list` <ko> `prevList`와 `list`의 다른 점을 반환한다.</ko>
 * @example
 * import { diff } from "@egjs/list-differ";
 * // script => eg.ListDiffer.diff
 * const result = diff([0, 1, 2, 3, 4, 5], [7, 8, 0, 4, 3, 6, 2, 1], e => e);
 * // List before update
 * // [1, 2, 3, 4, 5]
 * console.log(result.prevList);
 * // Updated list
 * // [4, 3, 6, 2, 1]
 * console.log(result.list);
 * // Index array of values added to `list`
 * // [0, 1, 5]
 * console.log(result.added);
 * // Index array of values removed in `prevList`
 * // [5]
 * console.log(result.removed);
 * // An array of index pairs of `prevList` and `list` with different indexes from `prevList` and `list`
 * // [[0, 2], [4, 3], [3, 4], [2, 6], [1, 7]]
 * console.log(result.changed);
 * // The subset of `changed` and an array of index pairs that moved data directly. Indicate an array of absolute index pairs of `ordered`.(Formatted by: Array<[index of prevList, index of list]>)
 * // [[4, 3], [3, 4], [2, 6]]
 * console.log(result.pureChanged);
 * // An array of index pairs to be `ordered` that can synchronize `list` before adding data. (Formatted by: Array<[prevIndex, nextIndex]>)
 * // [[4, 1], [4, 2], [4, 3]]
 * console.log(result.ordered);
 * // An array of index pairs of `prevList` and `list` that have not been added/removed so data is preserved
 * // [[0, 2], [4, 3], [3, 4], [2, 6], [1, 7]]
 * console.log(result.maintained);
 */

function diff(prevList, list, findKeyCallback) {
  var mapClass = SUPPORT_MAP ? Map : findKeyCallback ? HashMap : PolyMap;
  var callback = findKeyCallback || function (e) {
    return e;
  };
  var added = [];
  var removed = [];
  var maintained = [];
  var prevKeys = prevList.map(callback);
  var keys = list.map(callback);
  var prevKeyMap = new mapClass();
  var keyMap = new mapClass();
  var changedBeforeAdded = [];
  var fixed = [];
  var removedMap = {};
  var changed = [];
  var addedCount = 0;
  var removedCount = 0; // Add prevKeys and keys to the hashmap.

  prevKeys.forEach(function (key, prevListIndex) {
    prevKeyMap.set(key, prevListIndex);
  });
  keys.forEach(function (key, listIndex) {
    keyMap.set(key, listIndex);
  }); // Compare `prevKeys` and `keys` and add them to `removed` if they are not in `keys`.

  prevKeys.forEach(function (key, prevListIndex) {
    var listIndex = keyMap.get(key); // In prevList, but not in list, it is removed.

    if (typeof listIndex === "undefined") {
      ++removedCount;
      removed.push(prevListIndex);
    } else {
      removedMap[listIndex] = removedCount;
    }
  }); // Compare `prevKeys` and `keys` and add them to `added` if they are not in `prevKeys`.

  keys.forEach(function (key, listIndex) {
    var prevListIndex = prevKeyMap.get(key); // In list, but not in prevList, it is added.

    if (typeof prevListIndex === "undefined") {
      added.push(listIndex);
      ++addedCount;
    } else {
      maintained.push([prevListIndex, listIndex]);
      removedCount = removedMap[listIndex] || 0;
      changedBeforeAdded.push([prevListIndex - removedCount, listIndex - addedCount]);
      fixed.push(listIndex === prevListIndex);
      if (prevListIndex !== listIndex) {
        changed.push([prevListIndex, listIndex]);
      }
    }
  }); // Sort by ascending order of 'to(list's index).

  removed.reverse();
  return new Result(prevList, list, added, removed, changed, maintained, changedBeforeAdded, fixed);
}

/**
 * A module that checks diff when values are added, removed, or changed in an array.
 * @ko 배열 또는 오브젝트에서 값이 추가되거나 삭제되거나 순서가 변경사항을 체크하는 모듈입니다.
 * @memberof eg
 */

var ListDiffer = /*#__PURE__*/
function () {
  /**
   * @param - Initializing Data Array. <ko> 초기 설정할 데이터 배열.</ko>
   * @param - This callback function returns the key of the item. <ko> 아이템의 키를 반환하는 콜백 함수입니다.</ko>
   * @example
   * import ListDiffer from "@egjs/list-differ";
   * // script => eg.ListDiffer
   * const differ = new ListDiffer([0, 1, 2, 3, 4, 5], e => e);
   * const result = differ.update([7, 8, 0, 4, 3, 6, 2, 1]);
   * // List before update
   * // [1, 2, 3, 4, 5]
   * console.log(result.prevList);
   * // Updated list
   * // [4, 3, 6, 2, 1]
   * console.log(result.list);
   * // Index array of values added to `list`.
   * // [0, 1, 5]
   * console.log(result.added);
   * // Index array of values removed in `prevList`.
   * // [5]
   * console.log(result.removed);
   * // An array of index pairs of `prevList` and `list` with different indexes from `prevList` and `list`.
   * // [[0, 2], [4, 3], [3, 4], [2, 6], [1, 7]]
   * console.log(result.changed);
   * // The subset of `changed` and an array of index pairs that moved data directly. Indicate an array of absolute index pairs of `ordered`.(Formatted by: Array<[index of prevList, index of list]>)
   * // [[4, 3], [3, 4], [2, 6]]
   * console.log(result.pureChanged);
   * // An array of index pairs to be `ordered` that can synchronize `list` before adding data. (Formatted by: Array<[prevIndex, nextIndex]>)
   * // [[4, 1], [4, 2], [4, 3]]
   * console.log(result.ordered);
   * // An array of index pairs of `prevList` and `list` that have not been added/removed so data is preserved.
   * // [[0, 2], [4, 3], [3, 4], [2, 6], [1, 7]]
   * console.log(result.maintained);
   */
  function ListDiffer(list, findKeyCallback) {
    if (list === void 0) {
      list = [];
    }
    this.findKeyCallback = findKeyCallback;
    this.list = [].slice.call(list);
  }
  /**
   * Update list.
   * @ko 리스트를 업데이트를 합니다.
   * @param - List to update <ko> 업데이트할 리스트 </ko>
   * @return - Returns the results of an update from `prevList` to `list`.<ko> `prevList`에서 `list`로 업데이트한 결과를 반환한다. </ko>
   */

  var __proto = ListDiffer.prototype;
  __proto.update = function (list) {
    var newData = [].slice.call(list);
    var result = diff(this.list, newData, this.findKeyCallback);
    this.list = newData;
    return result;
  };
  return ListDiffer;
}();

/*
egjs-list-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/

/* harmony default export */ var list_differ_esm = (ListDiffer);

// EXTERNAL MODULE: ./node_modules/@egjs/component/dist/component.esm.js
var component_esm = __webpack_require__(1276);
// EXTERNAL MODULE: ./node_modules/@egjs/flicking/dist/flicking.esm.js
var flicking_esm = __webpack_require__(61346);
;// CONCATENATED MODULE: ./node_modules/@egjs/vue3-flicking/dist/flicking.esm.js

/*
Copyright (c) NAVER Corp.
name: @egjs/vue3-flicking
license: MIT
author: NAVER Corp.
repository: https://github.com/naver/egjs-flicking/tree/master/packages/vue3-flicking
version: 4.11.4
*/






/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var FlickingProps = {
  viewportTag: {
    type: String,
    default: "div",
    required: false
  },
  cameraTag: {
    type: String,
    default: "div",
    required: false
  },
  cameraClass: {
    type: String,
    default: "",
    required: false
  },
  hideBeforeInit: {
    type: Boolean,
    default: false,
    required: false
  },
  firstPanelSize: {
    type: String,
    required: false
  },
  options: {
    type: Object,
    default: function () {
      return {};
    },
    required: false
  },
  plugins: {
    type: Array,
    default: function () {
      return [];
    },
    required: false
  },
  status: {
    type: Object,
    required: false
  }
};
var VueRenderer = /*#__PURE__*/
function (_super) {
  __extends(VueRenderer, _super);
  function VueRenderer(options) {
    var _this = _super.call(this, options) || this;
    _this._vueFlicking = options.vueFlicking;
    return _this;
  }
  var __proto = VueRenderer.prototype;
  __proto.render = function () {
    return __awaiter(this, void 0, void 0, function () {
      var flicking, vueFlicking, strategy;
      var _this = this;
      return __generator(this, function (_a) {
        flicking = (0,flicking_esm/* getFlickingAttached */.U2)(this._flicking);
        vueFlicking = this._vueFlicking;
        strategy = this._strategy;
        strategy.updateRenderingPanels(flicking);
        strategy.renderPanels(flicking);
        return [2
        /*return*/, new Promise(function (resolve) {
          vueFlicking.renderEmitter.once("render", function () {
            _this._afterRender();
            resolve();
          });
          vueFlicking.$forceUpdate();
        })];
      });
    });
  };
  __proto.forceRenderAllPanels = function () {
    return __awaiter(this, void 0, void 0, function () {
      var vueFlicking;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            vueFlicking = this._vueFlicking;
            return [4
            /*yield*/, _super.prototype.forceRenderAllPanels.call(this)];
          case 1:
            _a.sent();
            return [2
            /*return*/, new Promise(function (resolve) {
              vueFlicking.renderEmitter.once("render", resolve);
              vueFlicking.$forceUpdate();
            })];
        }
      });
    });
  };
  __proto._collectPanels = function () {
    var flicking = (0,flicking_esm/* getFlickingAttached */.U2)(this._flicking);
    var vueFlicking = this._vueFlicking;
    var childRefs = vueFlicking.$refs;
    var vuePanels = Object.keys(childRefs).map(function (refKey) {
      return childRefs[refKey];
    });
    this._panels = this._strategy.collectPanels(flicking, vuePanels);
  };
  __proto._createPanel = function (externalComponent, options) {
    return this._strategy.createPanel(externalComponent, options);
  };
  return VueRenderer;
}(flicking_esm/* ExternalRenderer */.zZ);

/*
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
var VuePanel = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  data: function () {
    return {
      hide: false
    };
  },
  render: function () {
    if (this.hide || !this.$slots.default) return;
    return this.$slots.default();
  }
});
var VueElementProvider = /*#__PURE__*/
function () {
  function VueElementProvider(el) {
    this._el = el;
  }
  var __proto = VueElementProvider.prototype;
  Object.defineProperty(__proto, "rendered", {
    get: function () {
      return !this._el.hide;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "element", {
    get: function () {
      var el = this._el.$el.nextSibling;
      if (el && el.nodeType === Node.ELEMENT_NODE) {
        this._cachedElement = el;
      }
      return this._cachedElement;
    },
    enumerable: false,
    configurable: true
  });
  __proto.show = function () {
    this._el.hide = false;
  };
  __proto.hide = function () {
    this._el.hide = true;
  };
  return VueElementProvider;
}();
var Flicking = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  props: FlickingProps,
  components: {
    Panel: VuePanel
  },
  data: function () {
    return {};
  },
  created: function () {
    var _this = this;
    this.vanillaFlicking = null;
    this.renderEmitter = new component_esm/* default */.A();
    this.diffResult = null;
    this.getPanels = function () {
      var componentInstance = (0,runtime_core_esm_bundler/* getCurrentInstance */.nI)();
      var vueFlicking = componentInstance === null || componentInstance === void 0 ? void 0 : componentInstance.ctx;
      var flicking = _this.vanillaFlicking;
      var defaultSlots = _this.getSlots();
      var diffResult = vueFlicking === null || vueFlicking === void 0 ? void 0 : vueFlicking.diffResult;
      var slots = diffResult ? (0,flicking_esm/* getRenderingPanels */.ko)(flicking, diffResult) : defaultSlots;
      var panelComponent = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("Panel");
      var panels = slots.map(function (slot, idx) {
        return (0,runtime_core_esm_bundler.h)(panelComponent, {
          key: slot.key,
          ref: idx.toString()
        }, function () {
          return slot;
        });
      });
      return panels;
    };
    this.getVirtualPanels = function () {
      var options = _this.options;
      var _a = options.virtual.panelClass,
        panelClass = _a === void 0 ? "flicking-panel" : _a;
      var panelsPerView = options.panelsPerView;
      var flicking = _this.vanillaFlicking;
      var initialized = flicking && flicking.initialized;
      var renderingIndexes = initialized ? flicking.renderer.strategy.getRenderingIndexesByOrder(flicking) : (0,flicking_esm/* range */.y1)(panelsPerView + 1);
      var firstPanel = initialized && flicking.panels[0];
      var size = firstPanel ? flicking.horizontal ? {
        width: firstPanel.size
      } : {
        height: firstPanel.size
      } : {};
      return renderingIndexes.map(function (idx) {
        return (0,runtime_core_esm_bundler.h)("div", {
          key: idx,
          ref: idx.toString(),
          class: panelClass,
          style: size,
          "data-element-index": idx
        });
      });
    };
    (0,flicking_esm/* withFlickingMethods */.qD)(this, "vanillaFlicking");
  },
  mounted: function () {
    var _this = this;
    var _a;
    var options = this.options;
    var viewportEl = this.$el;
    var rendererOptions = {
      vueFlicking: this,
      align: options.align,
      strategy: options.virtual && ((_a = options.panelsPerView) !== null && _a !== void 0 ? _a : -1) > 0 ? new flicking_esm/* VirtualRenderingStrategy */.$9() : new flicking_esm/* NormalRenderingStrategy */.Z5({
        providerCtor: VueElementProvider
      })
    };
    var flicking = new flicking_esm/* default */.Ay(viewportEl, __assign(__assign({}, options), {
      externalRenderer: new VueRenderer(rendererOptions)
    }));
    this.vanillaFlicking = flicking;
    flicking.once(flicking_esm/* EVENTS */.qY.READY, function () {
      _this.$forceUpdate();
    });
    var slots = this.getSlots();
    this.slotDiffer = new list_differ_esm(slots, function (vnode) {
      return vnode.key;
    });
    this.pluginsDiffer = new list_differ_esm();
    this.bindEvents();
    this.checkPlugins();
    if (this.status) {
      flicking.setStatus(this.status);
    }
  },
  beforeUnmount: function () {
    var _a;
    (_a = this.vanillaFlicking) === null || _a === void 0 ? void 0 : _a.destroy();
  },
  beforeMount: function () {
    this.fillKeys();
  },
  beforeUpdate: function () {
    this.fillKeys();
    this.diffResult = this.slotDiffer.update(this.getSlots());
  },
  updated: function () {
    var flicking = this.vanillaFlicking;
    var diffResult = this.diffResult;
    this.checkPlugins();
    this.renderEmitter.trigger("render");
    if (!diffResult || !(flicking === null || flicking === void 0 ? void 0 : flicking.initialized)) return;
    var children = this.getChildren();
    (0,flicking_esm/* sync */.OH)(flicking, diffResult, children);
    if (diffResult.added.length > 0 || diffResult.removed.length > 0) {
      this.$forceUpdate();
    }
    this.diffResult = undefined;
  },
  render: function () {
    var _a;
    var _b;
    var flicking = this.vanillaFlicking;
    var options = this.options;
    var initialized = flicking && flicking.initialized;
    var isHorizontal = flicking ? flicking.horizontal : (_b = this.options.horizontal) !== null && _b !== void 0 ? _b : true;
    var viewportData = {
      class: {
        "flicking-viewport": true,
        "vertical": !isHorizontal,
        "flicking-hidden": this.hideBeforeInit && !initialized
      }
    };
    var cameraData = {
      class: (_a = {
        "flicking-camera": true
      }, _a[this.cameraClass] = !!this.cameraClass, _a),
      style: !initialized && this.firstPanelSize ? {
        transform: (0,flicking_esm/* getDefaultCameraTransform */.JO)(this.options.align, this.options.horizontal, this.firstPanelSize)
      } : {}
    };
    var panels = options.virtual && options.panelsPerView && options.panelsPerView > 0 ? this.getVirtualPanels : this.getPanels;
    var viewportSlots = this.$slots.viewport ? this.$slots.viewport() : [];
    return (0,runtime_core_esm_bundler.h)(this.viewportTag, viewportData, __spreadArray([(0,runtime_core_esm_bundler.h)(this.cameraTag, cameraData, {
      default: panels
    })], viewportSlots, true));
  },
  methods: {
    getSlots: function () {
      var _this = this;
      var slots = this.$slots.default ? this.$slots.default() : [];
      return slots.reduce(function (elementSlots, slot) {
        return __spreadArray(__spreadArray([], elementSlots, true), _this.getElementVNodes(slot), true);
      }, []).filter(function (slot) {
        return slot.type !== runtime_core_esm_bundler/* Comment */.Mw && slot.type !== runtime_core_esm_bundler/* Text */.EY;
      });
    },
    getElementVNodes: function (slot, childSlots) {
      var _this = this;
      if (childSlots === void 0) {
        childSlots = [];
      }
      if (slot.type === runtime_core_esm_bundler/* Fragment */.FK && Array.isArray(slot.children)) {
        slot.children.filter(function (child) {
          return child && typeof child === "object";
        }).forEach(function (child) {
          return _this.getElementVNodes(child, childSlots);
        });
      } else {
        childSlots.push(slot);
      }
      return childSlots;
    },
    bindEvents: function () {
      var _this = this;
      var flicking = this.vanillaFlicking;
      var events = Object.keys(flicking_esm/* EVENTS */.qY).map(function (key) {
        return flicking_esm/* EVENTS */.qY[key];
      });
      events.forEach(function (eventName) {
        flicking.on(eventName, function (e) {
          e.currentTarget = _this; // Make events from camelCase to kebab-case

          _this.$emit(eventName.replace(/([A-Z])/g, "-$1").toLowerCase(), e);
        });
      });
    },
    checkPlugins: function () {
      var _a, _b;
      var _c = this.pluginsDiffer.update(this.plugins),
        list = _c.list,
        added = _c.added,
        removed = _c.removed,
        prevList = _c.prevList;
      (_a = this.vanillaFlicking).addPlugins.apply(_a, added.map(function (index) {
        return list[index];
      }));
      (_b = this.vanillaFlicking).removePlugins.apply(_b, removed.map(function (index) {
        return prevList[index];
      }));
    },
    fillKeys: function () {
      var vnodes = this.getSlots();
      vnodes.forEach(function (node, idx) {
        if (node.key == null) {
          node.key = "$_".concat(idx);
        }
      });
    },
    getChildren: function () {
      var childRefs = this.$refs;
      return Object.keys(childRefs).map(function (refKey) {
        return childRefs[refKey];
      });
    }
  },
  watch: {
    options: {
      handler: function (newOptions) {
        var flicking = this.vanillaFlicking;
        if (!flicking) return; // Omit 'virtual', as it can't have any setter

        newOptions.virtual;
        var options = __rest(newOptions, ["virtual"]); // eslint-disable-line @typescript-eslint/no-unused-vars

        for (var key in options) {
          if (key in flicking && flicking[key] !== options[key]) {
            flicking[key] = options[key];
          }
        }
      },
      deep: true,
      immediate: true
    }
  }
});


/***/ }),

/***/ 33529:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



__webpack_require__(44114);
var has = Object.prototype.hasOwnProperty,
  prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }
  var listener = new EE(fn, context || emitter, once),
    evt = prefix ? prefix + event : event;
  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);else emitter._events[evt] = [emitter._events[evt], listener];
  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = [],
    events,
    name;
  if (this._eventsCount === 0) return names;
  for (name in events = this._events) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }
  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }
  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event,
    handlers = this._events[evt];
  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];
  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }
  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event,
    listeners = this._events[evt];
  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;
  if (!this._events[evt]) return false;
  var listeners = this._events[evt],
    len = arguments.length,
    args,
    i;
  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
    switch (len) {
      case 1:
        return listeners.fn.call(listeners.context), true;
      case 2:
        return listeners.fn.call(listeners.context, a1), true;
      case 3:
        return listeners.fn.call(listeners.context, a1, a2), true;
      case 4:
        return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5:
        return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6:
        return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }
    for (i = 1, args = new Array(len - 1); i < len; i++) {
      args[i - 1] = arguments[i];
    }
    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length,
      j;
    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
      switch (len) {
        case 1:
          listeners[i].fn.call(listeners[i].context);
          break;
        case 2:
          listeners[i].fn.call(listeners[i].context, a1);
          break;
        case 3:
          listeners[i].fn.call(listeners[i].context, a1, a2);
          break;
        case 4:
          listeners[i].fn.call(listeners[i].context, a1, a2, a3);
          break;
        default:
          if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
            args[j - 1] = arguments[j];
          }
          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }
  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;
  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }
  var listeners = this._events[evt];
  if (listeners.fn) {
    if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else clearEvent(this, evt);
  }
  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;
  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }
  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}

/***/ }),

/***/ 8611:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33529);


/* harmony default export */ __webpack_exports__.A = (_index_js__WEBPACK_IMPORTED_MODULE_0__);

/***/ })

}]);